import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      {/* WhatsApp Button */}
      <a
  href="https://wa.me/918208873507"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="WhatsApp Now"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Now
        </span>
      </a>

      {/* Call Button */}
      <a
  href="tel:+918208873507"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Call Now"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-saffron-600 hover:bg-saffron-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          title="Back to Top"
        >
          <ArrowUp size={24} />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
};

export default FloatingActions;