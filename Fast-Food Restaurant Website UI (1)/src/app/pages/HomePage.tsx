import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Star } from 'lucide-react';
import { FoodCard } from '../components/FoodCard';
import { menuData, testimonials } from '../data/menuData';
import heroImage from 'figma:asset/e9aa93e8fa2829d93f257a3d4bd4d25a182bf88d.png';

export function HomePage() {
  const featuredItems = menuData.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="text-brand-yellow">Fresh</span> &{' '}
              <span className="text-brand-red">Hot</span>
              <br />
              Every Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Craving something delicious? Order now and enjoy our premium fast food delivered to your door!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/menu"
                className="bg-white hover:bg-gray-100 text-brand-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
              Popular <span className="text-brand-red">Favorites</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our customers' most loved items
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors duration-300"
            >
              See Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Deals Banner */}
      <section className="py-20 bg-gradient-to-r from-brand-red to-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            🎉 Limited Time Offer! 🎉
          </h2>
          <p className="text-2xl mb-6">
            Get 20% OFF on all combo meals this week!
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-white text-brand-red hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300"
          >
            Order Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">
              What Our <span className="text-brand-red">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from real food lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.text}"</p>
                <p className="font-bold text-brand-dark">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
