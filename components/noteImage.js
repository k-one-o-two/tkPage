import Image from 'next/image';
export function NoteImage({ src, height }) {
  return (
    <div style={{ position: 'relative', height: '400px' }}>
      <Image
        src={src}
        alt="Image"
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
