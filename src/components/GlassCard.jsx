import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ title, issuer, description, tags = [], link = "#", titleClassName = "", cardClass = "", showTravelingFlower = false, floatingImage = null }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass ${cardClass}`}
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        overflow: 'hidden'
      }}
      onClick={() => link !== "#" && window.open(link, '_blank')}
      onMouseEnter={(e) => e.currentTarget.classList.add('glow-shadow')}
      onMouseLeave={(e) => e.currentTarget.classList.remove('glow-shadow')}
    >
      {floatingImage && (
        <>
          {/* Main bottom-right jumping logo */}
          <motion.img
            src={floatingImage}
            alt="Floating Logo"
            className="traveling-flower"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
            }}
          />
          
          {/* Falling logos from top to bottom */}
          {[...Array(6)].map((_, i) => (
            <motion.img
              key={`fall-${i}`}
              src={floatingImage}
              alt="Falling Logo"
              animate={{ 
                y: [-50, 400], 
                x: [0, i % 2 === 0 ? 40 : -40, 0],
                rotate: [0, 360],
                opacity: [0, 0.5, 0.5, 0]
              }}
              transition={{ 
                duration: 4 + (i % 3), 
                repeat: Infinity, 
                delay: i * 0.8,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: `${10 + (i * 15)}%`,
                width: '30px',
                height: '30px',
                objectFit: 'contain',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
          ))}
        </>
      )}
      {showTravelingFlower && (
        <div className="traveling-flower">
          🌸
        </div>
      )}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 className={titleClassName} style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.2rem' }}>{title}</h3>
          {link !== "#" && (
            <span style={{ fontSize: '1.2rem', opacity: 0.7 }} title="View Credential">
              ↗️
            </span>
          )}
        </div>
        {issuer && (
          <p style={{ 
            color: 'var(--secondary-color)', 
            fontSize: '0.8rem', 
            fontWeight: 800, 
            letterSpacing: '1px',
            marginTop: '-0.5rem',
            opacity: 0.8
          }}>
            {issuer.toUpperCase()}
          </p>
        )}
        <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.6' }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
          {tags.map((tag, index) => (
            <span key={index} style={{ 
              fontSize: '0.7rem', 
              padding: '4px 10px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GlassCard;
