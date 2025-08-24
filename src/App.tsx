import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
}

export default App;