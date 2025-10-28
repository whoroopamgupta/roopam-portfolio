# DevOps/Cloud Engineer Portfolio - Structure Guide

## 📁 Folder Structure

```
roopam-portfolio/
├── app/
│   ├── components/         # Reusable React components
│   │   └── Navbar.tsx      # Sticky navigation with responsive hamburger menu
│   ├── utils/              # Utility functions and configurations
│   │   └── theme.ts        # Global theme constants (colors, fonts, animations)
│   ├── styles/             # Additional stylesheets (if needed)
│   ├── globals.css         # Global styles with dark theme & dot-grid pattern
│   ├── layout.js           # Root layout with font configuration
│   ├── page.js             # Main homepage with all sections
│   └── favicon.ico         # Site favicon
├── public/                 # Static assets
│   └── *.svg               # SVG icons and graphics
├── node_modules/           # Dependencies
├── package.json            # Project dependencies
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── jsconfig.json           # JavaScript configuration
├── eslint.config.mjs       # ESLint configuration
└── README.md               # Project documentation
```

## 🎨 Theme Configuration

### Colors
- **Background**: `#0D0D0F` (Dark charcoal)
- **Accent**: `#7B5CFF` (Purple)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#A0A0A0` (Light gray)
- **Border**: `rgba(255, 255, 255, 0.1)` (Transparent white)

### Fonts
- **Primary**: Inter (Google Fonts) - Used for body text
- **Monospace**: Fira Code (Google Fonts) - Used for code/technical text

### Layout
- **Max Width**: 1200px
- **Section Padding**: 5rem vertical, 1.5rem horizontal
- **Dot Grid**: 20px × 20px with rgba(255, 255, 255, 0.05) dots

## 🧩 Components

### Navbar (`app/components/Navbar.tsx`)
- **Features**:
  - Sticky positioning with backdrop blur
  - Logo with initials (RG)
  - Desktop: Horizontal navigation links
  - Mobile: Hamburger menu with smooth animation
  - Hover effects with accent color underline
  - Fade-in animation on load using Framer Motion
  
- **Links**:
  - About (#about)
  - Resume (#resume)
  - Blog (#blog)
  - Contact (#contact)

## 📄 Pages

### Home (`app/page.js`)
Main landing page with placeholder sections:

1. **About Section** (Hero)
   - Introduction with name and title
   - Brief description
   - CTA buttons (Get In Touch, View Resume)
   - Staggered fade-in animations

2. **Resume Section**
   - Placeholder for experience and skills
   - Ready for expansion

3. **Blog Section**
   - Placeholder for technical blog posts
   - Ready for expansion

4. **Contact Section**
   - Placeholder for contact form
   - Centered layout
   - Ready for expansion

## 🎭 Animations (Framer Motion)

### Available Animations (in `utils/theme.ts`)
```javascript
fadeUp: {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

fadeIn: {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}
```

### Usage in Components
- Navbar: Fade-in from top on page load
- Page sections: Fade-up on scroll (using `whileInView`)
- Mobile menu: Smooth height and opacity transitions
- Hover effects: Underline animation on nav links

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the portfolio.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Hamburger menu)
- **Desktop**: ≥ 768px (Horizontal navigation)

Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎯 Next Steps

The following sections are ready for implementation:

1. **Resume Section**:
   - Timeline of work experience
   - Skills grid (AWS, Kubernetes, Docker, Terraform, etc.)
   - Certifications

2. **Blog Section**:
   - Blog card grid
   - Integration with CMS or markdown files
   - Tag filtering

3. **Contact Section**:
   - Contact form
   - Social links (GitHub, LinkedIn, Twitter)
   - Email integration

## 🛠️ Technologies Used

- **Framework**: Next.js 16.0.0
- **React**: 19.2.0
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Inter, Fira Code)
- **Language**: JavaScript/TypeScript

## 📝 Key Features Implemented

✅ Dark theme with dot-grid pattern background  
✅ Sticky navbar with backdrop blur  
✅ Responsive hamburger menu for mobile  
✅ Smooth scroll behavior  
✅ Framer Motion animations  
✅ Custom scrollbar styling  
✅ Section-based navigation  
✅ Typography system (Inter + Fira Code)  
✅ Accent color system (#7B5CFF)  
✅ Ready-to-expand section placeholders  

## 🎨 Design Philosophy

This portfolio follows a **minimalistic, developer-focused** aesthetic:
- Clean, dark background reduces eye strain
- Subtle dot-grid adds depth without distraction
- Purple accent (#7B5CFF) provides professional tech vibe
- Monospace font usage emphasizes technical expertise
- Smooth animations enhance user experience without being flashy

