import Head from "next/head";

export function Article({ title, html, art }) {
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
