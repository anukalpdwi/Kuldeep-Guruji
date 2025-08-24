import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/bg2.jpeg"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Pandit Kuldeep guruji</h3>
                <p className="text-xs text-gray-400">Trimbakeshwar Puja Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Authentic Vedic puja services at sacred Trimbakeshwar Temple with 15+ years of experience and traditional family lineage.
            </p>
            <div className="flex space-x-3">
              <a
                href="tel:+918208873507"
                className="bg-saffron-600 hover:bg-saffron-700 p-2 rounded-full transition-colors"
                title="Call Now"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/918208873507"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Pandit Ji
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Puja Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Kaal Sarp Dosh Nivaran</li>
              <li className="text-gray-400">Pitra Dosh Nivaran</li>
              <li className="text-gray-400">Narayan Nagbali</li>
              <li className="text-gray-400">Rudra Abhishek</li>
              <li className="text-gray-400">Mahamrityunjay Jaap</li>
              <li className="text-gray-400">Mangal Dosh Nivaran</li>
              <li className="text-gray-400">Graha Shanti Puja</li>
              <li className="text-gray-400">Vastu Dosh Nivaran</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="text-saffron-500 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+918208873507" className="text-white hover:text-saffron-400">
                    +91 82088 73507
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/918208873507" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400"
                  >
                    +91 82088 73507
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white text-sm">
                    Trimbakeshwar Temple<br />
                    Nashik, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">Availability</p>
                  <p className="text-white text-sm">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Pandit Kuldeep guruji - Trimbakeshwar Puja Services. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Developed by: 
                <a 
                  href="https://goldenbirdtech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-saffron-400 hover:text-saffron-300 ml-1 inline-flex items-center"
                >
                  Anukalp Dwivedi - The Goldenbird Tech
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                वेबसाइट बनाने और गूगल Ad चलाने के लिए हमसे संपर्क करें: 
                <a 
                  href="tel:+918208873507" 
                  className="text-saffron-400 hover:text-saffron-300 ml-1"
                >
                  +91 9131883433
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;