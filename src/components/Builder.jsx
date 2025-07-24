import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaTools, FaPaintRoller, FaBath, FaHome, FaLightbulb, FaChevronLeft, FaChevronRight, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Builder = () => {
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
      title: "Reformas Hogar Barcelona",
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
          { icon: <FaTools />, title: "Reformas Integrales", description: "Reformas completas de viviendas y locales comerciales con acabados de alta calidad." },
          { icon: <FaPaintRoller />, title: "Pintura y Decoración", description: "Trabajos de pintura, empapelado y decoración de interiores y exteriores." },
          { icon: <FaBath />, title: "Baños y Cocinas", description: "Renovación de baños y cocinas con materiales modernos y funcionales." },
          { icon: <FaLightbulb />, title: "Electricidad e Iluminación", description: "Instalaciones eléctricas, iluminación LED y automatización del hogar." }
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
          { icon: <FaTools />, title: "Reformes Integrals", description: "Reformes completes d'habitatges i locals comercials amb acabats d'alta qualitat." },
          { icon: <FaPaintRoller />, title: "Pintura i Decoració", description: "Treballs de pintura, empaperat i decoració d'interiors i exteriors." },
          { icon: <FaBath />, title: "Banys i Cuines", description: "Renovació de banys i cuines amb materials moderns i funcionals." },
          { icon: <FaLightbulb />, title: "Electricitat i Il·luminació", description: "Instal·lacions elèctriques, il·luminació LED i automatització de la llar." }
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

  const galleryWorks = [
    {
      id: 1,
      title: "Reforma Integral Piso Centro",
      description: "Reforma completa de un piso de 85m² en el centro de Barcelona. Incluyó cambio de distribución, instalaciones nuevas y acabados de alta calidad.",
      images: [
        "https://placehold.co/600x400/4a90e2/ffffff?text=Cocina+Moderna",
        "https://placehold.co/600x800/50c878/ffffff?text=Salón+Elegante",
        "https://placehold.co/600x400/ff6b6b/ffffff?text=Baño+Contemporáneo",
        "https://placehold.co/600x500/ffd93d/ffffff?text=Dormitorio+Principal"
      ]
    },
    {
      id: 2,
      title: "Renovación Cocina Vintage",
      description: "Transformación de cocina clásica a diseño moderno con isla central y electrodomésticos integrados.",
      images: [
        "https://placehold.co/600x400/6b5b95/ffffff?text=Cocina+Vintage+1",
        "https://placehold.co/600x500/88b719/ffffff?text=Cocina+Vintage+2",
        "https://placehold.co/600x450/fb8b24/ffffff?text=Cocina+Vintage+3"
      ]
    },
    {
      id: 3,
      title: "Baño Moderno Minimalista",
      description: "Diseño minimalista con materiales naturales y sistema de iluminación LED ambiental.",
      images: [
        "https://placehold.co/600x800/a31621/ffffff?text=Baño+Minimalista+1",
        "https://placehold.co/600x400/0077b6/ffffff?text=Baño+Minimalista+2",
        "https://placehold.co/600x500/52de97/ffffff?text=Baño+Minimalista+3"
      ]
    },
    {
      id: 4,
      title: "Reforma Oficina en Casa",
      description: "Creación de espacio de trabajo en casa con mobiliario a medida y sistema de almacenamiento integrado.",
      images: [
        "https://placehold.co/600x400/ff7f50/ffffff?text=Oficina+Casa+1",
        "https://placehold.co/600x500/4682b4/ffffff?text=Oficina+Casa+2",
        "https://placehold.co/600x450/32cd32/ffffff?text=Oficina+Casa+3"
      ]
    },
    {
      id: 5,
      title: "Terraza con Jardín Vertical",
      description: "Transformación de terraza con jardín vertical, mobiliario exterior y sistema de riego automatizado.",
      images: [
        "https://placehold.co/600x400/20b2aa/ffffff?text=Terraza+Jardín+1",
        "https://placehold.co/600x500/da70d6/ffffff?text=Terraza+Jardín+2",
        "https://placehold.co/600x450/ff4500/ffffff?text=Terraza+Jardín+3"
      ]
    },
    {
      id: 6,
      title: "Dormitorio Principal con Vestidor",
      description: "Diseño de dormitorio principal con vestidor integrado y baño en suite con acabados de lujo.",
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

  const StarRating = ({ rating }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} />
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-blue-600">{t.title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t.subtitle}</p>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
              </button>
            </div>
            
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center space-x-1 md:space-x-6">
                {Object.entries(t.nav).map(([key, value]) => (
                  <li key={key}>
                    <a 
                      href={`#${key}`} 
                      className="block py-2 px-3 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
              >
                <option value="es">ES</option>
                <option value="ca">CA</option>
              </select>
             {/*  <button 
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:block p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>
          <button className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
            darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}>
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.gallery.title}</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {galleryWorks.map((work, index) => (
              <div 
                key={work.id} 
                className={`mb-6 break-inside-avoid rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <img 
                  src={work.images[0]} 
                  alt={work.title} 
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => openWorkModal(work, 0)}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {work.description.substring(0, 100)}...
                  </p>
                  <button 
                    onClick={() => openWorkModal(work, 0)}
                    className={`px-4 py-2 rounded font-medium transition-colors ${
                      darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {t.gallery.view}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.reviews.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.reviews.items.map((review, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <StarRating rating={review.rating} />
                <p className={`my-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.contact.title}</h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">{t.contact.name}</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">{t.contact.email}</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">{t.contact.phone}</label>
                  <input 
                    type="tel" 
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">{t.contact.message}</label>
                  <textarea 
                    rows="5" 
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`px-8 py-3 rounded-lg font-bold transition-colors ${
                    darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {t.contact.send}
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8">{t.contact.info}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-2">{t.footer.address.split(',')[0]}</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {t.footer.address.split(',').slice(1).join(',')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 text-2xl mr-4" />
                  <p className="font-medium">{t.footer.phone}</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 text-2xl mr-4" />
                  <p className="font-medium">{t.footer.email}</p>
                </div>
              </div>
              
              <div className={`mt-12 p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <h4 className="text-xl font-bold mb-4">José Pérez</h4>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Director de Reformas Hogar BCN</p>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Más de 15 años de experiencia en reformas integrales de viviendas y locales comerciales.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">15+</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Años Experiencia</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Proyectos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">98%</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Clientes Satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 {t.title}. {language === 'es' ? 'Todos los derechos reservados.' : 'Tots els drets reservats.'}</p>
        </div>
      </footer>

      {/* Work Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className={`relative max-w-6xl w-full max-h-screen overflow-auto rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <button 
              onClick={closeWorkModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200"
            >
              <FaTimes />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100"
                >
                  <FaChevronLeft />
                </button>
                
                <img 
                  src={selectedWork.images[currentImageIndex]} 
                  alt={selectedWork.title}
                  className="w-full h-96 lg:h-full object-cover"
                />
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100"
                >
                  <FaChevronRight />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedWork.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedWork.title}</h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedWork.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Detalles del proyecto:</h4>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>• Duración: 4-6 semanas</li>
                    <li>• Superficie: {Math.floor(Math.random() * 100) + 50} m²</li>
                    <li>• Materiales: Alta calidad y sostenibles</li>
                    <li>• Garantía: 2 años</li>
                  </ul>
                </div>
                
                <button className={`px-6 py-3 rounded-lg font-bold transition-colors ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}>
                  Solicitar Presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .dark {
          --bg-primary: #111827;
          --bg-secondary: #1f2937;
          --text-primary: #f9fafb;
          --text-secondary: #d1d5db;
        }
        
        :root {
          --bg-primary: #f9fafb;
          --bg-secondary: #ffffff;
          --text-primary: #111827;
          --text-secondary: #6b7280;
        }
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          transition: background-color 0.3s, color 0.3s;
        }
        
        .columns-1 { columns: 1; }
        .columns-2 { columns: 2; }
        .columns-3 { columns: 3; }
        
        @media (min-width: 640px) {
          .sm\\:columns-2 { columns: 2; }
        }
        
        @media (min-width: 1024px) {
          .lg\\:columns-3 { columns: 3; }
        }
      `}</style>
    </div>
  );
};

export default Builder;