import Image from "next/image";

export function NoteImage({ src }) {
  return (
    <>
      <div style={{ position: "relative", height: "400px", cursor: "pointer" }}>
        <button popovertarget={`pop_${src}`} className="imgButton">
          <Image
            src={src}
            alt="Image"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </button>
      </div>

      <div id={`pop_${src}`} className="img-dialog" popover="auto">
        <div className="dlg-header">
          <p style={{ color: "white" }}>{src}</p>
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
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </>
  );
}
