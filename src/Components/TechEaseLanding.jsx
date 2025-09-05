import { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Zap, Shield, ArrowRight, Star } from 'lucide-react';

const TechEaseLanding = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const services = [
        { icon: Code, title: "Website Development", desc: "Custom websites built for your unique needs" },
        { icon: Smartphone, title: "E-commerce Solutions", desc: "Complete online stores that convert visitors" },
        { icon: Zap, title: "Custom Web Apps", desc: "Powerful applications for your business" },
        { icon: Shield, title: "Responsive Design", desc: "Perfect experience on every device" }
    ];

    const stats = [
        { number: "7+", label: "Projects Completed" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "Fresh", label: "Ideas & Approach" },
        { number: "3-5", label: "Days Delivery" }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden"
            style={{
                backgroundImage: "url('/HeroSectionBg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Animated Background Overlay */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(213, 255, 63, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`
                }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-40 animate-pulse"
                        style={{
                            backgroundColor: i % 3 === 0 ? '#D5FF3F' : '#60A5FA',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">
                        {/* Tech<span style={{ color: '#D5FF3F' }}>Ease</span> */}
                         <img src="/Tech-Easew.png" alt="" className=' h-16 w-auto cursor-pointer '/>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 text-white/80">
                        <a href="#services" className="hover:text-white transition-colors hover:drop-shadow-lg" style={{ '&:hover': { color: '#D5FF3F' } }}>Services</a>
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 px-6 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="text-white space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center backdrop-blur-sm border rounded-full px-4 py-2 text-sm mb-6"
                                 style={{ 
                                     backgroundColor: 'rgba(213, 255, 63, 0.15)',
                                     borderColor: 'rgba(213, 255, 63, 0.4)',
                                     color: '#D5FF3F'
                                 }}>
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Professional Web Development Agency
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                                    TRANSFORM YOUR
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    DIGITAL PRESENCE
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
                                We create stunning websites and powerful web applications that help your business
                                <span className="font-semibold" style={{ color: '#D5FF3F' }}> stand out </span>
                                and drive real results.
                            </p>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
                                {services.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                            style={{ 
                                                transitionDelay: `${index * 100}ms`,
                                                ':hover': {
                                                    backgroundColor: 'rgba(213, 255, 63, 0.1)',
                                                    borderColor: 'rgba(213, 255, 63, 0.3)',
                                                }
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = 'rgba(213, 255, 63, 0.1)';
                                                e.target.style.borderColor = 'rgba(213, 255, 63, 0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            }}
                                        >
                                            <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-all duration-300" 
                                                  style={{ color: index % 2 === 0 ? '#D5FF3F' : '#60A5FA' }} />
                                            <h3 className="text-white font-semibold text-sm mb-2">{service.title}</h3>
                                            <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto pt-16">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                        style={{ transitionDelay: `${800 + index * 100}ms` }}
                                    >
                                        <div className="text-3xl lg:text-4xl font-bold mb-2"
                                             style={{ color: index % 2 === 0 ? '#D5FF3F' : '#60A5FA' }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-300 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-6 items-center pt-12 text-gray-400">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-2 animate-pulse"
                                         style={{ backgroundColor: '#D5FF3F' }}></div>
                                    <span className="text-sm">New to market</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                                    <span className="text-sm">Competitive pricing</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full mr-2 animate-pulse"
                                         style={{ backgroundColor: '#D5FF3F' }}></div>
                                    <span className="text-sm">Quality guaranteed</span>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="pt-16">
                                <ChevronDown className="w-6 h-6 text-white/60 mx-auto animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TechEaseLanding;