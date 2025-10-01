import { useRouter } from "next/navigation";

export const A = ({ href, children }) => {
  const router = useRouter();

  return (
    <span onClick={() => router.push(href)} className="link">
      {children}
    </span>
  );
};
