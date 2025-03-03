export function ImageTile({
  image,
  availableWidth,
  rowNumber,
  excess,
  numberOfHorizontalImages,
}) {
  const oneColumn = availableWidth <= 650;

  const { source, width, height, url } = image;
  const desiredHeight = 400;
  const difference = availableWidth / 1700;

  const isVertical = height > width;

  if (!isVertical) {
    let totalWidth = width;
    if (excess[rowNumber] > 0) {
      totalWidth += excess[rowNumber] / numberOfHorizontalImages;
    }
    return (
      <a href={`${url.replace('/sizes/m/', '')}`}>
        <div
          className="cursor-pointer hover:shadow-8"
          style={{
            backgroundSize: 'cover',
            backgroundPositionY: 'center',
            backgroundPositionX: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${source})`,
            width: oneColumn ? '' : totalWidth * difference,
            height: desiredHeight,
          }}
        ></div>
      </a>
    );
  } else {
    return (
      <a href={`${url.replace('/sizes/m/', '')}`}>
        <div
          className="cursor-pointer hover:shadow-8"
          style={{
            backgroundSize: 'cover',
            backgroundPositionY: 'center',
            backgroundPositionX: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${source})`,
            width: oneColumn
              ? ''
              : width * (desiredHeight / height) * difference,
            height: desiredHeight,
          }}
        ></div>
      </a>
    );
  }
}
