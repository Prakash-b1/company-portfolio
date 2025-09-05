import React, { useState } from 'react';
import { Mail, User, Phone, Building, MessageSquare, X } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactForm = ({
    isPopup = false,
    isOpen = false,
    onClose = () => { },
    title = "Contact Us",
    buttonText = "Send Message",
    onSubmit = (data) => console.log(data),
    className = ""
}) => {
    const [formData, setFormData] = useState({
        email: '',
        companyName: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_ffdoupj';
    const EMAILJS_TEMPLATE_ID = 'template_emj7ppt';
    const EMAILJS_TEMPLATE_ID_CONFIRMATION = 'template_uhks8od';
    const EMAILJS_PUBLIC_KEY = 'WYOzs0cnKdRZ3WKww';

    const handleInputChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const isFormValid = () => {
        return formData.email.trim() &&
            formData.companyName.trim() &&
            formData.phone.trim() &&
            formData.message.trim();
    };

    // Function to send inquiry details to you (Admin)
    const sendInquiryToAdmin = async (data) => {
        const templateParams = {
            from_name: data.companyName,
            from_email: data.email,
            reply_to: data.email,
            phone: data.phone,
            company_name: data.companyName,
            message: data.message,
            inquiry_date: new Date().toLocaleDateString(),
            inquiry_time: new Date().toLocaleTimeString(),
        };

        console.log('Sending to admin with params:', templateParams);
        
        return emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );
    };

    // Function to send thank you message to user
    const sendConfirmationToUser = async (data) => {
        const templateParams = {
            to_name: data.companyName,
            to_email: data.email,
            user_email: data.email, // Alternative parameter name
            company_name: data.companyName,
            user_name: data.companyName,
            reply_message: `Dear ${data.companyName},

Thank you for contacting us! We have received your inquiry and our team will get back to you within 24-48 hours.

Your inquiry details:
- Company: ${data.companyName}
- Email: ${data.email}
- Phone: ${data.phone}
- Message: ${data.message}

We appreciate your interest and will contact you soon.

Best regards,
TechEase Team`,
        };

        console.log('Sending confirmation with params:', templateParams);

        return emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID_CONFIRMATION,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            toast.error("Please fill all fields");
            return;
        }

        setIsSubmitting(true);

        try {
            // Log inquiry info
            console.log('New Inquiry Received:', {
                ...formData,
                timestamp: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });

            // Send inquiry details to admin email
            console.log('Sending inquiry to admin...');
            await sendInquiryToAdmin(formData);
            console.log('✅ Inquiry sent to admin successfully');

            // Send confirmation email to user
            console.log('Sending confirmation to user...');
            await sendConfirmationToUser(formData);
            console.log('✅ Confirmation email sent to user');

            // Call original onSubmit if provided
            await onSubmit(formData);

            // Show success messages
            toast.success('Thank you! We will contact you soon.', {
                duration: 4000,
                icon: '🎉',
            });

            setTimeout(() => {
                toast.success(`Confirmation email sent to ${formData.email}`, {
                    duration: 3000,
                });
            }, 1000);

            // Reset form
            setFormData({
                email: '',
                companyName: '',
                phone: '',
                message: ''
            });

            if (isPopup) onClose();

        } catch (error) {
            console.error('❌ Form submission error:', error);
            console.error('Error details:', error.text || error.message);

            // Log inquiry details even if email fails
            console.log('Inquiry Details (Email failed):', {
                ...formData,
                timestamp: new Date().toISOString(),
                error: error.message || error.text
            });

            // Show user-friendly error message
            toast.error('There was an issue sending your message. Please try again or contact us directly.', {
                duration: 4000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='contact' className="w-full max-w-md mx-auto">
            <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg relative ${className}`}>
                {isPopup && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                )}

                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-center">
                        Get in touch with us. We'd love to hear from you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Company Name Field */}
                    <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company Name *"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number *"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                            name="message"
                            placeholder="Your Message *"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </div>
                        ) : buttonText}
                    </button>
                </form>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default ContactForm;
