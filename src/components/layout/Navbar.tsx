import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Heart, User } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount, toggleCart } = useCart();
  const location = useLocation();

  const navigation = [
    { name: 'Shop', href: '#', dropdown: [
      { name: 'Body Butters', href: '/collections/body-butters' },
      { name: 'Body Oils', href: '/collections/body-oils' },
      { name: 'Body Scrubs', href: '/collections/body-scrubs' },
      { name: 'Hair Growth Oil', href: '/collections/hair-care' },
      { name: 'Gift Bundles', href: '/collections/gift-bundles' },
      { name: 'Men\'s Collection', href: '/collections/mens-collection' },
    ]},
    { name: 'About', href: '/about' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const itemCount = getItemCount();

  return (
    <nav className="bg-white shadow-sm border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-amber-800">
                TRUE ORGANICS
                <span className="block text-sm font-medium text-amber-600 tracking-widest">
                  LONDON
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                        {item.name}
                      </button>
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-amber-600 border-b-2 border-amber-600'
                          : 'text-gray-700 hover:text-amber-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className="text-gray-700 hover:text-amber-600 transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="text-gray-700 hover:text-amber-600 transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <div className="text-gray-700 block px-3 py-2 text-base font-medium">
                      {item.name}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="text-gray-500 block px-6 py-2 text-sm hover:text-amber-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-amber-100">
            <div className="flex items-center px-5 space-x-3">
              <button className="text-gray-700 hover:text-amber-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-amber-600">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-amber-600">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
