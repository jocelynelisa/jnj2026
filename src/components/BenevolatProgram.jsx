import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import './Program.css'; // Reuse existing styles

const BenevolatProgram = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, name: "Jour 1", date: "Mercredi" },
    { id: 2, name: "Jour 2", date: "Jeudi" },
    { id: 3, name: "Jour 3", date: "Vendredi" },
    { id: 4, name: "Jour 4", date: "Samedi" },
    { id: 5, name: "Jour 5", date: "Dimanche" }
  ];

  const schedule = {
    1: [
      { time: "15:00 - 17:00", title: "Accueil des bénévoles", location: "Site principal", type: "logistics" },
      { time: "18:00 - 19:00", title: "Messe avec les bénévoles", location: "Lieu de culte", type: "spiritual" },
      { time: "19:30 - 20:30", title: "Dîner", location: "Espace restauration", type: "logistics" },
      { time: "20:30", title: "Départ pour les lieux d'hébergement", location: "Hébergements", type: "logistics" }
    ],
    2: [
      { time: "13:00 - 16:00", title: "Accueil et installation des pèlerins", location: "Divers sites d'hébergement", type: "logistics" },
      { time: "17:00 - 19:00", title: "Messe d'ouverture", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "19:00 - 20:30", title: "Dîner", location: "Sites d'hébergement", type: "logistics" },
      { time: "21:00 - 23:30", title: "Veillée d'intégration", location: "Place des fêtes", type: "cultural" }
    ],
    3: [
      { time: "05:00 - 06:00", title: "Réveil", location: "Sites d'hébergement", type: "logistics" },
      { time: "06:15 - 07:00", title: "Petit déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "07:15 - 08:00", title: "Animation culturelle", location: "Divers sites", type: "cultural" },
      { time: "07:30 - 09:00", title: "Confession dans les paroisses d'accueil", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "09:00 - 10:30", title: "Catéchèse sur les paroisses d'accueil", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "10:45 - 12:15", title: "Célébration Eucharistique", location: "Paroisses d'accueil", type: "spiritual" },
      { time: "12:30 - 14:00", title: "Déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "14:30 - 16:30", title: "Atelier de formation", location: "Centres de formation", type: "main" },
      { time: "17:00 - 19:00", title: "Chemin de croix", location: "Parcours dédié", type: "spiritual" },
      { time: "19:30 - 20:30", title: "Dîner", location: "Sites d'hébergement", type: "logistics" },
      { time: "21:00", title: "Retour sur le site d'accueil", location: "Sites d'hébergement", type: "logistics" }
    ],
    4: [
      { time: "05:00 - 06:00", title: "Réveil", location: "Sites d'hébergement", type: "logistics" },
      { time: "06:15 - 07:00", title: "Petit déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "07:15 - 08:45", title: "Catéchèse dans les zones", location: "Diverses zones", type: "spiritual" },
      { time: "09:00 - 10:30", title: "Célébration Eucharistique", location: "Lieux de célébration", type: "spiritual" },
      { time: "11:00 - 13:30", title: "Visite touristique + Déjeuner", location: "À travers la ville", type: "cultural" },
      { time: "14:00 - 20:00", title: "Village des talents catholiques", location: "Site dédié", type: "cultural" },
      { time: "20:00 - 21:00", title: "Dîner", location: "Sites d'hébergement", type: "logistics" },
      { time: "22:00 - 03:00", title: "La nuit d'adoration", location: "Lieu de rassemblement", type: "spiritual" }
    ],
    5: [
      { time: "03:00 - 05:00", title: "Concert avec des artistes", location: "Scène principale", type: "cultural" },
      { time: "05:00 - 06:00", title: "Ambiance louange Gospel", location: "Scène principale", type: "cultural" },
      { time: "07:00 - 09:00", title: "Messe solennelle de clôture avec tous les Evêques", location: "Grand lieu", type: "spiritual" },
      { time: "11:00", title: "Déjeuner", location: "Sites d'hébergement", type: "logistics" },
      { time: "13:00 - Soir", title: "Départ progressif des délégations diocésaines", location: "Points de départ", type: "logistics" }
    ]
  };

  return (
    <section id="benevolat-programme" className="section program-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Le programme des bénévoles</h2>
          <p className="section-description mx-auto max-w-2xl">
            Découvrez le planning détaillé de votre engagement. Notez votre arrivée anticipée dès le mercredi !
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

export default BenevolatProgram;
