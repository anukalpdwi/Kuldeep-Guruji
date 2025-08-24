import React from 'react';
import { Award, Users, BookOpen, Heart, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-saffron-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Pandit Kuldeep guruji
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A dedicated spiritual guide with over 15 years of experience in performing authentic Vedic rituals at the sacred Trimbakeshwar Temple.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-saffron-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-saffron-600 mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Pujas Performed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/1.jpeg" 
                alt="Pandit Ji performing puja"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Experience & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born into a traditional Brahmin family, Pandit Kuldeep guruji has been serving devotees with authentic Vedic knowledge and practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vedic Scholar</h3>
              <p className="text-gray-600">Deep knowledge of Vedic scriptures, mantras, and traditional rituals passed down through generations.</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Tradition</h3>
              <p className="text-gray-600">Coming from a lineage of priests, carrying forward the sacred tradition of performing authentic pujas.</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Pandit</h3>
              <p className="text-gray-600">Officially recognized and authorized to perform all types of Vedic rituals and ceremonies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Specializations
            </h2>
            <p className="text-xl text-gray-600">
              Expert in performing various types of pujas and spiritual ceremonies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-saffron-600">Dosh Nivaran Pujas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Kaal Sarp Dosh Nivaran</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Pitra Dosh Nivaran</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Mangal Dosh Nivaran</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Graha Dosh Nivaran</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-saffron-600">Special Pujas</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Narayan Nagbali</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Rudra Abhishek</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Mahamrityunjay Jaap</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Shiv Panchakshar Stotra</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values & Approach
            </h2>
            <p className="text-xl text-gray-600">
              Guided by traditional values and modern understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Devotion</h3>
              <p className="text-gray-600">Every puja is performed with complete devotion and spiritual dedication.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">All rituals follow traditional Vedic methods and authentic procedures.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Punctuality</h3>
              <p className="text-gray-600">Timely completion of all pujas according to auspicious timings.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-saffron-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Guidance</h3>
              <p className="text-gray-600">Personal guidance and explanation of rituals to devotees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trimbakeshwar Temple */}
      <section className="py-16 bg-gradient-to-r from-saffron-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Trimbakeshwar Temple
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in Nashik, Maharashtra, Trimbakeshwar is one of the twelve Jyotirlingas and holds immense spiritual significance in Hinduism. The temple is the perfect place for performing various pujas and spiritual ceremonies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>One of the 12 Jyotirlingas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Source of River Godavari</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Sacred place for Kaal Sarp Dosh Nivaran</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Powerful spiritual energy for all pujas</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="bg 11.jpg" 
                alt="Trimbakeshwar Temple"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;