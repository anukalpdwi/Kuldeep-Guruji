import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Award, Phone, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slideshow images
  const heroImages = [
    {
      src: '/1.jpeg',
      alt: 'Pandit Ji performing Kaal Sarp Dosh Nivaran puja at Trimbakeshwar Temple'
    },
    {
      src: '/6.jpeg',
      alt: 'Sacred Trimbakeshwar Temple ceremony with traditional rituals'
    },
    {
      src: '/3.jpeg',
      alt: 'Narayan Nagbali puja ceremony at the holy temple'
    },
    {
      src: '/4.jpeg',
      alt: 'Traditional Vedic fire ritual with sacred mantras'
    },
    {
      src: '/bg1.jpeg',
      alt: 'Beautiful architecture of Trimbakeshwar Temple'
    }
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const services = [
    {
      name: 'Kaal Sarp Dosh Nivaran',
      description: 'Complete remedial puja for Kaal Sarp Dosh with proper Vedic rituals',
      // price: '₹5,100',
      image: '1.jpeg'
    },
    {
      name: 'Pitra Dosh Nivaran',
      description: 'Sacred puja for ancestor peace and family prosperity',
      // price: '₹3,100',
      image: 'https://thetrimbakeshwar.in/wp-content/uploads/2025/03/pitra-dosh-puja-trimbakeshwar-1024x576.webp'
    },
    {
      name: 'Narayan Nagbali',
      description: 'Special puja for liberation from various doshas',
      // price: '₹11,000',
      image: 'https://sanity-admin.rudraksha-ratna.com/static/images/blogs/Why+is+Narayan+Nagbali+performed+at+Trimbakeshwar+only.jpg'
    },
    {
      name: 'Rudra Abhishek',
      description: 'Divine blessing puja for Lord Shiva devotees',
      // price: '₹2,100',
      image: 'https://trimbakeshwarkaalsarppuja.com/wp-content/uploads/2024/04/rudra-abhishek-puja-bg.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai',
      text: 'Pandit ji performed Kaal Sarp Dosh puja with complete dedication. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      location: 'Pune',
      text: 'Very knowledgeable and experienced. The puja was conducted with proper rituals.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      location: 'Delhi',
      text: 'Excellent service and genuine guidance. Felt very blessed after the puja.',
      rating: 5
    }
  ];

  // Featured gallery images
  const featuredImages = [
    {
      src: '/1.jpeg',
      title: 'Kaal Sarp Dosh Nivaran Puja',
      alt: 'Traditional Kaal Sarp Dosh puja being performed with proper Vedic rituals'
    },
    {
      src: '/2.jpeg',
      title: 'Trimbakeshwar Temple Ceremony',
      alt: 'Sacred ceremony at the holy Trimbakeshwar Jyotirlinga temple'
    },
    {
      src: '/3.jpeg',
      title: 'Narayan Nagbali Puja',
      alt: 'Special Narayan Nagbali puja for spiritual liberation'
    },
    {
      src: '/4.jpeg',
      title: 'Rudra Abhishek',
      alt: 'Divine abhishek ceremony for Lord Shiva'
    },
    {
      src: '/5.jpeg',
      title: 'Vedic Fire Ritual',
      alt: 'Sacred fire ceremony with traditional mantras'
    },
    {
      src: '/6.jpeg',
      title: 'Temple Architecture',
      alt: 'Beautiful architecture of Trimbakeshwar Temple'
    },
    {
      src: '/7.jpeg',
      title: 'Spiritual Gathering',
      alt: 'Devotees gathering for sacred ceremonies'
    },
    {
      src: '/bg1.jpeg',
      title: 'Puja Samagri',
      alt: 'Traditional puja materials and offerings'
    },
    {
      src: 'https://panditvinayakguruji.com/wp-content/uploads/2022/07/kal-sharp-puja-1024x576.jpg',
      title: 'Sacred Rituals',
      alt: 'Traditional Vedic rituals being performed'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              पंडित कुलदीप गुरुजी
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 drop-shadow-lg">
              Pandit Kuldeep guruji
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Authentic Vedic Puja Services in Trimbakeshwar Temple
              <br />
              15+ Years of Experience • Traditional Family Lineage
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+918208873507"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone size={20} />
                <span>Call Now: +91 82088 73507</span>
              </a>
              <a
                href="https://wa.me/918208873507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">Pujas Completed</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Authentic Rituals</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
         
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Pandit Vijay Narayan Shastri?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Authentic Vedic rituals performed with complete dedication and proper knowledge
            </p>
             {/* About Us Button */}
          <div className="text-center mt-8">
            <Link
              to="/about"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              About us
            </Link>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Extensive knowledge and experience in all Vedic rituals and pujas</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Tradition</h3>
              <p className="text-gray-600">Traditional Brahmin family with generations of puja expertise</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Rituals</h3>
              <p className="text-gray-600">All pujas performed according to traditional Vedic scriptures</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
              <p className="text-gray-600">Always available for consultations and booking appointments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Puja Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete range of Vedic pujas performed at sacred Trimbakeshwar Temple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-2xl font-bold text-saffron-600">{service.price}</span> */}
                    <a
                      href="tel:+918208873507"
                      className="bg-saffron-600 hover:bg-saffron-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Devotees Say
            </h2>
            <p className="text-xl text-gray-600">
              Blessed experiences shared by our satisfied devotees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sacred Moments Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Witness the divine atmosphere of our authentic Vedic ceremonies
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredImages.slice(0, 9).map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-video"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                  </div>
                </div>
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Gallery Button */}
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <span>View Complete Gallery</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
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
              href="tel:+919049415364"
              className="flex items-center justify-center space-x-2 bg-white text-saffron-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone size={20} />
              <span>Call: +91 82088 73507</span>
            </a>
            <a
              href="https://wa.me/918208873507"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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

export default Home;