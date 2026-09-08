import { useEffect, useRef, useState } from "react";

const MAPBOX_GL_VERSION = "3.2.0";

function parseGpx(gpxText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(gpxText, "application/xml");

  if (xml.querySelector("parsererror")) {
    throw new Error("Could not parse this file as GPX");
  }

  const toPoint = (pt) => {
    const eleEl = pt.getElementsByTagName("ele")[0];
    const timeEl = pt.getElementsByTagName("time")[0];
    return {
      lon: parseFloat(pt.getAttribute("lon")),
      lat: parseFloat(pt.getAttribute("lat")),
      ele: eleEl ? parseFloat(eleEl.textContent) : null,
      time: timeEl ? timeEl.textContent.trim() : null,
    };
  };
  const isValid = (p) => !Number.isNaN(p.lon) && !Number.isNaN(p.lat);

  let lines = Array.from(xml.getElementsByTagName("trkseg"))
    .map((seg) =>
      Array.from(seg.getElementsByTagName("trkpt"))
        .map(toPoint)
        .filter(isValid),
    )
    .filter((points) => points.length > 1);

  if (lines.length === 0) {
    const rtepts = Array.from(xml.getElementsByTagName("rtept"))
      .map(toPoint)
      .filter(isValid);
    if (rtepts.length > 1) lines = [rtepts];
  }

  if (lines.length === 0) {
    throw new Error("No track or route points found in this GPX file");
  }

  return lines;
}

function toLngLat(point) {
  return [point.lon, point.lat];
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildGpxXml(points) {
  const trkpts = points
    .map((p) => {
      const children = [];
      if (p.ele != null && !Number.isNaN(p.ele)) {
        children.push(`<ele>${p.ele}</ele>`);
      }
      if (p.time) children.push(`<time>${escapeXml(p.time)}</time>`);
      const inner = children.join("");
      return `      <trkpt lat="${p.lat}" lon="${p.lon}">${inner}</trkpt>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="tkPage GPX editor" xmlns="http://www.topografix.com/GPX/1/1">
  <trk>
    <name>Trimmed track</name>
    <trkseg>
${trkpts}
    </trkseg>
  </trk>
</gpx>
`;
}

const clamp01 = (value) => Math.min(1, Math.max(0, value));

export default function GpxEditor() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const rulerRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);

  // Full, flattened track loaded from the last GPX file (all segments
  // concatenated - trimming works over the whole track as one range).
  // Each point keeps lon/lat plus optional elevation/time so they can be
  // included again when exporting the trimmed GPX.
  const fullPointsRef = useRef(null);
  // Set when a file is parsed before the map has finished loading, so it can
  // be drawn as soon as the map becomes ready.
  const pendingPointsRef = useRef(null);

  const [isClient, setIsClient] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [error, setError] = useState(null);
  const [hasTrack, setHasTrack] = useState(false);

  // Position of the start/end markers on the ruler, as a fraction (0-1) of
  // the full track.
  const [startPos, setStartPos] = useState(0);
  const [endPos, setEndPos] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    const initializeMap = () => {
      if (!window.mapboxgl || mapRef.current) return;

      window.mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

      const map = new window.mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [24.6559, 60.205],
        zoom: 10,
      });

      map.addControl(new window.mapboxgl.NavigationControl(), "top-right");

      map.on("load", () => {
        mapRef.current = map;
        setIsMapReady(true);
      });
    };

    const loadMapbox = () => {
      if (typeof window === "undefined") return;
      if (window.mapboxgl) {
        initializeMap();
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://api.mapbox.com/mapbox-gl-js/v${MAPBOX_GL_VERSION}/mapbox-gl.css`;
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = `https://api.mapbox.com/mapbox-gl-js/v${MAPBOX_GL_VERSION}/mapbox-gl.js`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    loadMapbox();

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [isClient]);

  // Draws the given coordinates as the (possibly trimmed) gpx track.
  const setTrackData = (coords) => {
    const map = mapRef.current;
    if (!map || coords.length === 0) return;

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "LineString", coordinates: coords },
          properties: {},
        },
      ],
    };

    const source = map.getSource("gpx-track");
    if (source) {
      source.setData(geojson);
    } else {
      map.addSource("gpx-track", { type: "geojson", data: geojson });
      map.addLayer({
        id: "gpx-track-line",
        type: "line",
        source: "gpx-track",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": "#e5484d",
          "line-width": 3,
        },
      });
    }

    const first = coords[0];
    const last = coords[coords.length - 1];

    if (!startMarkerRef.current) {
      startMarkerRef.current = new window.mapboxgl.Marker({
        color: "#2f9e44",
      })
        .setLngLat(first)
        .addTo(map);
    } else {
      startMarkerRef.current.setLngLat(first);
    }

    if (!endMarkerRef.current) {
      endMarkerRef.current = new window.mapboxgl.Marker({ color: "#e5484d" })
        .setLngLat(last)
        .addTo(map);
    } else {
      endMarkerRef.current.setLngLat(last);
    }
  };

  const fitToCoords = (coords) => {
    const map = mapRef.current;
    if (!map || coords.length === 0) return;
    const bounds = new window.mapboxgl.LngLatBounds();
    coords.forEach((c) => bounds.extend(c));
    map.fitBounds(bounds, { padding: 40, duration: 500 });
  };

  const getTrimmedPoints = () => {
    const points = fullPointsRef.current;
    if (!points || points.length < 2) return points || [];

    const startIdx = Math.round(startPos * (points.length - 1));
    const endIdx = Math.round(endPos * (points.length - 1));
    const [from, to] =
      startIdx <= endIdx ? [startIdx, endIdx] : [endIdx, startIdx];

    return points.slice(from, to + 1);
  };

  // Load a track that was parsed before the map became ready.
  useEffect(() => {
    if (!isMapReady || !pendingPointsRef.current) return;

    const points = pendingPointsRef.current;
    pendingPointsRef.current = null;
    fullPointsRef.current = points;
    const coords = points.map(toLngLat);
    setTrackData(coords);
    fitToCoords(coords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMapReady]);

  // Redraw the (trimmed) track whenever the ruler handles move. Doesn't
  // re-fit the map, so dragging doesn't jump the view around.
  useEffect(() => {
    if (!isMapReady || !fullPointsRef.current) return;
    setTrackData(getTrimmedPoints().map(toLngLat));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMapReady, startPos, endPos]);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);
    setFileName(file.name);

    try {
      const text = await file.text();
      const lines = parseGpx(text);
      const points = lines.flat();

      setHasTrack(true);
      setStartPos(0);
      setEndPos(1);

      if (mapRef.current) {
        fullPointsRef.current = points;
        const coords = points.map(toLngLat);
        setTrackData(coords);
        fitToCoords(coords);
      } else {
        pendingPointsRef.current = points;
      }
    } catch (err) {
      setHasTrack(false);
      fullPointsRef.current = null;
      pendingPointsRef.current = null;
      setError(err.message || "Failed to read this GPX file");
    }
  };

  const handleDownload = () => {
    const points = getTrimmedPoints();
    if (!points || points.length < 2) return;

    const xml = buildGpxXml(points);
    const blob = new Blob([xml], { type: "application/gpx+xml" });
    const url = URL.createObjectURL(blob);

    const baseName = fileName ? fileName.replace(/\.gpx$/i, "") : "track";
    const link = document.createElement("a");
    link.href = url;
    link.download = `${baseName}-trimmed.gpx`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const positionFromClientX = (clientX) => {
    if (!rulerRef.current) return 0;
    const rect = rulerRef.current.getBoundingClientRect();
    if (rect.width === 0) return 0;
    return clamp01((clientX - rect.left) / rect.width);
  };

  const handleStartPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleStartPointerMove = (e) => {
    setStartPos(Math.min(positionFromClientX(e.clientX), endPos));
  };

  const handleEndPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleEndPointerMove = (e) => {
    setEndPos(Math.max(positionFromClientX(e.clientX), startPos));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            cursor: "pointer",
            padding: "6px 12px",
            border: "1px solid currentColor",
            borderRadius: "4px",
          }}
        >
          {fileName || "Choose a GPX file"}
          <input
            type="file"
            accept=".gpx,application/gpx+xml"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
        {error && <span style={{ color: "#e5484d" }}>{error}</span>}
      </div>
      <div ref={mapContainerRef} style={{ height: "600px", width: "100%" }} />
      {hasTrack && (
        <div style={{ marginTop: "16px", userSelect: "none" }}>
          <div
            ref={rulerRef}
            style={{
              position: "relative",
              height: "6px",
              borderRadius: "3px",
              background: "#d8dee9",
              margin: "20px 8px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${startPos * 100}%`,
                right: `${(1 - endPos) * 100}%`,
                background: "#e5484d",
                borderRadius: "3px",
              }}
            />
            <div
              id="start"
              onPointerDown={handleStartPointerDown}
              onPointerMove={handleStartPointerMove}
              title="Start"
              style={{
                position: "absolute",
                top: "50%",
                left: `${startPos * 100}%`,
                transform: "translate(-50%, -50%)",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "#2f9e44",
                border: "2px solid white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
                cursor: "ew-resize",
                touchAction: "none",
              }}
            />
            <div
              id="end"
              onPointerDown={handleEndPointerDown}
              onPointerMove={handleEndPointerMove}
              title="End"
              style={{
                position: "absolute",
                top: "50%",
                left: `${endPos * 100}%`,
                transform: "translate(-50%, -50%)",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "#e5484d",
                border: "2px solid white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
                cursor: "ew-resize",
                touchAction: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.8rem",
              padding: "0 8px",
              marginBottom: "10px",
            }}
          >
            <span>{Math.round(startPos * 100)}%</span>
            <span>{Math.round(endPos * 100)}%</span>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            style={{
              cursor: "pointer",
              padding: "6px 12px",
              border: "1px solid currentColor",
              borderRadius: "4px",
              background: "transparent",
              color: "inherit",
              font: "inherit",
            }}
          >
            Download trimmed GPX
          </button>
        </div>
      )}
    </div>
  );
}
