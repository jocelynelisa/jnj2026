import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-text">Journées Nationales de la Jeunesse</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ensemble, marchons vers <br/>
            <span className="text-gradient">Atakpamé 2026</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Un rassemblement de foi, d'espérance et de fraternité pour toute la jeunesse catholique du Togo.
          </motion.p>
          
          <motion.div 
            className="hero-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="meta-item glass-card">
              <Calendar className="meta-icon" />
              <div>
                <span className="meta-label">Date</span>
                <p className="meta-value">À définir, 2026</p>
              </div>
            </div>
            <div className="meta-item glass-card">
              <MapPin className="meta-icon" />
              <div>
                <span className="meta-label">Lieu</span>
                <p className="meta-value">Diocèse d'Atakpamé</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#inscription" className="btn btn-primary btn-lg">
              S'inscrire maintenant
              <ArrowRight size={20} />
            </a>
            <a href="#pourquoi" className="btn btn-outline btn-lg glass">
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
