import Image from 'next/image';
import { useState } from 'react';

export function NoteImage({ src, height }) {
  const [full, setFull] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          console.info('click');
          setFull(true);
        }}
        style={{ position: 'relative', height: '400px', cursor: 'pointer' }}
      >
        <Image
          src={src}
          alt="Image"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        onClick={() => {
          console.info('click');
          setFull(false);
        }}
        style={{
          display: full ? 'block' : 'none',
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '100vw',
          background: '#4C566A',
          textAlign: 'center',
          alignContent: 'center',
          zIndex: 100500,
          cursor: 'pointer',
        }}
      >
        {' '}
        <Image
          // height="80vh"
          // width="80vw"
          src={src}
          alt="Image"
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </>
  );
}
