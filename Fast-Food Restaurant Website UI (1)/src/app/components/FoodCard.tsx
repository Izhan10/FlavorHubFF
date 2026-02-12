import React from 'react';
import { MenuItem } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
}

export function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-brand-red text-white px-3 py-1.5 rounded-full">
          <span className="font-semibold">${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-brand-dark">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
        <button
          onClick={() => addToCart(item)}
          className="w-full bg-brand-red hover:bg-red-700 text-white py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300"
        >
          <Plus className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
