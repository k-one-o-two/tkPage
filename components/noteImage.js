import Image from "next/image";

export function NoteImage({ src }) {
  return (
    <>
      <div className="note-image">
        <button popovertarget={`pop_${src}`} className="imgButton">
          <Image src={src} alt="Image" fill className="note-image-img" />
        </button>
      </div>

      <div id={`pop_${src}`} className="img-dialog" popover="auto">
        <div className="dlg-header">
          <p className="dlg-title">{src}</p>
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
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </>
  );
}
