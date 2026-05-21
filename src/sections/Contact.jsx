import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MapPin, Send } from 'lucide-react';

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
  { icon: Mail,     label: 'Email',     value: '2300033278cseh2@gmail.com',                      link: 'mailto:2300033278cseh2@gmail.com' },
  { icon: Phone,    label: 'Phone',     value: '+91 86885 09699',                                link: 'tel:8688509699' },
  { icon: MapPin,   label: 'Location',  value: 'Narasingapadu, Andhra Pradesh',                  link: '#' },
  { icon: Github,   label: 'GitHub',    value: 'github.com/Sudheer-badam',                      link: 'https://github.com/Sudheer-badam' },
  { icon: Linkedin, label: 'LinkedIn',  value: 'linkedin.com/in/badam-sudheer-reddy-3028ab32b', link: 'https://linkedin.com/in/badam-sudheer-reddy-3028ab32b' },
  { icon: Whatsapp, label: 'WhatsApp',  value: 'wa.me/918688509699',                            link: 'https://wa.me/918688509699' },
  { icon: Globe,    label: 'Portfolio', value: 'badamsudheeerreddy-protfolio.vercel.app',        link: 'https://badamsudheeerreddy-protfolio.vercel.app' },
];

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '8px',
  color: '#fff',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  boxSizing: 'border-box',
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(`Hi, I'm ${name}.\n\n${message}`);
    const sub  = encodeURIComponent(subject || 'Message from Portfolio');
    window.location.href = `mailto:2300033278cseh2@gmail.com?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ background: 'var(--uo-green)', padding: '80px 20px' }}>
      <div className="section-inner">

        {/* ── Centered heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Let's Connect
          </span>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, margin: '0.5rem 0 0.75rem' }}>
            Get In <span style={{ color: 'var(--uo-yellow)' }}>Touch</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--uo-yellow)', margin: '0 auto 1rem' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Interested in working together or have a project idea? Reach out — I typically respond within 24 hours.
          </p>
        </motion.div>

        {/* ── Two columns: Quick Contact Info | Send Me a Message ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left — Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>
              Quick Contact Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.link}
                    target={c.link !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '0.9rem 1.1rem',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderLeft: '4px solid transparent',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      transition: 'background 0.25s, border-color 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(254,225,35,0.1)'; e.currentTarget.style.borderLeftColor = 'var(--uo-yellow)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderLeftColor = 'transparent'; }}
                    id={`contact-${c.label.toLowerCase()}`}
                  >
                    <div style={{ width: '34px', height: '34px', background: 'var(--uo-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '6px' }}>
                      <Icon color="var(--uo-green-dark)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '2px' }}>{c.label}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{c.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Send Me a Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', letterSpacing: '0.5px', marginBottom: '1.25rem' }}>
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                <input id="contact-form-name" name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--uo-yellow)'; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }} />
                <input id="contact-form-email" name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'var(--uo-yellow)'; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }} />
              </div>
              <input id="contact-form-subject" name="subject" type="text" placeholder="Subject" value={form.subject} onChange={handleChange} style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'var(--uo-yellow)'; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }} />
              <textarea id="contact-form-message" name="message" placeholder="Your Message" rows={6} value={form.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { e.target.style.borderColor = 'var(--uo-yellow)'; e.target.style.background = 'rgba(255,255,255,0.11)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255,255,255,0.07)'; }} />
              <button id="contact-form-submit" type="submit" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '1rem', background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700,
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Send size={16} />
                {sent ? 'Opening your mail app…' : 'Send Message'}
              </button>

              {/* Address block */}
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                padding: '1rem 1.1rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderLeft: '4px solid var(--uo-yellow)',
                borderRadius: '4px',
                marginTop: '0.25rem',
              }}>
                <div style={{ width: '34px', height: '34px', background: 'var(--uo-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '6px' }}>
                  <MapPin size={16} color="var(--uo-green-dark)" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)', marginBottom: '4px' }}>My Address</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.83rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65 }}>
                    Narasingapadu Village, Nekarikallu Mandal<br />
                    Palnadu District — 522615<br />
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .section-inner > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
