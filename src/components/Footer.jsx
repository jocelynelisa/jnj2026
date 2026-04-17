import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import twitterIcon from '../assets/twitter-x.svg';
import whatsappIconUrl from '../assets/whatsapp.svg';
import './Footer.css';


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
              <a href="https://whatsapp.com/channel/0029VbC8LvN84OmJgi5b5V43" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <img src={whatsappIconUrl} alt="WhatsApp" width="20" height="20" style={{ filter: 'invert(1)' }} />
              </a>
              <a href="https://x.com/JNJAtakpame2026" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                <img src={twitterIcon} alt="X (Twitter)" width="18" height="18" style={{ filter: 'invert(1)' }} />
              </a>
              <a href="https://www.instagram.com/jnjatakpame2026/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
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
<<<<<<< HEAD
              <p>Diocèse d'Atakpamé</p>
              <p>Coordination des JNJ</p>
              <p>Tel: +228 99 99 99 99
                +228 99 99 99 99
              </p>
              <p className="contact-email"> [EMAIL_ADDRESS]</p>
=======
              <p>R.P. George Gauthier AMEDONOU (Aumônier National) 93 54 57 76</p>
              <p>M. Crépin ASSIGNON (Président National) 91 50 55 00</p>
              <p className="contact-email">jnjtogo2026@gmail.com</p>
>>>>>>> 061e383c07751861f92f132d421686af98dd22d7
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
