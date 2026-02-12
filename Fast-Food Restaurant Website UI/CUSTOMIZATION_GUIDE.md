# Customization Guide for FlavorHub Website

## 🎨 Branding Customization

### 1. Change Restaurant Name

**Search and replace "FlavorHub" in these files:**

- `/src/app/components/Navigation.tsx` (lines 22-25)
- `/src/app/components/Footer.tsx` (lines 12-15)
- `/src/app/pages/HomePage.tsx` (hero section)
- `/src/app/pages/ContactPage.tsx` (email addresses)
- `/README.md` (documentation)

**Example:**
```tsx
// Before
<span className="text-brand-red">Flavor</span>
<span className="text-brand-yellow">Hub</span>

// After (e.g., "TastyBite")
<span className="text-brand-red">Tasty</span>
<span className="text-brand-yellow">Bite</span>
```

### 2. Update Logo/Tagline

Edit `/src/app/pages/HomePage.tsx` - Hero section:
```tsx
<h1>Your New Tagline Here</h1>
<p>Your restaurant description</p>
```

### 3. Change Color Scheme

Edit `/src/styles/theme.css`:

```css
:root {
  /* Current colors */
  --brand-red: #DC2626;
  --brand-yellow: #FBBF24;
  --brand-orange: #F97316;
  
  /* Change to your colors */
  --brand-red: #YOUR_COLOR;
  --brand-yellow: #YOUR_COLOR;
  --brand-orange: #YOUR_COLOR;
}
```

**Popular Fast Food Color Schemes:**
- McDonald's: Red #DA291C, Yellow #FFC72C
- Burger King: Red #EC1C24, Yellow #FDBB30
- KFC: Red #E4002B, White #FFFFFF
- Subway: Green #00923F, Yellow #FFC600

## 🍔 Menu Customization

### Add/Edit Menu Items

Edit `/src/app/data/menuData.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Item Name',
  description: 'Short description',
  price: 9.99,
  image: 'https://your-image-url.com/image.jpg',
  category: 'Burgers', // Must match a category
}
```

### Add New Categories

1. Add to categories array in `/src/app/data/menuData.ts`:
```typescript
export const categories = ['Burgers', 'Pizza', 'YourNewCategory'];
```

2. Add menu items with that category

### Change Menu Item Images

**Option A: Use Unsplash (free)**
- Go to https://unsplash.com
- Search for food items
- Copy the image URL
- Replace in menuData.ts

**Option B: Use Your Own Images**
- Upload images to your hosting
- Use full URLs in menuData.ts

## 📞 Contact Information

### Update Business Details

**Footer** (`/src/app/components/Footer.tsx`):
```tsx
// Address
<span>YOUR ADDRESS HERE</span>

// Phone
<span>YOUR PHONE NUMBER</span>

// Hours
<li>Your opening hours</li>
```

**Contact Page** (`/src/app/pages/ContactPage.tsx`):
- Update phone number (line ~92)
- Update email (line ~106)
- Update address (line ~70)
- Update hours (line ~120)

### Update Social Media Links

Edit `/src/app/components/Footer.tsx`:
```tsx
<a href="https://facebook.com/yourpage">
<a href="https://instagram.com/yourpage">
<a href="https://twitter.com/yourpage">
```

### Google Maps Integration

Replace the iframe src in `/src/app/pages/ContactPage.tsx`:
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace in ContactPage.tsx (line ~83)

## 🖼️ Image Customization

### Hero Image

Edit `/src/app/pages/HomePage.tsx`:
```tsx
// Current
import heroImage from 'figma:asset/...';

// Option 1: Use URL
style={{ backgroundImage: `url('https://your-image.com/hero.jpg')` }}

// Option 2: Use local image
// 1. Add image to /public folder
// 2. Reference as: url('/hero.jpg')
```

### About Page Images

Update kitchen/team images in `/src/app/pages/AboutPage.tsx`:
```tsx
const kitchenImage = 'YOUR_IMAGE_URL';
```

## 💰 Pricing & Currency

### Change Currency

Search for "$" in all files and replace:
- `/src/app/components/FoodCard.tsx`
- `/src/app/pages/CartPage.tsx`
- `/src/app/data/menuData.ts`

```tsx
// Before
${item.price.toFixed(2)}

// After (e.g., Euro)
€{item.price.toFixed(2)}
```

### Update Delivery Fee & Tax

Edit `/src/app/pages/CartPage.tsx`:
```tsx
// Delivery Fee (line ~115)
<span className="font-semibold">$2.99</span>

// Tax Rate (line ~119)
${(getCartTotal() * 0.08).toFixed(2)} // 0.08 = 8%
```

## 📝 Content Customization

### Homepage Special Offer

Edit `/src/app/pages/HomePage.tsx` - Deals section:
```tsx
<h2>Your Promotional Message</h2>
<p>Your offer details</p>
```

### Testimonials

Edit `/src/app/data/menuData.ts`:
```typescript
export const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    text: 'Their review',
    rating: 5,
  },
];
```

### About Page Story

Edit `/src/app/pages/AboutPage.tsx`:
- Company history (line ~34)
- Mission statement (line ~41)
- Values (line ~76-117)

## 🎯 SEO & Meta Information

### Page Titles

Add to each page component:
```tsx
useEffect(() => {
  document.title = 'Your Page Title - FlavorHub';
}, []);
```

### Favicon

Add to `/public` folder:
- `favicon.ico`
- `logo192.png`
- `logo512.png`

## 🚀 Advanced Customization

### Add Authentication
- Install Firebase or Supabase
- Add login/signup pages
- Protect cart/checkout routes

### Add Payment Integration
- Integrate Stripe or PayPal
- Add checkout page
- Handle order processing

### Add Order Tracking
- Create orders database
- Add order history page
- Email notifications

### Add Admin Dashboard
- Create admin routes
- Menu management interface
- Order management system

## 📱 Mobile App Conversion

This website is PWA-ready:
1. Add manifest.json to /public
2. Add service worker
3. Users can "Add to Home Screen"

## 🔧 Environment Variables

Create `.env` file for sensitive data:
```
VITE_API_KEY=your_api_key
VITE_MAPS_KEY=your_google_maps_key
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

## 📊 Analytics Integration

Add Google Analytics to `/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🎨 Font Customization

Edit `/src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

body {
  font-family: 'Your Font', sans-serif;
}
```

---

**Need Help?** Each file is well-commented. Look for `// TODO:` comments for customization points.
