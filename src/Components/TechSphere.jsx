import React from 'react';
import { Settings, TrendingUp, Cpu, LifeBuoy, Layers, ShieldCheck } from 'lucide-react';

const TechSphere = () => {
    const features = [
        {
            id: 1,
            position: 'top',
            title: 'End-to-End Solutions',
            description: 'Web Development, Mobile Apps, E-commerce & Custom Software',
            icon: Settings
        },
        {
            id: 2,
            position: 'top-right',
            title: 'Performance Driven',
            description: 'Fast Loading, SEO Optimized, Conversion Focused Designs',
            icon: TrendingUp
        },
        {
            id: 3,
            position: 'right',
            title: 'Modern Tech Stack',
            description: 'React, Node.js, Next.js, MongoDB, Advanced Cloud Solutions',
            icon: Cpu
        },
        {
            id: 4,
            position: 'bottom-right',
            title: '24/7 Support',
            description: 'Development, Deployment, Maintenance & Growth Strategy',
            icon: LifeBuoy
        },
        {
            id: 5,
            position: 'bottom-left',
            title: 'Integrated Ecosystem',
            description: 'Payment Gateways, Analytics, CRM, Social Media & Third-party APIs',
            icon: Layers
        },
        {
            id: 6,
            position: 'left',
            title: 'Quality Assured',
            description: 'Tested Code, Security First, Scalable Architecture',
            icon: ShieldCheck
        }
    ];

    const getPositionClasses = (position) => {
        const baseClasses = 'absolute w-86 p-4 bg-[#272727] text-white rounded-lg';

        switch (position) {
            case 'top':
                return `${baseClasses} -top-[2rem] left-[-10rem] transform -translate-x-1/2`;
            case 'top-right':
                return `${baseClasses} -top-[2rem] -right-[21rem] transform `;
            case 'right':
                return `${baseClasses} top-1/2 -right-[25rem] transform -translate-y-1/2`;
            case 'bottom-right':
                return `${baseClasses} -bottom-[3rem] -right-[21rem] transform `;
            case 'bottom-left':
                return `${baseClasses} -bottom-[25px] -left-[22rem] transform `;
            case 'left':
                return `${baseClasses} top-1/2 -left-[24rem] transform -translate-y-1/2`;
            default:
                return baseClasses;
        }
    };

    return (
        <div id='about' className="min-h-[100vh] bg-black flex flex-col items-center justify-center p-8">
            <div className="text-center mb-8 sm:mb-16">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
                    Why Choose Tech Ease for Your Digital Solutions?
                </h1>
                {/* <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">
                    Making Technology Simple. Building Digital Success Stories.
                </p> */}
            </div>

            <div className="relative hidden md:block">
                {/* Central Circle Container */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                    <div className="absolute inset-0 -m-[46px] flex items-center justify-center pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#9CA3AF" stopOpacity="1" />
                                    <stop offset="50%" stopColor="#9CA3AF" stopOpacity="1" />
                                    <stop offset="60%" stopColor="#9CA3AF" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="100"
                                cy="100"
                                r="96"
                                fill="none"
                                stroke="url(#fadeGradient)"
                                strokeWidth="2"
                                strokeDasharray="16 8"
                            />
                        </svg>
                    </div>

                    {/* Gradient circles */}
                    <div className="absolute inset-4 m-[-25px] rounded-full bg-gradient-to-br from-[#393939] to-[#F5F5F5]"></div>
                    <div className="absolute inset-8 m-[-15px] rounded-full bg-gradient-to-br from-[#363636] to-[#E9E9E9]"></div>
                    <div className="absolute inset-12 rounded-full bg-gradient-to-b from-[#060606] from-60% to-[#BEBEBE]"></div>

                    {/* Center content - Tech Ease Logo */}
                    <div className="relative z-10 text-center">
                        <img src="/Tech-Easew.png" alt="Tech Ease Logo" className='h-16 w-auto cursor-pointer' />
                    </div>

                    {/* Top indicator dot */}
                    <div className="absolute -top-[53px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full">
                        <div className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-[#C8F528] shadow-md"></div>
                    </div>
                </div>

                {/* Feature Cards */}
                {features.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={feature.id} className={getPositionClasses(feature.position)}>
                            <div className="flex relative items-start space-x-3">
                                <div className={`flex-1 ${feature.position.includes('right') ? 'ml-10 text-left' : 'mr-10 text-right'}`}>
                                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                                <div
                                    className={`absolute ${feature.position.includes('right') ? 'left-[-3rem]' : 'right-[-41px]'} w-16 h-16 rounded-full flex items-center justify-center text-lg`}
                                    style={{ background: 'linear-gradient(180deg, #000000 0%, #7A7A7A 100%)' }}
                                >
                                    <IconComponent size={32} color="white" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className='md:hidden relative space-y-6'>
                {features.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={feature.id} className="p-4 bg-[#272727] text-white rounded-lg">
                            <div className="flex relative items-start space-x-3">
                                <div className={`flex-1 ml-6`}>
                                    <h3 className="font-semibold text-md mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                                <div
                                    className={`absolute left-[-45px] w-16 h-16 rounded-full flex items-center justify-center text-lg`}
                                    style={{ background: 'linear-gradient(180deg, #000000 0%, #7A7A7A 100%)' }}
                                >
                                    <IconComponent size={32} color="white" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

          
        </div>
    );
};

export default TechSphere;
