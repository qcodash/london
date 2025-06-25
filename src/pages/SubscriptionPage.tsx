import React from 'react';

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Never Run Out of Your Skincare Essentials Again
          </h1>
          <p className="text-xl text-gray-600">
            Your skin thrives on consistency. Our subscription service ensures you never run out of your favourite products whilst saving money and time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Single Product</h3>
              <p className="text-gray-600">Save £2 per delivery</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Duo Subscription</h3>
              <p className="text-gray-600">10% Discount</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Complete Collection</h3>
              <p className="text-gray-600">20% Discount</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
