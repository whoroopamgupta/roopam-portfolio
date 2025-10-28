

This is a **frontend-only DevOps/Cloud Engineer Portfolio** built with **Next.js**. The portfolio will be minimalistic, clean, and developer-themed, with subtle animations. It will feature a dot-grid background, monospace accents, code-like section headings, and interactive UI components.

The goal of this step is to:

1. Setup **global theme & design tokens**
2. Build a **responsive Navbar** with smooth scroll

---

### **1. Global Theme & Design Tokens**

**Colors & Theme**

* Background: `#0D0D0F` (dark)
* Text: `#EDEDED` (primary)
* Accent: `#7B5CFF` (buttons, hover underline)
* Card / Section: `rgba(20, 20, 20, 0.85)`

**Typography**

* Primary font: **Inter**
* Monospace accent font: **Fira Code** or **JetBrains Mono**
* Headings styled like code comments, e.g. `// about-me.tsx`
* Section titles optional: `> Skills & Tools`

**Background**

* Dot grid pattern:

```css
body {
  background-color: #0D0D0F;
  background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

**Spacing / Layout**

* Section max-width: `1200px`
* Padding: `py-20 px-6` (or equivalent)
* Smooth scroll between sections

**Animations**

* Framer Motion fade-up on scroll for sections
* Hover glow + scale for interactive elements
* Hero text: typewriter animation (for next step)

---

### **2. Navbar Specifications**

**Layout**

* Sticky top navbar: `position: sticky; top: 0; backdrop-blur-md; bg-opacity-70`
* Left: Logo → initials or pipeline icon
* Right: Navigation links → `About`, `Resume`, `Blog`, `Contact`

**Style**

* Text: #EDEDED
* Hover on links: underline in accent color (#7B5CFF)
* Spacing between links: consistent (~1.5rem)
* Responsive design:

  * Collapse to hamburger menu on small screens
  * Smooth scroll to sections on link click

**Components**

* `Navbar.tsx` → handles logo, links, hover, and responsive menu
* Optional `Button.tsx` component for future CTA buttons

**Animation**

* Fade in on page load (Framer Motion)
* Hover: link underline + subtle accent glow

---

### **3. Suggested Folder Structure**

```
/components
  Navbar.tsx
  Button.tsx
/pages
  index.tsx
/styles
  globals.css
  animations.css
/utils
  theme.ts          --> colors, fonts, spacing constants
```

---

### **4. Dependencies**

* Next.js (latest)
* Framer Motion
* React Scroll (for smooth scroll)
* Tailwind CSS (optional, can be CSS-in-JS or vanilla CSS)
* Fonts: Inter, Fira Code / JetBrains Mono
