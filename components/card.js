
export function Card({ title, children, link, art }) {

  return (
    <a href={link}>
      <div
        className="card card-l2"
        style={{display: 'flex', flexWrap: 'wrap'}}
      >
        <div><pre><code>{art}</code></pre></div>
        <div><h2 className="title">{title}</h2>
        <div className="content">{children}</div></div>
      </div>
    </a>
  );
}

