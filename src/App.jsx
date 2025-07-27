// App.jsx
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// En App.jsx - asegúrate de tener estas importaciones
import { FaBars, FaTimes } from 'react-icons/fa';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkModal from './components/WorkModal';

import { motion } from "motion/react"
import './App.css';
import './components/Header.css';
import './components/Hero.css';
import './components/Services.css';
import './components/Gallery.css';
import './components/Reviews.css';
import './components/Contact.css';
import './components/Footer.css';
import './components/WorkModal.css';

const App = () => {
  const [language, setLanguage] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const translations = {
    es: {
      title: "Reformas Llar Barcelona",
      subtitle: "Soluciones integrales para tu hogar",
      nav: {
        home: "Inicio",
        gallery: "Galería",
        services: "Servicios",
        reviews: "Reseñas",
        contact: "Contacto"
      },
      hero: {
        title: "Transformamos tu hogar en tu sueño",
        subtitle: "Profesionales con más de 15 años de experiencia en reformas integrales",
        cta: "Solicitar Presupuesto"
      },
      services: {
        title: "Nuestros Servicios",
        items: [
          { icon: "tools", title: "Reformas Integrales", description: "Reformas completas de viviendas y locales comerciales con acabados de alta calidad." },
          { icon: "paint", title: "Pintura y Decoración", description: "Trabajos de pintura, empapelado y decoración de interiores y exteriores." },
          { icon: "bath", title: "Baños y Cocinas", description: "Renovación de baños y cocinas con materiales modernos y funcionales." },
          { icon: "light", title: "Electricidad e Iluminación", description: "Instalaciones eléctricas, iluminación LED y automatización del hogar." }
        ]
      },
      gallery: {
        title: "Nuestros Trabajos",
        view: "Ver proyecto"
      },
      reviews: {
        title: "Lo que dicen nuestros clientes",
        items: [
          { name: "María López", text: "Excelente trabajo en la reforma de mi cocina. Profesionales, limpios y muy atentos a mis necesidades.", rating: 5 },
          { name: "Carlos Martín", text: "Reformaron mi baño completo en el tiempo prometido. Calidad excepcional y buen trato.", rating: 5 },
          { name: "Anna Rodríguez", text: "Muy contenta con la reforma integral de mi piso. Todo perfecto, desde el diseño hasta la ejecución.", rating: 5 }
        ]
      },
      contact: {
        title: "Contacta con nosotros",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        send: "Enviar Mensaje",
        info: "Información de Contacto"
      },
      footer: {
        address: "Carrer de la Indústria, 123, 08020 Barcelona",
        phone: "+34 931 234 567",
        email: "info@reformashogarbcn.com"
      }
    },
    ca: {
      title: "Reformes Llar Barcelona",
      subtitle: "Solucions integrals per a la teva llar",
      nav: {
        home: "Inici",
        gallery: "Galeria",
        services: "Serveis",
        reviews: "Ressenyes",
        contact: "Contacte"
      },
      hero: {
        title: "Transformem la teva llar en el teu somni",
        subtitle: "Professionals amb més de 15 anys d'experiència en reformes integrals",
        cta: "Sol·licitar Pressupost"
      },
      services: {
        title: "Els nostres Serveis",
        items: [
          { icon: "tools", title: "Reformes Integrals", description: "Reformes completes d'habitatges i locals comercials amb acabats d'alta qualitat." },
          { icon: "paint", title: "Pintura i Decoració", description: "Treballs de pintura, empaperat i decoració d'interiors i exteriors." },
          { icon: "bath", title: "Banys i Cuines", description: "Renovació de banys i cuines amb materials moderns i funcionals." },
          { icon: "light", title: "Electricitat i Il·luminació", description: "Instal·lacions elèctriques, il·luminació LED i automatització de la llar." }
        ]
      },
      gallery: {
        title: "Els nostres Treballs",
        view: "Veure projecte"
      },
      reviews: {
        title: "El que diuen els nostres clients",
        items: [
          { name: "Maria López", text: "Excel·lent treball en la reforma de la meva cuina. Professionals, nets i molt atents a les meves necessitats.", rating: 5 },
          { name: "Carles Martín", text: "Van reformar el meu bany complet en el temps promès. Qualitat excepcional i bon tracte.", rating: 5 },
          { name: "Anna Rodríguez", text: "Molt contenta amb la reforma integral del meu pis. Tot perfecte, des del disseny fins a l'execució.", rating: 5 }
        ]
      },
      contact: {
        title: "Contacta amb nosaltres",
        name: "Nom",
        email: "Email",
        phone: "Telèfon",
        message: "Missatge",
        send: "Enviar Missatge",
        info: "Informació de Contacte"
      },
      footer: {
        address: "Carrer de la Indústria, 123, 08020 Barcelona",
        phone: "+34 931 234 567",
        email: "info@reformashogarbcn.com"
      }
    }
  };

  const t = translations[language];

 // En App.jsx, reemplaza tu galleryWorks actual con este:
// App.jsx (fragmento corregido)
const galleryWorks = [
  {
    id: 1,
    title: {
      es: "Reforma Integral Piso Centro",
      ca: "Reforma Integral Pis Centre"
    },
    description: {
      es: "Reforma completa de un piso de 85m² en el centro de Barcelona. Incluyó cambio de distribución, instalaciones nuevas y acabados de alta calidad.",
      ca: "Reforma completa d'un pis de 85m² al centre de Barcelona. Va incloure canvi de distribució, instal·lacions noves i acabats d'alta qualitat."
    },
    images: [
      "https://placehold.co/600x400/4a90e2/ffffff?text=Cocina+Moderna",
      "https://placehold.co/600x800/50c878/ffffff?text=Salón+Elegante",
      "https://placehold.co/600x400/ff6b6b/ffffff?text=Baño+Contemporáneo",
      "https://placehold.co/600x500/ffd93d/ffffff?text=Dormitorio+Principal"
    ]
  },
  {
    id: 2,
    title: {
      es: "Renovación Cocina Vintage",
      ca: "Renovació Cuina Vintage"
    },
    description: {
      es: "Transformación de cocina clásica a diseño moderno con isla central y electrodomésticos integrados.",
      ca: "Transformació de cuina clàssica a disseny modern amb illa central i electrodomèstics integrats."
    },
    images: [
      "https://placehold.co/600x400/6b5b95/ffffff?text=Cocina+Vintage+1",
      "https://placehold.co/600x500/88b719/ffffff?text=Cocina+Vintage+2",
      "https://placehold.co/600x450/fb8b24/ffffff?text=Cocina+Vintage+3"
    ]
  },
  {
    id: 3,
    title: {
      es: "Baño Moderno Minimalista",
      ca: "Bany Modern Minimalista"
    },
    description: {
      es: "Diseño minimalista con materiales naturales y sistema de iluminación LED ambiental.",
      ca: "Disseny minimalista amb materials naturals i sistema d'il·luminació LED ambiental."
    },
    images: [
      "https://placehold.co/600x800/a31621/ffffff?text=Baño+Minimalista+1",
      "https://placehold.co/600x400/0077b6/ffffff?text=Baño+Minimalista+2",
      "https://placehold.co/600x500/52de97/ffffff?text=Baño+Minimalista+3"
    ]
  },
  {
    id: 4,
    title: {
      es: "Reforma Oficina en Casa",
      ca: "Reforma Oficina a Casa"
    },
    description: {
      es: "Creación de espacio de trabajo en casa con mobiliario a medida y sistema de almacenamiento integrado.",
      ca: "Creació d'espai de treball a casa amb mobiliari a mida i sistema d'emmagatzematge integrat."
    },
    images: [
      "https://placehold.co/600x400/ff7f50/ffffff?text=Oficina+Casa+1",
      "https://placehold.co/600x500/4682b4/ffffff?text=Oficina+Casa+2",
      "https://placehold.co/600x450/32cd32/ffffff?text=Oficina+Casa+3"
    ]
  },
  {
    id: 5,
    title: {
      es: "Terraza con Jardín Vertical",
      ca: "Terrassa amb Jardí Vertical"
    },
    description: {
      es: "Transformación de terraza con jardín vertical, mobiliario exterior y sistema de riego automatizado.",
      ca: "Transformació de terrassa amb jardí vertical, mobiliari exterior i sistema de reg automatzat."
    },
    images: [
      "https://placehold.co/600x400/20b2aa/ffffff?text=Terraza+Jardín+1",
      "https://placehold.co/600x500/da70d6/ffffff?text=Terraza+Jardín+2",
      "https://placehold.co/600x450/ff4500/ffffff?text=Terraza+Jardín+3"
    ]
  },
  {
    id: 6,
    title: {
      es: "Dormitorio Principal con Vestidor",
      ca: "Dormitori Principal amb Vestidor"
    },
    description: {
      es: "Diseño de dormitorio principal con vestidor integrado y baño en suite con acabados de lujo.",
      ca: "Disseny de dormitori principal amb vestidor integrat i bany en suite amb acabats de luxe."
    },
    images: [
      "https://placehold.co/600x400/4169e1/ffffff?text=Dormitorio+Vestidor+1",
      "https://placehold.co/600x500/ff1493/ffffff?text=Dormitorio+Vestidor+2",
      "https://placehold.co/600x450/3cb371/ffffff?text=Dormitorio+Vestidor+3"
    ]
  }
];

  const openWorkModal = (work, index) => {
    setSelectedWork(work);
    setCurrentImageIndex(index || 0);
  };

  const closeWorkModal = () => {
    setSelectedWork(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedWork.images.length);
    }
  };

  const prevImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedWork.images.length) % selectedWork.images.length);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        t={t} 
      />
      
      <main className="main-content">
        <Hero t={t} />
        <Services t={t} />
        // En App.jsx, donde llamas al componente Gallery
        <Gallery t={t} galleryWorks={galleryWorks} openWorkModal={openWorkModal} language={language} />
        <Reviews t={t} />
        <Contact t={t} language={language} />
      </main>
      
      <Footer t={t} language={language} />
      
// En App.jsx, donde llamas al componente WorkModal
<WorkModal 
  selectedWork={selectedWork}
  currentImageIndex={currentImageIndex}
  closeWorkModal={closeWorkModal}
  prevImage={prevImage}
  nextImage={nextImage}
  setCurrentImageIndex={setCurrentImageIndex}
  language={language}
/>
      <ToastContainer/>
    </div>
  );
};

export default App;