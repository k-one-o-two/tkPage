import Link from "next/link";

export function Card({ title, children, link, art, small, accent }) {
  // A real <a href> (rather than an onClick handler) so that search engines
  // can discover and follow the linked pages.
  return (
    <Link
      href={link}
      className={`card ${small ? "card-small" : "card-link card-l2"}`}
    >
      {art && (
        <div>
          <pre>{art}</pre>
        </div>
      )}
      <div>
        <div>
          <h2 className="title">{title}</h2>
          {children && <div className="content">{children}</div>}
        </div>
      </div>
      {accent && <div className={`accent-${accent}`}></div>}
    </Link>
  );
}
