import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pourquoi from './components/Pourquoi';
import Message from './components/Message';
import Program from './components/Program';
import Hebergement from './components/Hebergement';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Guide from './components/Guide';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Footer from './components/Footer';
import Benevolat from './components/Benevolat';
import Entrepreneurs from './components/Entrepreneurs';
import DonationFAB from './components/DonationFAB';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    // Force scroll to top on page change
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#benevolat') {
        navigateTo('benevolat');
      } else if (hash === '#entrepreneurs') {
        navigateTo('entrepreneurs');
      } else if (hash === '') {
        setCurrentPage('home');
      }
    };

    // Initial check on mount
    handleHashChange();

    // Handle clicks on anchor links even when hash is already set
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a[href="#entrepreneurs"], a[href="#benevolat"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        // Force navigation even if hash hasn't changed
        window.location.hash = href;
        if (href === '#benevolat') navigateTo('benevolat');
        else if (href === '#entrepreneurs') navigateTo('entrepreneurs');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  if (currentPage === 'benevolat') {
    return <Benevolat onBack={() => {
      window.location.hash = '';
      setCurrentPage('home');
    }} />;
  }

  if (currentPage === 'entrepreneurs') {
    return <Entrepreneurs onBack={() => {
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
        <Hebergement />
        <Program />
        <Registration />
        <Partners />
        <Guide />
        <Gallery />
        <Map />
      </main>

      <Footer />
      <DonationFAB />
    </div>
  );
}

export default App;
