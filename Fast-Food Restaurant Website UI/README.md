# FlavorHub - Fast Food Restaurant Website

A modern, mobile-first fast-food restaurant website built with React, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Home Page**: Hero section with compelling CTAs, featured items, special deals, and testimonials
- **Menu Page**: Interactive category filtering (Burgers, Pizza, Fries, Wraps, Drinks, Deals)
- **Shopping Cart**: Full cart management with quantity controls and order summary
- **About Page**: Brand story, company values, and quality commitment
- **Contact Page**: Contact form and business information
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **State Management**: React Context API for cart functionality
- **Routing**: React Router for seamless navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run build
   # or
   pnpm build
   ```

4. **Open your browser**
   The application will be available at the URL shown in your terminal

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── FoodCard.tsx    # Food item display card
│   │   ├── Navigation.tsx   # Header navigation
│   │   └── Footer.tsx       # Footer with contact info
│   ├── context/            # React Context providers
│   │   └── CartContext.tsx # Shopping cart state management
│   ├── data/               # Static data
│   │   └── menuData.ts     # Menu items and categories
│   ├── layout/             # Layout components
│   │   └── RootLayout.tsx  # Main layout wrapper
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── MenuPage.tsx    # Menu with filters
│   │   ├── CartPage.tsx    # Shopping cart
│   │   ├── AboutPage.tsx   # About us
│   │   └── ContactPage.tsx # Contact information
│   ├── routes.ts           # React Router configuration
│   └── App.tsx             # Main app component
├── styles/
│   ├── theme.css           # Custom CSS variables & Tailwind theme
│   └── fonts.css           # Font imports
└── main.tsx                # Application entry point
```

## 🎨 Design System

### Color Palette
- **Brand Red**: `#DC2626` - Primary CTA buttons, highlights
- **Brand Yellow**: `#FBBF24` - Secondary accents, logos
- **Brand Orange**: `#F97316` - Gradients, special offers
- **Brand Dark**: `#1a1a1a` - Text, headers

### Typography
- Bold, modern sans-serif fonts
- Large headings for impact
- Clear hierarchy throughout

### Components
- Rounded corners (12px radius)
- Smooth hover transitions
- Shadow effects for depth
- Responsive grid layouts

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Updating Menu Items
Edit `/src/app/data/menuData.ts` to add, remove, or modify menu items.

### Changing Colors
Update color variables in `/src/styles/theme.css` under the `:root` section.

### Modifying Content
- **Restaurant Name**: Search for "FlavorHub" and replace throughout
- **Contact Info**: Update in `/src/app/components/Footer.tsx` and `/src/app/pages/ContactPage.tsx`
- **Images**: Replace Unsplash URLs with your own images

## 📝 Key Files to Customize

1. **Restaurant Name & Branding**
   - `/src/app/components/Navigation.tsx`
   - `/src/app/components/Footer.tsx`
   - `/src/app/pages/HomePage.tsx`

2. **Menu Items**
   - `/src/app/data/menuData.ts`

3. **Color Theme**
   - `/src/styles/theme.css`

4. **Contact Information**
   - `/src/app/components/Footer.tsx`
   - `/src/app/pages/ContactPage.tsx`

## 🌟 Features Breakdown

### Cart Functionality
- Add items to cart
- Update quantities
- Remove items
- Calculate totals with tax and delivery
- Persistent cart state across pages

### Menu Filtering
- Category-based filtering
- Smooth transitions
- Real-time updates

### Form Handling
- Contact form with validation
- Success feedback
- Responsive design

## 📦 Production Build

To create a production-ready build:

```bash
npm run build
# or
pnpm build
```

The optimized files will be in the `dist/` folder, ready for deployment.

## 🚢 Deployment

This website can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

Simply upload the contents of the `dist/` folder after building.

## 📄 License

This project is created for demonstration purposes. Feel free to customize and use for your own restaurant website.

## 🤝 Support

For questions or issues, please refer to the contact information in the website or modify as needed for your use case.

---

**Built with ❤️ for food lovers everywhere**
