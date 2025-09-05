import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Code,
  Smartphone,
  ShoppingBag,
  Layout,
  CloudCog,
  ServerCog,
  Database,
  LifeBuoy
} from 'lucide-react';

const cards = [
  { id: 1, icon: Code, title: 'WEB DEVELOPMENT' },
  { id: 2, icon: Smartphone, title: 'MOBILE APPS' },
  { id: 3, icon: ShoppingBag, title: 'E-COMMERCE SOLUTIONS' },
  { id: 4, icon: Layout, title: 'UI/UX DESIGN' },
  { id: 5, icon: CloudCog, title: 'CLOUD SOLUTIONS' },
  { id: 6, icon: ServerCog, title: 'API DEVELOPMENT' },
  { id: 7, icon: Database, title: 'CMS & PORTALS' },
  { id: 8, icon: LifeBuoy, title: 'MAINTENANCE & SUPPORT' }
];

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

const TechEaseServices = () => {
  const width = useWindowWidth();
  const isMobile = width < 640; // Tailwind's sm breakpoint

  // Carousel logic only applies when not mobile
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);
  const [slide, setSlide] = useState(0);
  const goNext = () => setSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div
    id='services'
      className="min-h-screen bg-black flex items-center justify-center p-3 sm:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/tech-ease-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
            COMPREHENSIVE TECH SOLUTIONS ACROSS{' '}
            <span className="font-bold">EVERY DIGITAL DOMAIN</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">
            Tech Ease delivers cutting-edge technology solutions for businesses of all sizes.
          </p>
        </div>

        {/* Arrows (hidden on mobile) */}
        {!isMobile && (
          <>
            <button
              onClick={goPrev}
              className="absolute cursor-pointer sm:left-[42px] top-[17rem] -translate-y-1/2 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={28} />
            </button>
          </>
        )}

        {/* Carousel Container */}
        <div className="w-full max-w-6xl mx-auto">
          {isMobile ? (
            // Mobile: Show all cards in a grid
            <div className="grid grid-cols-2 gap-4 justify-items-center w-full px-2 sm:px-4">
              {cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className="relative w-full justify-evenly max-w-xs md:max-w-[275px] min-w-[160px] h-auto gap-8 bg-[#1f1f1f] flex flex-col items-center pt-6 pb-8 px-4 cursor-pointer transition-transform duration-300 shadow-lg overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#A8FF00]/30 from-[-112%] to-transparent pointer-events-none" />
                    <h3 className="text-white text-center leading-tight text-md md:text-2xl font-semibold">
                      {card.title}
                    </h3>
                    <div className="mb-4">
                      <IconComponent size={64} color="white" strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Desktop: Animated carousel
            <div className="overflow-hidden px-2 sm:px-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${slide * 100}%)`
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-4 gap-6 justify-items-center"
                  >
                    {cards
                      .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                      .map((card) => {
                        const IconComponent = card.icon;
                        return (
                          <div
                            key={card.id}
                            className="relative w-full justify-evenly max-w-xs md:max-w-[275px] min-w-[160px] h-auto gap-8 bg-[#1f1f1f] flex flex-col items-center pt-6 pb-8 px-4 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#A8FF00]/30 from-[-112%] to-transparent pointer-events-none" />
                            <h3 className="text-white text-center leading-tight text-md md:text-2xl font-semibold">
                              {card.title}
                            </h3>
                            <div className="mb-4">
                              <IconComponent size={96} color="white" strokeWidth={1.5} />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!isMobile && (
          <button
            onClick={goNext}
            className="absolute right-[42px] cursor-pointer top-[17rem] -translate-y-1/2 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Dots Indicator (hidden on mobile) */}
        {!isMobile && (
          <div className="flex justify-center gap-3 mt-8 sm:mt-12">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`
                  h-1 transition-all duration-300 rounded-full
                  ${idx === slide
                    ? 'w-8 md:w-16 bg-lime-400 shadow-lg shadow-lime-400/50'
                    : 'w-2 md:w-10 bg-gray-600 hover:bg-gray-500'
                  }
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechEaseServices;
