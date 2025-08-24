import React from 'react';
import { Clock, Star, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'Kaal Sarp Dosh Nivaran',
      // price: '₹5,100',
      duration: '3-4 hours',
      description: 'Complete remedial puja for Kaal Sarp Dosh with proper Vedic rituals performed at Trimbakeshwar Temple.',
      benefits: [
        'Removes obstacles in career and business',
        'Brings peace and prosperity to family',
        'Eliminates fear and anxiety',
        'Improves relationships and marriage prospects'
      ],
      includes: [
        'Complete puja materials (Samagri)',
        'Experienced Pandit services',
        'Proper Vedic mantras and rituals',
        'Puja certificate and prasad'
      ],
      image: '/4.jpeg'
    },
    {
      name: 'Pitra Dosh Nivaran',
      // price: '₹3,100',
      duration: '2-3 hours',
      description: 'Sacred puja for ancestor peace and liberation from Pitra Dosh performed with traditional methods.',
      benefits: [
        'Peace for departed ancestors',
        'Removes family curses and problems',
        'Brings blessings from ancestors',
        'Improves family harmony'
      ],
      includes: [
        'Pitra paksha rituals',
        'Brahmin feeding (if required)',
        'Complete puja samagri',
        'Traditional mantras and offerings'
      ],
      image: '/7.jpeg'
    },
    {
      name: 'Narayan Nagbali',
      // price: '₹11,000',
      duration: '6-8 hours',
      description: 'Special combined puja for liberation from various doshas and spiritual purification.',
      benefits: [
        'Liberation from multiple doshas',
        'Spiritual purification and growth',
        'Removes karma-related problems',
        'Brings divine blessings'
      ],
      includes: [
        'Complete Narayan puja',
        'Nagbali ceremonies',
        'All required materials',
        'Expert guidance throughout'
      ],
      image: '/1.jpeg'
    },
    {
      name: 'Rudra Abhishek',
      // price: '₹2,100',
      duration: '1-2 hours',
      description: 'Divine blessing puja for Lord Shiva devotees with traditional abhishek rituals.',
      benefits: [
        'Lord Shiva\'s divine blessings',
        'Spiritual growth and enlightenment',
        'Removes negative energies',
        'Brings peace and prosperity'
      ],
      includes: [
        'Sacred abhishek materials',
        'Rudra mantras chanting',
        'Flower and fruit offerings',
        'Holy water and prasad'
      ],
      image: 'https://temple.yatradham.org/public/Product/puja-rituals/puja-rituals_SGpKqH4Y_202404181504220.jpg'
    },
    {
      name: 'Mahamrityunjay Jaap',
      // price: '₹2,500',
      duration: '2-3 hours',
      description: 'Powerful healing puja with Mahamrityunjay mantra for health and longevity.',
      benefits: [
        'Health and healing benefits',
        'Protection from diseases',
        'Longevity and vitality',
        'Mental peace and strength'
      ],
      includes: [
        '108 times mantra chanting',
        'Healing ceremonies',
        'Medicinal herbs offerings',
        'Healing prasad and water'
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfBfaGkcLSFd_D36UMJScSm4rStFz9OnOoQ&s'
    },
    {
      name: 'Mangal Dosh Nivaran',
      // price: '₹3,500',
      duration: '2-3 hours',
      description: 'Special puja for Manglik individuals to remove marriage obstacles and relationship problems.',
      benefits: [
        'Removes marriage obstacles',
        'Improves relationship harmony',
        'Reduces Mangal dosha effects',
        'Brings marital happiness'
      ],
      includes: [
        'Mangal graha shanti rituals',
        'Red coral and copper offerings',
        'Tuesday special ceremonies',
        'Relationship blessing mantras'
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2yv2VwQirLMfWu7_2Jkna46FeKb8bAgxBw&s'
    }
  ];

  const additionalServices = [
    'Graha Shanti Puja',
    'Vastu Dosh Nivaran',
    'Shani Dosh Nivaran',
    'Rahu-Ketu Dosh Nivaran',
    'Ganga Aarti',
    'Personal Horoscope Reading',
    'Marriage Matching',
    'Muhurat Consultation'
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-saffron-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Puja Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Authentic Vedic rituals performed at the sacred Trimbakeshwar Temple with complete dedication and proper traditional methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918208873507"
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Phone size={18} />
              <span>Call: +91 8208873507</span>
            </a>
            <a
              href="https://wa.me/918208873507"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                    <div className="text-right">
                      {/* <div className="text-2xl font-bold text-saffron-600">{service.price}</div> */}
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-saffron-600">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Star className="text-yellow-400 fill-current mr-2 mt-1 flex-shrink-0" size={14} />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-saffron-600">Includes:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={14} />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href="tel:+918208873507"
                      className="flex-1 bg-saffron-600 hover:bg-saffron-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                    >
                      Book Now
                    </a>
                    <a
                      href="https://wa.me/918208873507"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              We also provide various other spiritual and astrological services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-saffron-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-saffron-50 p-8 rounded-lg border border-saffron-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Information</h3>
            <div className="text-left space-y-4 text-gray-700">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>All prices include complete puja materials (samagri) and Pandit services</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>Advance booking recommended, especially during festival seasons</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>All pujas performed according to traditional Vedic methods</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>Custom pujas and special ceremonies available on request</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <p>Free consultation for selecting appropriate puja for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-saffron-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Puja?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us now to schedule your authentic Vedic puja at Trimbakeshwar Temple
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918208873507"
              className="flex items-center justify-center space-x-2 bg-white text-saffron-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              <Phone size={20} />
              <span>Call: +91 8208873507</span>
            </a>
            <a
              href="https://wa.me/918208873507"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;