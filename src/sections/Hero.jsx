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
          <div className="hero-photo-col" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 2rem',
            background: 'var(--uo-green-dark)',
            position: 'relative',
            gap: '1.5rem'
          }}>
            {/* Elegant Outer Ring / Frame */}
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
              maxWidth: '85vw',
              maxHeight: '85vw',
              borderRadius: '50%',
              padding: '8px',
              border: '2px dashed rgba(254, 225, 35, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(254, 225, 35, 0.08)'
            }}>
              {/* Inner Frame */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid var(--uo-yellow)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
              }}>
                <img
                  src="/BADAM SUDHEER REDDY .jpeg.png"
                  alt="Badam Sudheer Reddy — CSE Student & UI/UX Enthusiast"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
            </div>

            {/* Name + Role + Location */}
            <div style={{
              textAlign: 'center',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '0.5px'
              }}>
                Badam Sudheer Reddy
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--uo-yellow)',
                background: 'rgba(254, 225, 35, 0.1)',
                padding: '3px 12px',
                borderRadius: '100px',
                border: '1px solid rgba(254, 225, 35, 0.2)'
              }}>
                CSE Student &amp; AI Enthusiast
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '4px'
              }}>
                Narasingapadu · Palnadu · Andhra Pradesh
              </span>
            </div>

            {/* APAAR ID Badge */}
            <a
              href="/APPAR ID BY DIGILOCKER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderLeft: '3px solid var(--uo-yellow)',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
                maxWidth: '290px',
                width: '100%',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(254,225,35,0.08)'; e.currentTarget.style.borderColor = 'var(--uo-yellow)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderLeftColor = 'var(--uo-yellow)'; }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)', marginBottom: '1px' }}>
                  APAAR ID · DigiLocker
                </span>
                <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '1px' }}>
                  566973311793
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>

            {/* Resume Download Button */}
            <a
              href="/BADAM SUDHEER REDDY RESUME 2305 (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #f5c518 0%, #e6a800 100%)',
                color: '#0d2e21',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(245,197,24,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                maxWidth: '290px',
                width: '100%',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,197,24,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,197,24,0.35)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
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
                { num: '8.88', label: 'CGPA', link: '#academics-university' },
                { num: '6 Live', label: 'Projects', link: '#projects' },
                { num: '2027', label: 'Graduate' },
              ].map(s => {
                const Tag = s.link ? 'a' : 'div';
                return (
                  <Tag 
                    key={s.label} 
                    {...(s.link ? { href: s.link } : {})}
                    style={{ 
                      textDecoration: 'none', 
                      display: 'block',
                      transition: 'transform 0.2s',
                      cursor: s.link ? 'pointer' : 'default'
                    }}
                    onMouseEnter={e => { if (s.link) e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { if (s.link) e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', fontWeight: 700, color: 'var(--uo-yellow)', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>{s.label}</div>
                  </Tag>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
