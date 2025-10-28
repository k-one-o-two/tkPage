import Head from "next/head";
import { FlickrFeed } from "../../components/photos";
import { useRouter } from "next/router";

function FlickrPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My photos</title>
      </Head>
      <FlickrFeed page={router.query.page} />
    </>
  );
}

export default FlickrPage;
