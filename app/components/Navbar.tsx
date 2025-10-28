'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:roopamgupta68@gmail.com',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/roopam-badoniya-947748195/',
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/whoroopamgupta',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(13, 13, 15, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 24px' }}>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center">
          {/* Left: Initials */}
          <Link 
            href="/" 
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#7B5CFF',
              fontFamily: 'var(--font-fira-code), monospace',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              letterSpacing: '2px',
              marginRight: '60px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#9575FF';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#7B5CFF';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            RB
          </Link>

          {/* Center: Nav Links */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flex: 1 }}>
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      color: isActive ? '#7B5CFF' : 'rgba(255, 255, 255, 0.7)',
                      fontSize: '22px',
                      fontWeight: '800',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      paddingBottom: '6px',
                      borderBottom: isActive ? '2px dotted #7B5CFF' : '2px dotted transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Social Icons */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 4), duration: 0.3 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7B5CFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Initials */}
          <Link 
            href="/" 
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#7B5CFF',
              fontFamily: 'var(--font-fira-code), monospace',
              textDecoration: 'none',
              letterSpacing: '2px',
            }}
          >
            RB
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              style={{
                width: '24px',
                height: '2px',
                background: 'white',
                display: 'block',
                transition: 'all 0.3s',
              }}
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              style={{
                width: '24px',
                height: '2px',
                background: 'white',
                display: 'block',
                transition: 'all 0.3s',
              }}
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              style={{
                width: '24px',
                height: '2px',
                background: 'white',
                display: 'block',
                transition: 'all 0.3s',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div style={{ paddingTop: '24px', paddingBottom: '16px' }}>
            {/* Nav Links */}
            <div style={{ marginBottom: '24px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div style={{ 
              display: 'flex', 
              gap: '24px', 
              paddingTop: '16px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#7B5CFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

