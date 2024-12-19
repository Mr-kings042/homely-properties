import React, { useState, useEffect, useRef } from 'react';
import hero from '../images/Hero.png';
import hero1 from '../images/hero-1.jpg';
import hero2 from '../images/hero-2.jpg';
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  const slides = [
    {
      image: hero,
      alt: "Modern luxury house"
    },
    {
      image: hero1,
      alt: "Victorian style house"
    },
    {
      image: hero2,
      alt: "Modern minimalist house"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    },5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle touch events
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section 
      className="relative h-[500px] flex items-center justify-center text-white"
      ref={slideRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slider container */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: 'rgba(0,0,0,0.4)',
                backgroundBlendMode: 'overlay'
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center space-y-6 px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Showcase Your Homes with
          <div>Homely Properties</div>
        </h1>
        <button className="bg-[#E6C98F] hover:bg-[#D4B87E] text-black px-6 py-2 rounded">
          Add listing
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

