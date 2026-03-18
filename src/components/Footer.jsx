import React from 'react';
import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import './Footer.css';

const WhatsappIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">
              JNJ Atakpamé <span>2026</span>
            </h2>
            <p className="footer-desc">
              Les Journées Nationales de la Jeunesse Catholique du Togo. 
              Un grand rassemblement de foi, d'espérance et de fraternité.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://whatsapp.com/channel/0029VbC8LvN84OmJgi5b5V43" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><WhatsappIcon size={20} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-link" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#pourquoi">À propos</a></li>
              <li><a href="#programme">Programme</a></li>
              <li><a href="#inscription">Inscription</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-heading">Informations</h3>
            <ul className="footer-links">
              <li><a href="#guide">Guide du pèlerin</a></li>
              <li><a href="#carte">Hébergement</a></li>
              <li><a href="#benevolat">Bénévolat</a></li>
              <li><a href="#">Contactez-nous</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <address className="footer-address">
              <p>Diocèse d'Atakpamé</p>
              <p>Coordination des JNJ</p>
              <p>BP: XXX, Atakpamé, Togo</p>
              <p className="contact-email">contact@jnj-atakpame2026.tg</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} JNJ Atakpamé 2026. Tous droits réservés.
          </p>
          <p className="credits">
            Fait avec <Heart size={14} className="heart-icon" /> pour la jeunesse catholique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
