import Head from "next/head";
import prism from "../style/prism";
import { useEffect } from "react";

export function Article({ title, html, art }) {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="card">
      <div className="art">
        <pre>{art}</pre>
      </div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <div className="article">{html}</div>
    </div>
  );
}
