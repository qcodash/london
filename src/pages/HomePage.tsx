import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Award, Heart, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { products, collections } from '../data/products';

export default function HomePage() {
  const { addToCart } = useCart();

  const featuredProduct = products.find(p => p.id === 'shea-mango-body-butter');

  const testimonials = [
    {
      name: "Sarah M.",
      location: "London",
      rating: 5,
      text: "I've never experienced skincare like this. The vanilla shea butter transformed my chronically dry skin in just three days."
    },
    {
      name: "Michael T.",
      location: "Birmingham", 
      rating: 5,
      text: "As someone with sensitive skin, I was sceptical about trying new products. True Organics changed everything."
    },
    {
      name: "Priya K.",
      location: "Manchester",
      rating: 5,
      text: "The hair growth oil is miraculous. After six weeks, my hair is noticeably thicker and shinier."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_banner_journey.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  From Ghana's Ancient Wisdom to{' '}
                  <span className="text-amber-600">London's Modern Luxury</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  In the sun-drenched villages of Ghana, where the earth holds centuries of beauty secrets, 
                  women have passed down the sacred art of skincare through generations. True Organics London 
                  was born from this profound heritage - a bridge between ancestral wisdom and contemporary luxury.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/collections/body-butters"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  Discover Your Skin's Ancestral Glow
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero_banner_journey.png"
                alt="True Organics London Journey"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 text-amber-600 font-medium">
                  <Leaf className="h-5 w-5" />
                  <span>100% Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-sm font-medium text-gray-700">100% Organic</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Heart className="h-8 w-8 text-pink-600" />
              <span className="text-sm font-medium text-gray-700">Cruelty-Free</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Paraben Free</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="h-8 w-8 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Handcrafted in London</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Truck className="h-8 w-8 text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Free UK Shipping</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="h-8 w-8 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    The Royal Treatment Your Skin Has Been Craving
                  </h2>
                  <h3 className="text-xl font-medium text-amber-600">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {featuredProduct.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-amber-600">£{featuredProduct.price}</span>
                    <span className="text-gray-500">• {featuredProduct.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-gray-600 ml-2">(2,847 reviews)</span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(featuredProduct)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors w-full sm:w-auto"
                >
                  Transform Your Skin Tonight - Add to Basket
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Collections Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Discover Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each collection represents centuries of botanical wisdom, refined through modern science 
              to deliver transformative results for your skin and hair.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(collections).map(([key, collection]) => (
              <Link
                key={key}
                to={`/collections/${key}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={collection.hero}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Discover why thousands of customers have transformed their skincare routine with True Organics London
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-medium text-gray-900">
                  {testimonial.name}
                  <span className="text-gray-500 font-normal">, {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              Read More Reviews
              <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Skin. Transform Your Life.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of customers who have discovered the power of ancient Ghanaian beauty secrets.
            Free UK shipping on orders over £30.
          </p>
          <Link
            to="/collections/body-butters"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}
