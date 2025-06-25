import React from 'react';

export default function IngredientsPage() {
  const ingredients = [
    {
      name: "Shea Butter",
      subtitle: "The Golden Treasure of Ghana",
      description: "Hand-harvested from wild shea trees that have flourished in Ghana's savannahs for over 1,000 years. Rich in vitamins A, E, and F, our unrefined shea butter provides deep moisturisation whilst supporting natural collagen production and protecting against environmental damage.",
      benefits: [
        "Deep moisturisation and skin protection",
        "Rich in vitamins and fatty acids",
        "Anti-inflammatory properties",
        "Supports natural collagen production",
        "Protects against environmental damage"
      ],
      image: "/images/ingredients_showcase.png"
    },
    {
      name: "Shea Oil",
      subtitle: "Liquid Gold for Your Skin",
      description: "The concentrated essence of shea butter in its purest form. This lightweight yet intensely nourishing oil absorbs instantly, delivering powerful anti-inflammatory benefits whilst leaving skin impossibly soft and radiant.",
      benefits: [
        "Lightweight, fast-absorbing formula",
        "Powerful anti-inflammatory properties",
        "Deep nourishment without grease",
        "Enhances skin's natural radiance",
        "Suitable for all skin types"
      ],
      image: "/images/body_oils_collection.png"
    },
    {
      name: "Mango Butter",
      subtitle: "India's Exotic Beauty Secret",
      description: "Sourced from the seeds of India's finest mangoes, this luxurious butter offers superior moisturising properties with a silky, non-greasy finish. Rich in antioxidants and oleic acid, it helps restore skin's natural barrier whilst providing long-lasting hydration.",
      benefits: [
        "Superior moisturising properties",
        "Rich in antioxidants and oleic acid",
        "Restores skin's natural barrier",
        "Silky, non-greasy finish",
        "Long-lasting hydration"
      ],
      image: "/images/product_collection_flatlay.png"
    },
    {
      name: "Vanilla Essence",
      subtitle: "The Sensual Soul of Madagascar",
      description: "More than just fragrance, our pure vanilla essence contains natural compounds that soothe and calm the skin whilst creating an intoxicating sensory experience that transforms your daily routine into a moment of pure luxury.",
      benefits: [
        "Natural skin-soothing compounds",
        "Calming and relaxing properties",
        "Luxurious sensory experience",
        "Pure Madagascar vanilla",
        "Aromatherapy benefits"
      ],
      image: "/images/lifestyle_application.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nature's Most Powerful Beauty Secrets
          </h1>
          <p className="text-xl text-gray-600">
            Discover the ancient ingredients that have been transforming skin for thousands of years.
          </p>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {ingredients.map((ingredient, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{ingredient.name}</h2>
                    <h3 className="text-xl text-amber-600 font-medium mb-4">{ingredient.subtitle}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{ingredient.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {ingredient.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
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
            Experience These Powerful Ingredients
          </h2>
          <p className="text-gray-600 mb-6">
            Discover how these ancient beauty secrets can transform your skin in our carefully crafted formulations.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Shop Our Collection
          </button>
        </div>
      </section>
    </div>
  );
}
