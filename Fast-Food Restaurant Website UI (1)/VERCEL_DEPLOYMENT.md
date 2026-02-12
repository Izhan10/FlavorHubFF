# 🚀 Deploy FlavorHub to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy from GitHub

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - FlavorHub Restaurant Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/flavorhub.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! ✅

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📦 Essential Files (Already Included)

✅ **Configuration Files:**
- `package.json` - Dependencies and build scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript settings
- `vercel.json` - Vercel routing configuration
- `index.html` - HTML entry point
- `postcss.config.mjs` - PostCSS configuration

✅ **Source Files:**
- `/src/main.tsx` - React entry point
- `/src/app/` - All React components and pages
- `/src/styles/` - CSS and theme files

## ⚙️ Vercel Configuration

The `vercel.json` file handles SPA routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures React Router works correctly on Vercel.

## 🔧 Build Settings (Auto-Detected by Vercel)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x (or latest)

## 📝 Manual Build Settings (If Needed)

If Vercel doesn't auto-detect, set these manually:

1. In Vercel Dashboard → Project Settings → General
2. Set:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 🌍 Environment Variables (Optional)

If you add any API keys later:

1. Go to Project Settings → Environment Variables
2. Add variables like:
   - `VITE_API_KEY`
   - `VITE_GOOGLE_MAPS_KEY`
3. Redeploy

## 🔄 Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Production deployment
- **Every PR** → Preview deployment
- **Instant rollbacks** available in Vercel dashboard

## 🎯 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `flavorhub.com`)
3. Follow DNS configuration instructions
4. Vercel handles SSL automatically

## 🚦 Deployment Checklist

Before deploying, verify:

- [ ] All menu items have valid image URLs
- [ ] Contact information is updated
- [ ] Restaurant name/branding is customized
- [ ] Social media links are correct
- [ ] Google Maps location is set
- [ ] No console errors locally
- [ ] Runs successfully with `npm run build`

## 🧪 Test Build Locally

Before deploying, test the production build:

```bash
# Build for production
npm run build

# Preview the build
npx vite preview
```

Visit `http://localhost:4173` to test the production build.

## 📱 Vercel Features You Get

✅ **Automatic HTTPS** - SSL certificates included
✅ **Global CDN** - Fast loading worldwide  
✅ **Instant Cache Invalidation** - Updates go live immediately
✅ **Analytics** - Built-in web analytics (optional)
✅ **Preview Deployments** - Test before production
✅ **99.99% Uptime SLA** - Reliable hosting

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Routing Issues (404 on refresh)
- Make sure `vercel.json` exists in root
- Contains the rewrite rule shown above

### Images Not Loading
- Check image URLs are public and accessible
- Consider using Vercel's Image Optimization

### Slow Initial Load
- Images are lazy-loaded automatically
- Consider using WebP format for images
- Enable Vercel's Image Optimization

## 📊 Performance Tips

1. **Image Optimization**
   - Use Vercel Image Optimization
   - Or convert images to WebP format
   - Compress images before uploading

2. **Caching**
   - Vercel automatically handles caching
   - Static assets cached at edge locations

3. **Analytics**
   - Enable Vercel Analytics in dashboard
   - Monitor Core Web Vitals

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev
- **React Router Docs:** https://reactrouter.com

## 💡 Post-Deployment

After deployment:

1. **Test the site** on mobile and desktop
2. **Check all pages** and navigation
3. **Test the cart** functionality
4. **Verify contact form** works
5. **Share the URL!** 🎉

Your FlavorHub website is now live! 🍔🍕

---

**Need help?** Check Vercel's excellent documentation or their Discord community.
