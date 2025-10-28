import Flickr from "flickr-sdk";
import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import debounce from "lodash.debounce";

import { ImageTile } from "./image";

export function FlickrFeed2() {
  const Key = "378c2fa49da047fd5a130b41b8ac1705";
  const Secret = "689f715552152481";

  const flickr = new Flickr(Key);

  const getLastPhotos = async (page) => {
    // setIsLoading(true);

    const res = await flickr.photos.search({
      user_id: "131481972@N07",
      per_page: 12,
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
    getLastPhotos(1).then(placeImages);
    setInnerWidth(window.innerWidth - 200);

    window.addEventListener(
      "resize",
      debounce(() => {
        setInnerWidth(window.innerWidth - 200);
      }, 300),
    );
  }, []);
}
