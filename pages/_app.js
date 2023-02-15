import '../style/main.scss';
import { Layout } from '../components/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/k102.svg" type="image/svg+xml"></link>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
