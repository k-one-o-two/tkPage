import { Image } from 'primereact/image';
import { useState, useEffect } from 'react';
// const maxWidth = ;
export function NoteImage({ src, height }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth * 0.7);
  }, []);

  return (
    <div
      style={{
        width,
        position: 'relative',
        display: 'block',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <Image
        imageStyle={{
          maxWidth: width,
        }}
        src={src}
      ></Image>
    </div>
  );
}
