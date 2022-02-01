const Key = "378c2fa49da047fd5a130b41b8ac1705";
const Secret = "689f715552152481";

const Flickr = require("flickr-sdk");

const flickr = new Flickr(Key);

let currentPage = 1;

const flickrPrevBtn = document.getElementById("flickrPrev");
const flickrNextBtn = document.getElementById("flickrNext");
const flickrCurrentPage = document.getElementById("currentPage");

const getLastPhotos = async () => {
  flickrPrevBtn.disabled = true;
  flickrNextBtn.disabled = true;

  flickrCurrentPage.innerHTML = currentPage;

  const res = await flickr.photos.search({
    user_id: "131481972@N07",
    per_page: 12,
    page: currentPage,
  });

  flickrPrevBtn.disabled = false;
  flickrNextBtn.disabled = false;

  return res.body.photos.photo;
};

const run = async () => {
  const urls = await getLastPhotos();

  urls.forEach(async (photo, index) => {
    const sizes = await flickr.photos.getSizes({ photo_id: photo.id });

    const mediumSizedPhoto = sizes.body.sizes.size.find(
      (size) => size.label === "Medium"
    );

    const isVertical = mediumSizedPhoto.height > mediumSizedPhoto.width;

    const container = document.getElementById(`p${index}`);
    container.innerHTML = "";

    const img = document.createElement("img");
    img.src = mediumSizedPhoto.source;

    img.height = isVertical ? 500 : 250;

    container.appendChild(img);

    container.classList.remove("skeleton");

    const title = document.createElement("a");
    title.classList.add("title");
    title.href = `https://www.flickr.com/photos/k102/${photo.id}`;
    title.target = "_blank";
    title.innerHTML = photo.title;

    container.appendChild(title);
  });
};

const setLoading = () => {
  Array.from(document.getElementsByClassName("item")).forEach((element) => {
    element.innerHTML = "";
    element.classList.add("skeleton");
  });
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

flickrPrevBtn.addEventListener("click", flickrPrev);
flickrNextBtn.addEventListener("click", flickrNext);

run();
