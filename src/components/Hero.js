import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="premium-hero">
      <div className="hero-background-animation"></div>
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <h1 className={`hero-headline ${isLoaded ? 'animate-in' : ''}`} style={{ whiteSpace: 'nowrap' }}>
            Brilliant Education Foundation Pvt. Ltd.
          </h1>
          <h2 className={`hero-subheadline ${isLoaded ? 'animate-in' : ''}`}>
            (Brilliant Pupils' Secondary School - BPSS)
          </h2>
          <p className={`hero-tagline ${isLoaded ? 'animate-in' : ''}`}>
            "Skillful Education Is The Main Foundation Of Advancement."
          </p>
          <div className={`hero-location ${isLoaded ? 'animate-in' : ''}`}>
            <div className="location-card">
              <p className="location-text">Arjundhara-06, Chhata Chowk, Jhapa, Nepal</p>
              <p className="education-level">Complete Education: PG to Grade 10 & +2 Programs</p>
            </div>
          </div>
          <div className={`hero-cta ${isLoaded ? 'animate-in' : ''}`}>
            <a href="#about" className="cta-button primary">
              Discover Excellence
            </a>
            <a href="#contact" className="cta-button secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;