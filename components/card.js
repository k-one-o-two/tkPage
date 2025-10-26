import { useRouter } from "next/navigation";

export function Card({ title, children, link, art, small }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
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
    </div>
  );
}
