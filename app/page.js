'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Roopam Badoniya - About';
    // Prevent scrolling on this page
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Restore scrolling when leaving the page
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <>
      <Navbar />
      <main className="relative z-10" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Hero Section */}
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl mx-auto py-20"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <span className="mono text-accent text-base md:text-lg">Hi, my name is</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              >
                Roopam Badoniya
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white/50 mb-12 leading-tight"
              >
                DevOps & Cloud Engineer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed mb-16"
              >
                I build and optimize cloud infrastructure, automate deployment pipelines, 
                and ensure systems run smoothly at scale. Specialized in AWS, GCP, Terraform, Python, Docker, Kubernetes and CI/CD automation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  marginTop: '32px',
                  flexWrap: 'wrap'
                }}
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 36px',
                    minWidth: '190px',
                    background: 'transparent',
                    border: '2px solid #7B5CFF',
                    color: '#7B5CFF',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(123, 92, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/resume"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 36px',
                    minWidth: '190px',
                    background: 'linear-gradient(to right, #7B5CFF, rgba(123, 92, 255, 0.9))',
                    border: 'none',
                    color: 'white',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 0 0 rgba(123, 92, 255, 0)',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, rgba(123, 92, 255, 0.95), rgba(123, 92, 255, 0.85))';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(123, 92, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #7B5CFF, rgba(123, 92, 255, 0.9))';
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(123, 92, 255, 0)';
                  }}
                >
                  View Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
