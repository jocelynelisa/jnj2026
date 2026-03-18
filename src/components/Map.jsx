import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import './Map.css';

const Map = () => {
  return (
    <section id="carte" className="section map-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Carte de la ville d'Atakpamé</h2>
          <p className="section-description mx-auto max-w-2xl">
            Située au cœur de la région des Plateaux par son relief vallonné,
            Atakpamé est la ville aux sept collines qui accueillera les JNJ 2026.
          </p>
        </div>

        <div className="map-wrapper glass-card">
          <div className="map-info-panel">
            <h3 className="city-name">Diocèse d'Atakpamé</h3>
            <p className="city-desc">Région des Plateaux, Togo</p>

            <ul className="map-locations">
              <li className="location-item">
                <MapPin size={18} className="location-icon" />
                <div className="location-text">
                  <strong>Cathédrale Notre-Dame de la Trinité</strong>
                  <span>Accueil : Diocèse Aneho et Diocèse de Sokodé+ une partie du diocèse d'Atakpamé.</span>
                </div>
              </li>
              <li className="location-item">
                <MapPin size={18} className="location-icon" />
                <div className="location-text">
                  <strong>Paroisse Sainte famille d'Atakpamé </strong>
                  <span>Accueil: Archidiocèse de Lomé, diocèse de Kpalimé et une partie d'Atakpamé.</span>
                </div>
              </li>
              <li className="location-item">
                <MapPin size={18} className="location-icon" />
                <div className="location-text">
                  <strong>Paroisse Saint Jean Paul 2</strong>
                  <span>Accueille : Diocèse de Dapaong, diocèse de Kara et les reste d'Atakpamé.</span>
                </div>
              </li>
            </ul>

            <button className="btn btn-outline map-btn w-full">
              Ouvrir dans Google Maps
              <Navigation size={18} />
            </button>
          </div>

          <div className="map-container">
            {/* Embedded Google Map iframe pointing to Atakpame, Togo */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.12351235!2d1.1147!3d7.5258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10214a4b11543b31%3A0xe5cd8b15d05db3a8!2sAtakpam%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte d'Atakpamé"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
