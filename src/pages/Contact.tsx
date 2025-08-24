import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll simulate a successful submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Create WhatsApp message
    const message = `*Puja Booking Request*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message}`;
    
  const whatsappUrl = `https://wa.me/918208873507?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Kaal Sarp Dosh Nivaran',
    'Pitra Dosh Nivaran',
    'Narayan Nagbali',
    'Rudra Abhishek',
    'Mahamrityunjay Jaap',
    'Mangal Dosh Nivaran',
    'Graha Shanti Puja',
    'Other (Please specify in message)'
  ];

  const faqs = [
    {
      question: 'How do I book a puja?',
      answer: 'You can book a puja by calling us directly, sending a WhatsApp message, or filling out the booking form on this page. We recommend booking in advance, especially during festival seasons.'
    },
    {
      question: 'What is included in the puja cost?',
      answer: 'The puja cost includes all necessary materials (samagri), experienced Pandit services, proper Vedic mantras and rituals, puja certificate, and prasad.'
    },
    {
      question: 'How long does each puja take?',
      answer: 'The duration varies by puja type: Rudra Abhishek (1-2 hours), Pitra Dosh (2-3 hours), Kaal Sarp Dosh (3-4 hours), and Narayan Nagbali (6-8 hours).'
    },
    {
      question: 'Can I get a consultation before booking?',
      answer: 'Yes, we provide free consultations to help you choose the most appropriate puja for your specific needs and circumstances.'
    },
    {
      question: 'Do you provide accommodation assistance?',
      answer: 'Yes, we can help you find suitable accommodation near Trimbakeshwar Temple. Please mention this requirement when booking.'
    },
    {
      question: 'What should I bring for the puja?',
      answer: 'We provide all necessary puja materials. You just need to bring yourself with devotion and faith. Specific requirements, if any, will be communicated during booking.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-saffron-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact & Booking
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your authentic Vedic puja? Contact us now for immediate assistance and guidance.
          </p>
        </div>
      </section>

      {/* Contact Information & Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-saffron-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us directly for immediate assistance</p>
                    <a 
                      href="tel:+918208873507" 
                      className="text-saffron-600 hover:text-saffron-700 font-semibold text-lg"
                    >
                      +91 82088 73507
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Quick response via WhatsApp</p>
                    <a 
                      href="https://wa.me/918208873507" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold text-lg"
                    >
                      +91 82088 73507
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">
                      Trimbakeshwar Temple<br />
                      Nashik, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Availability</h3>
                    <p className="text-gray-600">
                      24/7 Available for consultations<br />
                      Pujas: Daily 6:00 AM - 8:00 PM<br />
                      Special timings during festivals
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918208873507"
                  className="flex items-center justify-center space-x-2 bg-saffron-600 hover:bg-saffron-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918208873507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Book Your Puja</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="text-green-600 mr-3" size={20} />
                  <span className="text-green-800">Your booking request has been submitted! We'll contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Puja Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send size={20} />
                  <span>Submit Booking Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our puja services and booking process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us at Trimbakeshwar Temple
            </h2>
            <p className="text-xl text-gray-600">
              Located in the sacred town of Trimbak, Nashik, Maharashtra
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
              <p className="text-gray-600 text-lg">
                Trimbakeshwar Temple, Nashik, Maharashtra, India
              </p>
              <p className="text-gray-500 mt-2">
                Interactive map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;