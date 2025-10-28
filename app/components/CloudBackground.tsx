'use client';

import { motion } from 'framer-motion';

const CloudBackground = () => {
  // Cloud/DevOps related icons
  const icons = [
    // Docker
    { icon: '🐳', top: '10%', left: '15%', delay: 0, duration: 20, size: '3rem' },
    // Kubernetes
    { icon: '☸️', top: '20%', right: '10%', delay: 2, duration: 25, size: '3.5rem' },
    // Cloud
    { icon: '☁️', top: '60%', left: '8%', delay: 1, duration: 22, size: '4rem' },
    // Terminal
    { icon: '💻', top: '70%', right: '15%', delay: 3, duration: 24, size: '2.5rem' },
    // Gear (CI/CD)
    { icon: '⚙️', top: '40%', left: '5%', delay: 1.5, duration: 23, size: '2.8rem' },
    // Package
    { icon: '📦', top: '80%', left: '20%', delay: 2.5, duration: 21, size: '2.5rem' },
    // Server
    { icon: '🖥️', top: '30%', right: '5%', delay: 0.5, duration: 26, size: '3rem' },
    // Cloud 2
    { icon: '☁️', top: '85%', right: '12%', delay: 3.5, duration: 22, size: '3.5rem' },
    // Rocket (Deployment)
    { icon: '🚀', top: '15%', left: '45%', delay: 1, duration: 24, size: '3rem' },
    // Database
    { icon: '🗄️', top: '50%', right: '25%', delay: 2, duration: 23, size: '2.8rem' },
    // Network
    { icon: '🌐', top: '25%', left: '35%', delay: 0.5, duration: 21, size: '3.2rem' },
    // Lock (Security)
    { icon: '🔒', top: '65%', left: '30%', delay: 3, duration: 25, size: '2.5rem' },
    // Lightning (Performance)
    { icon: '⚡', top: '45%', right: '35%', delay: 1.5, duration: 20, size: '2.8rem' },
    // Wrench (Tools)
    { icon: '🔧', top: '75%', left: '50%', delay: 2.5, duration: 22, size: '2.5rem' },
    // Chart (Monitoring)
    { icon: '📊', top: '35%', left: '25%', delay: 0.8, duration: 24, size: '2.8rem' },
    // Puzzle (Integration)
    { icon: '🧩', top: '90%', left: '40%', delay: 3.2, duration: 23, size: '2.5rem' },
    // Globe
    { icon: '🌍', top: '55%', right: '45%', delay: 1.8, duration: 26, size: '3.5rem' },
    // Code brackets
    { icon: '⌨️', top: '12%', right: '28%', delay: 2.8, duration: 21, size: '2.8rem' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1,
      opacity: 0.12,
    }}>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0,
            y: 0,
            rotate: 0,
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            fontSize: item.size,
            top: item.top,
            left: item.left,
            right: item.right,
            filter: 'grayscale(100%) opacity(0.8)',
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default CloudBackground;

