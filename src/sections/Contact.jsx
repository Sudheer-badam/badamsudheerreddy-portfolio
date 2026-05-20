import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe } from 'lucide-react';

const Github = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Whatsapp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const contacts = [
  { icon: Globe,    label: 'Portfolio',  value: 'badamsudheeerreddy-protfolio.vercel.app',           link: 'https://badamsudheeerreddy-protfolio.vercel.app' },
  { icon: Mail,     label: 'Email',      value: 'badamsudheerreddy@gmail.com',                    link: 'mailto:badamsudheerreddy@gmail.com' },
  { icon: Phone,    label: 'Phone',      value: '+91 86885 09699',                                link: 'tel:8688509699' },
  { icon: Github,   label: 'GitHub',     value: 'github.com/Sudheer-badam',                       link: 'https://github.com/Sudheer-badam' },
  { icon: Linkedin, label: 'LinkedIn',   value: 'linkedin.com/in/badam-sudheer-reddy-3028ab32b', link: 'https://linkedin.com/in/badam-sudheer-reddy-3028ab32b' },
  { icon: Whatsapp, label: 'WhatsApp',   value: 'wa.me/918688509699',                             link: 'https://wa.me/918688509699' },
];

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--uo-green)', padding: '80px 20px', alignItems: 'stretch' }}>
      <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

        {/* Left — heading + intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.75rem', borderLeft: '3px solid var(--uo-yellow)', paddingLeft: '10px' }}>
            Let's Connect
          </span>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
            Get In<br /><span style={{ color: 'var(--uo-yellow)' }}>Touch</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--uo-yellow)', marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '360px' }}>
            Interested in working together, have a project idea, or just want to say hi? Reach out on any of these platforms — I typically respond within 24 hours.
          </p>

          {/* Location block */}
          <div style={{ padding: '1.25rem', borderLeft: '4px solid var(--uo-yellow)', background: 'rgba(255,255,255,0.06)' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)', marginBottom: '0.4rem' }}>Location</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
              Narasingapadu Village, Nekarikallu Mandal<br />
              Palnadu District — 522615<br />
              Andhra Pradesh, India
            </div>
          </div>
        </motion.div>

        {/* Right — contact list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.1rem 1.25rem',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: '4px solid transparent',
                  textDecoration: 'none',
                  transition: 'background 0.25s, border-color 0.25s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(254,225,35,0.1)'; e.currentTarget.style.borderLeftColor = 'var(--uo-yellow)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderLeftColor = 'transparent'; }}
                id={`contact-${c.label.toLowerCase()}`}
              >
                <div style={{ width: '36px', height: '36px', background: 'var(--uo-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon color="var(--uo-green-dark)" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '2px' }}>{c.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{c.value}</div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .section-inner {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
