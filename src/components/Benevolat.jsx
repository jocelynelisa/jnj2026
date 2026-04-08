import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, ArrowLeft, CheckCircle, X } from 'lucide-react';
import Footer from './Footer';
import BenevolatProgram from './BenevolatProgram';
import './Benevolat.css';

const Benevolat = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        myForm.reset();
        setTimeout(() => setIsSubmitted(false), 15000);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="benevolat-page">
      <nav className="benevolat-nav">
        <div className="container">
          <button onClick={onBack} className="back-btn">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </button>
        </div>
      </nav>

      <header className="benevolat-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content text-center"
          >
            <HeartHandshake size={64} className="hero-icon mx-auto" />
            <h1 className="hero-title">Devenez Bénévole</h1>
            <p className="hero-subtitle">
              Rejoignez l'équipe d'organisation des JNJ Atakpamé 2026.
              Votre engagement fera la différence !
            </p>
          </motion.div>
        </div>
      </header>

      <section className="benevolat-content section">
        <div className="container">
          <div className="benevolat-grid">
            <motion.div
              className="glass-card info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Pourquoi devenir bénévole ?</h2>
              <ul className="benefits-list">
                <li>Vivre l'événement de l'intérieur et contribuer à sa réussite.</li>
                <li>Rencontrer des jeunes de tous les diocèses du Togo.</li>
                <li>Acquérir de nouvelles compétences et expériences enrichissantes.</li>
                <li>Partager sa foi dans le service et la fraternité.</li>
              </ul>
            </motion.div>

            <motion.div
              className="glass-card info-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Missions proposées</h2>
              <ul className="missions-list">
                <li><strong>Accueil et Orientation :</strong> Guider les pèlerins sur les différents sites.</li>
                <li><strong>Logistique :</strong> Aider à la mise en place et au rangement.</li>
                <li><strong>Secourisme :</strong> Assister l'équipe médicale (formation requise).</li>
                <li><strong>Animation et Liturgie :</strong> Soutenir les temps de prière et de fête.</li>
                <li><strong>Communication :</strong> Couverture photo, vidéo, et réseaux sociaux.</li>
              </ul>
            </motion.div>
          </div>

          <BenevolatProgram />

          <motion.div 
            className="benevolat-form-container glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="form-title text-center">Formulaire de candidature</h3>
            <form className="benevolat-form" name="benevolat" method="POST" action="/" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="benevolat" />

              <div className="form-group">
                <label htmlFor="b-name">Nom et Prénom(s)</label>
                <input type="text" id="b-name" name="nom" required className="form-input" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b-phone">Téléphone</label>
                  <input type="tel" id="b-phone" name="telephone" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="b-diocese">Diocèse</label>
                  <select id="b-diocese" name="diocese" required className="form-input">
                    <option value="">Sélectionnez</option>
                    <option value="lome">Lomé</option>
                    <option value="aneho">Aného</option>
                    <option value="kpalime">Kpalimé</option>
                    <option value="atakpame">Atakpamé</option>
                    <option value="sokode">Sokodé</option>
                    <option value="kara">Kara</option>
                    <option value="dapaong">Dapaong</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="domain">Domaine de préférence</label>
                <select id="domain" name="domaine" required className="form-input">
                  <option value="">Choisissez un domaine</option>
                  <option value="accueil">Accueil et Orientation</option>
                  <option value="logistique">Logistique</option>
                  <option value="secourisme">Secourisme / Santé</option>
                  <option value="liturgie">Animation et Liturgie</option>
                  <option value="communication">Communication</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Motivations / Compétences particulières</label>
                <textarea id="message" name="message" rows="3" className="form-input"></textarea>
              </div>

              <div className="form-group checkbox-group">
                <input type="checkbox" id="b-consent" name="consentement" required />
                <label htmlFor="b-consent" className="checkbox-label">
                  Je m'engage à participer aux réunions préparatoires si ma candidature est retenue.
                </label>
              </div>

              <div className="text-center mt-6">
                <button type="submit" className="btn btn-primary">Soumettre ma candidature</button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="registration-toast-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="registration-toast">
              <button onClick={() => setIsSubmitted(false)} className="toast-close">
                <X size={20} />
              </button>
              <CheckCircle size={32} className="toast-icon" />
              <div className="toast-content">
                <h4>Candidature envoyée !</h4>
                <p>Merci pour votre candidature, nous vous contacterons Merci.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Benevolat;
