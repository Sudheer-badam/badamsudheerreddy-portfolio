import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '64px' }}>
      {/* ── Top green bar ── */}
      <div style={{ background: 'var(--uo-green)', padding: '10px 2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          Portfolio · Computer Science & Engineering
        </span>
        <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>
          KL University · 2027
        </span>
      </div>

      {/* ── Hero Grid ── */}
      <div style={{ flex: 1, display: 'flex' }}>
        <div className="hero-grid" style={{ maxWidth: '100%', flex: 1, margin: 0 }}>

          {/* Photo Column */}
          <div className="hero-photo-col">
            <img
              src="/BADAM SUDHEER REDDY .jpeg.png"
              alt="Badam Sudheer Reddy — CSE Student & UI/UX Enthusiast"
            />
            {/* Overlay tag */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '1rem 1.5rem',
              background: 'linear-gradient(to top, rgba(13,46,33,0.95) 60%, transparent)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem', fontWeight: 600, letterSpacing: '2px',
              textTransform: 'uppercase', color: 'var(--uo-yellow)'
            }}>
              Narasingapadu · Palnadu · Andhra Pradesh
            </div>
          </div>

          {/* Text Column */}
          <div className="hero-text-col">
            <span className="section-label" style={{ borderColor: 'var(--uo-yellow)', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
              Introduction
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-1px',
              }}
            >
              Badam<br />
              <span style={{ color: 'var(--uo-yellow)' }}>Sudheer</span><br />
              Reddy
            </motion.h1>

            <div style={{ width: '50px', height: '3px', background: 'var(--uo-yellow)', margin: '0.25rem 0' }} />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 400,
                maxWidth: '400px',
              }}
            >
              A <strong style={{ color: 'var(--uo-yellow)', fontWeight: 600 }}>Future-Ready CSE Student</strong> &amp; UI/UX Enthusiast at KL University — building experiences that defy expectations at the intersection of AI and Modern Frontend Development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              {/* ── Hire Me — top CTA ── */}
              <a
                href="#contact"
                id="hero-hire-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '0.9rem 2.4rem',
                  background: 'linear-gradient(135deg, #f5c518 0%, #e6a800 60%, #c88400 100%)',
                  color: '#0d2e21',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.88rem',
                  fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  boxShadow: '0 4px 20px rgba(245,197,24,0.4)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,197,24,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,197,24,0.4)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
                Hire Me
              </a>

              <a href="#projects" className="btn-primary" id="hero-explore-btn">
                Explore Projects
              </a>
              <a href="#contact" style={{
                display: 'inline-block', padding: '0.85rem 2.2rem',
                background: 'transparent', color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Inter, sans-serif', fontSize: '0.85rem',
                fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.35)',
                transition: 'border-color 0.25s, color 0.25s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--uo-yellow)'; e.target.style.color = 'var(--uo-yellow)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.35)'; e.target.style.color = 'rgba(255,255,255,0.85)'; }}
              id="hero-contact-btn"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stat row */}
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '0.5rem' }}>
              {[
                { num: '8.88', label: 'CGPA' },
                { num: '1 Live', label: 'AI Project' },
                { num: '2027', label: 'Graduate' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--uo-yellow)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
