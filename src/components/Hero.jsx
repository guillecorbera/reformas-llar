// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            {t.hero.title}
          </motion.h2>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.6,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            /* transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 17
            }} */
            onClick={scrollToContact}
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;