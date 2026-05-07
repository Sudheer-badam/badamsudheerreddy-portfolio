import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ minHeight: '40vh' }}>
      <div className="glass" style={{ 
        padding: '4rem', 
        maxWidth: '900px', 
        width: '90%', 
        textAlign: 'center', 
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid var(--primary-color)'
      }}>
        {/* KL University Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
            opacity: 0.9,
            filter: 'saturate(1.5) contrast(1.2)' // Richer colors, original brightness
          }}
        >
          <source src="/KL UNIVERSITY PROMO 2 COMPRESS.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay to ensure text remains readable over the video */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: -1 }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About Me</h2>
          <motion.p 
            animate={{ color: ['#ff0000', '#ffaa00', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.8', 
              fontWeight: 600,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            I am a student at <strong>KL University</strong>, Vaddeswaram, Guntur District. 
            I have recently completed my 3rd year of <strong>B.Tech</strong> in Computer Science and Engineering, 
            achieving a strong academic record with a <strong>CGPA of 8.87/10</strong>. 
            My passion lies at the intersection of <strong>AI</strong> and <strong>Modern Frontend Development</strong>, 
            where I strive to build high-performance, visually stunning web experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
