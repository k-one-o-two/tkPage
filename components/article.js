import Head from 'next/head';

export function Article({ title, html }) {
  return (
    <div className="card">
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      {html}
    </div>
  );
}
