import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Founding from './components/Founding';
import Principal from './components/Principal';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/premium-white.css';

function App() {
  return (
    <div className="luxury-app">
      <Header />
      <main className="luxury-main">
        <Hero />
        <About />
        <Founding />
        <Principal />
        {/* <Teachers /> */}
        <Classes />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;