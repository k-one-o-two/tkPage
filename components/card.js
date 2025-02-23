
export function Card({ title, children, link, art }) {

  return (
    <div className="card card-l2" style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
      <div>
        <pre>{art}</pre>
        </div>
      <a href={link}>
        <div><h2 className="title">{title}</h2>
        <div className="content">{children}</div></div>
      </a>
    </div>
  );
}

