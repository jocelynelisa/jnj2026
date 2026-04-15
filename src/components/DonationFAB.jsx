import React, { useState } from 'react';
import { Heart, X, MessageCircle } from 'lucide-react';

const DonationFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "R.P. George Gauthier AMEDONOU",
      title: "Aumônier National",
      link: "https://wa.me/22891734692?text=Bonjour%2C%20j%27aimerais%20faire%20un%20don"
    },
    {
      name: "M. Crépin ASSIGNON",
      title: "Président National",
      link: "https://wa.me/22897976063?text=Bonjour%2C%20j%27aimerais%20faire%20un%20don"
    }
  ];

  return (
    <div className="donation-fab-container">
      {/* Vignette / Card */}
      <div className={`donation-vignette ${isOpen ? 'open' : ''}`}>
        <div className="vignette-header">
          <h3>Faire un don</h3>
          <button onClick={() => setIsOpen(false)} className="close-vignette">
            <X size={20} />
          </button>
        </div>
        
        <div className="vignette-body">
          <div className="donation-section">
            <div className="payment-methods">
              <strong>FLOOZ : +228 97976063 | MIXX by YAS : +228 91734692</strong>
            </div>
          </div>

          <div className="divider"></div>
          
          <div className="donation-section">
            <div className="payment-methods">
              <strong>Western Union | Ria :</strong>
            </div>
            <div className="contact-info">
              <p className="contact-name">ASSIGNON Kokouvi Eli</p>
              <p className="contact-phone">+228 91 50 55 00</p>
            </div>
            <a 
              href="https://wa.me/22891734692?text=Bonjour%2C%20j%27aimerais%20faire%20un%20don" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        className={`fab-button ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Faire un don"
      >
        <Heart className="heart-icon" size={24} fill={isOpen ? "white" : "none"} />
        <span className="fab-text">Faire un don</span>
      </button>
    </div>
  );
};

export default DonationFAB;
