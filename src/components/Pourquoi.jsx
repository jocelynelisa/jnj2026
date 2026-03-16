import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Flame, Compass } from 'lucide-react';
import './Pourquoi.css';

const Pourquoi = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Rassemblement",
      description: "Des milliers de jeunes de tout le pays réunis pour célébrer leur foi commune."
    },
    {
      icon: <Flame size={32} />,
      title: "Renouvellement",
      description: "Une occasion unique de raviver sa flamme spirituelle et son engagement."
    },
    {
      icon: <Heart size={32} />,
      title: "Fraternité",
      description: "Tisser des liens d'amitié durables avec d'autres jeunes catholiques."
    },
    {
      icon: <Compass size={32} />,
      title: "Orientation",
      description: "Trouver des réponses à ses questions et un sens à sa vocation."
    }
  ];

  return (
    <section id="pourquoi" className="section pourquoi-section">
      <div className="container">
        <motion.div 
          className="pourquoi-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Pourquoi les JNJ Atakpamé 2026 ?</h2>
          <p className="section-description">
            Les Journées Nationales de la Jeunesse sont bien plus qu'un simple événement. 
            C'est un véritable pèlerinage spirituel, un moment fort de l'Église de notre temps.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pourquoi;
