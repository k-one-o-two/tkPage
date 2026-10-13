import "../style/main.scss";
import "../style/prism.css";
import { Layout } from "../components/layout";
import Head from "next/head";
import prism from "../style/prism";
import Script from "next/script";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { generateDefaultSeo } from "next-seo/pages";
import {
  SITE_NAME,
  DEFAULT_IMAGE,
  absoluteUrl,
} from "../components/seo";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0].replace(/(.)\/$/, "$1");
  // Dynamic routes without getStaticPaths are prerendered with the raw
  // "/photo/[page]" path, which is no use as a canonical URL.
  const url = path.includes("[") ? undefined : absoluteUrl(path);

  return (
    <>
      {/* <Script src="https://telegram.org/js/telegram-web-app.js" />*/}
      <Layout>
        <Head>
          <link rel="icon" href="/k102.svg" type="image/svg+xml"></link>
          {generateDefaultSeo({
            titleTemplate: `%s | ${SITE_NAME}`,
            defaultTitle: SITE_NAME,
            description:
              "Personal page of k102: a software developer living in Espoo, writing about MTB trails, cycling, photography and maps.",
            canonical: url,
            openGraph: {
              type: "website",
              locale: "en_US",
              url,
              siteName: SITE_NAME,
              images: [{ url: absoluteUrl(DEFAULT_IMAGE), alt: SITE_NAME }],
            },
            twitter: { cardType: "summary_large_image" },
          })}
        </Head>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
