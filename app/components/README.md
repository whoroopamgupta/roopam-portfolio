# Components Directory

This directory contains all reusable React components for the portfolio.

## Current Components

### Navbar.tsx
Sticky navigation bar with the following features:
- **Desktop View**: Horizontal navigation with hover effects
- **Mobile View**: Hamburger menu with animated transitions
- **Animations**: Fade-in on page load, smooth menu toggle
- **Styling**: Backdrop blur, transparent background, accent color accents

## Usage Example

```jsx
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Your content */}
      </main>
    </>
  );
}
```

## Future Components

The following components will be added in upcoming steps:

### Hero Section
- Name and title display
- Animated text introduction
- CTA buttons

### ExperienceCard
- Timeline item for work experience
- Company logo, title, dates
- Bullet points of responsibilities

### SkillsGrid
- Grid of technical skills
- Icons and proficiency levels
- Categorization (Cloud, DevOps, Languages, etc.)

### BlogCard
- Blog post preview
- Title, excerpt, date, tags
- Read more link

### ContactForm
- Form fields (name, email, message)
- Validation and submission
- Success/error states

### Footer
- Social media links
- Copyright information
- Additional navigation

## Component Guidelines

1. **Use 'use client'** directive for components with interactivity
2. **TypeScript** preferred for type safety (.tsx extension)
3. **Framer Motion** for animations
4. **Tailwind CSS** for styling
5. **Responsive design** - mobile-first approach
6. **Accessibility** - proper ARIA labels and semantic HTML

