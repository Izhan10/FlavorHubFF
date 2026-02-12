# Project File Structure

## Complete List of Project Files

### Root Configuration
- `package.json` - Project dependencies and scripts
- `README.md` - Project documentation and setup instructions
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

### Source Files (`/src`)

#### Main Entry
- `/src/main.tsx` - Application entry point
- `/src/app/App.tsx` - Root React component with RouterProvider

#### Routing
- `/src/app/routes.ts` - React Router configuration

#### Layout Components (`/src/app/layout`)
- `/src/app/layout/RootLayout.tsx` - Main layout with Navigation, Footer, and CartProvider

#### Page Components (`/src/app/pages`)
- `/src/app/pages/HomePage.tsx` - Landing page with hero, featured items, deals, testimonials
- `/src/app/pages/MenuPage.tsx` - Menu page with category filtering
- `/src/app/pages/CartPage.tsx` - Shopping cart with full management
- `/src/app/pages/AboutPage.tsx` - About us page with brand story
- `/src/app/pages/ContactPage.tsx` - Contact page with form

#### Reusable Components (`/src/app/components`)
- `/src/app/components/Navigation.tsx` - Header navigation with cart icon
- `/src/app/components/Footer.tsx` - Footer with contact info and links
- `/src/app/components/FoodCard.tsx` - Reusable food item card

#### Context & State Management (`/src/app/context`)
- `/src/app/context/CartContext.tsx` - Shopping cart state with Context API

#### Data (`/src/app/data`)
- `/src/app/data/menuData.ts` - Menu items, categories, and testimonials

#### Styles (`/src/styles`)
- `/src/styles/theme.css` - Custom CSS variables and Tailwind theme
- `/src/styles/fonts.css` - Font imports

## File Count Summary

**Total Files Created: 17**

- Configuration: 1 (README.md)
- Core App: 2 (main.tsx, App.tsx)
- Routing: 1 (routes.ts)
- Layout: 1 (RootLayout.tsx)
- Pages: 5 (Home, Menu, Cart, About, Contact)
- Components: 3 (Navigation, Footer, FoodCard)
- Context: 1 (CartContext.tsx)
- Data: 1 (menuData.ts)
- Styles: 1 (theme.css modified)

## How to Download

### Option 1: Using Figma Make (Current Environment)
The files are already in your current Figma Make project. You can:
1. Click "Export" or "Download" in the Figma Make interface
2. The entire project will be packaged for you

### Option 2: Manual Copy
If you need to recreate this elsewhere:
1. Create a new React + Vite + TypeScript project
2. Install dependencies from `package.json`
3. Copy all files from the structure above
4. Run `npm install` and `npm run build`

## Quick Start Commands

```bash
# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Requirements

- Node.js v16 or higher
- npm v7 or higher (or pnpm)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Package Dependencies

All required packages are already installed in this project:
- react & react-dom (v18.3.1)
- react-router (v7.13.0)
- lucide-react (v0.487.0) - Icons
- tailwindcss (v4.1.12) - Styling
- vite (v6.3.5) - Build tool
- typescript - Type safety

No additional installations needed!
