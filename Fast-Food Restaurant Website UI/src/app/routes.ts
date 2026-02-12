import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layout/RootLayout';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'menu', Component: MenuPage },
      { path: 'cart', Component: CartPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
