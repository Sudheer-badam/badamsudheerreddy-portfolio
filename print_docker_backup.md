# Print Docker Project Backup

This file preserves the complete code and instructions for the **Print Docker** project so it can be re-added to `src/sections/Projects.jsx` whenever needed.

---

## 1. Project Data Definition
Add this object in `src/sections/Projects.jsx` before `const Projects = () => {`:

```jsx
const PrintWebProject = {
  title: 'Print Docker',
  tagline: 'Premium Printing Management & Order Workflow Ecosystem',
  url: 'https://badamsudheerreddy1-printweb.vercel.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'SaaS / Full-Stack',
  summary: 'A sophisticated SaaS platform designed for print businesses, featuring an end-to-end workflow for managing printing orders, generating invoices, and managing customers with Firebase auth and Neon PostgreSQL.',
  tags: ['React', 'Firebase', 'PostgreSQL', 'Vercel', 'SaaS'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Database', value: 'Neon PostgreSQL' },
    { label: 'Authentication', value: 'Firebase Auth' },
    { label: 'Hosting', value: 'Vercel (Live)' }
  ],
  features: [
    {
      icon: FileText,
      title: 'Automated Invoicing',
      desc: 'Generates real-time, professional PDF invoices for print orders using advanced DOM rendering.'
    },
    {
      icon: ShieldAlert,
      title: 'Secure Authentication',
      desc: 'Robust user authentication and session management powered by Firebase.'
    },
    {
      icon: Cpu,
      title: 'End-to-End Workflow',
      desc: 'Complete lifecycle management of print jobs including quoting, processing, and final delivery tracking.'
    },
    {
      icon: Landmark,
      title: 'Scalable Database',
      desc: 'High-performance data storage utilizing Neon serverless PostgreSQL for seamless scaling.'
    }
  ]
};
```

---

## 2. Component State Hook
Add this state inside `const Projects = () => {`:

```jsx
const [showPrintWebSpecs, setShowPrintWebSpecs] = useState(false);
```

---

## 3. Project Card JSX
Add this card inside the `projects` section where you want it displayed:

```jsx
        {/* ── Print Docker Project Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="editorial-card"
          style={{ borderRadius: '16px', marginTop: '2.5rem',
            background: 'var(--uo-green-dark)',
            color: '#FFFFFF',
            border: '2px solid var(--uo-yellow)',
            padding: '0',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(13,46,33,0.15)' }}
        >
          <div style={{ borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--uo-yellow)', boxShadow: '0 0 10px var(--uo-yellow)' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>
                {PrintWebProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {PrintWebProject.category}
            </span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      border: '2.5px solid var(--uo-yellow)',
                      boxShadow: '0 0 16px rgba(255,213,0,0.4)',
                      overflow: 'hidden', flexShrink: 0, background: '#fff'
                    }}>
                      <img src="/print-saas-logo.png" alt="Print Docker Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {PrintWebProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {PrintWebProject.tagline}
                  </div>
                </div>

                <div style={{ borderRadius: '16px', width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {PrintWebProject.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {PrintWebProject.tags.map(tag => (
                    <span key={tag} style={{ borderRadius: '16px', fontFamily: 'Inter, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: 'rgba(255, 255, 255, 0.8)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={PrintWebProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ borderRadius: '16px', display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.85rem 1.75rem',
                      background: 'var(--uo-yellow)',
                      color: 'var(--uo-green-dark)',
                      textDecoration: 'none',
                      fontWeight: 700,
                      border: '2px solid var(--uo-yellow)' }}
                  >
                    Visit Site <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => setShowPrintWebSpecs(!showPrintWebSpecs)}
                    style={{ borderRadius: '16px', display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.85rem 1.75rem',
                      background: 'transparent',
                      color: '#FFFFFF',
                      border: '2px solid rgba(255, 255, 255, 0.25)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s' }}
                  >
                    {showPrintWebSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              <div style={{ borderRadius: '16px', background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {PrintWebProject.metrics.map(m => (
                    <div key={m.label} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                        {m.label}
                      </span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showPrintWebSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {PrintWebProject.features.map(f => {
                      const Icon = f.icon;
                      return (
                        <div key={f.title} style={{ borderRadius: '16px', display: 'flex', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                          <div style={{ color: 'var(--uo-yellow)', marginTop: '3px' }}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                              {f.title}
                            </h4>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                              {f.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
```
