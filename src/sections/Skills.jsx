import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Layout, Smartphone, Terminal } from 'lucide-react';
import FloatingElement from '../components/FloatingElement';

const skills = [
  { name: 'React', icon: <Layout />, color: '#61DAFB', video: '/REACT PROMO COMPRESS.mp4' },
  { name: 'Python', icon: <Terminal />, color: '#3776AB', video: '/PHYTON PROMO COMPRESS.mp4' },
  { name: 'AI/ML', icon: <Cpu />, color: '#FFD43B', video: '/AIML PROMO VIDEO COMPRESS.mp4' },
  { name: 'Fullstack', icon: <Database />, color: '#4DB33D', video: '/FULL STACK VIDEO COMPRESS.mp4' },
  { name: 'Frontend', icon: <Code2 />, color: '#F7DF1E', video: '/FRONTEND VIDEO COMPRESS.mp4' },
  { name: 'App Dev', icon: <Smartphone />, color: '#A4C639', video: '/APP DEV COMPRESS.mp4' },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Skills</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '900px',
      }}>
        {skills.map((skill, index) => (
          <FloatingElement key={skill.name} delay={index * 0.2} duration={4 + index % 2}>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="glass" 
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '15px'
              }}
            >
              {skill.video && (
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
                    zIndex: -1,
                    opacity: 0.6,
                    borderRadius: 'inherit'
                  }}
                >
                  <source src={skill.video} type="video/mp4" />
                </video>
              )}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: skill.color }}>
                  {React.cloneElement(skill.icon, { size: 40 })}
                </div>
                <span style={{ fontWeight: 600, textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>{skill.name}</span>
              </div>
            </motion.div>
          </FloatingElement>
        ))}
      </div>
    </section>
  );
};

export default Skills;
