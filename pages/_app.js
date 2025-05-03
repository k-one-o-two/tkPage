import "../style/main.scss";
import "../style/prism.css";
import { Layout } from "../components/layout";
import Head from "next/head";
import prism from "../style/prism";
import Script from "next/script";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
      <Layout>
        <Head>
          <link rel="icon" href="/k102.svg" type="image/svg+xml"></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
