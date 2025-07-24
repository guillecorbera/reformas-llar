// components/Footer.jsx
/* import React from 'react';

const Footer = ({ t, language }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; 2023 {t.title}. {language === 'es' ? 'Todos los derechos reservados.' : 'Tots els drets reservats.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer; */

// components/Footer.jsx
import React, { useState } from 'react';

const Footer = ({ t, language }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showDeveloperModal, setShowDeveloperModal] = useState(false);

  const openPrivacyModal = () => {
    setShowPrivacyModal(true);
    setShowDeveloperModal(false);
  };

  const openDeveloperModal = () => {
    setShowDeveloperModal(true);
    setShowPrivacyModal(false);
  };

  const closeModal = () => {
    setShowPrivacyModal(false);
    setShowDeveloperModal(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              &copy; 2023 {t.title}. {language === 'es' ? 'Todos los derechos reservados.' : 'Tots els drets reservats.'}
            </p>
            <div className="footer-links">
              <button 
                onClick={openPrivacyModal}
                className="footer-link"
              >
                {language === 'es' ? 'Protección de Datos' : 'Protecció de Dades'}
              </button>
              <span className="footer-link-separator">|</span>
              <button 
                onClick={openDeveloperModal}
                className="footer-link"
              >
                {language === 'es' ? 'Desarrollador' : 'Desenvolupador'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Protección de Datos */}
      {showPrivacyModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {language === 'es' ? 'Protección de Datos' : 'Protecció de Dades'}
              </h2>
              <button 
                onClick={closeModal}
                className="modal-close"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <h3 className="modal-subtitle">
                {language === 'es' ? 'Responsable del tratamiento' : 'Responsable del tractament'}
              </h3>
              <p className="modal-text">
                {language === 'es' 
                  ? 'Reformas Hogar Barcelona, con domicilio en Carrer de la Indústria, 123, 08020 Barcelona, es el responsable del tratamiento de los datos personales que nos facilite.' 
                  : 'Reformes Llar Barcelona, amb domicili al Carrer de la Indústria, 123, 08020 Barcelona, és el responsable del tractament de les dades personals que ens faciliti.'
                }
              </p>
              
              <h3 className="modal-subtitle">
                {language === 'es' ? 'Finalidad del tratamiento' : 'Finalitat del tractament'}
              </h3>
              <p className="modal-text">
                {language === 'es' 
                  ? 'Los datos personales serán tratados para gestionar las solicitudes de información, presupuestos y servicios relacionados con reformas integrales de viviendas.' 
                  : 'Les dades personals seran tractades per gestionar les sol·licituds d\'informació, pressupostos i serveis relacionats amb reformes integrals d\'habitatges.'
                }
              </p>
              
              <h3 className="modal-subtitle">
                {language === 'es' ? 'Legitimación' : 'Legitimació'}
              </h3>
              <p className="modal-text">
                {language === 'es' 
                  ? 'La base legal para el tratamiento de sus datos es el consentimiento otorgado al rellenar y enviar el formulario de contacto.' 
                  : 'La base legal per al tractament de les seves dades és el consentiment atorgat en omplir i enviar el formulari de contacte.'
                }
              </p>
              
              <h3 className="modal-subtitle">
                {language === 'es' ? 'Destinatarios' : 'Destinataris'}
              </h3>
              <p className="modal-text">
                {language === 'es' 
                  ? 'No se cederán datos a terceros, salvo obligación legal.' 
                  : 'No es cediran dades a tercers, excepte obligació legal.'
                }
              </p>
              
              <h3 className="modal-subtitle">
                {language === 'es' ? 'Derechos' : 'Drets'}
              </h3>
              <p className="modal-text">
                {language === 'es' 
                  ? 'Usted tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.' 
                  : 'Vostè té dret a accedir, rectificar i suprimir les dades, així com altres drets, com s\'explica a la informació addicional.'
                }
              </p>
            </div>
            <div className="modal-footer">
              <button 
                onClick={closeModal}
                className="modal-button"
              >
                {language === 'es' ? 'Cerrar' : 'Tancar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal del Desarrollador */}
      {showDeveloperModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {language === 'es' ? 'Información del Desarrollador' : 'Informació del Desenvolupador'}
              </h2>
              <button 
                onClick={closeModal}
                className="modal-close"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="developer-info">
                <div className="developer-avatar">
                  <div className="avatar-placeholder">👨‍💻</div>
                </div>
                <h3 className="developer-name">Guillermo Martínez</h3>
                <p className="developer-role">
                  {language === 'es' ? 'Desarrollador Frontend & UI/UX' : 'Desenvolupador Frontend & UI/UX'}
                </p>
              </div>
              
              <div className="developer-details">
                <h4 className="developer-section-title">
                  {language === 'es' ? 'Tecnologías utilizadas' : 'Tecnologies utilitzades'}
                </h4>
                <ul className="developer-tech-list">
                  <li>React.js</li>
                  <li>CSS3 & HTML5</li>
                  <li>JavaScript ES6+</li>
                  <li>Responsive Design</li>
                  <li>React Icons</li>
                </ul>
                
                <h4 className="developer-section-title">
                  {language === 'es' ? 'Contacto' : 'Contacte'}
                </h4>
                <div className="developer-contact">
                  <p><strong>Email:</strong> guillecorbera@gmail.com</p>
                  <p><strong>{language === 'es' ? 'Sitio web' : 'Lloc web'}:</strong> www.developerportfolio.com</p>
                </div>
                
                <h4 className="developer-section-title">
                  {language === 'es' ? 'Acerca del proyecto' : 'Sobre el projecte'}
                </h4>
                <p className="developer-description">
                  {language === 'es' 
                    ? 'Este sitio web fue desarrollado utilizando React y tecnologías modernas de frontend para proporcionar una experiencia de usuario óptima y responsive en todos los dispositivos.' 
                    : 'Aquest lloc web va ser desenvolupat utilitzant React i tecnologies modernes de frontend per proporcionar una experiència d\'usuari òptima i responsive en tots els dispositius.'
                  }
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                onClick={closeModal}
                className="modal-button"
              >
                {language === 'es' ? 'Cerrar' : 'Tancar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;