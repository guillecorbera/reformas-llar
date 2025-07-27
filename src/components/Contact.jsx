// components/Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = ({ t, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjkowbgz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `${t.title} - Nuevo mensaje de contacto`,
          _template: 'table'
        })
      });

      if (response.ok) {
        // Mensaje de éxito
        toast.success(
          language === 'es' 
            ? '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.' 
            : 'Missatge enviat correctament! Ens posarem en contacte aviat.',
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // Mensaje de error
        toast.error(
          language === 'es' 
            ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
            : 'Error en enviar el missatge. Si us plau, torna-ho a provar.',
          {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      }
    } catch (error) {
      // Mensaje de error por excepción
      toast.error(
        language === 'es' 
          ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
          : 'Error en enviar el missatge. Si us plau, torna-ho a provar.',
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Textos traducidos para el profile-card
  const profileTranslations = {
    es: {
      name: "José Pérez",
      title: "Director de Reformas Hogar BCN",
      description: "Más de 15 años de experiencia en reformas integrales de viviendas y locales comerciales.",
      years: "Años Experiencia",
      projects: "Proyectos",
      satisfied: "Clientes Satisfechos"
    },
    ca: {
      name: "Josep Pérez",
      title: "Director de Reformes Llar BCN",
      description: "Més de 15 anys d'experiència en reformes integrals d'habitatges i locals comercials.",
      years: "Anys Experiència",
      projects: "Projectes",
      satisfied: "Clients Satisfets"
    }
  };

  const profileTexts = profileTranslations[language] || profileTranslations.es;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-container">
            <h2 className="section-title">{t.contact.title}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">{t.contact.name}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.email}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.phone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.message}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="form-input"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 
                  (language === 'es' ? 'Enviando...' : 'Enviant...') : 
                  t.contact.send
                }
              </button>
            </form>
          </div>
          
          <div className="contact-info-container">
            <h3 className="contact-info-title">{t.contact.info}</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4 className="contact-info-heading">{t.footer.address.split(',')[0]}</h4>
                  <p className="contact-info-text">
                    {t.footer.address.split(',').slice(1).join(',')}
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <FaPhone className="contact-icon" />
                <p className="contact-info-text">{t.footer.phone}</p>
              </div>
              <div className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                <p className="contact-info-text">{t.footer.email}</p>
              </div>
            </div>
            
            <div className="profile-card">
              <h4 className="profile-name">{profileTexts.name}</h4>
              <p className="profile-title">{profileTexts.title}</p>
              <p className="profile-description">
                {profileTexts.description}
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <p className="stat-number">15+</p>
                  <p className="stat-label">{profileTexts.years}</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">500+</p>
                  <p className="stat-label">{profileTexts.projects}</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">98%</p>
                  <p className="stat-label">{profileTexts.satisfied}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;