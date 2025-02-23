import Head from 'next/head';

export function Article({ title, html, art }) {
  return (
    <div className="card">
      <div><pre style={{paddingRight: '30px', paddingBottom: '10px'}}><code style={{whiteSpace: 'inherit'}}>{art}</code></pre></div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      {html}
    </div>
  );
}
