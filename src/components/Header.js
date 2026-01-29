import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`luxury-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img src="/images/Bpss Logo.jpeg" alt="BPSS Logo" />
          <h1 style={{ whiteSpace: 'nowrap' }}>Brilliant Education Foundation</h1>
        </div>
        <nav>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#founding" onClick={handleNavClick}>Founding Members</a></li>
            <li><a href="#principal" onClick={handleNavClick}>Principal</a></li>
            <li><a href="#classes" onClick={handleNavClick}>Academics</a></li>
            <li><a href="#gallery" onClick={handleNavClick}>Gallery</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;