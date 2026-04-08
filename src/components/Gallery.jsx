import React, { useState } from 'react';
import './Gallery.css';
import com0 from '../assets/com0.webp';
import cet0 from '../assets/CET_togo 00.webp';
import cet from '../assets/CET_togo.webp';
import im0 from '../assets/im0.webp';
import im1 from '../assets/im1.webp';
import im2 from '../assets/im2.webp';
import im3 from '../assets/im3.webp';
import im4 from '../assets/im4.webp';
import im5 from '../assets/im5.webp';
import im6 from '../assets/im6.webp';

const Gallery = () => {
  // Le nombre de photos à afficher par défaut
  const initialCount = 6;
  const [visiblePhotos, setVisiblePhotos] = useState(initialCount);
  const [selectedImage, setSelectedImage] = useState(null);

  // Ce tableau pourra contenir beaucoup plus de photos.
  // Pensez à juste rajouter les nouveaux objets à l'intérieur.
  const photos = [
    { id: 1, src: com0, alt: "Photo 1" },
    { id: 2, src: im0, alt: "Photo 2" },
    { id: 3, src: cet, alt: "Photo 3" },
    { id: 4, src: cet0, alt: "Photo 4" },
    { id: 5, src: im1, alt: "Photo 5" },
    { id: 6, src: im2, alt: "Photo 6" },
    { id: 7, src: im3, alt: "Photo 7" },
    { id: 8, src: im4, alt: "Photo 8" },
    { id: 9, src: im5, alt: "Photo 9" },
    { id: 10, src: im6, alt: "Photo 10" },
    { id: 11, src: "", alt: "Photo 11" },
    { id: 12, src: "", alt: "Photo 12" },
  ];

  const handleShowMore = () => {
    setVisiblePhotos(prev => prev + 6);
  };

  const handleShowLess = () => {
    setVisiblePhotos(initialCount);
    // On remonte doucement vers le haut de la galerie pour ne pas perdre l'utilisateur
    const element = document.getElementById('gallery');
    if (element) {
      const yOffset = -80; // Pour laisser voir un peu le titre si nav sticky
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Galerie Photo</h2>
          <p className="gallery-subtitle">
            Retrouvez ici les plus beaux moments partagés par la communauté.
            Envoyez-nous vos photos pour enrichir cette galerie !
          </p>
        </div>

        <div className="gallery-grid">
          {photos.slice(0, visiblePhotos).map((photo) => (
            <div className="gallery-item-wrapper" key={photo.id}>
              <div
                className="gallery-item"
                onClick={() => photo.src && setSelectedImage(photo.src)}
              >
                {photo.src ? (
                  <img src={photo.src} alt={photo.alt} className="gallery-image" />
                ) : (
                  <div className="gallery-placeholder">
                    <span className="placeholder-icon">📸</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Boutons d'action pour Voir plus / Voir moins */}
        <div className="gallery-actions text-center">
          {visiblePhotos < photos.length ? (
            <button className="btn btn-primary gallery-btn" onClick={handleShowMore}>
              Voir plus de photos
            </button>
          ) : photos.length > initialCount ? (
            <button className="btn btn-outline gallery-btn" onClick={handleShowLess}>
              Voir moins
            </button>
          ) : null}
        </div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <button
            className="gallery-modal-close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Agrandissement"
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
