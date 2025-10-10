import { useRouter } from "next/navigation";

export function Card({ title, children, link, art }) {
  const router = useRouter();

  return (
    <div
      className="card card-l2"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        alignItems: "center",
      }}
    >
      <div>
        <pre>{art}</pre>
      </div>
      <span onClick={() => router.push(link)} className="link">
        <div>
          <h2 className="title">{title}</h2>
          <div className="content">{children}</div>
        </div>
      </span>
    </div>
  );
}
