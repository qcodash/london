import React from 'react';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partner with Britain's Most Exciting Organic Beauty Brand
          </h1>
          <p className="text-xl text-gray-600">
            Join the True Organics London family and offer your customers the finest in natural skincare luxury.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-8">
            Our wholesale programme provides exceptional margins, comprehensive support, and products that practically sell themselves.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Become a Wholesale Partner
          </button>
        </div>
      </section>
    </div>
  );
}
