import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import './Program.css';

const Program = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, name: "Jour 1", date: "Jeudi" },
    { id: 2, name: "Jour 2", date: "Vendredi" },
    { id: 3, name: "Jour 3", date: "Samedi" },
    { id: 4, name: "Jour 4", date: "Dimanche" }
  ];

  const schedule = {
    1: [
      { time: "Matin", title: "Messe d'envoi des pèlerins dans les diocèses", location: "Divers sites d'hébergement", type: "logistics" },
      { time: "13:00 - 19:00", title: "Accueil et installation des pèlerins", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "19:00 - 20:30", title: "Dîner", location: "Sites d'hébergement", type: "logistics" },
      { time: "20:30 - 23:30", title: "Veillée d'intégration sur les paroisses d'accueil", location: "Place des fêtes", type: "cultural" }
    ],
    2: [
      { time: "05:00 - 06:00", title: "Réveil", location: "Sites d'hébergement", type: "logistics" },
      { time: "06:15 - 07:00", title: "Petit déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "07:15 - 08:00", title: "Animation culturelle", location: "Divers sites", type: "cultural" },
      { time: "07:30 - 09:00", title: "Confession dans les paroisses d'accueil", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "09:00 - 10:30", title: "Catéchèse sur les paroisses d'accueil", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "10:45 - 12:15", title: "Célébration Eucharistique", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "12:30 - 14:00", title: "Déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "14:30 - 16:30", title: "Ateliers de formation à la Cathédrale Sainte Trinité", location: "Centres de formation", type: "main" },
      { time: "16:00 - 16:30", title: "Célébration pénitentielle à la Cathédrale Sainte Trinité", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "17:00 - 18:30", title: "Chemin de croix", location: "Parcours dédié", type: "spiritual" },
      { time: "18:45 - 19:30", title: "Procession et vénération des reliques de Saint Carlos Accutis", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "19:30 - 20:30", title: "Dîner", location: "Sites d'hébergement", type: "logistics" },
      { time: "21:00", title: "Retour sur le site d'accueil", location: "Sites d'hébergement", type: "logistics" }
    ],
    3: [
      { time: "05:00 - 06:00", title: "Réveil", location: "Sites d'hébergement", type: "logistics" },
      { time: "06:15 - 07:00", title: "Petit déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "07:15 - 08:45", title: "Célébration Eucharistique", location: "Diverses zones", type: "spiritual" },
      { time: "09:00 - 14:00", title: "Visite touristique + Déjeuner", location: "Lieux de célébration", type: "spiritual" },
      { time: "14:00 - 17:15", title: "Village des talents catholiques", location: "À travers la ville", type: "cultural" },
      { time: "17:00 - 18:00", title: "Adoration du Saint Sacrement", location: "Site dédié", type: "cultural" },
      { time: "18:00 - 20:00", title: "Angelus + Enseignement", location: "Sites d'hébergement", type: "logistics" },
      { time: "20:00 - 21:00", title: "Dîner", location: "Lieu de rassemblement", type: "spiritual" },
      { time: "21:00 - 00:00", title: "Village des talents catholiques", location: "Lieu de rassemblement", type: "spiritual" }
    ],
    4: [
      { time: "00:00 - 03:00", title: "Concert Gospel", location: "Scène principale", type: "cultural" },
      { time: "07:00 - 09:00", title: "Messe solennelle de clôture avec tous les Evêques", location: "Grand lieu", type: "spiritual" },
      { time: "11:00", title: "Déjeuner + Départ progressif des délégations diocésaines", location: "Sites d'hébergement", type: "logistics" },
    ]
  };

  return (
    <section id="programme" className="section program-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Le programme</h2>
          <p className="section-description mx-auto max-w-2xl">
            Découvrez les temps forts prévus pour ces journées inoubliables.
            Le programme détaillé sera mis à jour à l'approche de l'événement.
          </p>
        </div>

        <div className="program-container">
          {/* Day Toggles */}
          <div className="day-toggles">
            {days.map((day) => (
              <button
                key={day.id}
                className={`day-btn ${activeDay === day.id ? 'active' : ''}`}
                onClick={() => setActiveDay(day.id)}
              >
                <div className="day-name">{day.name}</div>
                <div className="day-date">{day.date}</div>
              </button>
            ))}
          </div>

          {/* Schedule Timeline */}
          <div className="timeline-container glass-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="timeline"
              >
                {schedule[activeDay].map((item, index) => (
                  <div key={index} className={`timeline-item type-${item.type}`}>
                    <div className="time-badge">
                      <Clock size={16} />
                      <span>{item.time}</span>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 className="event-title">{item.title}</h3>
                      <div className="event-location">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
