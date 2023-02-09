export function ImageTile({
  image,
  availableWidth,
  rowNumber,
  excess,
  numberOfHorizontalImages,
}) {
  const { source, width, height, url } = image;
  console.info('ImageTile', image);
  const desiredHeight = 300;
  const difference = availableWidth / 1500;

  const isVertical = height > width;

  if (!isVertical) {
    let totalWidth = width;
    if (excess[rowNumber] > 0) {
      totalWidth += excess[rowNumber] / numberOfHorizontalImages;
    }
    return (
      <a href={`${url.replace('/sizes/m/', '')}`}>
        <div
          className="cursor-pointer bg-cover hover:shadow-8"
          style={{
            backgroundImage: `url(${source})`,
            width: totalWidth * difference,
            height: desiredHeight,
          }}
        ></div>
      </a>
    );
  } else {
    return (
      <a href={`${url.replace('/sizes/m/', '')}`}>
        <div
          className="cursor-pointer bg-cover hover:shadow-8"
          style={{
            backgroundImage: `url(${source})`,
            width: width * (desiredHeight / height) * difference,
            height: desiredHeight,
          }}
        ></div>
      </a>
    );
  }
}
