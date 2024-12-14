import React from 'react';
import hero from '../images/Hero.png';

function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:`url(${hero})`,
          backgroundColor: 'rgba(0,0,0,0.4)',
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="relative text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Showcase Your Homes with
          <div>Homely Properties</div>
        </h1>
        <button className="bg-[#E6C98F] hover:bg-[#D4B87E] text-black px-6 py-2 rounded">
          Add listing
        </button>
      </div>
    </section>
  );
}

export default Hero;

