import React from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function Navigation() {
  const { getCartCount } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-black">
              <span className="text-brand-red">Flavor</span>
              <span className="text-brand-yellow">Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-semibold transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-brand-red'
                    : 'text-brand-dark hover:text-brand-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative bg-brand-red hover:bg-red-700 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-dark w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-dark hover:text-brand-red transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-lg font-semibold transition-colors duration-300 ${
                  isActive(link.to)
                    ? 'text-brand-red bg-red-50'
                    : 'text-brand-dark hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
