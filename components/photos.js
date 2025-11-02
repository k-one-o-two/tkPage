import Flickr from "flickr-sdk";
import { useEffect, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { ImageTile } from "./image";

export function FlickrFeed({ page }) {
  const Key = "378c2fa49da047fd5a130b41b8ac1705";
  const Secret = "689f715552152481";

  const flickr = new Flickr(Key);
  let sizes = [];

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const placeImages = () => {
    setIsLoading(true);
    setImages(null);
    const images = sizes
      .map((image) => image.filter((img) => img.label === "Medium"))
      .flat();

    setImages(images);
    setIsLoading(false);
    return;
  };

  const getLastPhotos = async (page) => {
    setIsLoading(true);

    const res = await flickr.photos.search({
      user_id: "131481972@N07",
      per_page: 24,
      page,
    });

    const urls = res.body.photos.photo;
    sizes = await Promise.all([
      ...urls.map(async (photo) => {
        return (await flickr.photos.getSizes({ photo_id: photo.id })).body.sizes
          .size;
      }),
    ]);

    return;
  };

  useEffect(() => {
    setImages([]);
    page && getLastPhotos(Number(page)).then(placeImages);
  }, [page]);

  return (
    <div className="card" title="Photos">
      <h1>My photographies</h1>
      <p>
        I like taking pictures of life around me, you can see it all on{" "}
        <a href="https://www.flickr.com/photos/k102">Flickr</a>. These images
        are free for non-commercial use, but please mention me someewhere.
      </p>
      <p>
        In case you want to use them for commercial purposes: I use{" "}
        <a href="https://www.istockphoto.com/fi/portfolio/k102?mediatype=photography">
          istockphoto
        </a>{" "}
        - feel free to ask, I'll add an image there!
      </p>
      {/* <h3>Photos</h3>*/}
      <div className="flex justify-content-between">
        <a href={Number(page) > 1 ? `/photo/${Number(page) - 1}` : null}>
          <h4>page--;</h4>
        </a>
        <h4>/{page}/</h4>
        <a href={`/photo/${Number(page) + 1}`}>
          <h4>page++;</h4>
        </a>
      </div>
      {isLoading ? (
        <div className="flex justify-content-center">
          <ProgressSpinner />
        </div>
      ) : (
        <div className="images-container">
          {images &&
            images.map((image, i) => {
              return <ImageTile key={i} image={image} />;
            })}
        </div>
      )}
      <div
        style={{ paddingTop: "20px" }}
        className="flex justify-content-between"
      >
        <a href={Number(page) > 1 ? `/photo/${Number(page) - 1}` : null}>
          <h4>page--;</h4>
        </a>
        <h4>/{page}/</h4>
        <a href={`/photo/${Number(page) + 1}`}>
          <h4>page++;</h4>
        </a>
      </div>
    </div>
  );
}
