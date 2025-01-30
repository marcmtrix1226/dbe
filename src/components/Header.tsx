import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useFormProtection } from '../hooks/useFormProtection';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { checkUnsavedChanges } = useFormProtection();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (checkUnsavedChanges()) {
      const confirmNavigation = window.confirm(
        'You have unsaved changes. Are you sure you want to refresh the page?'
      );
      if (!confirmNavigation) {
        return;
      }
    }

    const currentScrollPosition = window.scrollY;
    window.location.href = location.pathname;
    
    sessionStorage.setItem('scrollPosition', currentScrollPosition.toString());
  };

  React.useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition, 10),
        behavior: 'smooth'
      });
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="w-16 md:w-24"></div> {/* Reduced spacer width */}
          <div className="logo-container flex-shrink-0">
            <Link 
              to="/"
              className="flex items-center"
              onClick={handleLogoClick}
              aria-label="DBE - Design Build Enterprises - Return to Homepage"
            >
              <img 
                src="https://static.wixstatic.com/media/1393b9_8547421568204e16bca9afd7c624ad01~mv2.png/v1/fill/w_174,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1393b9_8547421568204e16bca9afd7c624ad01~mv2.png"
                alt="DBE - Design Build Enterprises Logo"
                className="object-cover transition-transform hover:scale-105"
              />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-orange-500 font-medium">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-orange-500 font-medium">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-orange-500 font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-500 font-medium">Contact</Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-orange-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-600 hover:text-orange-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-orange-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-orange-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}