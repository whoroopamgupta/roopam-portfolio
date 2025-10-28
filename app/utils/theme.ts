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
    sectionPadding: '5rem 1.5rem', // py-20 px-6
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

// Dot Grid Pattern for Background
export const dotGridPattern = {
  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
};

