import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";

export const SITE_URL = "https://k102.me";
export const SITE_NAME = "k102";
export const DEFAULT_IMAGE = "/misc/bike.jpg";

export const absoluteUrl = (path) => new URL(path, SITE_URL).toString();

// Per-page meta tags. They share keys with the defaults set in _app, so
// next/head replaces those instead of duplicating them. Don't pass
// titleTemplate here: next-seo keeps it in module state, so it would leak
// into other pages.
export function Seo(props) {
  return <Head>{generateNextSeo(props)}</Head>;
}
