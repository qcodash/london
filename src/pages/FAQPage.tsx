import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Absolutely. Our gentle, organic formulations are crafted specifically to nourish and soothe sensitive skin types. All ingredients are carefully selected for their purity and skin-loving properties."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most customers notice improved skin texture and hydration within 24-48 hours. For optimal results, we recommend consistent daily use for 2-4 weeks."
    },
    {
      question: "Are your products truly organic?",
      answer: "Yes, we use certified organic ingredients wherever possible, with minimal organic preservatives to ensure product safety and longevity whilst maintaining our commitment to natural purity."
    },
    {
      question: "Do you test on animals?",
      answer: "Never. We are proudly cruelty-free and vegan-friendly, committed to ethical beauty practices that harm no living creatures."
    },
    {
      question: "Where are your products manufactured?",
      answer: "All True Organics London products are handcrafted in our London facilities, ensuring the highest British standards of quality and safety."
    },
    {
      question: "What makes your shea butter different?",
      answer: "Our shea butter is unrefined and hand-harvested directly from wild trees in Ghana, preserving all the natural vitamins and nutrients that are often lost in commercial processing."
    },
    {
      question: "Can men use your products?",
      answer: "Absolutely! While we have a dedicated men's range, all our products are suitable for everyone. Great skincare knows no gender boundaries."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Free UK shipping is available on orders over £30."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund."
    },
    {
      question: "How should I store the products?",
      answer: "Store in a cool, dry place away from direct sunlight. Our natural formulations maintain their effectiveness for 12-18 months when stored properly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Questions, Our Answers
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to the most frequently asked questions about True Organics London products and services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to help you find the perfect products for your skincare routine.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
