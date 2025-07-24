// components/Header.jsx
import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'

const Header = ({ language, setLanguage, darkMode, setDarkMode, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-brand">
              <div>
                <h1 className="header-title">{t.title}</h1>
                <p className="header-subtitle">{t.subtitle}</p>
              </div>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="menu-toggle"
              >
                <FaBars />
              </button>
            </div>
            
            {/* Menú para escritorio */}
            <nav className="nav-menu-desktop">
              <ul className="nav-list">
                {Object.entries(t.nav).map(([key, value]) => (
                  <li key={key} className="nav-item">
                    <a 
                      href={`#${key}`} 
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(key);
                      }}
                    >
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="header-controls">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="language-selector"
              >
                <option value="es">ESP</option>
                <option value="ca">CAT</option>
              </select>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle-desktop"
              >
                {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="mobile-menu-close"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="mobile-nav-list">
              {Object.entries(t.nav).map(([key, value]) => (
                <li key={key} className="mobile-nav-item">
                  <a 
                    href={`#${key}`} 
                    className="mobile-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(key);
                    }}
                  >
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;