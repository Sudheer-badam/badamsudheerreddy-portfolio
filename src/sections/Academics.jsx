import React from 'react';
import { motion } from 'framer-motion';
import { Baby, School, BookOpen, GraduationCap, University, ExternalLink } from 'lucide-react';

const educationTimeline = [
  {
    level: 'Nursery to 3rd Class',
    school: 'Sri Viswasanthi Techno School',
    location: 'Nekarikallu, Guntur District - 522615',
    years: '2008–2014',
    description: 'Early childhood education from Nursery to 3rd Class — built a strong foundation of learning, curiosity, and discipline.',
    icon: <Baby size={28} />,
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
    borderColor: 'rgba(255, 107, 107, 0.4)'
  },
  {
    level: 'Primary School (4th Standard)',
    school: 'Oxford School',
    location: 'Narasaraopet, Guntur District - 522601',
    years: '2014–2015',
    description: 'Completed 4th Standard with excellence, developing a solid foundation in core subjects.',
    icon: <School size={28} />,
    gradient: 'linear-gradient(135deg, #FF8008, #FFC837)',
    borderColor: 'rgba(255, 128, 8, 0.4)'
  },
  {
    level: 'Primary School',
    school: 'Ravindra Bharathi Public School',
    location: 'Prakash Nagar, Narasaraopet - 522601',
    years: '2015–2018',
    description: 'Built strong fundamentals in academics, developed early interest in science and mathematics.',
    icon: <School size={28} />,
    gradient: 'linear-gradient(135deg, #4ECDC4, #44CF6C)',
    borderColor: 'rgba(78, 205, 196, 0.4)'
  },
  {
    level: 'High School',
    school: 'Sri Chaitanya Techno Curriculum',
    location: 'Reddy Palem, Guntur District - 522509',
    years: '2018–2021',
    grade: '600 / 600 Marks in 10th Standard',
    description: 'Achieved a perfect score in 10th Standard. Excelled in Mathematics & Science with a keen interest in technology.',
    icon: <BookOpen size={28} />,
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderColor: 'rgba(102, 126, 234, 0.4)',
    pdf: '/SCHOOL OF SECONDARY EDUCATION MARKS MEMO BY DIGILOCKER.pdf'
  },
  {
    level: 'Intermediate (11th & 12th)',
    school: 'Sri Chaitanya Junior College',
    location: 'Gollapudi, Vijayawada - 521225',
    years: '2021–2023',
    grade: '882 / 1000 Marks (1st & 2nd Year)',
    description: 'Studied MPC (Maths, Physics, Chemistry). Secured excellent marks and qualified for engineering entrance exams.',
    icon: <GraduationCap size={28} />,
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    borderColor: 'rgba(240, 147, 251, 0.4)',
    pdf: '/Class XII Marksheet BY DIGI LOCKER.pdf'
  },
  {
    level: 'University (UG)',
    school: 'KL University (Koneru Lakshmaiah Education Foundation)',
    location: 'Vaddeswaram, Guntur District, AP',
    years: '2023–2027',
    grade: 'CGPA: 8.87 / 10',
    description: 'Pursuing B.Tech in Computer Science & Engineering. Specializing in AI/ML and Full Stack Development.',
    icon: <University size={28} />,
    gradient: 'linear-gradient(135deg, #F09819, #EDDE5D)',
    borderColor: 'rgba(240, 152, 25, 0.5)',
    current: true,
    pdfs: [
      { label: 'Sem 1.1 Result', url: '/1.1 EXAM RESULT.pdf' },
      { label: 'Sem 1.2 Result', url: '/1.2 EXAM RESULT.pdf' },
      { label: 'Sem 2.1 Result', url: '/2.1 EXAM RESULT.pdf' },
      { label: 'Sem 2.2 Result', url: '/2.2 EXAM RESULT.pdf' },
      { label: 'Sem 3.1 Result', url: '/3.1 EXAM RESULT.pdf' },
    ]
  },
];

const Academics = () => {
  return (
    <section id="academics" style={{ minHeight: '60vh' }}>
      <h2 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Academics</h2>

      {/* Education Timeline */}
      <div style={{ 
        maxWidth: '900px', 
        width: '90%', 
        margin: '0 auto',
        position: 'relative',
        paddingLeft: '40px'
      }}>
        {/* Vertical Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '18px',
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(180deg, #FF6B6B, #FF8008, #4ECDC4, #667eea, #f093fb, #F09819)',
          borderRadius: '4px'
        }} />

        {educationTimeline.map((edu, i) => (
          <motion.div
            key={edu.level}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            style={{ 
              position: 'relative', 
              marginBottom: '2rem',
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '-32px',
              top: '24px',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: edu.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 15px ${edu.borderColor}`,
              zIndex: 2
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fff' }} />
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: `0 8px 30px ${edu.borderColor}` }}
              className="glass"
              style={{
                padding: '2rem',
                border: `2px solid ${edu.borderColor}`,
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gradient accent bar at top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: edu.gradient
              }} />

              {edu.current && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: edu.gradient,
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#000',
                    letterSpacing: '1px'
                  }}
                >
                  CURRENT
                </motion.div>
              )}

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  background: edu.gradient,
                  padding: '10px',
                  borderRadius: '12px',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {edu.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    marginBottom: '0.3rem',
                    background: edu.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {edu.level}
                  </h3>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.2rem' }}>{edu.school}</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.2rem' }}>{edu.location}</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.6, fontStyle: 'italic' }}>{edu.years}</p>
                  {edu.grade && (
                    <p style={{ 
                      fontSize: '1rem', 
                      fontWeight: 700, 
                      color: '#EDDE5D', 
                      marginTop: '0.4rem',
                      textShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>
                      {edu.grade}
                    </p>
                  )}
                  <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.5rem', lineHeight: '1.5' }}>
                    {edu.description}
                  </p>
                  {edu.pdf && (
                    <a 
                      href={edu.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '0.8rem',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        background: edu.gradient,
                        color: '#fff',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <ExternalLink size={14} /> View Marks Memo (PDF)
                    </a>
                  )}
                  {edu.pdfs && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '0.8rem' }}>
                      {edu.pdfs.map((p) => (
                        <a 
                          key={p.label}
                          href={p.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '6px 14px',
                            borderRadius: '10px',
                            background: edu.gradient,
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                            transition: 'transform 0.2s'
                          }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <ExternalLink size={12} /> {p.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
