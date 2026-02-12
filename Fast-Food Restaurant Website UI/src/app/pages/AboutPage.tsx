import React from 'react';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';

const kitchenImage = 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWZ8ZW58MXx8fHwxNzcwODIyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bringing joy, one delicious meal at a time
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-brand-dark mb-6">
                Welcome to <span className="text-brand-red">FlavorHub</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2020, FlavorHub started with a simple mission: to serve premium fast food 
                made with fresh, quality ingredients. What began as a small neighborhood eatery has 
                grown into a beloved local brand.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that fast food doesn't have to compromise on quality or taste. Every burger, 
                pizza, and side is crafted with care, using recipes perfected over years and ingredients 
                sourced from trusted suppliers.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve thousands of happy customers, and we're committed to 
                continuously improving and expanding our menu while maintaining the high standards 
                that made us who we are.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={kitchenImage}
                alt="Our Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-dark mb-4">
              Our <span className="text-brand-red">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Only the freshest ingredients make it to your plate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-yellow rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-brand-dark" />
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Committed to serving the best fast food experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building relationships with our customers and neighbors
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-2">Passion</h3>
              <p className="text-muted-foreground">
                We love what we do, and it shows in every meal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene & Quality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-black text-brand-dark mb-6 text-center">
              Quality & <span className="text-brand-red">Hygiene</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Your health and safety are our top priorities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-red/10 rounded-2xl p-6 mb-4">
                  <h3 className="font-bold text-xl text-brand-dark mb-2">
                    🧼 Clean Kitchen
                  </h3>
                  <p className="text-muted-foreground">
                    Our kitchen is cleaned and sanitized multiple times daily
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-brand-yellow/20 rounded-2xl p-6 mb-4">
                  <h3 className="font-bold text-xl text-brand-dark mb-2">
                    ✅ Certified Staff
                  </h3>
                  <p className="text-muted-foreground">
                    All team members are trained in food safety standards
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-brand-orange/10 rounded-2xl p-6 mb-4">
                  <h3 className="font-bold text-xl text-brand-dark mb-2">
                    🥬 Fresh Ingredients
                  </h3>
                  <p className="text-muted-foreground">
                    Daily deliveries ensure maximum freshness in every dish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
