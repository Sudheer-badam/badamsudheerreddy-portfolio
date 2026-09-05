import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';

const courseraCertificates = [
  { title: "Dynamic Programming, Greedy Algorithms", issuer: "University of Colorado Boulder", tags: ["Algorithms", "Mar 2025"], link: "/coursera_certs/Dynamic Programming Greedy Algorithm.pdf", verifyLink: "https://coursera.org/verify/RCWP4R7IE7O6" },
  { title: "Introduction To Java Database Connectivity", issuer: "LearnQuest", tags: ["Java", "JDBC", "Nov 2024"], link: "/coursera_certs/document (4).pdf", verifyLink: "https://coursera.org/verify/HCYXTHBHS60N" },
  { title: "Operating Systems and You: Becoming a Power User", issuer: "Google", tags: ["Google", "OS", "Apr 2025"], link: "/coursera_certs/document (5).pdf", verifyLink: "https://coursera.org/verify/VV1NBZFZGF3R" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google", tags: ["Google", "Networking", "Feb 2025"], link: "/coursera_certs/document (6).pdf", verifyLink: "https://coursera.org/verify/A30IOM8GYCNF" },
  { title: "The Unix Workbench", issuer: "Johns Hopkins University", tags: ["Unix", "Bash", "Apr 2025"], link: "/coursera_certs/document (7).pdf", verifyLink: "https://coursera.org/verify/YDG3E68DEJ45" },
  { title: "Spring — Ecosystem and Core", issuer: "LearnQuest", tags: ["Spring", "Java", "Feb 2025"], link: "/coursera_certs/document (25).pdf", verifyLink: "https://coursera.org/verify/XMDK949PDP5A" },
  { title: "Intro to Operating Systems 1: Virtualization", issuer: "Codio", tags: ["OS", "Virtualization", "Apr 2025"], link: "/coursera_certs/document (26).pdf", verifyLink: "https://coursera.org/verify/K6K5GKFWUDYD" },
  { title: "Lambda Expressions with Java", issuer: "Coursera", tags: ["Java", "Functional Programming", "Nov 2024"], link: "/coursera_certs/document (27).pdf", verifyLink: "https://coursera.org/verify/F281MJG34ZC7" },
  { title: "Developing Front-End Apps with React", issuer: "IBM", tags: ["React", "IBM", "Mar 2025"], link: "/coursera_certs/document (28).pdf", verifyLink: "https://coursera.org/verify/KDGUB9VIR90I" },
  { title: "Introduction to Front-End Development", issuer: "Meta", tags: ["Meta", "HTML/CSS", "Mar 2025"], link: "/coursera_certs/document (8).pdf", verifyLink: "https://coursera.org/verify/ZPVEKYXS7J96" },
  { title: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", tags: ["AI", "IBM", "Nov 2024"], link: "/coursera_certs/document (9).pdf", verifyLink: "https://coursera.org/verify/HZGZSJT8UWWW" },
  { title: "Hardware and Operating System Foundations II", issuer: "Illinois Tech", tags: ["Hardware", "OS", "Nov 2024"], link: "/coursera_certs/document (13).pdf", verifyLink: "https://coursera.org/verify/YTNAXMMNTVLV" },
  { title: "Supervised Machine Learning: Regression", issuer: "IBM", tags: ["ML", "IBM", "Nov 2024"], link: "/coursera_certs/document (14).pdf", verifyLink: "https://coursera.org/verify/74C9IPC23H1U" },
  { title: "Exploratory Data Analysis for Machine Learning", issuer: "IBM", tags: ["Data Science", "IBM", "Nov 2024"], link: "/coursera_certs/document (15).pdf", verifyLink: "https://coursera.org/verify/IUP6VRD33RVC" },
  { title: "Java Servlet Pages (JSPs)", issuer: "LearnQuest", tags: ["Java", "JSP", "Nov 2024"], link: "/coursera_certs/document (16).pdf", verifyLink: "https://coursera.org/verify/7PC5Q1ZS144I" },
  { title: "Introduction to Databases", issuer: "Meta", tags: ["Meta", "SQL", "Nov 2024"], link: "/coursera_certs/document (17).pdf", verifyLink: "https://coursera.org/verify/3RBKIVGA6OYJ" },
  { title: "Cloud Application Development Foundations", issuer: "IBM", tags: ["Cloud", "IBM", "Nov 2024"], link: "/coursera_certs/certificate-1788584603154.pdf", verifyLink: "https://coursera.org/verify/IUP6VRD33RVC" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", tags: ["Python", "IBM", "Nov 2024"], link: "/coursera_certs/document (19).pdf", verifyLink: "https://coursera.org/verify/BYVU2FBW0YFO" },
  { title: "Java Database Connectivity (JDBC) Introduction", issuer: "LearnQuest", tags: ["Java", "JDBC", "Nov 2024"], link: "/coursera_certs/document (20).pdf", verifyLink: "https://coursera.org/verify/PN5OLRU1JMSA" },
  { title: "Fundamentals of Red Hat Enterprise Linux", issuer: "Red Hat", tags: ["Linux", "Red Hat", "Nov 2024"], link: "/coursera_certs/document (29).pdf", verifyLink: "https://coursera.org/verify/1ECNYPLWO0GX" },
  { title: "Hands-on Introduction to Linux Commands and Shell Scripting", issuer: "IBM", tags: ["Linux", "Bash", "Nov 2024"], link: "/coursera_certs/document (21).pdf", verifyLink: "https://coursera.org/verify/IRED9L6T1RQI" },
  { title: "Introduction to Object-Oriented Programming with Java", issuer: "LearnQuest", tags: ["Java", "OOP", "Nov 2024"], link: "/coursera_certs/document (22).pdf", verifyLink: "https://coursera.org/verify/LXS0PS4DQWLR" },
  { title: "Introduction to Test and Behavior Driven Development", issuer: "IBM", tags: ["TDD", "BDD", "Nov 2024"], link: "/coursera_certs/document (23).pdf", verifyLink: "https://coursera.org/verify/41MDU4RTE9HG" },
  { title: "Design Patterns", issuer: "University of Alberta", tags: ["Design Patterns", "UML", "Nov 2024"], link: "/coursera_certs/document (24).pdf", verifyLink: "https://coursera.org/verify/19G5APURUYK3" },
];

const otherCertificates = [
  { title: "AWS Certified Data Engineer - Associate", issuer: "Amazon Web Services", tags: ["AWS", "Data Engineering"], link: "/AWS Certified Data Engineer - Associate certificate BADAM SUDHEER REDDY.pdf", verifyLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/9b3af204cae14f8c97309f98f8e332b2", logo: "/aws Certified logo.jpeg" },
  { title: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", tags: ["Azure", "Cloud"], link: "/BADAM SUDHEER REDDY AZURE 900 CERTIFICATE.pdf", verifyLink: "https://learn.microsoft.com/api/credentials/share/en-us/BADAMSUDHEERREDDY-1543/A6188231D38BFD8?sharingId=AD7EC3C8F9082076" },
  { title: "ServiceNow Certified Implementation Specialist", issuer: "ServiceNow", tags: ["ServiceNow", "Implementation"], link: "/SERVICENOW CERTIFIED IMPLEMENTATION SPECIALIST -BADAM SUDHEER REDDY.pdf", credly: "https://www.credly.com/badges/2ecf1c9d-16e6-4a4e-81a5-58d5cf68ea0a" },
  { title: "Artificial Intelligence and Machine Learning", issuer: "Kodacy", tags: ["AI", "Machine Learning", "Course Completion"], link: "/coursera_certs/certificate-1788586467391.pdf", logo: "/kodacy logo.png" },
  { title: "Docker Tutorial for Beginners", issuer: "Simplilearn", tags: ["Docker", "DevOps"], link: "/coursera_certs/9026705_94032931758524556245.pdf", code: "9026705", verifyLink: "https://simpli-web.app.link/e/vKTav4Yob6b" },
  { title: "Certified Essentials Automation Professional", issuer: "Automation Anywhere", tags: ["RPA", "Jan 2026"], link: "/coursera_certs/4uxtk59k_1775034069321.pdf", verifyLink: "https://certificates.automationanywhere.com/dc112cfc-ae58-41fd-b671-202663d60156#acc.fYEkw6Kt", logo: "/automotive Anywhere logo.png" },
  { title: "Advanced Automation Certification", issuer: "Automation Anywhere", tags: ["RPA", "Advanced"], link: "/Advanced Automation Certification..pdf", verifyLink: "https://certificates.automationanywhere.com/8bc08cf3-f033-455c-9cac-00de17402811#acc.CaDRNxrb", logo: "/automotive Anywhere logo.png" },
  { title: "Certified Essentials RPA Professional (Automation 360) - 2023", issuer: "Automation Anywhere", tags: ["RPA", "Essentials"], link: "/Automation Anywhere Certified Essentials RPA Professional (Automation 360) - 2023.pdf", verifyLink: "https://certificates.automationanywhere.com/94e357bd-1787-46f5-951a-6537ea7a8274#acc.Rh8u4eNO", logo: "/automotive Anywhere logo.png" },
  { title: "Linguva Skills", issuer: "Linguva", tags: ["Communication", "Soft Skills"], link: "/Badam Sudheer Reddy.pdf", logo: "/Linguva Skills logo.png" },
];

const upcomingCertificates = [
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", tags: ["Cloud", "AWS", "Planned"], logo: "/aws Certified logo.jpeg" },
  { title: "Meta Back-End Developer", issuer: "Meta", tags: ["Back-End", "Django", "In Progress"], logo: "/META BACK END LOGO.jpeg" },
  { title: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", tags: ["Data Engineering", "ML Ops", "Planned"], logo: "/GOOGLE CLOUD LOGO.png" },
  { title: "Java SE Professional Certification", issuer: "Oracle", tags: ["Java", "Architecture", "Planned"], logo: "/ORACLE LOGO.png" },
];

// Reusable editorial cert card
const CertCard = ({ cert, future = false }) => {
  const isPdf = cert.link && cert.link.toLowerCase().endsWith('.pdf');
  const isImage = cert.link && (cert.link.toLowerCase().endsWith('.png') || cert.link.toLowerCase().endsWith('.jpg') || cert.link.toLowerCase().endsWith('.jpeg'));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        border: '1px solid #eaeaea',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        height: '100%',
        opacity: future ? 0.7 : 1,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Top Media Section */}
      <div style={{ position: 'relative', height: '220px', backgroundColor: '#f9f9f9', borderBottom: '1px solid #eaeaea', overflow: 'hidden' }}>
        
        {/* Certificate Preview */}
        {isPdf ? (
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <iframe 
              src={`${cert.link}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
              style={{ width: '100%', height: 'calc(100% + 55px)', marginTop: '-55px', border: 'none', pointerEvents: 'none' }}
              title={cert.title}
            />
          </div>
        ) : isImage ? (
          <img 
            src={cert.link} 
            alt={cert.title} 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        ) : cert.link ? (
          <iframe 
            src={cert.link} 
            style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
            title={cert.title}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontWeight: 600 }}>
             Preview Not Available
          </div>
        )}

        {/* View Certificate Button */}
        {cert.link && (
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#ffffff',
              color: '#333333',
              padding: '8px 24px',
              borderRadius: '24px',
              fontSize: '0.9rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(-50%) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)' }}
          >
            <ExternalLink size={16} /> View Certificate
          </a>
        )}
      </div>

      {/* Bottom Info Section */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '1.15rem', fontWeight: '800', color: '#1a1a1a', lineHeight: 1.4 }}>
          {cert.title}
        </h4>
        <p style={{ margin: '0 0 20px 0', fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>
          {cert.issuer} {cert.tags && cert.tags.length > 0 && `· ${cert.tags.join(' · ')}`}
        </p>

        {/* Credly/Code badges and Verification Links (Only show if present in data) */}
        {(cert.credly || cert.code || cert.verifyLink) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
            {cert.verifyLink && (
              <div style={{ display: 'flex' }}>
                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #dcfce7', color: '#16a34a', padding: '6px 12px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: '#f0fdf4' }}>
                  <CheckCircle size={14} /> Verify Certificate
                </a>
              </div>
            )}
            {cert.credly && (
              <div style={{ display: 'flex' }}>
                <a href={cert.credly} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #e9d5ff', color: '#9333ea', padding: '6px 12px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: '700', backgroundColor: '#faf5ff' }}>
                  <CheckCircle size={14} /> Credly Badge
                </a>
              </div>
            )}
            {cert.code && (
              <div style={{ backgroundColor: '#f3f4f6', padding: '10px 14px', borderRadius: '8px', fontSize: '0.8rem', color: '#4b5563', fontFamily: 'monospace', fontWeight: '500', border: '1px solid #e5e7eb' }}>
                Code: {cert.code}
              </div>
            )}
          </div>
        )}

      </div>
    </motion.div>
  );
};

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
