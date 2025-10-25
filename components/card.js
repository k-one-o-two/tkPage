import { useRouter } from "next/navigation";

export function Card({ title, children, link, art }) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(link)} className="card card-l2 card-link">
      <div>
        <pre>{art}</pre>
      </div>
      <div>
        <div>
          <h2 className="title">{title}</h2>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}
