import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Registration.css';

const Registration = () => {
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
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="inscription" />
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
                  <select id="diocese" name="diocese" className="form-input" required>
                    <option value="">Sélectionnez votre diocèse</option>
                    <option value="lome">Lomé</option>
                    <option value="aneho">Aného</option>
                    <option value="kpalime">Kpalimé</option>
                    <option value="atakpame">Atakpamé</option>
                    <option value="sokode">Sokodé</option>
                    <option value="kara">Kara</option>
                    <option value="dapaong">Dapaong</option>
                  </select>
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
                  <input type="number" id="age" name="age" min="15" max="35" placeholder="18" className="form-input" required />
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
      </div>
    </section>
  );
};

export default Registration;
