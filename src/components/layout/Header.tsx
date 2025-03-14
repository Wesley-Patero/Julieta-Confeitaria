
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bakery-green/95 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-bakery-gold font-script text-2xl md:text-3xl font-bold">
          Julieta Confeitaria
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <button onClick={() => scrollToSection('home')} className="nav-item">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-item">
            About
          </button>
          <button onClick={() => scrollToSection('gallery')} className="nav-item">
            Gallery
          </button>
          <button onClick={() => scrollToSection('pricing')} className="nav-item">
            Pricing
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-item">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-bakery-cream hover:text-bakery-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-bakery-green z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl text-bakery-cream hover:text-bakery-gold transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-xl text-bakery-cream hover:text-bakery-gold transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-xl text-bakery-cream hover:text-bakery-gold transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-xl text-bakery-cream hover:text-bakery-gold transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-xl text-bakery-cream hover:text-bakery-gold transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
