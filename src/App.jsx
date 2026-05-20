import React from 'react';
import Navbar from './components/Navbar';
import { MapPin } from 'lucide-react';
import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import './App.css';

function App() {
  React.useEffect(() => {
    const img = new Image();
    img.src = '/BADAM SUDHEER REDDY .jpeg.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 128;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, 0, 0, size, size);
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.type = 'image/png';
      link.href = canvas.toDataURL('image/png');
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <About />
        <Academics />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer style={{
        background: 'var(--uo-green-dark)',
        borderTop: '4px solid var(--uo-yellow)',
        padding: '0',
      }}>
        {/* Top row */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src="/BADAM SUDHEER REDDY .jpeg.png"
              alt="Badam Sudheer Reddy"
              style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '2px solid var(--uo-yellow)' }}
            />
            <div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>Badam Sudheer Reddy</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>CSE · KL University · 2027</div>
            </div>
          </div>

          {/* Nav links in footer */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['#home', '#about', '#skills', '#projects', '#contact'].map(href => (
              <a key={href} href={href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--uo-yellow)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
            © 2026 Badam Sudheer Reddy. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={11} /> Narasingapadu · Nekarikallu · Palnadu District — 522615
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
