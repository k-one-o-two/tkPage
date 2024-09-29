import Image from 'next/image';

export function NoteImage({ src, height }) {
  return (
    <>
      <div style={{ position: 'relative', height: '400px', cursor: 'pointer' }}>
        <button popovertarget={`pop_${src}`}>
          <Image
            src={src}
            alt="Image"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </button>
      </div>

      <div id={`pop_${src}`} className="img-dialog" popover="auto">
        <div
          style={{
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 30,
            marginBottom: '3rem',
          }}
        >
          <p style={{ color: 'white' }}>{src}</p>
          <button
            className="close-btn"
            popovertarget={`pop_${src}`}
            popovertargetaction="hide"
          >
            close
          </button>
        </div>

        <div
          className="img-container"
          style={{
            background: `url(${src}) no-repeat 50% 50%`,
            backgroundSize: 'contain',
          }}
        ></div>
      </div>
    </>
  );
}
