import React from 'react';
import './Partners.css';

const PARTNERS = [
  { id: 1, name: "Partenaire 1" },
  { id: 2, name: "Partenaire 2" },
  { id: 3, name: "Partenaire 3" },
  { id: 4, name: "Partenaire 4" },
  { id: 5, name: "Partenaire 5" },
  { id: 6, name: "Partenaire 6" },
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
                  {/* Replace this div with an <img> tag when you have photos */}
                  <span>{partner.name}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll effect */}
            {PARTNERS.map((partner) => (
              <div key={`second-${partner.id}`} className="partner-slide">
                <div className="partner-placeholder">
                  <span>{partner.name}</span>
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
