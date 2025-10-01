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

  const [innerWidth, setInnerWidth] = useState(0);

  const placeImages = () => {
    setIsLoading(true);
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

    setImages([...imagesGrid]);
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
    setInnerWidth(window.innerWidth - 200);

    window.addEventListener(
      'resize',
      debounce(() => {
        setInnerWidth(window.innerWidth - 200);
      }, 300),
    );
  }, []);

  return (
    <div className="card" title="Photos">
      <h3>Photos</h3>
      <div className="flex justify-content-between">
        <div
          className="button"
          disabled={isLoading || currentPage === 1}
          onClick={() => {
            setCurrentPage((cp) => {
              getLastPhotos(cp - 1).then(placeImages);
              return cp - 1;
            });
          }}
        >
          &nbsp;&nbsp;&lt;&lt;&lt;&nbsp;&nbsp;
        </div>
        <h3>page = {currentPage}</h3>
        <div
          className="button"
          disabled={isLoading}
          onClick={() => {
            setCurrentPage((cp) => {
              getLastPhotos(cp + 1).then(placeImages);
              return cp + 1;
            });
          }}
        >
          &nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-content-center">
          <ProgressSpinner />
        </div>
      ) : (
        <div
          style={{
            paddingLeft: '1.5vw',
            paddingTop: '2rem',
          }}
        >
          {images &&
            images.map((row, i) => {
              return (
                <div
                  key={i}
                  className={`flex ${
                    window.innerWidth <= 650 ? 'flex-column' : ''
                  }`}
                >
                  {row.map((image, j) => (
                    <div key={`${i}.${j}`}>
                      <ImageTile
                        image={image}
                        availableWidth={innerWidth}
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
      <div
        style={{ paddingTop: '20px' }}
        className="flex justify-content-between"
      >
        <div
          className="button"
          disabled={isLoading || currentPage === 1}
          onClick={() => {
            setCurrentPage((cp) => {
              getLastPhotos(cp - 1).then(placeImages);
              return cp - 1;
            });
          }}
        >
          &nbsp;&nbsp;&lt;&lt;&lt;&nbsp;&nbsp;
        </div>
        <h3>page = {currentPage}</h3>
        <div
          className="button"
          disabled={isLoading}
          onClick={() => {
            setCurrentPage((cp) => {
              getLastPhotos(cp + 1).then(placeImages);
              return cp + 1;
            });
          }}
        >
          &nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
