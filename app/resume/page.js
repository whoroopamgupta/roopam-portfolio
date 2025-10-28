'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import resumeData from '../data/resume.json';

export default function Resume() {
  const { skills, certifications, projects } = resumeData;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = 'Roopam Badoniya - Resume';
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSkillColor = (level) => {
    switch (level) {
      case 'Proficient':
        return '#7B5CFF';
      case 'Intermediate':
        return '#9575FF';
      case 'Familiar':
        return '#B39DFF';
      default:
        return '#7B5CFF';
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <section style={{ minHeight: '100vh', padding: '60px 24px 60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: '1400px', margin: '0 auto' }}
          >
            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                marginBottom: '32px'
              }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1lI33tU-kJ7M0D2qEcv4K4Zl_IciF-Km7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  background: 'linear-gradient(to right, #7B5CFF, rgba(123, 92, 255, 0.9))',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(123, 92, 255, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(123, 92, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(123, 92, 255, 0.2)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Download CV
              </motion.a>
            </motion.div>

            {/* Two Column Layout - Desktop */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr',
              gap: '40px',
            }}>
              {/* Left Column: Certifications & Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {/* Certifications Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: 'white', 
                    marginBottom: '16px' 
                  }}>
                    Certifications
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {certifications.map((cert, index) => (
                      <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          padding: '4px 0',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.paddingLeft = '6px';
                          e.currentTarget.querySelector('span').style.color = '#7B5CFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.paddingLeft = '0';
                          e.currentTarget.querySelector('span').style.color = 'rgba(255, 255, 255, 0.8)';
                        }}
                      >
                        <div style={{
                          fontSize: '18px',
                          flexShrink: 0,
                          opacity: 0.8,
                        }}>
                          {cert.icon}
                        </div>
                        <span style={{ 
                          color: 'rgba(255, 255, 255, 0.8)', 
                          fontSize: '14px',
                          lineHeight: '1.5',
                          transition: 'color 0.3s ease'
                        }}>
                          {cert.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: 'white', 
                    marginBottom: '20px' 
                  }}>
                    Skills & Technologies
                  </h2>
                  
                  {/* Skills List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Legend Row - Above the bars */}
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '110px 1fr',
                      gap: '12px',
                      marginBottom: '4px'
                    }}>
                      <div></div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        paddingLeft: '4px',
                        paddingRight: '4px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            background: '#B39DFF',
                            borderRadius: '2px'
                          }} />
                          <span style={{ 
                            color: '#B39DFF', 
                            fontSize: '10px',
                            fontWeight: '600'
                          }}>
                            Familiar
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            background: '#9575FF',
                            borderRadius: '2px'
                          }} />
                          <span style={{ 
                            color: '#9575FF', 
                            fontSize: '10px',
                            fontWeight: '600'
                          }}>
                            Intermediate
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            background: '#7B5CFF',
                            borderRadius: '2px'
                          }} />
                          <span style={{ 
                            color: '#7B5CFF', 
                            fontSize: '10px',
                            fontWeight: '600'
                          }}>
                            Proficient
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Individual Skills */}
                    {skills.map((skill, index) => (
                      <div key={index} style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '110px 1fr',
                        gap: '12px',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span style={{ 
                            fontSize: '16px',
                            opacity: 0.8
                          }}>
                            {skill.icon}
                          </span>
                          <span style={{ 
                            color: 'white', 
                            fontSize: '13px',
                            fontWeight: '500'
                          }}>
                            {skill.name}
                          </span>
                        </div>
                        <div style={{
                          width: '100%',
                          height: '8px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                            style={{
                              height: '100%',
                              background: getSkillColor(skill.level),
                              borderRadius: '4px',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Projects */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '32px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <h2 style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    color: 'white', 
                    marginBottom: '32px' 
                  }}>
                    Featured Projects
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        style={{
                          paddingBottom: '28px',
                          borderBottom: index !== projects.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                        }}
                      >
                        {/* Project Image */}
                        {project.image && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'block',
                              width: '100%',
                              height: '200px',
                              marginBottom: '16px',
                              borderRadius: '8px',
                              overflow: 'hidden',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                          >
                            <img 
                              src={project.image} 
                              alt={project.title}
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
                          </a>
                        )}

                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '12px'
                        }}>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: 'none',
                              flex: 1
                            }}
                          >
                            <h3 style={{ 
                              fontSize: '1.2rem', 
                              fontWeight: '600', 
                              color: 'white',
                              transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#7B5CFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'white';
                            }}
                            >
                              {project.title}
                            </h3>
                          </a>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                marginLeft: '12px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                transition: 'all 0.3s ease',
                                flexShrink: 0
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#7B5CFF';
                                e.currentTarget.style.transform = 'scale(1.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <p style={{ 
                          color: 'rgba(255, 255, 255, 0.6)', 
                          fontSize: '14px',
                          lineHeight: '1.7',
                          marginBottom: '12px'
                        }}>
                          {project.description}
                        </p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              style={{
                                color: '#7B5CFF',
                                fontSize: '12px',
                                fontWeight: '500',
                                padding: '4px 12px',
                                background: 'rgba(123, 92, 255, 0.1)',
                                borderRadius: '4px',
                                border: '1px solid rgba(123, 92, 255, 0.3)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

