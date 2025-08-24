import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/bg2.jpeg"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800">Pandit Kuldeep guruji</h1>
              <p className="text-xs text-saffron-600">Trimbakeshwar Puja Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-saffron-600 bg-saffron-50'
                    : 'text-gray-700 hover:text-saffron-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Desktop CTA Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="tel:+918208873507"
                className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918208873507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-saffron-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-saffron-600 bg-saffron-50'
                      : 'text-gray-700 hover:text-saffron-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex space-x-3 px-3 pt-3">
                <a
                  href="tel:+919049415364"
                  className="flex-1 flex items-center justify-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919049415364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-1 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;