// components/Gallery.jsx
import React from 'react';

const Gallery = ({ t, galleryWorks, openWorkModal }) => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">{t.gallery.title}</h2>
        <div className="gallery-masonry">
          {galleryWorks.map((work) => (
            <div key={work.id} className="gallery-item">
              <img 
                src={work.images[0]} 
                alt={work.title} 
                className="gallery-image"
                onClick={() => openWorkModal(work, 0)}
              />
              <div className="gallery-content">
                <h3 className="gallery-title">{work.title}</h3>
                <p className="gallery-description">
                  {work.description.substring(0, 100)}...
                </p>
                <button 
                  onClick={() => openWorkModal(work, 0)}
                  className="gallery-button"
                >
                  {t.gallery.view}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;