import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Rajesh Thapa",
      position: "President",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Former Army Colonel with 25 years of service. Passionate cricket player and coach.",
      email: "rajesh@vcan.org.np",
      phone: "+977-9801234567"
    },
    {
      name: "Sita Sharma",
      position: "Vice President",
      image: "https://images.pexels.com/photos/3752834/pexels-photo-3752834.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Retired Police Officer and former national women's cricket team captain.",
      email: "sita@vcan.org.np",
      phone: "+977-9801234568"
    },
    {
      name: "Kumar Rai",
      position: "Secretary",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Ex-Air Force Wing Commander and cricket administrator with international experience.",
      email: "kumar@vcan.org.np",
      phone: "+977-9801234569"
    },
    {
      name: "Maya Gurung",
      position: "Treasurer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      bio: "Former Navy Officer and certified financial advisor specializing in sports management.",
      email: "maya@vcan.org.np",
      phone: "+977-9801234570"
    }
  ];

  return (
    <section id="board" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              Leadership
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated veterans who lead our organization with honor, integrity, and passion for cricket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                                     transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Contact overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 
                              transition-transform duration-300">
                  <div className="flex space-x-3 justify-center">
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200">
                      <Mail className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200">
                      <Phone className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200">
                      <Linkedin className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 
                               font-semibold text-sm uppercase tracking-wide">{member.position}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
              
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;