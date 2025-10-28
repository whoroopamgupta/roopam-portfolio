# Quick Start Guide 🚀

## Get Started in 30 Seconds

```bash
# Navigate to project
cd roopam-portfolio

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** 🎉

## What You'll See

- ✨ Beautiful dark theme with dot-grid background
- 🎨 Sticky navigation bar with smooth animations
- 📱 Fully responsive (try resizing your browser!)
- ⚡ Smooth scroll between sections
- 🎭 Framer Motion animations on page load and scroll

## Test the Features

### Desktop Navigation
1. Hover over nav links → See purple underline animation
2. Click any link → Smooth scroll to section
3. Scroll down → Navbar stays sticky with backdrop blur

### Mobile Navigation (< 768px)
1. Open on mobile or resize browser
2. Click hamburger menu → Animated menu opens
3. Click any link → Menu closes, smooth scroll to section

### Sections to Explore
- **About** → Fully styled hero section with your intro
- **Resume** → Placeholder ready for your experience
- **Blog** → Placeholder ready for your posts
- **Contact** → Placeholder ready for contact form

## Customization

### Change Your Name/Info
Edit `app/page.js`:
```javascript
// Line ~34-36
<motion.h1>
  Roopam Gupta  // ← Change this
</motion.h1>
```

### Change Logo Initials
Edit `app/components/Navbar.tsx`:
```javascript
// Line ~33
<span className="font-mono">RG</span>  // ← Change this
```

### Modify Colors
Edit `app/utils/theme.ts`:
```javascript
colors: {
  accent: '#7B5CFF',  // ← Change accent color
  // ... other colors
}
```

Or update CSS variables in `app/globals.css`:
```css
:root {
  --accent: #7B5CFF;  /* ← Your brand color */
}
```

## Project Structure

```
📁 app/
  ├── 📁 components/
  │   └── 📄 Navbar.tsx       ← Navigation component
  ├── 📁 utils/
  │   └── 📄 theme.ts         ← Theme configuration
  ├── 📄 globals.css          ← Global styles
  ├── 📄 layout.js            ← Root layout
  └── 📄 page.js              ← Main homepage
```

## Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Troubleshooting

### Port Already in Use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Fonts Not Loading?
- Check internet connection (Google Fonts CDN)
- Clear browser cache
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### Animations Not Working?
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify Framer Motion installed: `npm list framer-motion`

## Next Steps

Ready to add more content? Check out:
- 📖 `STRUCTURE.md` - Full project documentation
- ✅ `STEP1_COMPLETE.md` - What's implemented
- 🧩 `app/components/README.md` - Component guidelines

## Need Help?

- 📚 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🎭 [Framer Motion Docs](https://www.framer.com/motion/)

---

**Happy Coding! 🎉**

