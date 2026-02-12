import React from 'react';
import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CartProvider } from '../context/CartContext';

export function RootLayout() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
