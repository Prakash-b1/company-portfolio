import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import React from 'react';

export default function  TeFooter() {

    return (
        <footer className="bg-black text-white">


            <div className="border-t border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
                        {/* top links line */}
                        <div className="flex flex-wrap items-center gap-2 justify-center">
                            <a href="#" className="hover:text-lime-400 transition-colors whitespace-nowrap">
                                Terms Of Use
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="hover:text-lime-400 transition-colors whitespace-nowrap">
                                Privacy Policy
                            </a>
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