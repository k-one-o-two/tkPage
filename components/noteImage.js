import { Image } from 'primereact/image';

export function NoteImage({ src, height }) {
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
      height={height}
    ></Image>
  );
}
