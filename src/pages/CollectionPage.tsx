import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Star, Heart } from 'lucide-react';
import { useCart, Product } from '../contexts/CartContext';
import { getCollection, giftBundles } from '../data/products';

export default function CollectionPage() {
  const { collectionId } = useParams<{ collectionId: string }>();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const collection = collectionId ? getCollection(collectionId) : null;

  // Handle gift bundles collection
  const isGiftBundles = collectionId === 'gift-bundles';
  const products = isGiftBundles ? giftBundles : collection?.products || [];

  if (!collection && !isGiftBundles) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Collection Not Found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const collectionName = isGiftBundles ? 'Gift Bundles' : collection?.name || '';
  const collectionDescription = isGiftBundles 
    ? 'The gift that transforms someone\'s entire skincare routine' 
    : collection?.description || '';
  const heroImage = isGiftBundles ? '/images/gift_bundle_hero.png' : collection?.hero || '';

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0; // featured order
    }
  });

  const getCollectionContent = () => {
    if (isGiftBundles) {
      return {
        headline: 'The Gift That Transforms Someone\'s Entire Skincare Routine',
        description: 'Forget generic gift sets. Give an experience that changes everything. True Organics London Gift Bundles aren\'t just products - they\'re an introduction to skincare that actually works.',
      };
    }

    switch (collectionId) {
      case 'body-butters':
        return {
          headline: 'Liquid Gold That Transforms Dry Skin Into Silk',
          description: 'Our whipped body butters represent the pinnacle of natural skincare luxury. Each blend combines the finest organic ingredients, whipped to perfection for a texture so divine it feels like applying clouds to your skin.',
        };
      case 'body-oils':
        return {
          headline: 'Nature\'s Elixir for Radiant, Youthful Skin',
          description: 'These aren\'t ordinary oils - they\'re concentrated doses of nature\'s most powerful beautifying ingredients. Our carefully curated blends absorb instantly, leaving no greasy residue.',
        };
      case 'body-scrubs':
        return {
          headline: 'Renewal Elevated to Art - Where Exfoliation Meets Luxury',
          description: 'Transform your shower into a spa sanctuary with scrubs that gently buff away dullness whilst infusing your skin with nourishing botanicals.',
        };
      case 'hair-care':
        return {
          headline: 'From Roots to Crown - Unlock Your Hair\'s True Potential',
          description: 'Centuries of traditional wisdom meet modern understanding in this powerful hair elixir. Enriched with potent botanicals known to stimulate growth and strengthen follicles.',
        };
      case 'mens-collection':
        return {
          headline: 'Masculine Skincare That Delivers Real Results',
          description: 'Skincare designed for the modern man who refuses to compromise on quality. Our specially formulated products provide the deep nourishment and protection your skin needs.',
        };
      default:
        return {
          headline: collectionName,
          description: collectionDescription,
        };
    }
  };

  const content = getCollectionContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{collectionName}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {content.headline}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {content.description}
              </p>
              {isGiftBundles && (
                <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-medium">
                    🎁 Perfect for gifting - All bundles include beautiful eco-friendly packaging
                  </p>
                </div>
              )}
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt={collectionName}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <span className="text-gray-500">
                {products.length} {products.length === 1 ? 'product' : 'products'}
              </span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4 relative">
                  <img
                    src={isGiftBundles ? product.image : product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
                  </button>
                  {isGiftBundles && 'savings' in product && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Save £{product.savings}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.9)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-amber-600">
                      £{product.price}
                    </span>
                    {isGiftBundles && 'originalPrice' in product && (
                      <span className="text-sm text-gray-500 line-through">
                        £{product.originalPrice}
                      </span>
                    )}
                  </div>
                  {isGiftBundles ? (
                    <button 
                      onClick={() => {
                        const bundleProduct = {
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          description: 'description' in product ? product.description : '',
                          ingredients: [],
                          benefits: [],
                          size: 'Bundle',
                          category: 'gift-bundles',
                          inStock: true
                        };
                        addToCart(bundleProduct);
                      }}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium transition-colors"
                    >
                      Add Bundle to Basket
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="block w-full text-center border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => {
                          if ('ingredients' in product) {
                            addToCart(product as Product);
                          }
                        }}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        Add to Basket
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                This collection is currently being updated. Please check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
