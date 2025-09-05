import { useEffect, useState } from 'react';

const caseStudies = [
  {
    id: 1,
    poster: '/case-studies/sunstar.png',
    title: 'Sunstar Hotel',
    desc: `A complete hotel website with frontend + backend management system. Integrated payment gateway and room booking system for smooth guest experience.`,
  },
  {
    id: 2,
    poster: '/case-studies/Orebi.png',
    title: 'Orebi E-Commerce',
    desc: `An online shopping website where users can browse and purchase products. Built with scalable e‑commerce features including cart, checkout, and payment flow.`,
  },
  {
    id: 3,
    poster: '/case-studies/Chawla.png',
    title: 'Chawla Building Materials',
    desc: `A business website for home construction and building materials. Visitors can explore a wide range of products and services for their projects.`,
  },
  {
    id: 4,
    poster: '/case-studies/pingsy.png',
    title: 'Pingsy CRM',
    desc: `A WhatsApp-based CRM platform to manage customer interactions—live chats, broadcasts, and WhatsApp template campaigns for businesses.`,
  },
  {
    id: 5,
    poster: '/case-studies/hostel.png',
    title: 'Hostel Wale Bhaiya',
    desc: `A student-focused website for hostel inquiries. Users can discover, compare, and request details about hostels in their desired area.`,
  },
];

/** Turn "/path/name.mp4" → "/path/name.png" (or .jpg) if poster not passed */
function toPoster(videoSrc, ext = 'png') {
  if (!videoSrc) return '';
  const [path] = String(videoSrc).split('?');
  return path.replace(/\.[^/.]+$/, `.${ext}`);
}

/** ▶️ LazyVideo: shows image until video is ready; parent controls play/pause */
const LazyVideo = ({ src, poster, alt = 'Case study preview'}) => {
  const [posterSrc, setPosterSrc] = useState(() => poster || toPoster(src));

  // reset when src/poster changes
  useEffect(() => {
    setPosterSrc(poster || toPoster(src));
  }, [src, poster]);

  return (
    <div className="relative w-full h-[280px] bg-gray-900 rounded overflow-hidden">
      {/* Poster until video ready */}
      <img
        src={posterSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundImage: "url('/Case-studies.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl font-light tracking-widest mb-12">
          <span className="opacity-60">PROJECTS</span>{' '}
          <span className="font-bold">SHOWCASE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 md:gap-y-8">
          {caseStudies.map((item, index) => (
            <div
              key={item.id}
              className={`relative group transition-transform duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? 'md:mt-0' : 'md:mt-28'
              }`}
            >
              {/* ===== DESKTOP: current laptop UI ===== */}
              <div className="">
                {/* Laptop Container */}
                <div className="relative hidden md:block">
                  {/* Laptop Frame */}
                  <div className="relative bg-gray-800 rounded-t-lg p-3 shadow-2xl">
                    {/* Laptop Screen Bezel */}
                    <div className="bg-black rounded-lg p-2 relative overflow-hidden">
                      {/* Video Content */}
                      <div className="relative">
                        <LazyVideo poster={item.poster} />
                      </div>
                    </div>

                    {/* Laptop Bottom */}
                    <div className="h-2 bg-gray-700 rounded-b-lg relative">
                      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-b"></div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="relative">
                    <div className="w-full h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-lg"></div>
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-900 rounded-b-2xl transform scale-95"></div>
                  </div>
                </div>

                {/* Content (desktop text stays as-is) */}
                <div className="py-6 text-white flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
