import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: 'shea-mango-body-butter',
    name: 'Shea and Mango Body Butter with Vanilla Essence',
    price: 24.99,
    image: '/images/shea_mango_body_butter_hero.png',
    description: 'Imagine wrapping your skin in silk whilst feeding it the richest nutrients nature has ever created. Our Supreme Whipped Vanilla Shea and Mango Body Butter transforms this dream into your daily reality.',
    ingredients: ['Shea Butter', 'Mango Butter', 'Vanilla Essence'],
    benefits: [
      'Deeply moisturises and protects the skin',
      'Rich in vitamins and fatty acids',
      'Silky, non-greasy finish',
      'Sensual vanilla aroma',
      'Perfect for all skin types'
    ],
    size: '200g',
    category: 'body-butters',
    inStock: true,
  },
  {
    id: 'liquid-gold-body-oil',
    name: 'Liquid Gold Body Oil',
    price: 19.99,
    image: '/images/body_oils_collection.png',
    description: 'These aren\'t ordinary oils - they\'re concentrated doses of nature\'s most powerful beautifying ingredients. Our carefully curated blends absorb instantly, leaving no greasy residue.',
    ingredients: ['Shea Oil', 'Natural Botanicals', 'Vitamin-Rich Oils'],
    benefits: [
      'Lightweight and easily absorbed',
      'Provides long-lasting hydration without grease',
      'Regenerates and nourishes skin',
      'Enhances natural glow',
      'Suitable for face and body'
    ],
    size: '100ml',
    category: 'body-oils',
    inStock: true,
  },
  {
    id: 'exfoliating-sugar-scrub',
    name: 'Exfoliating Sugar Scrub',
    price: 22.99,
    image: '/images/product_collection_flatlay.png',
    description: 'Transform your shower into a spa sanctuary with scrubs that gently buff away dullness whilst infusing your skin with nourishing botanicals.',
    ingredients: ['Natural Sugar Crystals', 'Organic Oils', 'Botanical Extracts'],
    benefits: [
      'Gentle sugar crystals for smooth exfoliation',
      'Reveals radiant, glowing skin',
      'Deep moisturisation during use',
      'Removes dead skin cells effectively',
      'Suitable for sensitive skin'
    ],
    size: '200g',
    category: 'body-scrubs',
    inStock: true,
  },
  {
    id: 'hair-growth-elixir',
    name: 'Hair Growth Elixir with Batana Oil',
    price: 29.99,
    image: '/images/hair_growth_oil_hero.png',
    description: 'Centuries of traditional wisdom meet modern understanding in this powerful hair elixir. Enriched with potent botanicals known to stimulate growth and strengthen follicles.',
    ingredients: ['Batana Oil', 'Botanical Extracts', 'Vitamin-Rich Oils'],
    benefits: [
      'Promotes stronger, healthier hair growth',
      'Reduces hair breakage and thinning',
      'Nourishes scalp and follicles',
      'Restores natural hair lustre',
      'Suitable for all hair types'
    ],
    size: '100ml',
    category: 'hair-care',
    inStock: true,
  },
  {
    id: 'mens-body-butter',
    name: 'Men\'s Body Butter - Unscented',
    price: 24.99,
    image: '/images/product_catalog_single.png',
    description: 'Skincare designed for the modern man who refuses to compromise on quality. Our specially formulated products provide the deep nourishment and protection your skin needs.',
    ingredients: ['Shea Butter', 'Mango Butter', 'Natural Moisturisers'],
    benefits: [
      'Specifically formulated for men\'s skin',
      'Fast-absorbing, non-greasy formula',
      'Unscented option available',
      'Same premium organic ingredients',
      'Masculine packaging'
    ],
    size: '200g',
    category: 'mens-collection',
    inStock: true,
  },
  {
    id: 'mens-body-oil',
    name: 'Men\'s Body Oil',
    price: 19.99,
    image: '/images/lifestyle_application.png',
    description: 'Lightweight, non-greasy finish designed specifically for men. Clean, effective, and powerfully masculine skincare.',
    ingredients: ['Shea Oil', 'Natural Botanicals', 'Essential Oils'],
    benefits: [
      'Lightweight, non-greasy finish',
      'Clean masculine scent',
      'Fast-absorbing formula',
      'Premium organic ingredients',
      'Sleek masculine packaging'
    ],
    size: '100ml',
    category: 'mens-collection',
    inStock: true,
  }
];

export const collections = {
  'body-butters': {
    name: 'Body Butters',
    description: 'Luxuriously light, deeply hydrating',
    hero: '/images/shea_mango_body_butter_hero.png',
    products: products.filter(p => p.category === 'body-butters')
  },
  'body-oils': {
    name: 'Body Oils',
    description: 'Regenerate, nourish, protect',
    hero: '/images/body_oils_collection.png',
    products: products.filter(p => p.category === 'body-oils')
  },
  'body-scrubs': {
    name: 'Body Scrubs',
    description: 'Renewal elevated to art',
    hero: '/images/product_collection_flatlay.png',
    products: products.filter(p => p.category === 'body-scrubs')
  },
  'hair-care': {
    name: 'Hair Growth Oil',
    description: 'Stronger, healthier hair naturally',
    hero: '/images/hair_growth_oil_hero.png',
    products: products.filter(p => p.category === 'hair-care')
  },
  'mens-collection': {
    name: 'Men\'s Collection',
    description: 'Masculine skincare that delivers real results',
    hero: '/images/product_catalog_single.png',
    products: products.filter(p => p.category === 'mens-collection')
  }
};

export const giftBundles = [
  {
    id: 'starter-set',
    name: 'Starter Set',
    price: 49.99,
    originalPrice: 54.98,
    savings: 4.99,
    image: '/images/gift_bundle_hero.png',
    description: 'Perfect introduction to True Organics London',
    products: ['shea-mango-body-butter', 'liquid-gold-body-oil'],
    category: 'gift-bundles'
  },
  {
    id: 'pamper-pack',
    name: 'Pamper Pack',
    price: 64.99,
    originalPrice: 77.97,
    savings: 12.98,
    image: '/images/gift_bundle_hero.png',
    description: 'Complete spa experience at home',
    products: ['shea-mango-body-butter', 'exfoliating-sugar-scrub', 'liquid-gold-body-oil'],
    category: 'gift-bundles'
  },
  {
    id: 'complete-collection',
    name: 'Complete Collection',
    price: 79.99,
    originalPrice: 97.96,
    savings: 17.97,
    image: '/images/gift_bundle_hero.png',
    description: 'Transform your entire skincare routine',
    products: ['shea-mango-body-butter', 'liquid-gold-body-oil', 'exfoliating-sugar-scrub', 'hair-growth-elixir'],
    category: 'gift-bundles'
  },
  {
    id: 'hair-care-set',
    name: 'Hair Care Set',
    price: 39.99,
    originalPrice: 49.98,
    savings: 9.99,
    image: '/images/hair_growth_oil_hero.png',
    description: 'Complete hair transformation system',
    products: ['hair-growth-elixir', 'liquid-gold-body-oil'],
    category: 'gift-bundles'
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getCollection(id: string) {
  return collections[id as keyof typeof collections];
}

export function getGiftBundleById(id: string) {
  return giftBundles.find(bundle => bundle.id === id);
}
