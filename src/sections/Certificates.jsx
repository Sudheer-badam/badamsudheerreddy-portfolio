import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';

const courseraCertificates = [
  { title: "Dynamic Programming, Greedy Algorithms", issuer: "University of Colorado Boulder", tags: ["Algorithms", "Mar 2025"], link: "https://coursera.org/share/93ea572f881930e79b05d6df90a3c110" },
  { title: "Introduction To Java Database Connectivity", issuer: "LearnQuest", tags: ["Java", "JDBC", "Nov 2024"], link: "https://coursera.org/share/4ef29f7982990c8ab3b6fac6fef1c3d7" },
  { title: "Operating Systems and You: Becoming a Power User", issuer: "Google", tags: ["Google", "OS", "Apr 2025"], link: "https://coursera.org/share/573a68286a3a93498fe0de1d0ee41515" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google", tags: ["Google", "Networking", "Feb 2025"], link: "https://coursera.org/share/bcd1884664e1a00c3e9bb6a6e27d4693" },
  { title: "The Unix Workbench", issuer: "Johns Hopkins University", tags: ["Unix", "Bash", "Apr 2025"], link: "https://coursera.org/share/429a8a1034c0f6ac1b3021d9bbfc48d4" },
  { title: "Spring — Ecosystem and Core", issuer: "LearnQuest", tags: ["Spring", "Java", "Feb 2025"], link: "https://coursera.org/share/eb5d25ada645e0e132339f4fbf77f631" },
  { title: "Intro to Operating Systems 1: Virtualization", issuer: "Codio", tags: ["OS", "Virtualization", "Apr 2025"], link: "https://coursera.org/share/db7d175c8e34d2171764c86e299c8b22" },
  { title: "Lambda Expressions with Java", issuer: "Coursera", tags: ["Java", "Functional Programming", "Nov 2024"], link: "https://coursera.org/share/8f1d5ebc5dcfc2d0dd84f02585209a41" },
  { title: "Developing Front-End Apps with React", issuer: "IBM", tags: ["React", "IBM", "Mar 2025"], link: "https://coursera.org/share/cd5fe0a0c13fc8dd9de76e4b181c5908" },
  { title: "Introduction to Front-End Development", issuer: "Meta", tags: ["Meta", "HTML/CSS", "Mar 2025"], link: "https://coursera.org/share/82ff0132cd0fc59ca8b004bbb01333f3" },
  { title: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", tags: ["AI", "IBM", "Nov 2024"], link: "https://coursera.org/share/801bf737e7048133453dc4a96793f7e7" },
  { title: "Hardware and Operating System Foundations II", issuer: "Illinois Tech", tags: ["Hardware", "OS", "Nov 2024"], link: "https://coursera.org/share/d483b81259d0e0f6465b69abbdd7f7f3" },
  { title: "Supervised Machine Learning: Regression", issuer: "IBM", tags: ["ML", "IBM", "Nov 2024"], link: "https://coursera.org/share/9c6365a22ac240df74498e2d46400081" },
  { title: "Exploratory Data Analysis for Machine Learning", issuer: "IBM", tags: ["Data Science", "IBM", "Nov 2024"], link: "https://coursera.org/share/a4087cec469771689522552e604d130d" },
  { title: "Java Servlet Pages (JSPs)", issuer: "LearnQuest", tags: ["Java", "JSP", "Nov 2024"], link: "https://coursera.org/share/739c1d02c371fb0f68e9392bb19ee3b3" },
  { title: "Introduction to Databases", issuer: "Meta", tags: ["Meta", "SQL", "Nov 2024"], link: "https://coursera.org/share/bfdd442776f485ca3e21d3f9ad71efea" },
  { title: "Cloud Application Development Foundations", issuer: "IBM", tags: ["Cloud", "IBM", "Nov 2024"], link: "https://coursera.org/share/51e8e1b64b96536217a94c54af6c7167" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", tags: ["Python", "IBM", "Nov 2024"], link: "https://coursera.org/share/f14648a482b0c54ec2c9e26f17c832e0" },
  { title: "Java Database Connectivity (JDBC) Introduction", issuer: "LearnQuest", tags: ["Java", "JDBC", "Nov 2024"], link: "https://coursera.org/share/8745d9bbe887490f94dc0f043945e207" },
  { title: "Hands-on Introduction to Linux Commands and Shell Scripting", issuer: "IBM", tags: ["Linux", "Bash", "Nov 2024"], link: "https://coursera.org/share/8d1a3bbf149e875c835d5f98fa8f5fc4" },
  { title: "Introduction to Object-Oriented Programming with Java", issuer: "LearnQuest", tags: ["Java", "OOP", "Nov 2024"], link: "https://coursera.org/share/b1ca42087ee8432dcb7d286f1478b2cc" },
  { title: "Introduction to Test and Behavior Driven Development", issuer: "IBM", tags: ["TDD", "BDD", "Nov 2024"], link: "https://coursera.org/share/b1360208b18da2b83b25e6f2f9cd7e72" },
  { title: "Design Patterns", issuer: "University of Alberta", tags: ["Design Patterns", "UML", "Nov 2024"], link: "https://coursera.org/share/2c31b3b648e0c7ce12ddbebfbb100f91" },
];

const otherCertificates = [
  { title: "Docker Tutorial for Beginners", issuer: "Simplilearn", tags: ["Docker", "DevOps"], link: "https://www.simplilearn.com/learn-docker-basics-free-course-skillup" },
  { title: "Certified Essentials Automation Professional", issuer: "Automation Anywhere", tags: ["RPA", "Jan 2026"], link: "https://certificates.automationanywhere.com/dc112cfc-ae58-41fd-b671-202663d60156" },
  { title: "Linguva Skills", issuer: "Linguva", tags: ["Communication", "Soft Skills"], link: "/Badam Sudheer Reddy.pdf" },
  { title: "Technical Internship Certificate", issuer: "Linguva Skills", tags: ["Internship", "Engineering"], link: "https://forage-uploads-prod.s3.amazonaws.com/completion" },
];

const upcomingCertificates = [
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", tags: ["Cloud", "AWS", "Planned"] },
  { title: "Meta Back-End Developer", issuer: "Meta", tags: ["Back-End", "Django", "In Progress"] },
  { title: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", tags: ["Data Engineering", "ML Ops", "Planned"] },
  { title: "Java SE Professional Certification", issuer: "Oracle", tags: ["Java", "Architecture", "Planned"] },
];

// Reusable editorial cert card
const CertCard = ({ cert, future = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="editorial-card"
    style={{ opacity: future ? 0.7 : 1, position: 'relative' }}
  >
    {future && (
      <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '2px 8px', border: '1px solid var(--uo-border)', color: 'var(--uo-grey)' }}>
        PLANNED
      </span>
    )}
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.6rem' }}>
      {future
        ? <Clock size={14} color="var(--uo-border)" style={{ flexShrink: 0, marginTop: '2px' }} />
        : <CheckCircle size={14} color="var(--uo-green)" style={{ flexShrink: 0, marginTop: '2px' }} />}
      <div>
        <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--uo-dark)', lineHeight: 1.3, marginBottom: '2px' }}>{cert.title}</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: 'var(--uo-green)', letterSpacing: '0.5px' }}>{cert.issuer}</div>
      </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: cert.link ? '0.75rem' : 0 }}>
      {cert.tags.map(tag => (
        <span key={tag} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', padding: '2px 8px', border: '1px solid var(--uo-border)', color: 'var(--uo-grey)' }}>{tag}</span>
      ))}
    </div>
    {cert.link && (
      <a href={cert.link} target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--uo-green)', textDecoration: 'none', borderBottom: '1px solid var(--uo-green)', paddingBottom: '1px', transition: 'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--uo-yellow)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--uo-green)'}
      >
        <ExternalLink size={11} /> View Certificate
      </a>
    )}
  </motion.div>
);

const SubHeading = ({ label, count }) => (
  <div style={{ borderTop: '3px solid var(--uo-green)', paddingTop: '1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--uo-dark)' }}>{label}</h3>
    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-grey)' }}>{count} certificates</span>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" style={{ background: 'var(--uo-surface)', padding: '80px 20px', alignItems: 'stretch' }}>
      <div className="section-inner">

        {/* Section heading */}
        <div className="section-heading-bar">
          <span className="section-label">Credentials</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--uo-green)' }}>Certifications</h2>
          <div className="editorial-divider" />
        </div>

        {/* Coursera */}
        <div style={{ marginBottom: '3.5rem' }}>
          <SubHeading label="Coursera Certificates" count={courseraCertificates.length} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {courseraCertificates.map((cert, i) => <CertCard key={i} cert={cert} />)}
          </div>
        </div>

        {/* Other */}
        <div style={{ marginBottom: '3.5rem' }}>
          <SubHeading label="Other Professional Certifications" count={otherCertificates.length} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {otherCertificates.map((cert, i) => <CertCard key={i} cert={cert} />)}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <SubHeading label="Future Roadmap" count={upcomingCertificates.length} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {upcomingCertificates.map((cert, i) => <CertCard key={i} cert={cert} future />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
