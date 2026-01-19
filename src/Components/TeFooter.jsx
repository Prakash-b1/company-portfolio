import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function TeFooter() {

    return (
        <footer className="bg-black text-white">


            <div className="border-t border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
                        {/* top links line */}
                        <div className="flex flex-wrap items-center gap-2 justify-center">
                            <Link to="/terms-and-conditions" className="hover:text-lime-400 transition-colors whitespace-nowrap">
                                Terms Of Use
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link to="/privacy-policy" className="hover:text-lime-400 transition-colors whitespace-nowrap">
                                Privacy Policy
                            </Link>
                            <span className="text-gray-600">|</span>
                            <span className="whitespace-nowrap">All Rights Reserved</span>
                        </div>
                        {/* copyright line */}
                        <div className="text-center">
                            <span>© Tech Ease Private Limited</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}