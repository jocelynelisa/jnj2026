import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import './Registration.css';

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDiocese, setSelectedDiocese] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 120000); // hide after 120s (2 mins)
      })
      .catch((error) => console.error(error));
  };
  return (
    <section id="inscription" className="section registration-section">
      <div className="container">
        <div className="registration-wrapper">
          <motion.div
            className="registration-info"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="info-title">Rejoignez-nous à Atakpamé</h2>
            <p className="info-description">
              Ne manquez pas ce rendez-vous exceptionnel de la jeunesse catholique.
              Inscrivez-vous dès maintenant pour faciliter l'organisation de votre accueil.
            </p>

            <div className="info-stats">
              <div className="stat-item">
                <span className="stat-value">7</span>
                <span className="stat-label">Diocèses</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">4</span>
                <span className="stat-label">Jours de grâce</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="registration-form-container glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              className="registration-form"
              name="inscription"
              method="POST"
              action="/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="inscription" />
              <input type="hidden" name="type_formulaire" value="Pré-inscription JNJ 2026 (Pèlerin)" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>
                  Ne pas remplir ce champ si vous êtes humain : <input name="bot-field" />
                </label>
              </p>

              <h3 className="form-title">Formulaire de pré-inscription</h3>

              <div className="form-group">
                <label htmlFor="name">Nom et Prénom(s)</label>
                <input type="text" id="name" name="nom" placeholder="Ex: Koffi Emmanuel" className="form-input" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="diocese">Diocèse d'origine</label>
                  <select 
                    id="diocese" 
                    name="diocese" 
                    className="form-input" 
                    required
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
                      <input type="text" id="autre_diocese" name="autre_diocese" placeholder="Précisez votre diocèse" className="form-input" required />
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="parish">Paroisse</label>
                  <input type="text" id="parish" name="paroisse" placeholder="Nom de votre paroisse" className="form-input" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone (WhatsApp de préférence)</label>
                  <input type="tel" id="phone" name="telephone" placeholder="+228 XX XX XX XX" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Âge</label>
                  <input type="number" id="age" name="age" min="13" max="100" placeholder="18" className="form-input" required />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <input type="checkbox" id="consent" name="consentement" required />
                <label htmlFor="consent" className="checkbox-label">
                  J'accepte que mes données soient utilisées pour l'organisation des JNJ 2026.
                </label>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                M'inscrire
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              className="registration-toast-container"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className="registration-toast glass-card">
                <CheckCircle className="toast-icon" size={32} />
                <div className="toast-content">
                  <h4>Demande envoyée !</h4>
                  <p>
                    Merci pour votre Pré-inscription, les paiements se font sur les numéros{' '}
                    <span className="toast-number">(+228) 97-97-60-63</span> | <span className="toast-number">90-11-33-12</span>
                    {' '}avec une capture d'écran du paiement (2500F + frais de retrait) à l'appui sur whatsapp et vous recevrez l'attestation d'inscription.
                  </p>
                </div>
                <button className="toast-close" onClick={() => setIsSubmitted(false)} aria-label="Fermer">
                  &times;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Registration;
