import { useEffect, useRef, useState } from "react";

const MAPBOX_GL_VERSION = "3.2.0";

// Shared across every GpxTrackMap instance on the page, so mapbox-gl is only
// ever fetched once even if a page renders several of these maps at once.
let mapboxLoadPromise = null;

function loadMapboxGl() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("mapbox-gl requires a browser"));
  }
  if (window.mapboxgl) return Promise.resolve(window.mapboxgl);
  if (mapboxLoadPromise) return mapboxLoadPromise;

  mapboxLoadPromise = new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://api.mapbox.com/mapbox-gl-js/v${MAPBOX_GL_VERSION}/mapbox-gl.css`;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = `https://api.mapbox.com/mapbox-gl-js/v${MAPBOX_GL_VERSION}/mapbox-gl.js`;
    script.async = true;
    script.onload = () => resolve(window.mapboxgl);
    script.onerror = () => reject(new Error("Failed to load mapbox-gl"));
    document.head.appendChild(script);
  });

  return mapboxLoadPromise;
}

// Elevation changes smaller than this (in meters) are treated as GPS noise
// when summing elevation gain.
const ELEVATION_GAIN_THRESHOLD_M = 3;
// Grade is measured over at least this distance (in meters), so a single
// noisy elevation reading between two close points doesn't produce a 60%
// "climb".
const GRADE_WINDOW_M = 50;

// Parses trkpt/rtept points out of a GPX document. Keeps coordinates for
// drawing the line and elevation (when present) for the stats.
function parseGpxPoints(gpxText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(gpxText, "application/xml");

  if (xml.querySelector("parsererror")) {
    throw new Error("Could not parse this file as GPX");
  }

  const toPoint = (pt) => {
    const eleEl = pt.getElementsByTagName("ele")[0];
    const ele = eleEl ? parseFloat(eleEl.textContent) : NaN;
    return {
      coord: [
        parseFloat(pt.getAttribute("lon")),
        parseFloat(pt.getAttribute("lat")),
      ],
      ele: Number.isNaN(ele) ? null : ele,
    };
  };
  const isValid = (p) => !Number.isNaN(p.coord[0]) && !Number.isNaN(p.coord[1]);

  let points = Array.from(xml.getElementsByTagName("trkpt"))
    .map(toPoint)
    .filter(isValid);

  if (points.length < 2) {
    points = Array.from(xml.getElementsByTagName("rtept"))
      .map(toPoint)
      .filter(isValid);
  }

  if (points.length < 2) {
    throw new Error("No track or route points found in this GPX file");
  }

  return points;
}

// Great-circle distance between two [lng, lat] pairs, in meters.
function haversineDistance([lng1, lat1], [lng2, lat2]) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// Computes total length (m), elevation gain (m) and max ascent grade (%).
// Elevation stats are null if the track has no elevation data.
function computeTrackStats(points) {
  // Cumulative distance from the start, per point.
  const dist = [0];
  for (let i = 1; i < points.length; i++) {
    dist.push(
      dist[i - 1] + haversineDistance(points[i - 1].coord, points[i].coord),
    );
  }
  const length = dist[dist.length - 1];

  // Some exporters (e.g. GDAL) write <ele>0.0</ele> for points with no
  // elevation data. If the track has real elevations elsewhere, treat exact
  // zeros as missing rather than as sudden drops to sea level.
  const hasNonZeroEle = points.some((p) => p.ele != null && p.ele !== 0);
  const withEle = points
    .map((p, i) => ({ ele: p.ele, dist: dist[i], coord: p.coord }))
    .filter((p) => p.ele != null && !(hasNonZeroEle && p.ele === 0));

  if (withEle.length < 2) {
    return { length, elevationGain: null, maxGrade: null, profile: null };
  }

  // Hysteresis: only count a climb once it rises the threshold above the
  // last reference point, so jitter on flat ground doesn't add up.
  let elevationGain = 0;
  let ref = withEle[0].ele;
  for (const { ele } of withEle) {
    if (ele - ref >= ELEVATION_GAIN_THRESHOLD_M) {
      elevationGain += ele - ref;
      ref = ele;
    } else if (ref - ele >= ELEVATION_GAIN_THRESHOLD_M) {
      ref = ele;
    }
  }

  // For each start point, compare it to the first point at least
  // GRADE_WINDOW_M further along the track.
  let maxGrade = 0;
  let j = 0;
  for (let i = 0; i < withEle.length; i++) {
    if (j <= i) j = i + 1;
    while (
      j < withEle.length &&
      withEle[j].dist - withEle[i].dist < GRADE_WINDOW_M
    ) {
      j++;
    }
    if (j >= withEle.length) break;
    const grade =
      (withEle[j].ele - withEle[i].ele) / (withEle[j].dist - withEle[i].dist);
    if (grade > maxGrade) maxGrade = grade;
  }

  return {
    length,
    elevationGain,
    maxGrade: maxGrade * 100,
    profile: withEle,
  };
}

const TRACK_COLOR = "#e5484d";
const CHART_HEIGHT = 160;
const CHART_MARGIN = { top: 12, right: 12, bottom: 24, left: 40 };

// Picks a "nice" tick step (1, 2 or 5 times a power of ten) so that roughly
// `count` ticks fit in `span`.
function niceStep(span, count) {
  const raw = span / count;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n >= 5 ? 5 : n >= 2 ? 2 : 1) * pow;
}

function ticks(min, max, count) {
  const step = niceStep(max - min, count);
  const result = [];
  for (let t = Math.ceil(min / step) * step; t <= max; t += step) {
    result.push(t);
  }
  return result;
}

// Index of the profile point closest to `dist` (profile is sorted by dist).
function nearestIndex(profile, dist) {
  let lo = 0;
  let hi = profile.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (profile[mid].dist < dist) lo = mid;
    else hi = mid;
  }
  return dist - profile[lo].dist < profile[hi].dist - dist ? lo : hi;
}

// Elevation-over-distance area chart. Calls `onHover` with the hovered
// profile point (or null) so the map can mark the same spot on the track.
function ElevationChart({ profile, onHover }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const plotWidth = Math.max(0, width - CHART_MARGIN.left - CHART_MARGIN.right);
  const plotHeight = CHART_HEIGHT - CHART_MARGIN.top - CHART_MARGIN.bottom;

  const maxDist = profile[profile.length - 1].dist;
  let minEle = Infinity;
  let maxEle = -Infinity;
  for (const p of profile) {
    if (p.ele < minEle) minEle = p.ele;
    if (p.ele > maxEle) maxEle = p.ele;
  }
  // Pad the elevation range so a flat track doesn't fill the whole height
  // with noise.
  const elePad = Math.max(10, (maxEle - minEle) * 0.1);
  const yMin = Math.max(0, Math.floor((minEle - elePad) / 10) * 10);
  const yMax = Math.ceil((maxEle + elePad) / 10) * 10;

  const x = (dist) => (dist / maxDist) * plotWidth;
  const y = (ele) => plotHeight - ((ele - yMin) / (yMax - yMin)) * plotHeight;

  const linePath = profile
    .map(
      (p, i) =>
        `${i ? "L" : "M"}${x(p.dist).toFixed(1)},${y(p.ele).toFixed(1)}`,
    )
    .join("");
  const areaPath = `${linePath}L${plotWidth},${plotHeight}L0,${plotHeight}Z`;

  const xTicks = ticks(
    0,
    maxDist / 1000,
    Math.max(2, Math.floor(plotWidth / 80)),
  );
  const yTicks = ticks(yMin, yMax, 3);

  const setHover = (index) => {
    setHoverIndex(index);
    onHover?.(index == null ? null : profile[index]);
  };

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - CHART_MARGIN.left;
    if (px < 0 || px > plotWidth) return setHover(null);
    setHover(nearestIndex(profile, (px / plotWidth) * maxDist));
  };

  const hovered = hoverIndex != null ? profile[hoverIndex] : null;

  return (
    <div ref={containerRef} className="elevation-chart">
      {width > 0 && (
        <svg
          width={width}
          height={CHART_HEIGHT}
          role="img"
          aria-label={`Elevation profile, ${Math.round(minEle)} to ${Math.round(maxEle)} m over ${(maxDist / 1000).toFixed(1)} km`}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setHover(null)}
        >
          <g transform={`translate(${CHART_MARGIN.left},${CHART_MARGIN.top})`}>
            {yTicks.map((t) => (
              <g key={t}>
                <line
                  x1={0}
                  x2={plotWidth}
                  y1={y(t)}
                  y2={y(t)}
                  stroke="currentColor"
                  strokeOpacity={0.12}
                />
                <text
                  x={-6}
                  y={y(t)}
                  dy="0.32em"
                  textAnchor="end"
                  fill="currentColor"
                  fillOpacity={0.6}
                >
                  {t} m
                </text>
              </g>
            ))}
            {xTicks.map((t) => (
              <text
                key={t}
                x={x(t * 1000)}
                y={plotHeight + 16}
                textAnchor="middle"
                fill="currentColor"
                fillOpacity={0.6}
              >
                {t.toFixed(1)} km
              </text>
            ))}
            <path d={areaPath} fill={TRACK_COLOR} fillOpacity={0.15} />
            <path
              d={linePath}
              fill="none"
              stroke={TRACK_COLOR}
              strokeWidth={2}
              strokeLinejoin="round"
            />
            {hovered && (
              <>
                <line
                  x1={x(hovered.dist)}
                  x2={x(hovered.dist)}
                  y1={0}
                  y2={plotHeight}
                  stroke="currentColor"
                  strokeOpacity={0.4}
                />
                <circle
                  cx={x(hovered.dist)}
                  cy={y(hovered.ele)}
                  r={4}
                  fill={TRACK_COLOR}
                  stroke="#fff"
                  strokeWidth={2}
                />
              </>
            )}
          </g>
        </svg>
      )}
      {hovered && (
        <div
          className="elevation-tooltip"
          style={{
            left: CHART_MARGIN.left + x(hovered.dist),
            transform: `translateX(${x(hovered.dist) > plotWidth / 2 ? "calc(-100% - 8px)" : "8px"})`,
          }}
        >
          {(hovered.dist / 1000).toFixed(2)} km · {Math.round(hovered.ele)} m
        </div>
      )}
    </div>
  );
}

// A small, read-only map that fetches a GPX file (from the given `src` url,
// e.g. a file in public/) and draws its track. Used to show a static trail
// map on a page, as opposed to GpxEditor, which lets a user upload/trim/
// download a GPX file interactively.
export default function GpxTrackMap({ src, title }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  // Raw GPX text, kept around (once fetched) so the download button doesn't
  // need to re-fetch the file.
  const gpxTextRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current || !src) return;

    let cancelled = false;

    Promise.all([loadMapboxGl(), fetch(src).then((res) => res.text())])
      .then(([mapboxgl, gpxText]) => {
        if (cancelled || !mapContainerRef.current) return;

        gpxTextRef.current = gpxText;
        const points = parseGpxPoints(gpxText);
        const coords = points.map((p) => p.coord);
        setStats(computeTrackStats(points));

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/light-v11",
          center: coords[0],
          zoom: 12,
        });

        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        map.on("load", () => {
          if (cancelled) return;

          map.addSource("gpx-track", {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: { type: "LineString", coordinates: coords },
              properties: {},
            },
          });
          map.addLayer({
            id: "gpx-track-line",
            type: "line",
            source: "gpx-track",
            layout: { "line-join": "round", "line-cap": "round" },
            paint: { "line-color": TRACK_COLOR, "line-width": 3 },
          });

          // Marks the spot hovered on the elevation chart.
          map.addSource("gpx-hover", {
            type: "geojson",
            data: { type: "FeatureCollection", features: [] },
          });
          map.addLayer({
            id: "gpx-hover-point",
            type: "circle",
            source: "gpx-hover",
            paint: {
              "circle-radius": 6,
              "circle-color": TRACK_COLOR,
              "circle-stroke-color": "#fff",
              "circle-stroke-width": 2,
            },
          });

          const bounds = new mapboxgl.LngLatBounds();
          coords.forEach((c) => bounds.extend(c));
          map.fitBounds(bounds, { padding: 40, duration: 0 });
        });

        mapRef.current = map;
      })
      .catch((err) => {
        if (!cancelled)
          setError(err.message || "Failed to load this GPX track");
      });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [isClient, src]);

  const handleChartHover = (point) => {
    const source = mapRef.current?.getSource("gpx-hover");
    if (!source) return;
    source.setData({
      type: "FeatureCollection",
      features: point
        ? [
            {
              type: "Feature",
              geometry: { type: "Point", coordinates: point.coord },
              properties: {},
            },
          ]
        : [],
    });
  };

  const handleDownload = () => {
    const text = gpxTextRef.current;
    if (!text) return;

    const blob = new Blob([text], { type: "application/gpx+xml" });
    const url = URL.createObjectURL(blob);

    const baseName = (src.split("/").pop() || "track").replace(/\.gpx$/i, "");
    const link = document.createElement("a");
    link.href = url;
    link.download = `${baseName}.gpx`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  if (error) {
    return <div className="map">{error}</div>;
  }

  return (
    <div>
      <div
        ref={mapContainerRef}
        role="img"
        aria-label={title ? `Map showing ${title}` : "Map"}
        className="map gpx-track-map"
      />
      {stats?.profile && (
        <ElevationChart profile={stats.profile} onHover={handleChartHover} />
      )}
      {stats && (
        <ul>
          <li>Length: {(stats.length / 1000).toFixed(1)} km</li>
          {stats.elevationGain != null && (
            <li>Elevation gain: {Math.round(stats.elevationGain)} m</li>
          )}
          {stats.maxGrade != null && (
            <li>Max ascent grade: {stats.maxGrade.toFixed(1)}%</li>
          )}
        </ul>
      )}
      <button type="button" onClick={handleDownload}>
        download gpx
      </button>
    </div>
  );
}
