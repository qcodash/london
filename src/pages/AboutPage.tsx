import React from 'react';
import { Heart, Globe, Users, Award, Leaf, Shield } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Ethical Sourcing',
      description: 'Direct partnerships with Ghanaian cooperatives'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Transparency',
      description: 'Complete ingredient disclosure and sourcing information'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: 'Sustainability',
      description: 'Environmentally responsible practices throughout our supply chain'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: 'Quality',
      description: 'Handcrafted in London to the highest British standards'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Community Support',
      description: 'Every purchase supports Ghanaian communities'
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-500" />,
      title: 'Cruelty-Free',
      description: 'Never tested on animals, always vegan-friendly'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Where Ancient Wisdom Meets{' '}
                <span className="text-amber-600">Modern Excellence</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                True Organics London was born from a profound realisation: the most effective 
                skincare ingredients aren't found in laboratories - they've been thriving in 
                nature for thousands of years.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/ingredients_showcase.png"
                alt="Ghana heritage"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Our story begins in Ghana, the legendary land of gold and beauty, where women have 
              perfected the art of natural skincare across generations. Here, in the sun-soaked 
              savannahs, the magnificent shea tree grows wild and free, its nuts containing one 
              of nature's most precious gifts for skin health.
            </p>
            
            <p>
              Ghana isn't just our source - it's our inspiration. This is where communities have 
              understood the power of pure, unrefined botanicals long before the world discovered 
              their benefits. The women who harvest these treasures don't just collect ingredients - 
              they preserve a legacy of beauty wisdom that spans centuries.
            </p>
            
            <p>
              From Ghana's fertile lands to London's finest cosmetic laboratories, we've created 
              a bridge between ancestral knowledge and contemporary luxury. Every product we craft 
              honours these time-tested traditions whilst meeting the rigorous standards expected 
              of British-made skincare.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe in transparency, sustainability, and respect - for your skin, for the 
                communities that supply our ingredients, and for the environment that makes it all possible.
              </p>
              <p className="text-lg text-gray-700">
                When you choose True Organics London, you're not just choosing superior skincare - 
                you're joining a movement that celebrates natural beauty, ethical sourcing, and the 
                timeless wisdom of our ancestors.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
                Join Our Beauty Revolution
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/skin_transformation.png"
                alt="Our mission"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every decision we make is guided by these core principles that define who we are 
              and what we stand for.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Making a Difference Together
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every purchase creates positive impact for communities in Ghana and supports 
              sustainable beauty practices worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Ghanaian Families Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Ethically Sourced Ingredients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Customers Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Experience the True Organics London Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of customers who have discovered the transformative power of 
            ancient beauty wisdom combined with modern luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Shop Our Collection
            </button>
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
