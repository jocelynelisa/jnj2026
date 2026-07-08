import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <motion.div 
        className="countdown-expired glass-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="expired-text">Les pré-inscriptions sont closes</span>
      </motion.div>
    );
  }

  const timeItems = [
    { label: 'Jours', value: days },
    { label: 'Heures', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Secondes', value: seconds },
  ];

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Clôture des inscriptions dans :</h3>
      <div className="countdown-grid">
        {timeItems.map((item, idx) => (
          <motion.div 
            key={item.label}
            className="countdown-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="countdown-value">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="countdown-label">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
