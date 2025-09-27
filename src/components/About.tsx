import React from 'react';
import { Trophy, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in cricket and community service."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong bonds among veterans and cricket enthusiasts across Nepal."
    },
    {
      icon: Target,
      title: "Mission",
      description: "Promoting cricket while honoring the service and sacrifice of our veterans."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, respect, and dedication guide everything we do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              Veterans Cricket Nepal
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veterans Cricket Nepal stands as a beacon of unity, bringing together those who have served our nation 
            through the beautiful game of cricket.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded with a vision to honor our veterans and promote cricket excellence, Veterans Cricket Nepal 
              has become a cornerstone of the sporting community. We believe in the power of sport to heal, 
              unite, and inspire.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our organization serves as a platform where veterans can continue their journey of service through 
              cricket, mentoring young players, and contributing to the development of the sport in Nepal.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through various tournaments, training programs, and community initiatives, we strive to create 
              lasting impact both on and off the field.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1661929/pexels-photo-1661929.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Cricket team celebration"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 
                                     transform hover:-translate-y-2 border-t-4 border-red-600">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 
                            rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;