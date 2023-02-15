import Flickr from 'flickr-sdk';
import { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import debounce from 'lodash.debounce';

import { ImageTile } from './image';

export function FlickrFeed() {
  const Key = '378c2fa49da047fd5a130b41b8ac1705';
  const Secret = '689f715552152481';

  const flickr = new Flickr(Key);
  let sizes = [];

  const [images, setImages] = useState([]);
  const [excess, setExcess] = useState([]);
  const imagesGrid = [[]];
  const excessByRow = [];

  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const placeImages = () => {
    setImages(null);
    const images = sizes
      .map((image) => image.filter((img) => img.label === 'Medium'))
      .flat();

    let currentRowWidth = 0;
    let currentRow = 0;
    let i = 0;

    images.forEach((image) => {
      const isVertical = image.height > image.width;
      const verticalCalculatedWidth = image.width * (300 / image.height);

      if (i <= 2) {
        imagesGrid[currentRow].push(image);
        currentRowWidth += isVertical ? verticalCalculatedWidth : image.width;
      } else {
        excessByRow[currentRow] = 1500 - currentRowWidth;

        currentRow++;
        imagesGrid[currentRow] = [image];
        currentRowWidth = isVertical ? verticalCalculatedWidth : image.width;
        i = 0;
      }

      i++;
    });

    setImages(imagesGrid);
    setExcess(excessByRow);
    setIsLoading(false);
    return;
  };

  const getLastPhotos = async (page) => {
    setIsLoading(true);

    const res = await flickr.photos.search({
      user_id: '131481972@N07',
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

    window.addEventListener('resize', debounce(placeImages, 300));
  }, []);

  return (
    <Card title="Photos">
      <div className="card flex justify-content-between">
        <Button
          className="p-button-outlined"
          icon="pi pi-arrow-left "
          disabled={isLoading || currentPage === 1}
          onClick={() => {
            setCurrentPage((cp) => {
              getLastPhotos(cp - 1).then(placeImages);
              return cp - 1;
            });
          }}
        ></Button>
        <h3>page : {currentPage}</h3>
        <Button
          className="p-button-outlined"
          icon="pi pi-arrow-right"
          disabled={isLoading}
          onClick={() => {
            setCurrentPage((cp) => {
              getLastPhotos(cp + 1).then(placeImages);
              return cp + 1;
            });
          }}
        ></Button>
      </div>
      {isLoading ? (
        <div className="card flex justify-content-center">
          <ProgressSpinner />
        </div>
      ) : (
        <div
          style={{
            paddingLeft: '2.5vw',
            paddingTop: '2rem',
          }}
        >
          {images &&
            images.map((row, i) => {
              return (
                <div key={i} className="flex">
                  {row.map((image, j) => (
                    <div key={`${i}.${j}`}>
                      <ImageTile
                        image={image}
                        availableWidth={window.innerWidth * 0.9}
                        rowNumber={i}
                        excess={excess}
                        numberOfHorizontalImages={
                          row.filter((img) => img.width > img.height).length
                        }
                      />
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      )}
    </Card>
  );
}
