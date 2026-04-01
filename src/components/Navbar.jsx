import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logoJnj from '../assets/logo_jnj.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pourquoi JNJ', href: '#pourquoi' },
    { name: 'Mot des Évêques', href: '#message' },
    { name: 'Le programme', href: '#programme' },
    { name: 'Guide', href: '#guide' },
    { name: 'Carte', href: '#carte' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <img src={logoJnj} alt="Logo JNJ 2026" className="nav-logo-img" />
          <span>JNJ Atakpamé <span className="logo-year">2026</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-menu desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#inscription" className="btn btn-primary nav-btn">
            Inscription
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#inscription" 
            className="btn btn-primary mobile-nav-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inscription
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
