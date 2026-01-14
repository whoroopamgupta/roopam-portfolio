'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import resumeData from '../data/resume.json';

export default function Resume() {
  const { skills, certifications, projects, tools } = resumeData;
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showTools, setShowTools] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    document.title = 'Roopam Badoniya - Resume';

    // Fetch resume link
    fetch('https://raw.githubusercontent.com/whoroopamgupta/roopam-resume/refs/heads/main/resume.json')
      .then(response => response.json())
      .then(data => {
        if (data && data.resumeLink) {
          setResumeUrl(data.resumeLink);
        }
      })
      .catch(error => console.error('Error fetching resume link:', error));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = '';
  };

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
                href={resumeUrl}
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
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {certifications.map((cert, index) => (
                      <div key={index}>
                        <button
                          onClick={() => openCertificateModal(cert)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            padding: '8px 12px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                            borderRadius: '6px',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(123, 92, 255, 0.1)';
                            e.currentTarget.style.paddingLeft = '16px';
                            e.currentTarget.querySelector('.cert-name').style.color = '#7B5CFF';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.paddingLeft = '12px';
                            e.currentTarget.querySelector('.cert-name').style.color = 'rgba(255, 255, 255, 0.8)';
                          }}
                        >
                          <div style={{
                            fontSize: '18px',
                            flexShrink: 0,
                            opacity: 0.8,
                          }}>
                            {cert.icon}
                          </div>
                          <div style={{ flex: 1, textAlign: 'left' }}>
                            <span className="cert-name" style={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '14px',
                              lineHeight: '1.5',
                              transition: 'color 0.3s ease',
                              display: 'block'
                            }}>
                              {cert.name}
                            </span>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              marginTop: '4px'
                            }}>
                              <span style={{
                                fontSize: '10px',
                                color: 'rgba(123, 92, 255, 0.7)',
                                fontWeight: '500',
                                letterSpacing: '0.5px'
                              }}>
                                Click to view
                              </span>
                              <div style={{ display: 'flex', gap: '2px' }}>
                                {[1, 2, 3].map((dot) => (
                                  <div key={dot} style={{
                                    width: '3px',
                                    height: '3px',
                                    borderRadius: '50%',
                                    background: 'rgba(123, 92, 255, 0.5)'
                                  }} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(123, 92, 255, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </div>
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

                  {/* Tools & Technologies Dropdown */}
                  {tools && tools.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      style={{ marginTop: '24px' }}
                    >
                      <button
                        onClick={() => setShowTools(!showTools)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          background: 'rgba(123, 92, 255, 0.05)',
                          border: '1px solid rgba(123, 92, 255, 0.2)',
                          borderRadius: '8px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(123, 92, 255, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(123, 92, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.2)';
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '16px' }}>🛠️</span>
                          Tools & Technologies ({tools.length})
                        </span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: showTools ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      {/* Tools List - Collapsible */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: showTools ? 'auto' : 0,
                          opacity: showTools ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                          gap: '12px',
                          marginTop: '12px',
                          padding: '8px 0'
                        }}>
                          {tools.map((tool, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: showTools ? 1 : 0, y: showTools ? 0 : -10 }}
                              transition={{ delay: index * 0.05 }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 12px',
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderRadius: '6px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              <span style={{ fontSize: '16px', flexShrink: 0 }}>
                                {tool.icon}
                              </span>
                              <span style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '12px',
                                fontWeight: '500',
                                whiteSpace: 'nowrap'
                              }}>
                                {tool.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
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

                        {/* Project Title */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: 'none',
                          }}
                        >
                          <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: 'white',
                            transition: 'color 0.3s ease',
                            marginBottom: '12px'
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
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '14px',
                          lineHeight: '1.7',
                          marginBottom: '12px'
                        }}>
                          {project.description}
                        </p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
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

                        {/* Project Links - GitHub and Live Link */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 18px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '6px',
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(123, 92, 255, 0.15)';
                                e.currentTarget.style.borderColor = '#7B5CFF';
                                e.currentTarget.style.color = '#7B5CFF';
                                e.currentTarget.style.transform = 'translateX(4px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                              View on GitHub
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </a>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 18px',
                                background: 'linear-gradient(135deg, rgba(123, 92, 255, 0.15), rgba(123, 92, 255, 0.05))',
                                border: '1px solid rgba(123, 92, 255, 0.4)',
                                borderRadius: '6px',
                                color: '#7B5CFF',
                                fontSize: '13px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123, 92, 255, 0.3), rgba(123, 92, 255, 0.15))';
                                e.currentTarget.style.borderColor = '#7B5CFF';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(123, 92, 255, 0.3)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123, 92, 255, 0.15), rgba(123, 92, 255, 0.05))';
                                e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.4)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                              View Live
                              <span style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#7B5CFF',
                                animation: 'pulse 2s infinite',
                              }}></span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Download CV Button - Bottom of Projects */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '40px',
                      paddingTop: '32px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <motion.a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 28px',
                        background: 'linear-gradient(to right, #7B5CFF, rgba(123, 92, 255, 0.9))',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '15px',
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
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                      </svg>
                      Download CV
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCertificateModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              maxHeight: '90vh',
              background: 'rgba(13, 13, 15, 0.95)',
              borderRadius: '16px',
              border: '1px solid rgba(123, 92, 255, 0.3)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(123, 92, 255, 0.25)',
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{selectedCertificate.icon}</span>
                <h3 style={{
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {selectedCertificate.name}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Download Button - Only for images */}
                {!selectedCertificate.file.endsWith('.pdf') && (
                  <a
                    href={selectedCertificate.file}
                    download={`${selectedCertificate.name}.png`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(123, 92, 255, 0.2)',
                      border: '1px solid rgba(123, 92, 255, 0.4)',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(123, 92, 255, 0.3)';
                      e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(123, 92, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.4)';
                    }}
                    title="Download Certificate"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(123, 92, 255, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                )}
                {/* Open in New Tab Button - Only for images */}
                {!selectedCertificate.file.endsWith('.pdf') && (
                  <a
                    href={selectedCertificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(123, 92, 255, 0.2)',
                      border: '1px solid rgba(123, 92, 255, 0.4)',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(123, 92, 255, 0.3)';
                      e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(123, 92, 255, 0.2)';
                      e.currentTarget.style.borderColor = 'rgba(123, 92, 255, 0.4)';
                    }}
                    title="Open in New Tab"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(123, 92, 255, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
                {/* Close Button */}
                <button
                  onClick={closeCertificateModal}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 59, 48, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Certificate Viewer - PDF or Image */}
            <div style={{
              width: '100%',
              height: 'calc(90vh - 80px)',
              overflow: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.3)',
            }}>
              {selectedCertificate.file.endsWith('.pdf') ? (
                <iframe
                  src={selectedCertificate.file}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title={selectedCertificate.name}
                />
              ) : (
                <img
                  src={selectedCertificate.file}
                  alt={selectedCertificate.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    padding: '20px',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="color: rgba(255, 255, 255, 0.6); text-align: center; padding: 40px;">Certificate image could not be loaded</div>';
                  }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

