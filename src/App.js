import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PropertyGrid from './components/PropertyGrid';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <PropertyGrid />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

