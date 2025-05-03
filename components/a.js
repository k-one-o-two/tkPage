import { useRouter } from "next/router";

export const A = ({ href, children }) => {
  const router = useRouter();

  return (
    <span onClick={() => router.push(href)} className="link">
      {children}
    </span>
  );
};
