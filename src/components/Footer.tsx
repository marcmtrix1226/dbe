import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Thermometer, Facebook, X, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Thermometer className="h-6 w-6 text-orange-400" />
              <span className="ml-2 text-xl font-bold">DBE</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for all HVAC needs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="tel:+17187971335"
                  className="flex items-center hover:text-white transition-colors"
                  aria-label="Call DBE at (718) 797-1335"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(718) 797-1335</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@dbe.nyc"
                  className="flex items-center hover:text-white transition-colors"
                  aria-label="Email DBE at info@dbe.nyc"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@dbe.nyc</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/DesignBuildEnterprises/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/DBe_Ltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/dbe_ltd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DBE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}