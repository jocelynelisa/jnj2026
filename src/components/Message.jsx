import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Message.css';

const Message = () => {
  return (
    <section id="message" className="section message-section">
      <div className="container">
        <div className="message-container glass">
          <motion.div 
            className="message-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="quote-icon" size={48} />
            <h2 className="message-title">Mot des pères Évêques aux jeunes du Togo</h2>
            
            <div className="message-body">
              <p className="message-highlight">
                « Chers jeunes, vous êtes l'espérance de l'Église et du monde. Ne laissez pas les difficultés éteindre votre joie ni votre désir de construire un monde meilleur. »
              </p>
              
              <p>
                Nous vous invitons avec joie à participer aux Journées Nationales de la Jeunesse à Atakpamé en 2026. Ce sera pour nous tous un moment de grâce, de prière partagée et de communion fraternelle.
              </p>
              
              <p>
                L'Église du Togo compte sur votre dynamisme, votre foi et votre engagement pour renouveler notre société. Venez nombreux pour écouter la Parole de Dieu, vous laisser transformer par l'Esprit Saint et repartir fortifiés dans votre mission de témoins du Christ.
              </p>
            </div>
            
            <div className="message-author">
              <div className="author-info">
                <strong>Conférence des Évêques du Togo</strong>
                <span>(CET)</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="message-image-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-wrapper">
              {/* Placeholder for bishops' image */}
              <div className="image-placeholder bg-gradient">
                <span>Diocèse d'Atakpamé</span>
              </div>
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Message;
