import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, ArrowLeft, CheckCircle, X } from 'lucide-react';
import Footer from './Footer';
import './Entrepreneurs.css';

const Entrepreneurs = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDiocese, setSelectedDiocese] = useState("");

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
        setTimeout(() => setIsSubmitted(false), 120000);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="entrepreneurs-page">
      <nav className="entrepreneurs-nav">
        <div className="container">
          <button onClick={onBack} className="back-btn">
            <ArrowLeft size={20} />
            Retour à l'accueil
          </button>
        </div>
      </nav>

      <header className="entrepreneurs-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content text-center"
          >
            <Store size={64} className="hero-icon mx-auto" />
            <h1 className="hero-title">Espace Entrepreneurs</h1>
            <p className="hero-subtitle">
              Inscrivez-vous pour exposer vos produits et services lors des JNJ Atakpamé 2026.
              Faites briller votre talent et vos initiatives !
            </p>
          </motion.div>
        </div>
      </header>

      <section className="entrepreneurs-content section">
        <div className="container">
          <div className="entrepreneurs-grid">
            <motion.div
              className="glass-card info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Pourquoi exposer aux JNJ ?</h2>
              <ul className="benefits-list">
                <li>Faire découvrir vos créations et services à des milliers de jeunes pèlerins du Togo.</li>
                <li>Développer votre réseau et échanger avec d'autres jeunes entrepreneurs chrétiens.</li>
                <li>Participer activement à la promotion du savoir-faire local et de l'auto-emploi des jeunes.</li>
                <li>Bénéficier d'une visibilité unique sur nos différents canaux de communication.</li>
              </ul>
            </motion.div>

            <motion.div
              className="glass-card info-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Détails pratiques</h2>
              <ul className="missions-list">
                <li><strong>Emplacement :</strong> Un espace stand dédié (Espace Expo) sera aménagé sur le site principal.</li>
                <li><strong>Visiteurs :</strong> Plus de 10 000 jeunes pèlerins attendus tout au long des JNJ.</li>
                <li><strong>Horaires :</strong> L'exposition sera ouverte tous les jours pendant les créneaux libres du programme.</li>
                <li><strong>Matériel :</strong> Chaque exposant bénéficiera d'une table et de chaises (détails supplémentaires après validation).</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="entrepreneurs-form-container glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="form-title text-center">Formulaire d'inscription exposant</h3>
            <form className="entrepreneurs-form" name="entrepreneurs" method="POST" action="/" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="entrepreneurs" />
              <input type="hidden" name="type_formulaire" value="Inscription Exposition Entrepreneur JNJ 2026" />

              <div className="form-group">
                <label htmlFor="ent-name">Nom et Prénom(s)</label>
                <input type="text" id="ent-name" name="nom" required className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="ent-diocese">Diocèse de provenance</label>
                <select
                  id="ent-diocese"
                  name="diocese"
                  required
                  className="form-input"
                  value={selectedDiocese}
                  onChange={(e) => setSelectedDiocese(e.target.value)}
                >
                  <option value="">Sélectionnez votre diocèse</option>
                  <option value="lome">Lomé</option>
                  <option value="aneho">Aného</option>
                  <option value="kpalime">Kpalimé</option>
                  <option value="atakpame">Atakpamé</option>
                  <option value="sokode">Sokodé</option>
                  <option value="kara">Kara</option>
                  <option value="dapaong">Dapaong</option>
                  <option value="autre">Autre</option>
                </select>
                {selectedDiocese === 'autre' && (
                  <div style={{ marginTop: '15px' }}>
                    <input type="text" id="ent-autre_diocese" name="autre_diocese" placeholder="Précisez votre diocèse" className="form-input" required />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="ent-domaine">Domaine d'activité</label>
                <input type="text" id="ent-domaine" name="domaine" required className="form-input" placeholder="Ex: Artisanat, Agroalimentaire, Mode, Tech, etc." />
              </div>

              <div className="form-group">
                <label htmlFor="ent-produits">Produits à exposer</label>
                <textarea id="ent-produits" name="produits" rows="3" required className="form-input" placeholder="Décrivez brièvement les produits ou services que vous souhaitez présenter..."></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="ent-whatsapp">Contact Whatsapp</label>
                <input type="tel" id="ent-whatsapp" name="whatsapp" required className="form-input" placeholder="Ex: +228 90 00 00 00" />
              </div>

              <div className="form-group checkbox-group">
                <input type="checkbox" id="ent-consent" name="consentement" required />
                <label htmlFor="ent-consent" className="checkbox-label">
                  Je confirme mon souhait d'exposer et m'engage à respecter le règlement intérieur de l'Espace Expo des JNJ.
                </label>
              </div>

              <div className="text-center mt-6">
                <button type="submit" className="btn btn-primary">Soumettre mon inscription</button>
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
                <h4>Inscription enregistrée !</h4>
                <p>Merci pour votre inscription comme exposant. Notre équipe reviendra vers vous très vite par WhatsApp.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Entrepreneurs;
