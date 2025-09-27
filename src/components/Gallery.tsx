import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Cricket match action",
      title: "Veterans Championship Final"
    },
    {
      src: "https://images.pexels.com/photos/1661929/pexels-photo-1661929.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Team celebration",
      title: "Victory Celebration"
    },
    {
      src: "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Cricket training session",
      title: "Training Session"
    },
    {
      src: "https://images.pexels.com/photos/1661951/pexels-photo-1661951.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Cricket stadium",
      title: "Home Ground"
    },
    {
      src: "https://images.pexels.com/photos/2774565/pexels-photo-2774565.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Young players training",
      title: "Youth Development Program"
    },
    {
      src: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Award ceremony",
      title: "Annual Awards Night"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + galleryImages.length) % galleryImages.length
      : (selectedImage + 1) % galleryImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of triumph, teamwork, and the enduring spirit of cricket among our veterans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl 
                       transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full 
                              group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
              
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                            bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 
                         transition-colors duration-200 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 
                         transition-colors duration-200 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-semibold">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;