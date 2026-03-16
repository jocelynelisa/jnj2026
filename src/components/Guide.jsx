import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Tent, Utensils, Shield, Info } from 'lucide-react';
import './Guide.css';

const Guide = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: <Tent size={20} />,
      question: "Où serons-nous hébergés ?",
      answer: "L'hébergement sera réparti entre différentes familles d'accueil, écoles, et structures paroissiales de la ville d'Atakpamé. Les détails précis vous seront communiqués après confirmation de votre inscription."
    },
    {
      icon: <Utensils size={20} />,
      question: "Comment sont organisés les repas ?",
      answer: "Une restauration collective est prévue. Un kit pèlerin (incluant les tickets repas) vous sera remis à votre arrivée. Nous veillerons à proposer des repas équilibrés tout au long des JNJ."
    },
    {
      icon: <Shield size={20} />,
      question: "Quelles sont les mesures de sécurité ?",
      answer: "Un dispositif de sécurité et une équipe médicale (infirmiers, secouristes) seront déployés sur tous les sites majeurs du rassemblement 24h/24."
    },
    {
      icon: <Info size={20} />,
      question: "Que dois-je apporter ?",
      answer: "Prévoyez : Bible, chapelet, carnet de notes, vêtements décents et adaptés au climat, chaussures de marche confortables, draps/sac de couchage (selon l'hébergement attribué), gourde et affaires de toilette."
    }
  ];

  return (
    <section id="guide" className="section guide-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Guide du pèlerin</h2>
          <p className="section-description mx-auto max-w-2xl">
            Toutes les informations pratiques dont vous avez besoin pour bien préparer votre séjour à Atakpamé.
          </p>
        </div>

        <div className="guide-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <button className="faq-question">
                  <div className="faq-icon-title">
                    <span className="faq-icon">{faq.icon}</span>
                    <span className="faq-title-text">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`faq-chevron ${openIndex === index ? 'rotate' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer-container"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
