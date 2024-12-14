import React, { useState } from 'react';
import logo from '../images/logo.png';
import avatar from '../images/avatar.png';
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img 
              src= {logo}
              alt="Homely Properties" 
              className="h-10 object-contain"
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/dashboard" className="text-sm font-medium">
              Dashboard
            </a>
            <a href="/manage-listing" className="text-sm font-medium">
              Manage listings
            </a>
            <a href="/properties" className="text-sm font-medium">
              Properties analytics
            </a>
            <a href="/subscription" className="text-sm font-medium">
              Subscription
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src= {avatar}
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <a href="/dashboard" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Dashboard
          </a>
          <a href="/manage-listing" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Manage listings
          </a>
          <a href="/properties" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Properties analytics
          </a>
          <a href="/subscription" className="block px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Subscription
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;

