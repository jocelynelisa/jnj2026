import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import './Program.css';

const Program = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  const days = [
    { id: 1, name: "Jour 1", date: "Vendredi" },
    { id: 2, name: "Jour 2", date: "Samedi" },
    { id: 3, name: "Jour 3", date: "Dimanche" }
  ];

  const schedule = {
    1: [
      { time: "08:00 - 12:00", title: "Accueil et Installation", location: "Divers sites d'hébergement", type: "logistics" },
      { time: "14:00 - 16:00", title: "Cérémonie d'ouverture", location: "Stade Municipal", type: "main" },
      { time: "16:30 - 18:00", title: "Messe d'ouverture", location: "Stade Municipal", type: "spiritual" },
      { time: "20:00 - 22:00", title: "Veillée culturelle d'intégration", location: "Place des fêtes", type: "cultural" }
    ],
    2: [
      { time: "07:00 - 08:00", title: "Laudes et petit-déjeuner", location: "Sites d'hébergement", type: "spiritual" },
      { time: "09:00 - 12:00", title: "Catéchèses thématiques", location: "Diverses paroisses", type: "spiritual" },
      { time: "14:00 - 17:00", title: "Festival de la Jeunesse", location: "Centre ville", type: "cultural" },
      { time: "18:00 - 19:30", title: "Chemin de Croix", location: "Colline d'Atakpamé", type: "spiritual" },
      { time: "21:00 - 23:00", title: "Veillée de réconciliation et adoration", location: "Cathédrale", type: "spiritual" }
    ],
    3: [
      { time: "08:00 - 09:30", title: "Rassemblement final", location: "Stade Municipal", type: "main" },
      { time: "10:00 - 12:30", title: "Messe de clôture et envoi", location: "Stade Municipal", type: "spiritual" },
      { time: "13:00", title: "Déjeuner et départ des délégations", location: "Sites d'hébergement", type: "logistics" }
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
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="time-badge">
                        <Clock size={16} />
                        <span>{item.time}</span>
                      </div>
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
