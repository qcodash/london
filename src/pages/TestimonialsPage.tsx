import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "London",
      rating: 5,
      text: "I've never experienced skincare like this. The vanilla shea butter transformed my chronically dry skin in just three days. It's like wrapping yourself in luxury every single day.",
      product: "Shea and Mango Body Butter"
    },
    {
      name: "Michael T.",
      location: "Birmingham",
      rating: 5,
      text: "As someone with sensitive skin, I was sceptical about trying new products. True Organics changed everything. My skin has never looked better, and the scent is absolutely divine.",
      product: "Liquid Gold Body Oil"
    },
    {
      name: "Priya K.",
      location: "Manchester",
      rating: 5,
      text: "The hair growth oil is miraculous. After six weeks, my hair is noticeably thicker and shinier. I've recommended it to all my friends.",
      product: "Hair Growth Elixir"
    },
    {
      name: "Emma L.",
      location: "Edinburgh",
      rating: 5,
      text: "Finally, skincare that works as beautifully as it promises. The body butter is now an essential part of my daily routine.",
      product: "Shea and Mango Body Butter"
    },
    {
      name: "James R.",
      location: "London",
      rating: 5,
      text: "I was hesitant about using body butter as a man, but the results speak for themselves. My skin has never felt better, and the products don't feel 'feminine' at all.",
      product: "Men's Body Butter"
    },
    {
      name: "Amanda S.",
      location: "Liverpool",
      rating: 5,
      text: "After trying countless products for my eczema-prone skin, True Organics was the first to actually make a difference. No reactions, just beautiful, healthy skin.",
      product: "Liquid Gold Body Oil"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real People, Real Results
          </h1>
          <p className="text-xl text-gray-600">
            Discover why thousands of customers have transformed their skincare routine with True Organics London.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.location} • {testimonial.product}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-gray-600 mb-6">
            Experience the transformative power of True Organics London for yourself.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Shop Our Collection
          </button>
        </div>
      </section>
    </div>
  );
}
