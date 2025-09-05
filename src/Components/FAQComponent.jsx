import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What technologies and platforms do you work with?",
      answer: "We work with modern tech stacks including React, Next.js, Node.js, Python, MongoDB, PostgreSQL, AWS, Azure, and Google Cloud. Our expertise spans web development, mobile apps (iOS/Android), cloud solutions, API development, and UI/UX design."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary based on complexity and requirements. Simple websites take 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed timelines during our discovery phase and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support. We provide flexible maintenance packages tailored to your specific needs."
    },
    {
      question: "Can you work with our existing systems and legacy applications?",
      answer: "Absolutely! We specialize in system integration, legacy modernization, and API development. Whether you need to upgrade existing systems, integrate new solutions, or migrate to modern platforms, our team ensures seamless transitions with minimal disruption to your operations."
    },
    {
      question: "How do you handle project pricing and billing?",
      answer: "We offer transparent, milestone-based pricing with no hidden costs. Projects can be billed per milestone, monthly retainers, or fixed-price contracts. We provide detailed proposals with clear breakdowns and accept various payment methods to suit your business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-7xl w-full flex-col md:flex-row flex gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start">
          <h1 className="text-white text-[24px] md:text-6xl font-semibold mb-2 md:mb-4">
            Frequently Asked<br className='md:block hidden' /> Questions
          </h1>
          <p className="text-gray-400 text-sm md:text-xl">
            Trusted by 100+ businesses across<br />
            diverse industries worldwide.
          </p>
        </div>

        {/* Right Section - FAQ Items */}
        <div className="flex-1 bg-[#6B728038] rounded-lg p-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer flex items-center justify-between py-4 text-left focus:outline-none hover:bg-gray-750 transition-colors duration-200 group"
                >
                  <span className="text-white text-lg font-medium pr-4 group-hover:text-gray-200 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ease-in-out group-hover:text-gray-300 ${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100 pb-4' 
                      : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className="transform transition-transform duration-300 ease-in-out">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
