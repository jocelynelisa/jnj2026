import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pourquoi from './components/Pourquoi';
import Message from './components/Message';
import Program from './components/Program';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Guide from './components/Guide';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Footer from './components/Footer';
import Benevolat from './components/Benevolat';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#benevolat') {
        setCurrentPage('benevolat');
      } else {
        setCurrentPage('home');
      }
    };
    
    // Initial check
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'benevolat') {
    return <Benevolat onBack={() => {
      window.location.hash = '';
      setCurrentPage('home');
    }} />;
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <Hero />
        <Pourquoi />
        <Message />
        <Program />
        <Registration />
        <Partners />
        <Guide />
        <Gallery />
        <Map />
      </main>

      <Footer />
    </div>
  );
}

export default App;
