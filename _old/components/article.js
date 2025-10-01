import Head from 'next/head';

export function Article({ title, html, art }) {
  return (
    <div className="card">
      <div>
        <pre>{art}</pre>
      </div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      {html}
    </div>
  );
}
