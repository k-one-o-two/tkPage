import { useEffect, useState, useRef } from "react";
import { Card } from "./card";

export function Layout({ children, active }) {
  const footerRef = useRef();
  const [scrollPos, setScrollPos] = useState(0);


  function getScrollPercent() {
      var h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
      return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  }

  // Mirrors the scroll position into <html data-scroll="...">, so CSS can
  // style the header differently once the page is scrolled.
  useEffect(() => {
    const updateScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
      setScrollPos(Math.round(getScrollPercent()));
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
        {scrollPos > 0 && <div className="scrollIndicator">{scrollPos}% <span style={{color: 'black'}}>{ (new Array(Math.round(scrollPos/2))).fill('-').join('') }{scrollPos === 100 ? '|' : '>'}</span></div>}
      </div>
      <div className="paper">{children}</div>
      <div ref={footerRef} className="footer card">&copy; {new Date().getFullYear()} k102</div>
    </div>
  );
}
