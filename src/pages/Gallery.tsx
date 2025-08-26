import React, { useState } from 'react';
import { Play, X, Image as ImageIcon, Video } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<{type: 'image' | 'video', src: string, title: string} | null>(null);

  const images = [
    {
      src: '/1.jpeg',
      title: 'Kaal Sarp Dosh Nivaran Puja',
      description: 'Traditional Kaal Sarp Dosh puja being performed with proper Vedic rituals'
    },
    {
      src: '/2.jpeg',
      title: 'Trimbakeshwar Temple Ceremony',
      description: 'Sacred ceremony at the holy Trimbakeshwar Jyotirlinga temple'
    },
    {
      src: '/3.jpeg',
      title: 'Narayan Nagbali Puja',
      description: 'Special Narayan Nagbali puja for spiritual liberation'
    },
    {
      src: '/4.jpeg',
      title: 'Rudra Abhishek',
      description: 'Divine abhishek ceremony for Lord Shiva'
    },
    {
      src: '/5.jpeg',
      title: 'Vedic Fire Ritual',
      description: 'Sacred fire ceremony with traditional mantras'
    },
    {
      src: '/6.jpeg',
      title: 'Temple Architecture',
      description: 'Beautiful architecture of Trimbakeshwar Temple'
    },
    {
      src: '/7.jpeg',
      title: 'Spiritual Gathering',
      description: 'Devotees gathering for sacred ceremonies'
    },
    {
      src: '/8.jpeg',
      title: 'Puja Samagri',
      description: 'Traditional puja materials and offerings'
    }
  ];

  const videos = [
    {
      src: '/vid 1.mp4',
      title: 'Kaal Sarp Dosh Puja Process',
      description: 'Complete process of Kaal Sarp Dosh Nivaran puja',
      thumbnail: '2.jpeg'
    },
    {
      src: '/vid2.mp4',
      title: 'Aarti',
      description: 'Beautiful Aarti ceremony at Trimbakeshwar Puja',
      thumbnail: 'https://www.trimbakeshwarpooja.co.in/wp-content/uploads/2024/10/bg2.webp'
    },
    {
      src: '/vid3.mp4',
      title: 'Puja Ceremony',
      description: 'Traditional Puja ceremony',
      thumbnail: '/3.jpeg'
    },
    {
      src: '/vid4.mp4',
      title: 'Puja Ritual',
      description: 'Sacred Rudra Abhishek puja ceremony',
      thumbnail: '/img1.jpg'
    },
    {
      src: '/vid5.mp4',
      title: 'Puja Ritual',
      description: 'Sacred Rudra Abhishek puja ceremony',
      thumbnail: '/img2.jpeg'
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-saffron-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Photo & Video Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the divine atmosphere of Trimbakeshwar Temple and witness authentic Vedic ceremonies by Pandit Kuldeep guruji through our gallery.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <ImageIcon className="text-saffron-600 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Photo Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMedia({type: 'image', src: image.src, title: image.title})}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Video className="text-saffron-600 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Video Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMedia({type: 'video', src: video.src, title: video.title})}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-saffron-600 ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{video.title}</h3>
                  <p className="text-white/80 text-xs">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Trimbakeshwar Temple
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Trimbakeshwar Temple is one of the twelve Jyotirlingas of Lord Shiva, located in Nashik, Maharashtra. The temple is situated at the source of the river Godavari and holds immense spiritual significance.
                </p>
                <p>
                  The temple is particularly famous for Kaal Sarp Dosh Nivaran puja, as it is believed to be one of the most powerful places for this remedy. Devotees from all over India visit this sacred place to seek blessings and perform various pujas.
                </p>
                <p>
                  The unique three-faced lingam in the temple represents Brahma, Vishnu, and Mahesh (Shiva), making it even more sacred and powerful for spiritual practices.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="bg1.jpeg" 
                alt="Trimbakeshwar Temple Interior"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal for viewing full-size media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            
            {/* Media content */}
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : selectedMedia.src.endsWith('.mp4') ? (
              <video
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              >
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.src}
                  className="w-full h-full rounded-lg"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedMedia.title}
                ></iframe>
              </div>
            )}
            
            {/* Title */}
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedMedia.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;