import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, CreditCard, Clock, AlertTriangle, Scale, Users, Briefcase } from 'lucide-react';

const TermsAndConditions = () => {
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
            icon: CheckCircle,
            title: "1. Acceptance of Terms",
            content: `By accessing and using the services of Tech Ease Private Limited ("Tech Ease", "we", "us", or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and clients who access or use our web development, IT solutions, and related services.`
        },
        {
            icon: Briefcase,
            title: "2. Services Description",
            content: `Tech Ease provides professional web development and IT solutions, including but not limited to:

• **Website Development**: Custom website design and development
• **E-commerce Solutions**: Online store creation and management
• **Web Applications**: Custom web-based application development
• **Responsive Design**: Mobile-friendly website development
• **Maintenance & Support**: Ongoing website maintenance and technical support
• **Consulting Services**: IT consulting and digital strategy

The specific scope of services will be defined in individual project agreements or statements of work.`
        },
        {
            icon: Users,
            title: "3. User Responsibilities",
            content: `As a client or user of our services, you agree to:

• **Accurate Information**: Provide accurate, complete, and timely information required for project completion
• **Timely Feedback**: Respond to requests for feedback within agreed timeframes
• **Content Provision**: Supply all necessary content, images, and materials as per project requirements
• **Legal Compliance**: Ensure all provided content complies with applicable laws and regulations
• **Payment Obligations**: Make timely payments as per the agreed payment terms
• **Communication**: Maintain professional and respectful communication throughout the project

Failure to meet these responsibilities may result in project delays or additional charges.`
        },
        {
            icon: Scale,
            title: "4. Intellectual Property Rights",
            content: `**Client Content**: You retain all rights to content, images, and materials you provide to us.

**Developed Work**: Upon full payment, you will own the final deliverables as specified in the project agreement. However, we retain the right to:
• Use the project in our portfolio
• Showcase the work as a case study
• Apply our proprietary frameworks and tools

**Third-Party Assets**: Some projects may include third-party components (themes, plugins, libraries) that are subject to their respective licenses.

**Code Reuse**: We reserve the right to reuse general coding techniques, methodologies, and non-client-specific code in future projects.`
        },
        {
            icon: CreditCard,
            title: "5. Payment Terms",
            content: `Our standard payment structure is as follows:

• **Project Deposit**: 50% upfront payment required to commence work
• **Final Payment**: 50% due upon project completion and before delivery
• **Hourly Services**: Billed monthly with payment due within 15 days of invoice
• **Maintenance Plans**: Billed monthly or annually in advance

**Late Payments**: Invoices not paid within 30 days may incur a late fee of 2% per month. We reserve the right to suspend services for overdue accounts.

**Payment Methods**: We accept bank transfers, UPI, credit/debit cards, and other methods as agreed.`
        },
        {
            icon: Clock,
            title: "6. Project Timeline and Delivery",
            content: `**Estimated Timelines**: Project timelines are estimates based on the agreed scope and timely client cooperation. Standard delivery is 3-5 days for basic projects.

**Delays**: Timelines may be extended due to:
• Late client feedback or approvals
• Changes in project scope
• Unavailability of required third-party services
• Force majeure events

**Rush Projects**: Expedited delivery may be available for an additional fee of 25-50% depending on urgency.

**Project Completion**: A project is considered complete when all agreed deliverables are provided and client has approved the final work.`
        },
        {
            icon: AlertTriangle,
            title: "7. Warranties and Disclaimers",
            content: `**Our Warranty**: We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards.

**Limited Warranty Period**: We provide a 30-day warranty for bug fixes and technical issues arising from our work after project delivery.

**Disclaimers**:
• We do not guarantee specific business results or website traffic
• Third-party services and plugins are provided "as is"
• We are not responsible for content accuracy or legal compliance
• Search engine rankings and SEO results cannot be guaranteed

**No Warranties**: Except as expressly stated, all services are provided "as is" without warranties of any kind.`
        },
        {
            icon: Scale,
            title: "8. Limitation of Liability",
            content: `To the maximum extent permitted by law:

• Our total liability for any claims arising from our services shall not exceed the total fees paid by you for the specific project in question
• We shall not be liable for any indirect, incidental, special, or consequential damages
• We are not liable for losses resulting from third-party services, hosting issues, or events beyond our control
• We are not responsible for data loss; clients are responsible for maintaining backups

This limitation applies regardless of the legal theory upon which the claim is based.`
        },
        {
            icon: CheckCircle,
            title: "9. Indemnification",
            content: `You agree to indemnify, defend, and hold harmless Tech Ease, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:

• Your use of our services
• Your violation of these terms
• Content you provide to us
• Your violation of any third-party rights
• Any illegal or unauthorized use of the deliverables

We reserve the right to assume exclusive defense and control of any matter subject to indemnification.`
        },
        {
            icon: AlertTriangle,
            title: "10. Termination",
            content: `**Client Termination**: You may terminate the project at any time by providing written notice. You will be charged for:
• All completed work to date
• Any non-refundable expenses incurred
• Minimum 25% of remaining project value as cancellation fee

**Our Termination**: We may terminate services if:
• You breach these terms
• You fail to make timely payments
• You engage in abusive or unprofessional conduct
• The project becomes impractical or illegal

**Effect of Termination**: Upon termination, all outstanding payments become immediately due, and access to services will be suspended.`
        },
        {
            icon: Scale,
            title: "11. Governing Law",
            content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.

**Jurisdiction**: Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in [Your City/State], India.

**Dispute Resolution**: We encourage resolving disputes through good-faith negotiation. If unresolved, disputes may be referred to mediation before pursuing legal action.`
        },
        {
            icon: FileText,
            title: "12. Changes to Terms",
            content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website with an updated "Effective Date."

Your continued use of our services after such changes constitutes acceptance of the modified terms. We recommend reviewing these terms periodically.

For existing projects, the terms in effect at the time of project commencement will apply unless otherwise agreed in writing.`
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
                                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                                borderColor: 'rgba(59, 130, 246, 0.4)',
                                color: '#60A5FA'
                            }}>
                            <FileText className="w-5 h-5 mr-2" />
                            Legal Agreement
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                                Terms & Conditions
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg mb-4">
                            Effective Date: January 19, 2026
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            Welcome to <span style={{ color: '#D5FF3F' }} className="font-semibold">Tech Ease</span>.
                            Please read these Terms and Conditions carefully before using our services.
                            These terms govern your relationship with us and outline the rights and responsibilities of both parties.
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
                                    style={{ transitionDelay: `${index * 80}ms` }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 rounded-xl" style={{ backgroundColor: index % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(213, 255, 63, 0.1)' }}>
                                            <Icon className="w-6 h-6" style={{ color: index % 2 === 0 ? '#60A5FA' : '#D5FF3F' }} />
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

export default TermsAndConditions;
