import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Terminal, ShieldAlert, Award, FileText, BellRing, BarChart3, Radio } from 'lucide-react';

const PlaceMentorProject = {
  title: 'PlaceMentor AI',
  tagline: 'Autonomous Student Placement Intelligence & Neural Notification Engine',
  url: 'https://placementor-ai-badamsudheerreddy.streamlit.app/',
  role: 'Creator & Lead Architect',
  status: 'Live / Production Ready',
  category: 'AI / Full-Stack Analytics',
  summary: 'A futuristic academic co-pilot and placement preparation ecosystem built to empower KL University students. Features real-time official news scraping, AI resume scoring, and institutional data analytics.',
  tags: ['Python', 'Streamlit', 'NLP & Spacy', 'SQLite3', 'Pandas & NumPy', 'BeautifulSoup4', 'Plotly'],
  metrics: [
    { label: 'Core Architecture', value: 'Platform Intelligent' },
    { label: 'Sync Capability', value: 'Real-time Neural Feed' },
    { label: 'Admin Security', value: 'Master ID Bypass' },
  ],
  features: [
    {
      icon: Cpu,
      title: 'AI Resume Parser & Optimizer',
      desc: 'Integrates automated NLP engines to parse resumes, map core competencies, and generate placement preparedness scores.'
    },
    {
      icon: Radio,
      title: 'KLU Live Updates Scraper',
      desc: 'An automated live scraper that aggregates announcements from KL University official channels and renders them inside the app.'
    },
    {
      icon: BellRing,
      title: 'Pulsing Neural Notice Board',
      desc: 'Features custom notifications styled with high-contrast, pulsing badges to ensure high-priority academic alerts are never missed.'
    },
    {
      icon: BarChart3,
      title: 'Developer Control Dashboard',
      desc: 'Provides secure user access controls and deep-dive analytics to track student progress, college affiliations, and scores.'
    }
  ]
};

const Projects = () => {
  const [showTechnicalSpecs, setShowTechnicalSpecs] = useState(false);

  return (
    <section id="projects" style={{ background: 'var(--uo-cream)', padding: '90px 20px', borderBottom: '1px solid var(--uo-border)' }}>
      <div className="section-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <div className="section-heading-bar" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ border: '1px solid var(--uo-green)', color: 'var(--uo-green)' }}>Featured Case Study</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: 'var(--uo-green)', marginTop: '0.5rem' }}>Core Project</h2>
          <div className="editorial-divider" />
        </div>

        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card"
          style={{
            background: 'var(--uo-green-dark)',
            color: '#FFFFFF',
            border: '2px solid var(--uo-yellow)',
            padding: '0',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(13,46,33,0.15)'
          }}
        >
          {/* Top header bar */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--uo-yellow)', boxShadow: '0 0 10px var(--uo-yellow)' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>
                {PlaceMentorProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {PlaceMentorProject.category}
            </span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>
              
              {/* Left Column: Core Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1 }}>
                    {PlaceMentorProject.title}
                  </h3>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {PlaceMentorProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {PlaceMentorProject.summary}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {PlaceMentorProject.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={PlaceMentorProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.85rem 1.75rem',
                      background: 'var(--uo-yellow)',
                      color: 'var(--uo-green-dark)',
                      textDecoration: 'none',
                      fontWeight: 700,
                      border: '2px solid var(--uo-yellow)'
                    }}
                  >
                    Launch Live App <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => setShowTechnicalSpecs(!showTechnicalSpecs)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.85rem 1.75rem',
                      background: 'transparent',
                      color: '#FFFFFF',
                      border: '2px solid rgba(255, 255, 255, 0.25)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {showTechnicalSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              {/* Right Column: Key metrics */}
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  System Architecture Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {PlaceMentorProject.metrics.map(m => (
                    <div key={m.label} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                        {m.label}
                      </span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Technical specs detailed view */}
            <AnimatePresence>
              {showTechnicalSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {PlaceMentorProject.features.map(f => {
                      const Icon = f.icon;
                      return (
                        <div key={f.title} style={{ display: 'flex', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                          <div style={{ color: 'var(--uo-yellow)', marginTop: '3px' }}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                              {f.title}
                            </h4>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                              {f.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CSS override for pulse animation */}
        <style>{`
          @keyframes pulse-light {
            0% { transform: scale(0.95); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.7; }
          }
          .pulse-dot {
            animation: pulse-light 2s infinite ease-in-out;
          }
          @media (max-width: 768px) {
            #projects .editorial-card > div {
              padding: 1.5rem !important;
            }
            #projects div[style*="grid-template-columns: 3fr 2fr"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            #projects div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
