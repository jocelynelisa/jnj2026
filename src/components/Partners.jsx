import React from 'react';
import './Partners.css';
import loftyFarmLogo from '../assets/lofty_farm.png';
import gakLogo from '../assets/gak_logo.jpg';
import auxenceLogo from '../assets/auxence.svg';
import cenccsLogo from '../assets/cenccs.png';
import radioMariaLogo from '../assets/radio_maria.jpg';
import planetCommunicationLogo from '../assets/planet_communication.jpg';

const PARTNERS = [
  { id: 1, name: "Lofty Farm", image: loftyFarmLogo },
  { id: 2, name: "GAK Formation", image: gakLogo },
  { id: 3, name: "Auxence", image: auxenceLogo },
  { id: 4, name: "CENCCS", image: cenccsLogo },
  { id: 5, name: "Radio Maria", image: radioMariaLogo },
  { id: 6, name: "Planet Communication", image: planetCommunicationLogo },
  { id: 7, name: "Partenaire 7" },
  { id: 8, name: "Partenaire 8" },
  { id: 9, name: "Partenaire 9" },
  { id: 10, name: "Partenaire 10" },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-title text-center">Nos partenaires</h2>
        
        <div className="slider-wrapper">
          <div className="slider-track">
            {/* First set of partners */}
            {PARTNERS.map((partner) => (
              <div key={`first-${partner.id}`} className="partner-slide">
                <div className="partner-placeholder">
                  {partner.image ? (
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="partner-img"
                    />
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll effect */}
            {PARTNERS.map((partner) => (
              <div key={`second-${partner.id}`} className="partner-slide">
                <div className="partner-placeholder">
                  {partner.image ? (
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="partner-img"
                    />
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
