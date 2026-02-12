import React, { useState } from 'react';
import { FoodCard } from '../components/FoodCard';
import { menuData, categories } from '../data/menuData';

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Burgers');

  const filteredItems = menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-4">
            Our <span className="text-brand-red">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Fresh ingredients, bold flavors, unforgettable taste
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-red text-white shadow-lg scale-105'
                    : 'bg-white text-brand-dark hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
