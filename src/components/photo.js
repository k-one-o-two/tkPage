import Head from 'next/head';
import { FlickrFeed } from '../components/photos';

function FlickrPage() {
  return (
    <>
      <Head>
        <title>My photos</title>
      </Head>
      <FlickrFeed />
    </>
  );
}

export default FlickrPage;
