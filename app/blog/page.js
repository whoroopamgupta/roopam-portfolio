'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import blogData from '../data/blog.json';
import { useEffect } from 'react';

export default function Blog() {
  const { posts } = blogData;
  
  useEffect(() => {
    document.title = 'Roopam Badoniya - Blog';
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <section style={{ minHeight: '100vh', padding: '60px 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            {/* Header */}
            <div style={{ marginBottom: '48px' }}>
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'white', 
                marginBottom: '16px' 
              }}>
                Technical Blog
              </h1>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontSize: '1.1rem',
                maxWidth: '600px',
                lineHeight: '1.6'
              }}>
                Thoughts, tutorials, and insights on DevOps, Cloud Engineering, and Infrastructure.
              </p>
            </div>

            {/* Blog Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '28px',
            }}>
              {posts.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.5)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(123, 92, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Blog Image */}
                  {post.image && (
                    <div style={{
                      width: '100%',
                      height: '200px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.display = 'flex';
                          e.target.parentElement.style.alignItems = 'center';
                          e.target.parentElement.style.justifyContent = 'center';
                          e.target.parentElement.innerHTML = '<span style="color: rgba(255, 255, 255, 0.3); font-size: 14px;">Image not available</span>';
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: '24px' }}>
                    {/* Meta Info */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}>
                      <span style={{ 
                        color: 'rgba(255, 255, 255, 0.5)', 
                        fontSize: '13px',
                        fontFamily: 'var(--font-fira-code), monospace'
                      }}>
                        {post.date}
                      </span>
                      <span style={{ 
                        color: '#7B5CFF', 
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {post.readTime}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: '600', 
                      color: 'white',
                      marginBottom: '12px',
                      lineHeight: '1.4'
                    }}>
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.6)', 
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}>
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            color: '#7B5CFF',
                            fontSize: '11px',
                            fontWeight: '500',
                            padding: '4px 10px',
                            background: 'rgba(123, 92, 255, 0.1)',
                            borderRadius: '4px',
                            border: '1px solid rgba(123, 92, 255, 0.3)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

