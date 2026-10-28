"use client";

import { useRef, useState } from "react";
import Photo from "../shared/Photo";
import { gallery, imageUrl } from "../../data/site-data";

export default function GallerySection() {
  const [activePhoto, setActivePhoto] = useState(null);
  const galleryDialog = useRef(null);

  function openPhoto(photo) {
    setActivePhoto(photo);
    galleryDialog.current?.showModal();
  }

  return (
    <>
      <section id="gallery" className="sec gal-sec">
        <div className="wrap gal-head">
          <div><h2>Gallery</h2><p>Reunions, workshops, award days and Foundation Week. Select a photo to enlarge it.</p></div>
          <a className="lnk" href="#gallery">View All Photos</a>
        </div>
        <div className="strip" role="list">
          {gallery.map((photo) => (
            <button
              type="button"
              role="listitem"
              key={photo.id}
              onClick={() => openPhoto(photo)}
              aria-label={`Enlarge ${photo.caption}`}
            >
              <div className="ph" style={{ width: `${photo.width}px` }}>
                <Photo src={imageUrl(photo.id, 900)} alt={photo.caption} />
              </div>
              <p>{photo.caption}</p>
            </button>
          ))}
        </div>
      </section>
      <dialog
        id="lb"
        ref={galleryDialog}
        aria-label="Photo preview"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => setActivePhoto(null)}
      >
        {activePhoto && (
          <>
            <Photo src={imageUrl(activePhoto.id, 1600)} alt={activePhoto.caption} />
            <p>{activePhoto.caption}</p>
          </>
        )}
        <button className="btn" type="button" onClick={() => galleryDialog.current?.close()}>Close</button>
      </dialog>
    </>
  );
}
