const Key = '378c2fa49da047fd5a130b41b8ac1705';
const Secret = '689f715552152481';

const Flickr = require('flickr-sdk');

const flickr = new Flickr(Key);

let currentPage = 1;

const flickrPrevBtn = document.getElementById('flickrPrev');
const flickrNextBtn = document.getElementById('flickrNext');
const flickrCurrentPage = document.getElementById('currentPage');

const getLastPhotos = async () => {
  flickrPrevBtn.disabled = true;
  flickrNextBtn.disabled = true;

  flickrCurrentPage.innerHTML = currentPage;

  const res = await flickr.photos.search({
    user_id: '131481972@N07',
    per_page: 12,
    page: currentPage,
  });

  flickrPrevBtn.disabled = false;
  flickrNextBtn.disabled = false;

  return res.body.photos.photo;
};

const placeImage = (container, image, isVertical, photoTitle, photoId) => {
  const img = document.createElement('img');
  img.src = image.source;

  img.height = isVertical ? 500 : 250;
  // img.width = '80%';

  const item = document.createElement('div');
  item.classList.add('item');
  item.appendChild(img);

  const title = document.createElement('a');
  title.classList.add('title');
  title.href = `https://www.flickr.com/photos/k102/${photoId}`;
  title.innerHTML = photoTitle;

  item.appendChild(title);

  container.appendChild(item);
};

const run = async () => {
  const urls = await getLastPhotos();

  const verticalPhotos = [];
  const horizontalPhotos = [];

  const columns = [
    {
      weight: 0,
      el: document.querySelectorAll('.column')[0],
    },
    {
      weight: 0,
      el: document.querySelectorAll('.column')[1],
    },
    {
      weight: 0,
      el: document.querySelectorAll('.column')[2],
    },
    {
      weight: 0,
      el: document.querySelectorAll('.column')[3],
    },
  ];

  const sizes = await Promise.all([
    ...urls.map((photo) => flickr.photos.getSizes({ photo_id: photo.id })),
  ]);

  sizes.forEach((size) => {
    const mediumSizedPhoto = size.body.sizes.size.find(
      (size) => size.label === 'Medium'
    );

    const photoId = size.req.params.photo_id;

    let title = urls.find((photo) => photo.id === photoId)?.title;

    const isVertical = mediumSizedPhoto.height > mediumSizedPhoto.width;
    if (isVertical) {
      verticalPhotos.push({ mediumSizedPhoto, title, photoId });
    } else {
      horizontalPhotos.push({ mediumSizedPhoto, title, photoId });
    }
  });

  while (verticalPhotos.length) {
    const photo = verticalPhotos.shift();

    const minWeightColumn = columns.sort((a, b) => a.weight - b.weight)[0];
    placeImage(
      minWeightColumn.el,
      photo.mediumSizedPhoto,
      true,
      photo.title,
      photo.photoId
    );
    minWeightColumn.weight += 2;
  }

  while (horizontalPhotos.length) {
    const photo = horizontalPhotos.shift();

    const minWeightColumn = columns.sort((a, b) => a.weight - b.weight)[0];
    placeImage(
      minWeightColumn.el,
      photo.mediumSizedPhoto,
      false,
      photo.title,
      photo.photoId
    );
    minWeightColumn.weight += 1;
  }

  document.getElementsByClassName('flexbox')[0].classList.remove('skeleton');
};

const setLoading = () => {
  Array.from(document.getElementsByClassName('column')).forEach((element) => {
    element.innerHTML = '';
  });
  document.getElementsByClassName('flexbox')[0].classList.add('skeleton');
};

const flickrPrev = () => {
  if (currentPage > 1) {
    currentPage--;
    setLoading();
    run();
  }
};

const flickrNext = () => {
  currentPage++;
  setLoading();
  run();
};

flickrPrevBtn.addEventListener('click', flickrPrev);
flickrNextBtn.addEventListener('click', flickrNext);

run();
