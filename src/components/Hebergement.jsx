import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ZoomIn, 
  X, 
  Phone, 
  MessageSquare, 
  Info, 
  Home, 
  AlertCircle,
  Download
} from 'lucide-react';
import img1 from '../assets/hebergement_1.jpg';
import img2 from '../assets/hebergement_2.jpg';
import img3 from '../assets/hebergement_3.jpg';
import './Hebergement.css';

const slides = [
  { id: 1, img: img1, title: "Où loger aux JNJ ?", label: "Accueil" },
  { id: 2, img: img2, title: "Option 1 - L'Évêché", label: "L'Évêché" },
  { id: 3, img: img3, title: "Option 2 - Communautés & Centres", label: "Communautés" }
];

const Hebergement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('eveche');
  const timerRef = useRef(null);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPlaying && !isLightboxOpen) {
      timerRef.current = setInterval(slideNext, 5000); // 5 seconds per slide
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slideNext, isLightboxOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') slideNext();
      if (e.key === 'ArrowLeft') slidePrev();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideNext, slidePrev]);

  // Framer Motion variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="hebergement" className="section hebergement-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Hébergement & Infos</h2>
          <div className="section-subtitle-badge-wrapper">
            <span className="section-subtitle-badge">Logement Individuel</span>
          </div>
          <p className="section-description mx-auto max-w-2xl">
            Pour les pèlerins qui ne souhaitent pas être en logement collectif, découvrez les offres d'hébergement spéciales et les informations pratiques à retenir absolument.
          </p>
        </div>

        <div className="hebergement-grid">
          {/* Column 1: Carousel */}
          <div className="carousel-column">
            <div className="carousel-outer-wrapper glass-card">
              
              {/* Carousel Title Bar */}
              <div className="carousel-title-bar">
                <span className="carousel-status">Affiche {currentIndex + 1} sur {slides.length}</span>
                <h3 className="carousel-active-title">{slides[currentIndex].title}</h3>
                
                <div className="carousel-top-controls">
                  <button 
                    className="control-btn-circle" 
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? "Mettre en pause" : "Lancer le défilement"}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button 
                    className="control-btn-circle" 
                    onClick={() => setIsLightboxOpen(true)}
                    title="Agrandir l'image"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>
              </div>

              {/* Main Image Slider Viewport */}
              <div className="carousel-viewport" onClick={() => setIsLightboxOpen(true)}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="carousel-slide-wrapper"
                  >
                    <img 
                      src={slides[currentIndex].img} 
                      alt={slides[currentIndex].title}
                      className="carousel-image"
                      draggable="false"
                    />
                    <div className="image-overlay-hint">
                      <ZoomIn size={24} className="zoom-icon-hint" />
                      <span>Cliquer pour zoomer et lire en plein écran</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Overlay Arrows */}
                <button 
                  className="carousel-arrow arrow-left" 
                  onClick={(e) => { e.stopPropagation(); slidePrev(); }}
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className="carousel-arrow arrow-right" 
                  onClick={(e) => { e.stopPropagation(); slideNext(); }}
                  aria-label="Image suivante"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Slide Selector Buttons / Indicator Badges */}
              <div className="carousel-nav-tabs">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`carousel-nav-tab ${currentIndex === idx ? 'active' : ''}`}
                  >
                    <span className="tab-number">0{slide.id}</span>
                    <span className="tab-label">{slide.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick Action bar underneath */}
              <div className="carousel-footer-actions">
                <a 
                  href={slides[currentIndex].img} 
                  download={`JNJ_Hebergement_${currentIndex + 1}.jpg`} 
                  className="btn btn-outline btn-sm download-btn"
                  onClick={(e) => {
                    // Let normal download happen, but show active click feedback
                  }}
                >
                  <Download size={16} />
                  Télécharger cette fiche
                </a>
              </div>

            </div>
          </div>

          {/* Column 2: Interactive Pricing & Action Panel */}
          <div className="info-column">
            <div className="info-tabs-container glass-card">
              <div className="info-tabs-header">
                <button 
                  className={`info-tab-btn ${activeTab === 'eveche' ? 'active' : ''}`}
                  onClick={() => setActiveTab('eveche')}
                >
                  <Home size={16} />
                  L'Évêché
                </button>
                <button 
                  className={`info-tab-btn ${activeTab === 'centres' ? 'active' : ''}`}
                  onClick={() => setActiveTab('centres')}
                >
                  <Info size={16} />
                  Centres &amp; Sœurs
                </button>
                <button 
                  className={`info-tab-btn ${activeTab === 'tarifs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tarifs')}
                >
                  <AlertCircle size={16} />
                  Infos Générales
                </button>
              </div>

              <div className="info-tabs-content">
                <AnimatePresence mode="wait">
                  {activeTab === 'eveche' && (
                    <motion.div
                      key="eveche-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="tab-pane"
                    >
                      <div className="option-badge">Option 1</div>
                      <h4>Hébergement à l'Évêché</h4>
                      <p className="tab-subtitle">Les tarifs par nuitée pour un confort supérieur</p>
                      
                      <div className="pricing-list">
                        <div className="pricing-item">
                          <span className="price-title">Bungalow (Chambre climatisée)</span>
                          <span className="price-value">5 000 F <small>/ nuitée</small></span>
                        </div>
                        <div className="pricing-item">
                          <span className="price-title">Chambre avec lit 2 places</span>
                          <span className="price-value">3 000 F - 3 500 F <small>/ nuitée</small></span>
                        </div>
                        <div className="pricing-item">
                          <span className="price-title">Chambre avec lit 1 place</span>
                          <span className="price-value">2 500 F <small>/ nuitée</small></span>
                        </div>
                        <div className="pricing-item">
                          <span className="price-title">Dortoir (15 places)</span>
                          <span className="price-value">1 000 F <small>/ pers. / nuitée</small></span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'centres' && (
                    <motion.div
                      key="centres-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="tab-pane"
                    >
                      <div className="option-badge">Option 2</div>
                      <h4>Communautés &amp; Centres</h4>
                      <p className="tab-subtitle">Les hébergements en centres de formation et congrégations</p>

                      <div className="pricing-list">
                        <div className="pricing-category-title">Les Sœurs NDN (Lom Nava)</div>
                        <div className="pricing-item">
                          <span className="price-title">Lit 2 places</span>
                          <span className="price-value">4 000 F <small>/ nuitée</small></span>
                        </div>
                        <div className="pricing-item">
                          <span className="price-title">Lit 1 place</span>
                          <span className="price-value">2 500 F <small>/ nuitée</small></span>
                        </div>

                        <div className="pricing-category-title">Ancien Petit Séminaire (Tchogli)</div>
                        <div className="pricing-item">
                          <span className="price-title">Chambre ventilée</span>
                          <span className="price-value">2 000 F <small>/ pers. / nuitée</small></span>
                        </div>
                        <div className="pricing-item">
                          <span className="price-title">Chambre non-ventilée</span>
                          <span className="price-value">1 500 F <small>/ pers. / nuitée</small></span>
                        </div>

                        <div className="pricing-category-title">Collège Notre Dame</div>
                        <div className="pricing-item">
                          <span className="price-title">Dortoir (30 places)</span>
                          <span className="price-value">1 000 F <small>/ pers. / nuitée</small></span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'tarifs' && (
                    <motion.div
                      key="tarifs-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="tab-pane"
                    >
                      <div className="option-badge danger">À retenir absolument !</div>
                      <h4>Frais &amp; Inscriptions</h4>
                      <p className="tab-subtitle">Informations pratiques et logistiques pour tous les pèlerins</p>

                      <div className="bullet-info-list">
                        <div className="bullet-info-item">
                          <span className="bullet-icon">🚌</span>
                          <div className="bullet-text">
                            <strong>Frais de déplacement :</strong> Restent intégralement à la charge de chaque pèlerin. Veuillez vous adresser à votre diocèse respectif.
                          </div>
                        </div>
                        <div className="bullet-info-item">
                          <span className="bullet-icon">⛪</span>
                          <div className="bullet-text">
                            <strong>Inscriptions des Prêtres :</strong> <strong>10 000 F</strong> (donne droit à une étole JNJ officielle).
                          </div>
                        </div>
                        <div className="bullet-info-item">
                          <span className="bullet-icon">👤</span>
                          <div className="bullet-text">
                            <strong>Inscriptions Religieux/Religieuses :</strong> <strong>2 500 F</strong> par personne.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Reservations Panel */}
            <div className="reservation-cta-card glass-card">
              <div className="cta-header">
                <div className="cta-icon-wrapper">
                  <Phone size={20} className="cta-phone-icon" />
                </div>
                <div>
                  <h4>Cellule Info &amp; Réservations</h4>
                  <p>Besoin de réserver un logement individuel ou en famille ? Contactez-nous !</p>
                </div>
              </div>

              <div className="contact-buttons-grid">
                <div className="contact-card">
                  <span className="contact-name">Contact 1</span>
                  <span className="contact-number">+228 91 99 15 43</span>
                  <div className="contact-actions">
                    <a href="tel:+22891991543" className="contact-action-btn phone-btn">
                      <Phone size={14} />
                      Appeler
                    </a>
                    <a 
                      href="https://wa.me/22891991543?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20un%20logement%20pour%20les%20JNJ%20Atakpam%C3%A9%202026." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-action-btn wa-btn"
                    >
                      <MessageSquare size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-card">
                  <span className="contact-name">Contact 2</span>
                  <span className="contact-number">+228 97 26 78 92</span>
                  <div className="contact-actions">
                    <a href="tel:+22897267892" className="contact-action-btn phone-btn">
                      <Phone size={14} />
                      Appeler
                    </a>
                    <a 
                      href="https://wa.me/22897267892?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20un%20logement%20pour%20les%20JNJ%20Atakpam%C3%A9%202026." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-action-btn wa-btn"
                    >
                      <MessageSquare size={14} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="lightbox-close-btn" 
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Fermer le zoom"
            >
              <X size={28} />
            </button>

            <div className="lightbox-nav-overlay">
              <button 
                className="lightbox-nav-arrow arrow-left" 
                onClick={(e) => { e.stopPropagation(); slidePrev(); }}
                aria-label="Image précédente"
              >
                <ChevronLeft size={36} />
              </button>

              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={slides[currentIndex].img} 
                  alt={slides[currentIndex].title} 
                  className="lightbox-image"
                />
                <div className="lightbox-caption">
                  <h4>{slides[currentIndex].title}</h4>
                  <p>Affiche {currentIndex + 1} sur {slides.length} — Double-cliquez ou pincez sur mobile pour zoomer davantage.</p>
                </div>
              </motion.div>

              <button 
                className="lightbox-nav-arrow arrow-right" 
                onClick={(e) => { e.stopPropagation(); slideNext(); }}
                aria-label="Image suivante"
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hebergement;
