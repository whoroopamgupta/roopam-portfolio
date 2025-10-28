# Code Reference Guide 📝

Quick reference for all key code snippets in Step 1.

---

## 📁 File Overview

| File | Purpose | Lines |
|------|---------|-------|
| `app/globals.css` | Global styles & theme | ~90 |
| `app/layout.js` | Root layout | ~20 |
| `app/page.js` | Homepage | ~130 |
| `app/components/Navbar.tsx` | Navigation | ~120 |
| `app/utils/theme.ts` | Theme config | ~30 |

---

## 🎨 Theme Configuration

### `app/utils/theme.ts`
```typescript
// Global Theme Configuration
export const theme = {
  colors: {
    background: '#0D0D0F',
    accent: '#7B5CFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    border: 'rgba(255, 255, 255, 0.1)',
  },
  fonts: {
    primary: 'var(--font-inter)',
    mono: 'var(--font-fira-code)',
  },
  spacing: {
    sectionPadding: '5rem 1.5rem',
    maxWidth: '1200px',
  },
  animations: {
    fadeUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
    },
  },
};

export const dotGridPattern = {
  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
};
```

---

## 🌐 Global Styles

### Key CSS Snippets from `app/globals.css`

#### CSS Variables
```css
:root {
  --background: #0D0D0F;
  --foreground: #FFFFFF;
  --accent: #7B5CFF;
  --text-secondary: #A0A0A0;
  --border: rgba(255, 255, 255, 0.1);
  --font-inter: 'Inter', sans-serif;
  --font-fira-code: 'Fira Code', monospace;
}
```

#### Dot Grid Pattern
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: 0;
}
```

#### Custom Scrollbar
```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: rgba(123, 92, 255, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}
```

#### Text Selection
```css
::selection {
  background: var(--accent);
  color: white;
}
```

#### Utility Classes
```css
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.accent-text {
  color: var(--accent);
}

.mono {
  font-family: var(--font-fira-code), monospace;
}
```

---

## 📐 Layout Configuration

### `app/layout.js`
```javascript
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "DevOps & Cloud Engineer Portfolio",
  description: "Portfolio showcasing DevOps, Cloud Engineering, and Infrastructure projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 🧭 Navbar Component

### Key Sections from `app/components/Navbar.tsx`

#### Desktop Navigation
```tsx
<div className="hidden md:flex items-center space-x-8">
  {navLinks.map((link, index) => (
    <motion.div
      key={link.name}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
    >
      <Link
        href={link.href}
        className="text-white/80 hover:text-white font-medium transition-colors relative group"
      >
        {link.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B5CFF] transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.div>
  ))}
</div>
```

#### Logo Component
```tsx
<Link href="/" className="flex items-center space-x-2 group">
  <div className="w-10 h-10 bg-[#7B5CFF] rounded-lg flex items-center justify-center font-bold text-white transition-transform group-hover:scale-105">
    <span className="font-mono">RG</span>
  </div>
</Link>
```

#### Hamburger Menu Button
```tsx
<button
  onClick={toggleMenu}
  className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
  aria-label="Toggle menu"
>
  <motion.span
    animate={{
      rotate: isMenuOpen ? 45 : 0,
      y: isMenuOpen ? 8 : 0,
    }}
    className="w-6 h-0.5 bg-white block transition-all"
  />
  <motion.span
    animate={{
      opacity: isMenuOpen ? 0 : 1,
    }}
    className="w-6 h-0.5 bg-white block transition-all"
  />
  <motion.span
    animate={{
      rotate: isMenuOpen ? -45 : 0,
      y: isMenuOpen ? -8 : 0,
    }}
    className="w-6 h-0.5 bg-white block transition-all"
  />
</button>
```

---

## 🏠 Homepage Sections

### Hero Section from `app/page.js`

```jsx
<section id="about" className="section-container min-h-screen flex items-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="w-full"
  >
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inline-block"
      >
        <span className="mono text-accent text-sm">Hi, my name is</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-white"
      >
        Roopam Gupta
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-white/60"
      >
        DevOps & Cloud Engineer
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-lg text-white/70 max-w-2xl leading-relaxed"
      >
        I build and optimize cloud infrastructure, 
        automate deployment pipelines, 
        and ensure systems run smoothly at scale.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex gap-4 pt-6"
      >
        <a
          href="#contact"
          className="px-8 py-3 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-md font-medium"
        >
          Get In Touch
        </a>
        <a
          href="#resume"
          className="px-8 py-3 bg-accent text-white hover:bg-accent/80 transition-all duration-300 rounded-md font-medium"
        >
          View Resume
        </a>
      </motion.div>
    </div>
  </motion.div>
</section>
```

### Placeholder Section Pattern

```jsx
<section id="resume" className="section-container min-h-screen">
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <div className="space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        <span className="text-accent mono text-xl">02.</span> Experience & Skills
      </h2>
      <div className="h-0.5 w-20 bg-accent" />
      <p className="text-white/70 text-lg max-w-2xl">
        [Section content here]
      </p>
    </div>
  </motion.div>
</section>
```

---

## 🎭 Framer Motion Patterns

### Page Load Animation
```jsx
<motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Navbar content */}
</motion.nav>
```

### Scroll-Triggered Animation
```jsx
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={{
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }}
>
  {/* Section content */}
</motion.div>
```

### Staggered Children
```jsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * (index + 1) }}
  >
    {item.content}
  </motion.div>
))}
```

---

## 🎨 Tailwind Classes Reference

### Common Class Combinations

#### Section Container
```
className="section-container min-h-screen"
```

#### Text Styles
```
// Hero Title
className="text-5xl md:text-7xl font-bold text-white"

// Section Title
className="text-4xl md:text-5xl font-bold text-white"

// Body Text
className="text-lg text-white/70 max-w-2xl leading-relaxed"

// Mono Accent
className="mono text-accent text-sm"
```

#### Buttons
```
// Primary
className="px-8 py-3 bg-accent text-white hover:bg-accent/80 transition-all duration-300 rounded-md font-medium"

// Secondary
className="px-8 py-3 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-md font-medium"
```

#### Navbar
```
className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0D0D0F]/70 border-b border-white/10"
```

---

## 📦 Package.json Dependencies

```json
{
  "dependencies": {
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "next": "16.0.0",
    "framer-motion": "latest"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "16.0.0"
  }
}
```

---

## 🚀 NPM Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

---

## 🎯 Quick Customization Snippets

### Change Accent Color
Search and replace `#7B5CFF` with your color across:
- `app/utils/theme.ts`
- `app/globals.css`
- `app/components/Navbar.tsx`

### Change Logo/Initials
In `app/components/Navbar.tsx` line 33:
```tsx
<span className="font-mono">YI</span> // Your Initials
```

### Change Name/Title
In `app/page.js`:
```jsx
<motion.h1>Your Name</motion.h1>
<motion.h2>Your Title</motion.h2>
```

### Add Social Links
In `app/page.js` hero section:
```jsx
<div className="flex gap-4 text-white/70">
  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</div>
```

---

## 🔍 Finding Specific Code

Use these search patterns:

| What to Find | Search Term |
|--------------|-------------|
| All animations | `motion.` |
| Accent color usage | `#7B5CFF` or `accent` |
| Section containers | `section-container` |
| Responsive breakpoints | `md:` |
| Hover effects | `hover:` |
| Font usage | `mono` or `font-` |

---

## 📝 Code Organization

```
Components: Small, reusable, single responsibility
Utils: Pure functions, no side effects
Styles: Global only, component styles in JSX
Layout: Font loading and metadata
Page: Composition of sections
```

---

**This reference covers all the essential code snippets from Step 1!**

For full file contents, see:
- `app/globals.css`
- `app/components/Navbar.tsx`
- `app/page.js`
- `app/layout.js`
- `app/utils/theme.ts`

