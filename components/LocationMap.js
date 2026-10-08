import { useEffect, useRef, useState } from "react";

const MAPBOX_GL_VERSION = "3.2.0";

// Shared across every LocationMap instance on the page, so mapbox-gl is only
// ever fetched once even if a page renders many of these maps at once.
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

// A small map centered on a single point, with a marker on it. Used to show
// where a place is, e.g. for the day-trip spots listed in pages/nature.js.
export default function LocationMap({ lat, lng, zoom = 14, title }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;
    if (lat == null || lng == null) return;

    let cancelled = false;

    loadMapboxGl().then((mapboxgl) => {
      if (cancelled || mapRef.current || !mapContainerRef.current) return;

      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [lng, lat],
        zoom,
      });

      map.addControl(new mapboxgl.NavigationControl(), "top-right");
      new mapboxgl.Marker({ color: "#e5484d" }).setLngLat([lng, lat]).addTo(map);

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [isClient, lat, lng, zoom]);

  return (
    <div
      ref={mapContainerRef}
      role="img"
      aria-label={title ? `Map showing ${title}` : "Map"}
      className="map"
    />
  );
}
