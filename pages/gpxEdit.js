import { Article } from "../components/article";
import dynamic from "next/dynamic";

// Dynamically import the map component with SSR disabled
const GpxEditor = dynamic(() => import("../components/GpxEditor"), {
  ssr: false,
  loading: () => (
    <div className="map map-tall map-placeholder">Loading map...</div>
  ),
});

export const note = {
  title: "GPX editor",
  art: `
████████████████████
█                ∙ █
█             ∙█∙∙ █
█        ∙∙∙∙∙∙    █
█  ∙∙█∙∙∙∙         █
█ ∙∙               █
█                  █
█  --≡------≡----  █
█                  █
████████████████████
`,
  html: (
    <div>
      <h3>A GPX viewer, and cutter</h3>
      <GpxEditor />
    </div>
  ),
};

function GpxEditPage() {
  return <Article art={note.art} title={note.title} html={note.html}></Article>;
}

export default GpxEditPage;
