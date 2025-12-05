// import 'primereact/resources/primereact.css'; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";

import { TransitionProvider } from "../context/transition";
import TransitionComponent from "./transition";

import { Card } from "./card";
import { Image } from "primereact/image";

export function Layout({ children, active }) {
  return (
    <div>
      <div
        className="flex justify-content-center flex-wrap header"
        style={{ display: "flex", gap: "10px" }}
      >
        <Image src="/k102.svg" height="40"></Image>
        <Card small title="_about" link="/" art={null}></Card>
        <Card small title="_photos" link="/photo/1/" art={null}></Card>
      </div>
      <div className="paper">{children}</div>
      <div className="footer card">&copy; {new Date().getFullYear()} k102</div>
    </div>
  );
}
