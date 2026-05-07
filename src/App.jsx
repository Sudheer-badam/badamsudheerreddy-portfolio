import React from 'react';
import Navbar from './components/Navbar';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Fixed YouTube Video Background */}
      <div className="yt-bg-wrapper">
        <video
          src="/KLU VIDEO 1 COMPRESS.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            pointerEvents: 'none',
            filter: 'brightness(1.15) saturate(1.4)' // Extra bright and enhanced colors
          }}
        />
      </div>
      {/* Dark overlay for readability */}
      <div className="yt-bg-overlay" />

      {/* Bottom-right Logo Watermark */}
      <img
        src="/Screenshot 2023-11-27 185847.png"
        alt="Logo"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '90px',
          height: 'auto',
          opacity: 0.85,
          zIndex: 10,
          borderRadius: '10px',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 8px rgba(255,153,51,0.6))',
        }}
      />

      {/* Bottom-left Profile Picture */}
      <img
        src="/BADAM SUDHEER REDDY .jpeg.png"
        alt="Badam Sudheer Reddy"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '90px',
          height: '90px',
          objectFit: 'cover',
          objectPosition: 'center top',
          opacity: 0.9,
          zIndex: 10,
          borderRadius: '50%',
          border: '3px solid #FF9933',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 10px rgba(255,153,51,0.7))',
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Academics />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        color: 'rgba(255,255,255,0.9)',
        borderTop: '2px solid var(--glass-border)',
        marginTop: '40px',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(5,5,20,0.7)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '160px',
      }}>
        {/* Nature Video Background */}
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
            zIndex: 0,
            opacity: 0.5,
          }}
        >
          <source src="/nature video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 0 }}></div>

        {/* Center Text */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px' }}>
          <p className="rainbow-text" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>
            © 2026 Badam Sudheer Reddy | Antigravity Theme
          </p>
          <p className="rainbow-text" style={{ 
            fontSize: '0.85rem',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '5px',
            fontWeight: 500
          }}>
            <MapPin size={14} /> Narasingapadu Village, Nekarikallu Mandal, Palnadu District - 522615
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
