import { Article } from "../components/article";
import dynamic from "next/dynamic";

// Dynamically import the map component with SSR disabled
const EspooMap = dynamic(() => import("../components/EspooMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Loading map...
    </div>
  ),
});

export const note = {
  title: "Espoo Bicycle Map",
  art: `
  ████████████████████
  █      ∙∙  ▒    ∙  █
  █    ∙∙∙   ▒   ∙   █
  █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
  █  ∙       ▒ ∙     █
  █   ∙      ▒∙      █
  █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
  █     ∙    ▒∙∙∙∙∙∙∙█
  █      ∙   ▒       █
  ████████████████████
`,
  html: (
    <div>
      <h3>Interactive Bicycle Map of Espoo</h3>
      <p>
        This map shows bicycle infrastructure in Espoo, Finland. It displays
        different types of bicycle routes and paths, as well as bicycle counting
        data from 2018-2025.
      </p>

      <EspooMap />

      <h4 style={{ marginTop: "20px" }}>Features</h4>
      <ul>
        <li>
          <strong>Bicycle Infrastructure:</strong> View different types of
          bicycle paths including dedicated bike paths, combined bike/pedestrian
          paths, bike lanes, park routes, and more.
        </li>
        <li>
          <strong>Bicycle Counting Data:</strong> See historical bicycle traffic
          data from 2018-2025 displayed as colored lines (yellow to red
          indicating traffic volume).
        </li>
        <li>
          <strong>Interactive Filters:</strong> Toggle different road types on
          and off to focus on specific infrastructure.
        </li>
        <li>
          <strong>Click for Details:</strong> Click on any route to see detailed
          information including street name, type, and counting data.
        </li>
        <li>
          <strong>URL State:</strong> The map state (position, zoom, and
          filters) is saved in the URL so you can share specific views.
        </li>
      </ul>

      <h4>How to Use</h4>
      <p>
        <strong>Zoom in to level 13 or higher</strong> to see the bicycle
        routes. The map will automatically load route data for the visible area.
        Use the legend on the right to toggle different types of infrastructure
        on and off.
      </p>

      <h4>Data Source</h4>
      <p>
        The data is fetched in real-time from the{" "}
        <a
          href="https://kartat.espoo.fi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          City of Espoo's WFS service
        </a>
        . The map uses a caching proxy to improve performance and reduce load on
        the source server.
      </p>
    </div>
  ),
};

function EspooMapPage() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default EspooMapPage;
