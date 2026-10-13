import { Seo } from "./seo";
import prism from "../style/prism";
import { useEffect } from "react";

export function Article({ title, description, html, art }) {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="card">
      <div className="art">
        <pre>{art}</pre>
      </div>
      <Seo
        title={title}
        description={description}
        openGraph={{ type: "article", title, description }}
      />
      <h1>{title}</h1>
      <div className="article">{html}</div>
    </div>
  );
}
