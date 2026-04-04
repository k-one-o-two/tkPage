import { useEffect, useRef, useState } from "react";

export default function EspooMap() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDesktop(window.screen.width >= 1024);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    // Dynamically load mapbox-gl
    const loadMapbox = async () => {
      if (typeof window === "undefined") return;
      if (window.mapboxgl) {
        initializeMap();
        return;
      }

      // Load CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css";
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement("script");
      script.src = "https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js";
      script.async = true;
      script.onload = () => {
        initializeMap();
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!window.mapboxgl || mapRef.current) return;

      window.mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

      // Parse URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const initialLng = parseFloat(urlParams.get("lng")) || 24.6559;
      const initialLat = parseFloat(urlParams.get("lat")) || 60.205;
      const initialZoom = parseFloat(urlParams.get("zoom")) || 13;

      const map = new window.mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [initialLng, initialLat],
        zoom: initialZoom,
      });

      mapRef.current = map;

      // Mapping between road types and short codes
      const roadTypeToCode = {
        Pyörätie: "pt",
        "Yhdistetty pyörätie ja jalkakäytävä": "yp",
        "Pyöräkaista ajoradan reunassa": "pk",
        Puistoraitti: "pr",
        Jalkakäytävä: "jk",
        Kokoojakatu: "kk",
        Pääkatu: "pa",
        "Tontti-/asunto-/liityntä-/pihakatu": "tp",
      };
      const codeToRoadType = Object.fromEntries(
        Object.entries(roadTypeToCode).map(([k, v]) => [v, k]),
      );

      // Function to update URL parameters
      function updateURL() {
        const center = map.getCenter();
        const zoom = map.getZoom();
        const params = new URLSearchParams();

        params.set("lng", center.lng.toFixed(4));
        params.set("lat", center.lat.toFixed(4));
        params.set("zoom", zoom.toFixed(2));

        // Add checkbox states using short codes
        const roadTypeCheckboxes = document.querySelectorAll(
          'input[type="checkbox"][data-road-type]',
        );
        const hiddenCodes = [];
        roadTypeCheckboxes.forEach((cb) => {
          if (!cb.checked) {
            const code = roadTypeToCode[cb.dataset.roadType];
            if (code) hiddenCodes.push(code);
          }
        });
        if (hiddenCodes.length > 0) {
          params.set("h", hiddenCodes.join(","));
        }

        // Add bicycle counts toggle state
        const countsToggle = document.getElementById("bicycle-counts-toggle");
        if (countsToggle && !countsToggle.checked) {
          params.set("c", "0");
        }

        const newURL = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, "", newURL);
      }

      map.on("load", async () => {
        // Function to parse GML coordinates to GeoJSON
        function parseGMLCoordinates(coordString) {
          const pairs = coordString.trim().split(/\s+/);
          return pairs.map((pair) => {
            const [lon, lat] = pair.split(",").map(Number);
            return [lon, lat];
          });
        }

        // Function to convert GML to GeoJSON
        function gmlToGeoJSON(gmlText) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(gmlText, "text/xml");
          const features = [];

          const featureMembers =
            xmlDoc.getElementsByTagName("gml:featureMember");

          for (let member of featureMembers) {
            const pyorailykartta =
              member.getElementsByTagName("GIS:Pyorailykartta")[0];

            if (!pyorailykartta) continue;

            // Extract properties
            const toiminnallinenLuokka = pyorailykartta
              .getElementsByTagName("GIS:ToiminnallinenLuokka")[0]
              ?.textContent?.trim();
            const kadunnimi = pyorailykartta
              .getElementsByTagName("GIS:Kadunnimi")[0]
              ?.textContent?.trim();
            const taso = pyorailykartta
              .getElementsByTagName("GIS:Taso")[0]
              ?.textContent?.trim();

            // Filter out highways and tram lines
            if (
              toiminnallinenLuokka === "Pääväylä - maantie" ||
              toiminnallinenLuokka === "Katuraide"
            ) {
              continue; // Skip this feature
            }

            const lineString =
              pyorailykartta.getElementsByTagName("gml:LineString")[0];
            if (lineString) {
              const coordinates =
                lineString.getElementsByTagName("gml:coordinates")[0];
              if (coordinates) {
                const coords = parseGMLCoordinates(coordinates.textContent);
                features.push({
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: coords,
                  },
                  properties: {
                    ToiminnallinenLuokka: toiminnallinenLuokka,
                    Kadunnimi: kadunnimi,
                    Taso: taso,
                  },
                });
              }
            }
          }

          return {
            type: "FeatureCollection",
            features: features,
          };
        }

        // Function to fetch and parse WFS data
        async function fetchBicycleMapData() {
          const bounds = map.getBounds();
          const bbox = `${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()},${bounds.getNorth()}`;

          const targetUrl =
            "https://kartat.espoo.fi/teklaogcweb/wfs.ashx?" +
            "SERVICE=WFS&" +
            "REQUEST=GetFeature&" +
            "TYPENAME=GIS:Pyorailykartta&" +
            "OUTPUTFORMAT=GML2&" +
            "SRSNAME=EPSG:4326&" +
            `BBOX=${bbox}`;

          try {
            const response = await fetch(targetUrl);
            if (!response.ok) {
              console.error(
                "Proxy response error:",
                response.status,
                response.statusText,
              );
              const errorText = await response.text();
              console.error("Error details:", errorText);
              return { type: "FeatureCollection", features: [] };
            }
            const gmlText = await response.text();
            if (!gmlText || !gmlText.includes("<?xml")) {
              console.error("Invalid GML response:", gmlText.substring(0, 200));
              return { type: "FeatureCollection", features: [] };
            }
            return gmlToGeoJSON(gmlText);
          } catch (error) {
            console.error("Error fetching bicycle map:", error);
            return { type: "FeatureCollection", features: [] };
          }
        }

        // Add WFS source
        map.addSource("pyorailykartta-wfs", {
          type: "geojson",
          data: { type: "FeatureCollection", features: [] },
        });

        map.addLayer({
          id: "pyorailykartta-layer",
          type: "line",
          source: "pyorailykartta-wfs",
          paint: {
            "line-color": [
              "match",
              ["get", "ToiminnallinenLuokka"],
              "Pyörätie",
              "#00C853",
              "Yhdistetty pyörätie ja jalkakäytävä",
              "#64DD17",
              "Pyöräkaista ajoradan reunassa",
              "#FFD600",
              "Puistoraitti",
              "#00BFA5",
              "Jalkakäytävä",
              "#90A4AE",
              "Kokoojakatu",
              "#FF6F00",
              "Pääkatu",
              "#E65100",
              "Tontti-/asunto-/liityntä-/pihakatu",
              "#BCAAA4",
              "Katuraide",
              "#7E57C2",
              "Joukkoliikenne/terminaali",
              "#5E35B1",
              "Pysäköintialue",
              "#B0BEC5",
              "Polkupyöräpysäköinti",
              "#4FC3F7",
              "Tori/Aukio",
              "#CFD8DC",
              "#2196F3",
            ],
            "line-width": [
              "match",
              ["get", "ToiminnallinenLuokka"],
              "Pyörätie",
              3,
              "Yhdistetty pyörätie ja jalkakäytävä",
              3,
              "Pyöräkaista ajoradan reunassa",
              2.5,
              "Puistoraitti",
              2,
              2,
            ],
            "line-opacity": 0.8,
          },
        });

        // Only load bicycle map data when zoomed in to level 13+
        const MIN_ZOOM = 13;

        async function updateBicycleMap() {
          const zoom = map.getZoom();
          if (zoom >= MIN_ZOOM) {
            setIsLoading(true);
            const data = await fetchBicycleMapData();
            map.getSource("pyorailykartta-wfs").setData(data);
            setIsLoading(false);
            console.log(
              `Loaded ${data.features.length} bicycle route features`,
            );
          } else {
            // Clear data when zoomed out
            map.getSource("pyorailykartta-wfs").setData({
              type: "FeatureCollection",
              features: [],
            });
          }
        }

        // Update on zoom/pan
        map.on("moveend", updateBicycleMap);

        // Initial check
        updateBicycleMap();

        // Function to parse bicycle counting GML to GeoJSON
        function countingGmlToGeoJSON(gmlText) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(gmlText, "text/xml");
          const features = [];

          const featureMembers =
            xmlDoc.getElementsByTagName("gml:featureMember");

          for (let member of featureMembers) {
            const countingFeature = member.getElementsByTagName(
              "GIS:Pyorailyn_laskentatulokset_2025",
            )[0];

            if (!countingFeature) continue;

            // Extract geometry
            const lineString =
              countingFeature.getElementsByTagName("gml:LineString")[0];
            if (!lineString) continue;

            const coordinates =
              lineString.getElementsByTagName("gml:coordinates")[0];
            if (!coordinates) continue;

            const coords = parseGMLCoordinates(coordinates.textContent);

            // Extract properties
            const properties = {};
            const propertyTags = countingFeature.getElementsByTagName("*");

            for (let tag of propertyTags) {
              if (tag.tagName.startsWith("GIS:") && tag.childNodes.length > 0) {
                const propName = tag.tagName.replace("GIS:", "");
                const propValue = tag.textContent?.trim();
                if (propValue && propName !== "Geometry") {
                  const numValue = Number(propValue);
                  properties[propName] = !isNaN(numValue)
                    ? numValue
                    : propValue;
                }
              }
            }

            // Calculate total count from all years
            const totalCount =
              (properties.pp_2018 || 0) +
              (properties.pp_2019 || 0) +
              (properties.pp_2020 || 0) +
              (properties.pp_2021 || 0) +
              (properties.pp_2022 || 0) +
              (properties.pp_2023 || 0) +
              (properties.pp_2024 || 0) +
              (properties.pp_2025 || 0);

            properties.total_count = totalCount;

            features.push({
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: coords,
              },
              properties: properties,
            });
          }

          return {
            type: "FeatureCollection",
            features: features,
          };
        }

        // Function to fetch bicycle counting data from WFS
        async function fetchBicycleCountingData() {
          const targetUrl =
            "https://kartat.espoo.fi/teklaogcweb/wfs.ashx?" +
            "SERVICE=WFS&" +
            "VERSION=1.1.0&" +
            "REQUEST=GetFeature&" +
            "TYPENAME=GIS:Pyorailyn_laskentatulokset_2025&" +
            "OUTPUTFORMAT=GML2&" +
            "SRSNAME=EPSG:4326";

          try {
            const response = await fetch(targetUrl);
            if (!response.ok) {
              console.error(
                "Proxy response error (counting):",
                response.status,
                response.statusText,
              );
              const errorText = await response.text();
              console.error("Error details:", errorText);
              return { type: "FeatureCollection", features: [] };
            }
            const gmlText = await response.text();
            if (!gmlText || !gmlText.includes("<?xml")) {
              console.error(
                "Invalid GML response (counting):",
                gmlText.substring(0, 200),
              );
              return { type: "FeatureCollection", features: [] };
            }
            return countingGmlToGeoJSON(gmlText);
          } catch (error) {
            console.error("Error fetching bicycle counting data:", error);
            return { type: "FeatureCollection", features: [] };
          }
        }

        // Load counting data from WFS API via proxy
        const countingData = await fetchBicycleCountingData();
        console.log(
          `Loaded ${countingData.features.length} bicycle counting features`,
        );
        if (countingData.features.length > 0) {
          console.log(
            "Sample counting feature:",
            JSON.stringify(countingData.features[0], null, 2),
          );
          console.log(
            "Available properties:",
            Object.keys(countingData.features[0].properties),
          );
        }

        map.addSource("bicycle-counts", {
          type: "geojson",
          data: countingData,
        });

        map.addLayer({
          id: "bicycle-lines",
          type: "line",
          source: "bicycle-counts",
          paint: {
            "line-color": [
              "interpolate",
              ["linear"],
              ["get", "total_count"],
              0,
              "#fef0d9",
              1000,
              "#fdcc8a",
              5000,
              "#fc8d59",
              10000,
              "#e34a33",
              15000,
              "#b30000",
            ],
            "line-width": [
              "interpolate",
              ["linear"],
              ["get", "total_count"],
              0,
              2,
              5000,
              4,
              15000,
              8,
            ],
            "line-opacity": 0.9,
          },
        });

        // Click handler for bicycle count lines
        map.on("click", "bicycle-lines", (e) => {
          const props = e.features[0].properties;
          const yearCounts = [];
          for (let year = 2018; year <= 2025; year++) {
            const count = props[`pp_${year}`];
            if (count > 0) {
              yearCounts.push(`${year}: ${count.toLocaleString()}`);
            }
          }
          new window.mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              `
                    <strong>${props.nimi || "Unknown"}</strong><br>
                    Method: ${props.menetelmä || "N/A"}<br>
                    ID: ${props.tunnusluku || "N/A"}<br>
                    Total: ${props.total_count.toLocaleString()}<br>
                    <hr style="margin: 5px 0;">
                    ${yearCounts.join("<br>") || "No data"}
                `,
            )
            .addTo(map);
        });

        // Click handler for bicycle map layer
        map.on("click", "pyorailykartta-layer", (e) => {
          const props = e.features[0].properties;
          new window.mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
              `
                    <strong>${props.Kadunnimi || "Unnamed"}</strong><br>
                    Type: ${props.ToiminnallinenLuokka || "Unknown"}<br>
                    Level: ${props.Taso || "N/A"}
                `,
            )
            .addTo(map);
        });

        map.on("mouseenter", "bicycle-lines", () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "bicycle-lines", () => {
          map.getCanvas().style.cursor = "";
        });

        map.on("mouseenter", "pyorailykartta-layer", () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "pyorailykartta-layer", () => {
          map.getCanvas().style.cursor = "";
        });

        // Handle checkbox toggles for road types
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-road-type]',
        );
        const hiddenRoadTypes = new Set();

        // Restore checkbox states from URL
        const hiddenFromURL = urlParams.get("h");
        if (hiddenFromURL) {
          const hiddenCodes = hiddenFromURL.split(",");
          const hiddenTypes = hiddenCodes
            .map((code) => codeToRoadType[code])
            .filter(Boolean);
          checkboxes.forEach((cb) => {
            if (hiddenTypes.includes(cb.dataset.roadType)) {
              cb.checked = false;
              hiddenRoadTypes.add(cb.dataset.roadType);
            }
          });
        }

        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", (e) => {
            const roadType = e.target.dataset.roadType;

            if (e.target.checked) {
              hiddenRoadTypes.delete(roadType);
            } else {
              hiddenRoadTypes.add(roadType);
            }

            updateLayerOpacity();
            updateURL();
          });
        });

        function updateLayerOpacity() {
          if (hiddenRoadTypes.size === 0) {
            map.setPaintProperty("pyorailykartta-layer", "line-opacity", 0.8);
          } else {
            const opacityExpression = [
              "case",
              [
                "in",
                ["get", "ToiminnallinenLuokka"],
                ["literal", Array.from(hiddenRoadTypes)],
              ],
              0,
              0.8,
            ];
            map.setPaintProperty(
              "pyorailykartta-layer",
              "line-opacity",
              opacityExpression,
            );
          }
        }

        // Handle bicycle counts layer toggle
        const bicycleCountsToggle = document.getElementById(
          "bicycle-counts-toggle",
        );

        // Restore bicycle counts toggle from URL
        const countsFromURL = urlParams.get("c");
        if (countsFromURL === "0") {
          bicycleCountsToggle.checked = false;
          map.setLayoutProperty("bicycle-lines", "visibility", "none");
        }

        bicycleCountsToggle.addEventListener("change", (e) => {
          const visibility = e.target.checked ? "visible" : "none";
          map.setLayoutProperty("bicycle-lines", "visibility", visibility);
          updateURL();
        });

        // Update URL when map moves or zooms
        map.on("moveend", updateURL);

        // Initial opacity update based on URL params
        if (hiddenRoadTypes.size > 0) {
          updateLayerOpacity();
        }

        console.log("Map loaded with WMS 1.3.0");
      });
    };

    loadMapbox();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient]);

  const legendContents = (
    <>
      <h4 style={{ margin: "0 0 10px" }}>Espoo Bicycle Map</h4>
      <p style={{ margin: "5px 0", fontSize: "11px" }}>
        Zoom in to level 13+ to see routes
      </p>
      <hr style={{ margin: "8px 0" }} />
      <strong>Road Types:</strong>
      <LegendItem
        roadType="Pyörätie"
        color="#00c853"
        label="Bike path"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Yhdistetty pyörätie ja jalkakäytävä"
        color="#64dd17"
        label="Combined bike/pedestrian path"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Pyöräkaista ajoradan reunassa"
        color="#ffd600"
        label="Bike lane on road"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Puistoraitti"
        color="#00bfa5"
        label="Park route"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Jalkakäytävä"
        color="#90a4ae"
        label="Sidewalk"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Kokoojakatu"
        color="#ff6f00"
        label="Common use street"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Pääkatu"
        color="#e65100"
        label="Main street"
        defaultChecked={true}
      />
      <LegendItem
        roadType="Tontti-/asunto-/liityntä-/pihakatu"
        color="#bcaaa4"
        label="Residential street"
        defaultChecked={true}
      />
      <hr style={{ margin: "8px 0" }} />
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}
      >
        <input
          type="checkbox"
          id="bicycle-counts-toggle"
          defaultChecked={true}
          style={{ marginRight: "8px" }}
        />
        <label htmlFor="bicycle-counts-toggle" style={{ cursor: "pointer" }}>
          <strong>Bicycle Counts (Red-Yellow)</strong>
        </label>
      </div>
      <div style={{ marginTop: "5px", fontSize: "11px" }}>
        Click routes to see details
      </div>
    </>
  );

  if (!isClient) {
    return <div style={{ height: "600px" }}>Loading map...</div>;
  }

  return (
    <>
      {" "}
      <div style={{ position: "relative" }}>
        <style jsx>{`
          .map-loader {
            display: inline-grid;
            width: 60px;
            aspect-ratio: 1;
            clip-path: polygon(
              100% 50%,
              85.36% 85.36%,
              50% 100%,
              14.64% 85.36%,
              0% 50%,
              14.64% 14.64%,
              50% 0%,
              85.36% 14.64%
            );
            background: #4c566a;
            animation: l2 6s infinite linear;
          }
          .map-loader:before,
          .map-loader:after {
            content: "";
            grid-area: 1/1;
            background: #5e81ac;
            clip-path: polygon(
              100% 50%,
              81.17% 89.09%,
              38.87% 98.75%,
              4.95% 71.69%,
              4.95% 28.31%,
              38.87% 1.25%,
              81.17% 10.91%
            );
            margin: 10%;
            animation: inherit;
            animation-duration: 10s;
          }
          .map-loader:after {
            background: #88c0d0;
            clip-path: polygon(
              100% 50%,
              75% 93.3%,
              25% 93.3%,
              0% 50%,
              25% 6.7%,
              75% 6.7%
            );
            margin: 20%;
            animation-duration: 3s;
            animation-direction: reverse;
          }
          @keyframes l2 {
            to {
              rotate: 1turn;
            }
          }
        `}</style>

        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              backgroundColor: "rgba(236, 239, 244, 0.9)",
              padding: "20px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div className="map-loader"></div>
            <div style={{ fontSize: "14px", color: "#4C566A" }}>
              Loading routes...
            </div>
          </div>
        )}

        <div
          ref={mapContainerRef}
          style={{
            height: "600px",
            width: "100%",
          }}
        />
        {isDesktop && (
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "3px",
              top: "10px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              font: '12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif',
              padding: "10px",
              position: "absolute",
              right: "10px",
              zIndex: 1,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {legendContents}
          </div>
        )}
      </div>
      {!isDesktop && <div>{legendContents}</div>}
    </>
  );
}

function LegendItem({ roadType, color, label, defaultChecked }) {
  return (
    <div style={{ margin: "3px 0", display: "flex", alignItems: "center" }}>
      <label
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        <input
          type="checkbox"
          data-road-type={roadType}
          defaultChecked={defaultChecked}
          style={{ marginRight: "5px" }}
        />
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "3px",
            marginRight: "8px",
            backgroundColor: color,
          }}
        ></span>
        {label}
      </label>
    </div>
  );
}
