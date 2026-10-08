import { useEffect } from "react";
import { Card } from "./card";

export function Layout({ children, active }) {
  // Mirrors the scroll position into <html data-scroll="...">, so CSS can
  // style the header differently once the page is scrolled.
  useEffect(() => {
    const updateScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div>
      <div className="header">
        <img src="/k102.svg" height="40" alt="k102" />
        <Card small title="_about" link="/" art={null}></Card>
        <Card small title="_photo" link="/photo/1/" art={null}></Card>
        <Card small title="_video" link="/video" art={null}></Card>
        <Card small title="_mtb" link="/mtb" art={null}></Card>
      </div>
      <div className="paper">{children}</div>
      <div className="footer card">&copy; {new Date().getFullYear()} k102</div>
    </div>
  );
}
