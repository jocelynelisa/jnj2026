import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pourquoi from './components/Pourquoi';
import Message from './components/Message';
import Program from './components/Program';
import Registration from './components/Registration';
import Guide from './components/Guide';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <Hero />
        <Pourquoi />
        <Message />
        <Program />
        <Registration />
        <Guide />
        <Map />
      </main>

      <Footer />
    </div>
  );
}

export default App;
