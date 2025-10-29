'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import contactData from '../data/contact.json';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Roopam Badoniya - Contact';
  }, []);
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto py-20"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-accent mb-32"
            >
              {contactData.title}
            </motion.h1>

            {/* Contact Links */}
            <div className="space-y-10">
              {contactData.contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (0.1 * index), duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                    <span className="text-white/40 text-xs uppercase tracking-widest font-medium min-w-[140px]">
                      {contact.label}
                    </span>
                    <div className="inline-block">
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-accent text-base md:text-lg font-light transition-colors duration-200 break-all block"
                      >
                        {contact.display}
                      </a>
                      <div className="mt-3 border-b border-dotted border-white/20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
