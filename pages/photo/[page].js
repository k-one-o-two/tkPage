import { Seo } from "../../components/seo";
import { FlickrFeed } from "../../components/photos";
import { useRouter } from "next/router";

function FlickrPage() {
  const router = useRouter();
  return (
    <>
      <Seo
        title="My photos"
        description="Photos by k102 from Flickr: nature, auroras, cities and cycling in Finland."
      />
      <FlickrFeed page={router.query.page} />
    </>
  );
}

export default FlickrPage;
