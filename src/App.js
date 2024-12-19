import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PropertyGrid from './components/PropertyGrid';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ManageListings from './components/ManageListings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Stats />
              <PropertyGrid />
              <FAQ />
              <CTASection />
            </main>
          } />
          <Route path="/manage-listing" element={<ManageListings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

