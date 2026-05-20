import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Layout, Smartphone, Terminal, Globe, Shield, GitBranch, Layers } from 'lucide-react';

const skills = [
  { name: 'React & Vite',      icon: Layout,     level: 90, category: 'Frontend' },
  { name: 'Python',            icon: Terminal,   level: 85, category: 'Language' },
  { name: 'AI / ML',           icon: Cpu,        level: 80, category: 'Intelligence' },
  { name: 'Full Stack',        icon: Database,   level: 78, category: 'Architecture' },
  { name: 'Frontend Design',   icon: Code2,      level: 88, category: 'UI/UX' },
  { name: 'App Development',   icon: Smartphone, level: 72, category: 'Mobile' },
  { name: 'Web APIs',          icon: Globe,      level: 82, category: 'Backend' },
  { name: 'Git & CI/CD',       icon: GitBranch,  level: 75, category: 'DevOps' },
  { name: 'UI/UX Systems',     icon: Layers,     level: 85, category: 'Design' },
  { name: 'Cybersecurity',     icon: Shield,     level: 65, category: 'Security' },
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--uo-surface)', padding: '80px 20px' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div className="section-heading-bar">
          <span className="section-label">Capabilities</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--uo-green)' }}>Skills & Expertise</h2>
          <div className="editorial-divider" />
        </div>

        {/* Main grid: skill tags + bar charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left — tagged skill list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--uo-grey)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Core technical competencies developed through coursework, personal projects, and hands-on development work at KL University.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="skill-tag"
                  >
                    <Icon size={14} />
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>

            {/* Category legend */}
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--uo-green)', borderLeft: '5px solid var(--uo-yellow)' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)', marginBottom: '0.75rem' }}>Focus Areas</div>
              {['Frontend', 'Intelligence', 'Architecture', 'Design', 'DevOps'].map(cat => (
                <div key={cat} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  · {cat}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 600, color: 'var(--uo-dark)' }}>
                      <Icon size={13} color="var(--uo-green)" />
                      {skill.name}
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: 'var(--uo-green)' }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--uo-border)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.06, ease: 'easeOut' }}
                      style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: skill.level >= 85 ? 'var(--uo-green)' : skill.level >= 75 ? 'var(--uo-green-light)' : 'var(--uo-yellow)' }}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #skills .section-inner > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
