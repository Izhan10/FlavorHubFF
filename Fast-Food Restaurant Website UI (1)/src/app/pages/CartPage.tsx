import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-brand-dark mb-4">Your Cart is Empty</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Add some delicious items to get started!
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300"
            >
              Browse Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark">
            Shopping <span className="text-brand-red">Cart</span>
          </h1>
          <button
            onClick={clearCart}
            className="text-destructive hover:text-red-700 font-semibold transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-xl text-brand-dark mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-red-700 p-2 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-lg min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-brand-red">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h2 className="font-bold text-2xl text-brand-dark mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-semibold">$2.99</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-black text-brand-red">
                      ${(getCartTotal() + 2.99 + getCartTotal() * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand-red hover:bg-red-700 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-colors duration-300 mb-4">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/menu"
                className="block text-center text-brand-red hover:text-red-700 font-semibold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
