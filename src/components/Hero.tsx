import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.7), rgba(220, 38, 38, 0.7)), url("https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Veterans Cricket
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
              Nepal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Honoring our veterans through the spirit of cricket. Building community, fostering excellence, 
            and celebrating the legacy of those who served.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 
                       text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 
                       transform hover:scale-105 hover:shadow-xl"
            >
              Learn More About Us
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 
                       px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 
                       transform hover:scale-105"
            >
              Get Involved
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white cursor-pointer" onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default Hero;