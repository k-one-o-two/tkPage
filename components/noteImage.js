import { Image } from 'primereact/image';
import { useState, useEffect } from 'react';
// const maxWidth = ;
export function NoteImage({ src, height }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    console.info(window.innerWidth);
    setWidth(window.screen.availWidth * 0.7);
  }, []);

  return (
    <Image
      style={{
        margin: 20,
        padding: 10,
        display: 'block',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
      }}
      src={src}
      width={width}
    ></Image>
  );
}
