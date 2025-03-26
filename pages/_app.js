import "../style/main.scss";
import "../style/prism.css";
import { Layout } from "../components/layout";
import Head from "next/head";
import prism from "../style/prism";
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  // prism();
  return (
  <>
    <Script src='https://telegram.org/js/telegram-web-app.js'/>
    <Layout>
      <Head>
        <link rel="icon" href="/k102.svg" type="image/svg+xml"></link>
      </Head>
      <Component {...pageProps} />
      {/* <script src="../style/prism.js"></script> */}
    </Layout>
  </>
  );
}
