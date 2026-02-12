import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black mb-4">
              <span className="text-brand-red">Flavor</span>
              <span className="text-brand-yellow">Hub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Serving delicious fast food with fresh ingredients since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-red hover:bg-red-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-brand-red hover:bg-red-700 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-brand-red hover:bg-red-700 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-brand-red transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-brand-yellow flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Opening Hours
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 10:00 AM - 11:00 PM</li>
              <li>Saturday: 10:00 AM - 12:00 AM</li>
              <li>Sunday: 11:00 AM - 10:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-brand-yellow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span>123 Food Street, Flavor Town, FT 12345</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 FlavorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
