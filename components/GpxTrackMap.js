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

// Parses trkpt/rtept coordinates out of a GPX document. Keeps only what's
// needed to draw a line on the map (unlike GpxEditor, which also keeps
// elevation/time so a trimmed track can be re-exported).
function parseGpxCoords(gpxText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(gpxText, "application/xml");

  if (xml.querySelector("parsererror")) {
    throw new Error("Could not parse this file as GPX");
  }

  const toLngLat = (pt) => [
    parseFloat(pt.getAttribute("lon")),
    parseFloat(pt.getAttribute("lat")),
  ];
  const isValid = (c) => !Number.isNaN(c[0]) && !Number.isNaN(c[1]);

  let coords = Array.from(xml.getElementsByTagName("trkpt"))
    .map(toLngLat)
    .filter(isValid);

  if (coords.length < 2) {
    coords = Array.from(xml.getElementsByTagName("rtept"))
      .map(toLngLat)
      .filter(isValid);
  }

  if (coords.length < 2) {
    throw new Error("No track or route points found in this GPX file");
  }

  return coords;
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
        const coords = parseGpxCoords(gpxText);

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
            paint: { "line-color": "#e5484d", "line-width": 3 },
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
    return <div style={{ height: "400px", width: "100%" }}>{error}</div>;
  }

  return (
    <div>
      <div
        ref={mapContainerRef}
        role="img"
        aria-label={title ? `Map showing ${title}` : "Map"}
        style={{ height: "400px", width: "100%", marginBottom: 20 }}
      />
      <button type="button" onClick={handleDownload}>
        download gpx
      </button>
    </div>
  );
}
