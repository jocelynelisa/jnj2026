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
      { time: "13:00 - 19:00", title: "Accueil et installation des pèlerins", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "19:00 - 23:30", title: "Diner + Soirée d’intégration culturelle sur chaque site d’hébergement. ", location: "Paroisses d'accueil", type: "logistics" },

    ],
    2: [
      { time: "05:30 - 07:30", title: "Réveil + Prière matinale ", location: "Paroisses d'accueil", type: "logistics" },
      { time: "08:00 - 09:00", title: "Petit déjeuner", location: "Paroisses d'accueil", type: "logistics" },
      { time: "10:00 - 12:30", title: "Messe d’ouverture des JNJ Atakpamé à la Cathédrale Sainte Trinité ", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "13:00 - 15:00", title: "Déjeuner + Repos", location: "Paroisses d'accueil", type: "logistics" },
      { time: "15:00 - 16:00", title: "Ateliers de formation pratique", location: "Cathédrale Sainte Trinité", type: "main" },
      { time: "16:00 - 17:30", title: "Catéchèse sur le thème « Entre espoir et désespoir dans la vie des jeunes togolais » ", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "17:30 - 20:00", title: "Célébration pénitentielle + Confession + Chemin de croix ", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "20:30 - 22:00", title: "Dîner", location: "Cathédrale Sainte Trinité", type: "logistics" },
      { time: "22:00", title: "Retour sur le site d'accueil", location: "Paroisses d'accueil", type: "logistics" }
    ],
    3: [
      { time: "05:30 - 07:00", title: "Réveil + prière matinale + animation Sportive", location: "Paroisses d'accueil", type: "logistics" },
      { time: "07:00 - 08:00", title: "Petit déjeuner", location: "Paroisses d'accueil", type: "logistics" },
      { time: "08:00 - 09:00", title: "Célébration Eucharistique sur les paroisses d’accueil ", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "09:00 - 13:00", title: "Visite touristique libre ", location: "A travers la ville", type: "cultural" },
      { time: "13:00 - 14:00", title: "Déjeuner", location: "Paroisses d'accueil", type: "logistics" },
      { time: "14:00 - 16:00", title: "Ouverture + visite officielle du village des talents catholiques", location: "Cathédrale Sainte Trinité", type: "cultural" },
      { time: "16:00 - 18:00", title: "Parade culturelle des Diocèses du Togo", location: "Cathédrale Sainte Trinité", type: "cultural" },
      { time: "18:00 - 20:00", title: "Angelus + Exhortation sur le thème général + Adoration du Saint Sacrement ", location: "Cathédrale Sainte Trinité", type: "logistics" },
      { time: "20:00 - 21:00", title: "Dîner", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "21:00 - 00:00", title: "Visite + échanges B to B dans le village des talents catholiques", location: "Cathédrale Sainte Trinité", type: "spiritual" }
    ],
    4: [
      { time: "00:00 - 03:00", title: "Concert Gospel", location: "Cathédrale Sainte Trinité", type: "cultural" },
      { time: "07:00 - 09:00", title: "Messe pontificale concélébrée de clôture", location: "Cathédrale Sainte Trinité", type: "spiritual" },
      { time: "11:00", title: "Déjeuner + Départ progressif des délégations diocésaines", location: "Cathédrale Sainte Trinité", type: "logistics" },
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
