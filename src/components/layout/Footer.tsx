import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold text-amber-400 mb-4">
              TRUE ORGANICS
              <span className="block text-sm font-medium tracking-widest">
                LONDON
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Where ancient Ghanaian wisdom meets modern London luxury. 
              Transform your skin with nature's purest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-400">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections/body-butters" className="text-gray-300 hover:text-white transition-colors">Body Butters</Link></li>
              <li><Link to="/collections/body-oils" className="text-gray-300 hover:text-white transition-colors">Body Oils</Link></li>
              <li><Link to="/collections/body-scrubs" className="text-gray-300 hover:text-white transition-colors">Body Scrubs</Link></li>
              <li><Link to="/collections/hair-care" className="text-gray-300 hover:text-white transition-colors">Hair Growth Oil</Link></li>
              <li><Link to="/collections/gift-bundles" className="text-gray-300 hover:text-white transition-colors">Gift Bundles</Link></li>
              <li><Link to="/collections/mens-collection" className="text-gray-300 hover:text-white transition-colors">Men's Collection</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-400">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/ingredients" className="text-gray-300 hover:text-white transition-colors">Ingredients</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/wholesale" className="text-gray-300 hover:text-white transition-colors">Wholesale</Link></li>
              <li><Link to="/subscription" className="text-gray-300 hover:text-white transition-colors">Subscription</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-amber-400">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-medium mb-2 text-amber-400">Join Our Beauty Revolution</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get exclusive offers, beauty tips, and be the first to know about new product launches.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            <p>&copy; 2024 True Organics London. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              <span>100% Organic</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Cruelty-Free</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Handcrafted in London</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
