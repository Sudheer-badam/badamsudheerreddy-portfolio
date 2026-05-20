import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--uo-cream)', padding: '80px 20px' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div className="section-heading-bar">
          <span className="section-label">Who I Am</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--uo-green)' }}>About Me</h2>
          <div className="editorial-divider" />
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left – portrait + green card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--uo-green-dark)' }}>
              <img
                src="/BADAM SUDHEER REDDY .jpeg.png"
                alt="Badam Sudheer Reddy at KL University"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'saturate(0.8)' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(13,46,33,0.9), transparent)',
                padding: '1.5rem 1.25rem 1rem',
                fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)'
              }}>
                KL University · Vaddeswaram · Guntur
              </div>
            </div>

            {/* Green info card */}
            <div style={{ background: 'var(--uo-green)', padding: '1.75rem', borderLeft: '5px solid var(--uo-yellow)' }}>
              {[
                { label: 'Degree', value: 'B.Tech in CSE' },
                { label: 'CGPA', value: '8.87 / 10.0' },
                { label: 'Year', value: '4th Year (Final)' },
                { label: 'Location', value: 'Palnadu, Andhra Pradesh' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: 'var(--uo-yellow)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--uo-grey)' }}>
              I am a student at <strong style={{ color: 'var(--uo-green)', fontWeight: 700 }}>KL University</strong>, Vaddeswaram, Guntur District, currently pursuing my <strong style={{ color: 'var(--uo-dark)' }}>B.Tech in Computer Science and Engineering</strong>.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--uo-grey)' }}>
              Having completed my 3rd year with a strong academic record and a <span className="highlight-yellow">CGPA of 8.87/10</span>, my passion lies at the intersection of <strong style={{ color: 'var(--uo-green)' }}>Artificial Intelligence</strong> and <strong style={{ color: 'var(--uo-green)' }}>Modern Frontend Development</strong>.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--uo-grey)' }}>
              I strive to build high-performance, visually stunning web experiences that merge technical precision with creative design — crafting interfaces that are both beautiful and functionally robust.
            </p>

            {/* Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              {[
                { title: 'AI & Machine Learning', desc: 'Exploring intelligent systems & data pipelines' },
                { title: 'Frontend Engineering', desc: 'React, Vite, and modern web toolchains' },
                { title: 'UI/UX Design', desc: 'Design systems, Figma & editorial aesthetics' },
                { title: 'Full Stack Dev', desc: 'End-to-end web application architecture' },
              ].map(p => (
                <div key={p.title} className="editorial-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--uo-green)', marginBottom: '0.4rem' }}>{p.title}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--uo-grey)', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            #about .section-inner > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
