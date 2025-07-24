// components/Services.jsx
import React from 'react';
import { FaTools, FaPaintRoller, FaBath, FaLightbulb } from 'react-icons/fa';

const Services = ({ t }) => {
  const serviceIcons = [<FaTools />, <FaPaintRoller />, <FaBath />, <FaLightbulb />];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {serviceIcons[index]}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;