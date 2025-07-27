// components/WorkModal.jsx
import React from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const WorkModal = ({ selectedWork, currentImageIndex, closeWorkModal, prevImage, nextImage, setCurrentImageIndex, language }) => {
  // Asegurarse de que haya un trabajo seleccionado
  if (!selectedWork) return null;

  // Obtener el título y descripción en el idioma correcto
  // Si no existe la traducción para ese idioma, usa español por defecto como fallback
  const title = selectedWork.title[language] || selectedWork.title.es || selectedWork.title;
  const description = selectedWork.description[language] || selectedWork.description.es || selectedWork.description;

  const handleRequestQuote = () => {
    // Cerrar el modal
    closeWorkModal();
    
    // Esperar un poco para que el modal se cierre antes de hacer scroll
    setTimeout(() => {
      // Ir a la sección de contacto
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Opcional: Resaltar el formulario de contacto
        const contactForm = contactSection.querySelector('.contact-form');
        if (contactForm) {
          contactForm.style.animation = 'highlight 2s ease-in-out';
        }
      }
    }, 100);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={closeWorkModal}
          className="modal-close"
        >
          <FaTimes />
        </button>
        
        <div className="modal-grid">
          <div className="modal-slider">
            <button 
              onClick={prevImage}
              className="slider-button slider-prev"
            >
              <FaChevronLeft />
            </button>
            
            <img 
              src={selectedWork.images[currentImageIndex]} 
              alt={title}
              className="slider-image"
            />
            
            <button 
              onClick={nextImage}
              className="slider-button slider-next"
            >
              <FaChevronRight />
            </button>
            
            <div className="slider-dots">
              {selectedWork.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`dot-button ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
          
          <div className="modal-details">
            <h3 className="modal-title">{title}</h3>
            <p className="modal-description">
              {description}
            </p>
            
            <div className="modal-details-section">
              <h4 className="modal-subtitle">
                {language === 'ca' ? 'Detalls del projecte:' : 'Detalles del proyecto:'}
              </h4>
              <ul className="modal-details-list">
                <li className="modal-detail-item">
                  {language === 'ca' ? '• Durada: 4-6 setmanes' : '• Duración: 4-6 semanas'}
                </li>
                <li className="modal-detail-item">
                  {language === 'ca' ? `• Superfície: ${Math.floor(Math.random() * 100) + 50} m²` : `• Superficie: ${Math.floor(Math.random() * 100) + 50} m²`}
                </li>
                <li className="modal-detail-item">
                  {language === 'ca' ? '• Materials: Alta qualitat i sostenibles' : '• Materiales: Alta calidad y sostenibles'}
                </li>
                <li className="modal-detail-item">
                  {language === 'ca' ? '• Garantia: 2 anys' : '• Garantía: 2 años'}
                </li>
              </ul>
            </div>
            
            <button 
              className="btn btn-primary"
              onClick={handleRequestQuote}
            >
              {language === 'ca' ? 'Sol·licitar Pressupost' : 'Solicitar Presupuesto'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;