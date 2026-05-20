import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Vision',
    year: '2024',
    category: 'AI / Computer Vision',
    description: 'Real-time object detection system using TensorFlow and React. Achieves 95% accuracy on custom datasets with a live camera feed UI.',
    tags: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    link: '#',
  },
  {
    title: 'Galaxy Chat',
    year: '2024',
    category: 'Full Stack / Security',
    description: 'Decentralised chat application with end-to-end encryption and a space-themed editorial UI built on WebCrypto APIs.',
    tags: ['Node.js', 'Socket.io', 'WebCrypto'],
    link: '#',
  },
  {
    title: 'EcoTrack',
    year: '2023',
    category: 'Mobile / Data Viz',
    description: 'Sustainability tracking app for urban commuters that visualises carbon footprint in real-time using D3.js charts.',
    tags: ['React Native', 'Firebase', 'D3.js'],
    link: '#',
  },
  {
    title: 'Quantum Ledger',
    year: '2023',
    category: 'Blockchain / Web3',
    description: 'High-performance blockchain explorer with advanced data visualisation, live transaction updates, and an institutional design system.',
    tags: ['Solidity', 'Ether.js', 'React'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ background: 'var(--uo-cream)', padding: '80px 20px' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div className="section-heading-bar">
          <span className="section-label">Portfolio</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--uo-green)' }}>Selected Projects</h2>
          <div className="editorial-divider" />
        </div>

        {/* Featured grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="editorial-card"
            >
              {/* Card top bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-green)', background: 'rgba(21,71,52,0.08)', padding: '4px 10px' }}>
                  {project.category}
                </span>
                <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-border)' }}>
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--uo-dark)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                {project.title}
              </h3>

              <div style={{ width: '30px', height: '2px', background: 'var(--uo-yellow)', marginBottom: '0.75rem' }} />

              {/* Description */}
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--uo-grey)', marginBottom: '1.25rem' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', border: '1px solid var(--uo-border)', color: 'var(--uo-grey)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a href={project.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--uo-green)', textDecoration: 'none', borderBottom: '1px solid var(--uo-green)', paddingBottom: '2px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--uo-yellow)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--uo-green)'}
              >
                View Project <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            #projects .section-inner > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
