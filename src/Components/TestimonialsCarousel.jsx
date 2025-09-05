import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Star
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Chief Technology Officer',
    company: 'InnovateHub',
    rating: 5,
    text: `"Tech Ease transformed our legacy system into a modern, scalable solution. Their expertise in cloud migration saved us months of development time."`,
    avatar: 'RS'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Founder & CEO',
    company: 'StartupVentures',
    rating: 5,
    text: '"From concept to deployment, Tech Ease delivered exceptional results. Our mobile app reached 10K+ downloads within the first month."',
    avatar: 'PP'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Head of Digital',
    company: 'TechCorp Solutions',
    rating: 5,
    text: '"Tech Ease doesn\'t just build applications. They build digital experiences that drive business growth."',
    avatar: 'MR'
  },
  {
    id: 4,
    name: 'Anita Singh',
    role: 'Product Manager',
    company: 'DigitalFirst',
    rating: 5,
    text: '"Outstanding web development services. They delivered a responsive, fast-loading website that increased our conversion rate by 180%."',
    avatar: 'AS'
  },
  {
    id: 5,
    name: 'David Thompson',
    role: 'Director of Operations',
    company: 'CloudTech Inc',
    rating: 5,
    text: '"Professional team with deep technical expertise. Their API integration work streamlined our entire business process."',
    avatar: 'DT'
  },
  {
    id: 6,
    name: 'Kavya Mehta',
    role: 'Marketing Head',
    company: 'GrowthLabs',
    rating: 5,
    text: '"Tech Ease created a beautiful, user-friendly interface that our customers love. Highly recommend their UI/UX design services."',
    avatar: 'KM'
  }
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

const TestimonialsCarousel = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  
  const cardsPerSlide = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const [slide, setSlide] = useState(0);

  const goNext = () => setSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'fill-lime-500 text-lime-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const Avatar = ({ name, avatar }) => (
    <img 
      src={`https://picsum.photos/48/48?random=${avatar}`}
      alt={name}
      className="w-12 h-12 rounded-full object-cover"
    />
  );

  return (
    <div className="md:mt-80 mt-20 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-wider">
            CLIENT SUCCESS STORIES
          </h1>
          <p className="text-gray-400 text-lg">What Our Clients Say About Tech Ease</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          className="md:block absolute hidden left-2 sm:left-6 top-[16rem] -translate-y-1/2 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goNext}
          className="md:block absolute hidden right-2 sm:right-6 top-[16rem] -translate-y-1/2 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-110 shadow-lg z-10"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </button>

        {/* Testimonials Carousel Container */}
        <div className="flex justify-center px-4 sm:px-16">
          <div className="w-full max-w-6xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${slide * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className={`w-full flex-shrink-0 grid gap-6 ${
                    isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
                  }`}
                >
                  {testimonials
                    .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 min-h-[280px] flex flex-col"
                      >
                        <StarRating rating={testimonial.rating} />
                        
                        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 flex-grow font-medium">
                          {testimonial.text}
                        </p>
                        
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <Avatar name={testimonial.name} avatar={testimonial.avatar} />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-xs">
                              {testimonial.role}
                            </p>
                            <p className="text-lime-600 text-xs font-medium">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`
                h-1 transition-all duration-300 rounded-full
                ${idx === slide
                  ? 'w-8 md:w-16 bg-lime-400 shadow-lg shadow-lime-400/50'
                  : 'w-2 md:w-10 bg-gray-600 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
