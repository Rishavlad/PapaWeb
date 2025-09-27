import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
              alt="Veterans Cricket Nepal Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Veterans Cricket Nepal
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                vcan.org.np
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {['home', 'about', 'board', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-200 hover:text-red-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item === 'board' ? 'Board Members' : item}
                </button>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 border-l border-gray-300 pl-6">
              {[Facebook, Twitter, Instagram, Mail, Phone].map((Icon, index) => (
                <Icon
                  key={index}
                  className={`w-5 h-5 cursor-pointer transition-colors duration-200 hover:text-red-600 ${
                    isScrolled ? 'text-gray-600' : 'text-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              {['home', 'about', 'board', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 capitalize"
                >
                  {item === 'board' ? 'Board Members' : item}
                </button>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
                {[Facebook, Twitter, Instagram, Mail, Phone].map((Icon, index) => (
                  <Icon key={index} className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;