import React from 'react';
import PopupButton from './PopupButton';
import { 
    Code, 
    Smartphone, 
    Cloud, 
    Server, 
    Layout, 
    LifeBuoy 
} from 'lucide-react';

const services = [
    {
        key: 'web-development',
        title: 'WEB DEVELOPMENT',
        subtitle: 'React, Next.js, Node.js, Full-Stack',
        icon: Code,
    },
    {
        key: 'mobile-development',
        title: 'MOBILE DEVELOPMENT',
        subtitle: 'iOS, Android, React Native, Flutter',
        icon: Smartphone,
    },
    {
        key: 'cloud-solutions',
        title: 'CLOUD SOLUTIONS',
        subtitle: 'AWS, Azure, Google Cloud, DevOps',
        icon: Cloud,
    },
    {
        key: 'api-development',
        title: 'API DEVELOPMENT',
        subtitle: 'REST APIs, GraphQL, Integrations',
        icon: Server,
    },
    {
        key: 'ui-ux-design',
        title: 'UI/UX DESIGN',
        subtitle: 'Design Systems, Prototyping, User Research',
        icon: Layout,
    },
    {
        key: 'support-maintenance',
        title: 'SUPPORT & MAINTENANCE',
        subtitle: '24/7 Support, Updates, Performance Optimization',
        icon: LifeBuoy,
    },
];

const ServiceCard = ({ title, subtitle, icon: IconComponent }) => (
    <div className="relative bg-[#1f1f23] shadow-xl flex flex-col pt-8 pb-6 px-4 sm:px-6 min-h-[180px] sm:min-h-[200px] rounded-lg">
        {/* top overlapping circle with icon */}
        <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#27272d] rounded-full flex items-center justify-center shadow-md">
                <IconComponent 
                    size={24}
                    color="white"
                    strokeWidth={1.5}
                    className="sm:w-8 sm:h-8"
                />
            </div>
        </div>

        {/* content */}
        <div className="flex-1 flex flex-col items-center justify-center mt-6 sm:mt-8 mb-4">
            <h3 className="text-white text-lg sm:text-xl font-semibold tracking-wide text-center leading-tight">
                {title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 text-center leading-relaxed px-2">
                {subtitle}
            </p>
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-[#A8FF00]/30 to-transparent pointer-events-none" />
    </div>
);

const ServicesGrid = () => (
    <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide sm:tracking-widest mb-8 sm:mb-12 px-4">
                <span className="opacity-60 block sm:inline">COMPREHENSIVE TECH</span>{' '}
                <span className="font-bold block sm:inline mt-1 sm:mt-0">SOLUTIONS & SERVICES</span>
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {services.map(service => (
                    <ServiceCard 
                        key={service.key} 
                        title={service.title} 
                        subtitle={service.subtitle} 
                        icon={service.icon} 
                    />
                ))}
            </div>

        </div>
    </section>
);

export default ServicesGrid;
