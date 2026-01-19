import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Cookie, Database, UserCheck, Mail, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            content: `We collect information that you provide directly to us, including:
            
• **Personal Information**: Name, email address, phone number, and company details when you contact us or request our services.
• **Project Information**: Details about your project requirements, preferences, and specifications.
• **Communication Data**: Records of your interactions with us through email, phone, or contact forms.
• **Technical Data**: IP address, browser type, device information, and usage patterns when you visit our website.`
        },
        {
            icon: Eye,
            title: "How We Use Your Information",
            content: `We use the collected information for the following purposes:

• **Service Delivery**: To provide, maintain, and improve our web development and IT services.
• **Communication**: To respond to your inquiries, send project updates, and provide customer support.
• **Project Management**: To understand your requirements and deliver customized solutions.
• **Analytics**: To analyze website usage and improve user experience.
• **Marketing**: To send promotional materials about our services (with your consent).`
        },
        {
            icon: Lock,
            title: "Data Security",
            content: `We take the security of your personal information seriously and implement industry-standard measures:

• **Encryption**: All data transmissions are encrypted using SSL/TLS protocols.
• **Access Controls**: Limited access to personal information on a need-to-know basis.
• **Secure Storage**: Data stored on secure servers with regular backups.
• **Regular Audits**: Periodic security assessments and vulnerability testing.

While we strive to protect your data, no method of transmission over the Internet is 100% secure.`
        },
        {
            icon: Cookie,
            title: "Cookies and Tracking",
            content: `Our website uses cookies and similar tracking technologies to enhance your experience:

• **Essential Cookies**: Required for basic website functionality.
• **Analytics Cookies**: Help us understand how visitors use our website.
• **Performance Cookies**: Monitor website performance and identify issues.

You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.`
        },
        {
            icon: UserCheck,
            title: "Your Rights",
            content: `You have the following rights regarding your personal information:

• **Access**: Request access to the personal data we hold about you.
• **Correction**: Request correction of inaccurate or incomplete data.
• **Deletion**: Request deletion of your personal information (subject to legal obligations).
• **Opt-Out**: Unsubscribe from marketing communications at any time.
• **Data Portability**: Request a copy of your data in a structured format.

To exercise these rights, please contact us using the information provided below.`
        },
        {
            icon: Shield,
            title: "Third-Party Services",
            content: `We may use third-party service providers to help us operate our business:

• **Hosting Providers**: For website hosting and data storage.
• **Analytics Tools**: Such as Google Analytics to understand website usage.
• **Communication Platforms**: Email service providers and contact form processors.
• **Payment Processors**: For secure payment processing (if applicable).

These providers are contractually obligated to protect your data and use it only for specified purposes.`
        },
        {
            icon: Calendar,
            title: "Data Retention",
            content: `We retain your personal information only as long as necessary:

• **Active Clients**: Data retained for the duration of our business relationship.
• **Prospects**: Contact information retained for up to 2 years unless you opt out.
• **Legal Requirements**: Some data may be retained longer to comply with legal obligations.
• **Archived Projects**: Project-related data retained for reference purposes.

You can request deletion of your data at any time, subject to legal and contractual obligations.`
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-black">
            {/* Animated Background */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(213, 255, 63, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`
                }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-30 animate-pulse"
                        style={{
                            backgroundColor: i % 2 === 0 ? '#D5FF3F' : '#60A5FA',
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
                    <Link to="/" className="text-white font-bold text-2xl">
                        <img src="/Tech-Easew.png" alt="TechEase" className='h-16 w-auto cursor-pointer' />
                    </Link>
                    <Link
                        to="/"
                        className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center backdrop-blur-sm border rounded-full px-6 py-3 text-sm mb-6"
                            style={{
                                backgroundColor: 'rgba(213, 255, 63, 0.15)',
                                borderColor: 'rgba(213, 255, 63, 0.4)',
                                color: '#D5FF3F'
                            }}>
                            <Shield className="w-5 h-5 mr-2" />
                            Your Privacy Matters
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                                Privacy Policy
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg mb-4">
                            Last Updated: January 19, 2026
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            At <span style={{ color: '#D5FF3F' }} className="font-semibold">Tech Ease</span>,
                            we are committed to protecting your privacy and ensuring the security of your personal information.
                            This Privacy Policy explains how we collect, use, and safeguard your data.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(213, 255, 63, 0.1)' }}>
                                            <Icon className="w-6 h-6" style={{ color: '#D5FF3F' }} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mt-2">{section.title}</h2>
                                    </div>
                                    <div className="text-gray-300 leading-relaxed whitespace-pre-line pl-16">
                                        {section.content}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Changes Notice */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                            We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
                            Your continued use of our services after such changes constitutes acceptance of the updated policy.
                        </p>
                    </div>

                    {/* Back to Home Button */}
                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{ backgroundColor: '#D5FF3F' }}
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer Spacing */}
            <div className="h-20"></div>
        </div>
    );
};

export default PrivacyPolicy;
