import React from 'react';
import { motion } from 'framer-motion';
import { Baby, School, BookOpen, GraduationCap, University, ExternalLink } from 'lucide-react';

const educationTimeline = [
  {
    level: 'Nursery to 3rd Class',
    school: 'Sri Viswasanthi Techno School',
    location: 'Nekarikallu, Guntur District - 522615',
    years: '2008–2014',
    description: 'Early childhood education — built a strong foundation of learning, curiosity, and discipline.',
    icon: Baby,
  },
  {
    level: 'Primary School (4th Standard)',
    school: 'Oxford School',
    location: 'Narasaraopet, Guntur District - 522601',
    years: '2014–2015',
    description: 'Completed 4th Standard with excellence, developing a solid foundation in core subjects.',
    icon: School,
  },
  {
    level: '5th to 8th Standard',
    school: 'Ravindra Bharathi Public School',
    location: 'Prakash Nagar, Narasaraopet - 522601',
    years: '2015–2018',
    description: 'Built strong fundamentals in academics and developed early interest in science and mathematics.',
    icon: School,
  },
  {
    level: 'High School',
    school: 'Sri Chaitanya Techno Curriculum',
    location: 'Reddy Palem, Guntur District - 522509',
    years: '2018–2021',
    grade: '600 / 600 Marks in 10th Standard',
    description: 'Achieved a perfect score in 10th Standard. Excelled in Mathematics & Science.',
    icon: BookOpen,
    pdfs: [
      { label: 'Marks Memo', url: '/SCHOOL OF SECONDARY EDUCATION MARKS MEMO BY DIGILOCKER.pdf' },
      { label: 'Transfer Certificate', url: '/TRANSFER CERTIFICATE FOR 10TH STANDARD.pdf' }
    ]
  },
  {
    level: 'Intermediate (11th & 12th)',
    school: 'Sri Chaitanya Junior College',
    location: 'Gollapudi, Vijayawada - 521225',
    years: '2021–2023',
    grade: '882 / 1000 Marks — MPC Stream',
    description: 'Studied Maths, Physics, Chemistry. Secured excellent marks and qualified for engineering entrance exams.',
    icon: GraduationCap,
    pdfs: [
      { label: 'Marks Memo', url: '/Class XII Marksheet BY DIGI LOCKER.pdf' },
      { label: 'Transfer Certificate', url: '/TRANSFER CERTIFICATE FOR INTERMEDIATE COURSE.pdf' }
    ]
  },
  {
    level: 'University — B.Tech CSE',
    school: 'KL University (Koneru Lakshmaiah Education Foundation)',
    location: 'Vaddeswaram, Guntur District, AP',
    years: '2023–2027',
    grade: 'CGPA: 8.88 / 10.0',
    description: 'Pursuing B.Tech in Computer Science & Engineering. Specialising in AI/ML and Full Stack Development.',
    icon: University,
    current: true,
    pdfs: [
      { label: 'Sem 1.1', url: '/1.1 EXAM RESULT.pdf' },
      { label: 'Sem 1.2', url: '/1.2 EXAM RESULT.pdf' },
      { label: 'Sem 2.1', url: '/2.1 EXAM RESULT.pdf' },
      { label: 'Sem 2.2', url: '/2.2 EXAM RESULT.pdf' },
      { label: 'Sem 3.1', url: '/3.1 EXAM RESULT.pdf' },
      { label: 'Sem 3.2', url: '/3.2 SEM END EXAM RESULT.pdf' },
    ]
  },
];

const Academics = () => {
  return (
    <section id="academics" style={{ background: 'var(--uo-cream)', padding: '80px 20px' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div className="section-heading-bar">
          <span className="section-label">Education</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--uo-green)' }}>Academic Timeline</h2>
          <div className="editorial-divider" />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '36px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '10px', top: 0, bottom: 0,
            width: '3px', background: 'var(--uo-green)',
          }} />

          {educationTimeline.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.level}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ position: 'relative', marginBottom: '1.75rem' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '-32px', top: '20px',
                  width: '22px', height: '22px',
                  background: edu.current ? 'var(--uo-yellow)' : 'var(--uo-green)',
                  border: '3px solid var(--uo-cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                }} />

                {/* Card */}
                <div className="editorial-card" style={{ borderTopColor: edu.current ? 'var(--uo-yellow)' : 'var(--uo-green)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px', height: '36px', flexShrink: 0,
                        background: edu.current ? 'var(--uo-yellow)' : 'var(--uo-green)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={18} color={edu.current ? 'var(--uo-green-dark)' : '#fff'} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-grey)' }}>{edu.years}</div>
                        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', fontWeight: 700, color: 'var(--uo-dark)', marginTop: '2px' }}>{edu.level}</h3>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {edu.current && (
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--uo-yellow)', color: 'var(--uo-green-dark)' }}>
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: 'var(--uo-dark)', marginBottom: '2px' }}>{edu.school}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--uo-grey)', marginBottom: '0.5rem' }}>{edu.location}</p>

                  {edu.grade && (
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: 'var(--uo-green)', marginBottom: '0.5rem', borderLeft: '3px solid var(--uo-yellow)', paddingLeft: '10px' }}>
                      {edu.grade}
                    </p>
                  )}

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--uo-grey)', marginBottom: edu.pdfs ? '1rem' : 0 }}>
                    {edu.description}
                  </p>

                  {edu.pdfs && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {edu.pdfs.map(p => (
                        <a
                          key={p.label}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            padding: '5px 14px',
                            border: '1px solid var(--uo-green)',
                            color: 'var(--uo-green)',
                            fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600,
                            letterSpacing: '0.5px', textDecoration: 'none',
                            transition: 'background 0.2s, color 0.2s',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'var(--uo-green)'; e.currentTarget.style.color = 'var(--uo-yellow)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--uo-green)'; }}
                        >
                          <ExternalLink size={11} /> {p.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;
