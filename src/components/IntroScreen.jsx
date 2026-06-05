import React, { useState, useEffect } from 'react';
import './IntroScreen.css';

// Generate random particles
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 5 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  dur: Math.random() * 4 + 3,
  color: i % 3 === 0 ? '#FEE123' : i % 3 === 1 ? '#4ade80' : '#38bdf8',
}));

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1100);
    const t3 = setTimeout(() => setPhase(3), 1600);
    const fade = setTimeout(() => setIsFading(true), 4200);
    const done = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 5000);
    return () => {
      [t1, t2, t3, fade, done].forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => { setIsVisible(false); document.body.style.overflow = ''; }, 500);
  };

  if (!isVisible) return null;

  return (
    <div className={`intro-overlay ${isFading ? 'intro-fade-out' : ''}`}>

      {/* Aurora blobs */}
      <div className="intro-aurora intro-aurora-1" aria-hidden="true" />
      <div className="intro-aurora intro-aurora-2" aria-hidden="true" />
      <div className="intro-aurora intro-aurora-3" aria-hidden="true" />

      {/* Floating particles */}
      <div className="intro-particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="intro-particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* Corner brackets */}
      <div className="intro-corner intro-corner-tl" aria-hidden="true" />
      <div className="intro-corner intro-corner-tr" aria-hidden="true" />
      <div className="intro-corner intro-corner-bl" aria-hidden="true" />
      <div className="intro-corner intro-corner-br" aria-hidden="true" />

      {/* Skip */}
      <button className="intro-skip-btn" onClick={handleSkip} aria-label="Skip introduction">
        Skip ›
      </button>

      {/* Main content */}
      <div className="intro-content">

        {/* Avatar + rings */}
        <div className="intro-avatar-wrap">
          <div className="intro-ring intro-ring-1" />
          <div className="intro-ring intro-ring-2" />
          <div className="intro-ring intro-ring-3" />
          <div className="intro-avatar-glow" />
          <div className="intro-avatar-circle">
            <img
              src="/BADAM SUDHEER REDDY .jpeg.png"
              alt="Badam Sudheer Reddy"
              className="intro-avatar-img"
            />
          </div>
        </div>

        {/* Name */}
        <div className={`intro-name-wrap ${phase >= 1 ? 'intro-in' : ''}`}>
          <h1 className="intro-name">
            <span className="intro-name-first">Badam </span>
            <span className="intro-name-last">Sudheer Reddy</span>
          </h1>
          <p className="intro-caption">My Portfolio</p>
          <div className="intro-divider">
            <span className="intro-divider-line" />
            <span className="intro-divider-dot" />
            <span className="intro-divider-line" />
          </div>
        </div>

        {/* Roles */}
        <div className={`intro-roles ${phase >= 2 ? 'intro-in' : ''}`}>
          <span className="intro-badge intro-badge-green">CSE Student</span>
          <span className="intro-badge intro-badge-yellow">Developer</span>
          <span className="intro-badge intro-badge-sky">KL University 2027</span>
        </div>

        {/* Progress */}
        <div className={`intro-progress-wrap ${phase >= 3 ? 'intro-in' : ''}`}>
          <div className="intro-progress-track">
            <div className="intro-progress-fill" />
          </div>
          <p className="intro-progress-label">Loading My Portfolio…</p>
        </div>

      </div>
    </div>
  );
};

export default IntroScreen;
