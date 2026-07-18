const fs = require('fs');
const file = 'c:/Users/badam/OneDrive/Antigravity/src/sections/Projects.jsx';
let content = fs.readFileSync(file, 'utf8');

const newProjects = `};

const ShopSmartCatalogProject = {
  title: 'ShopSmart Catalog',
  tagline: 'Next-Gen E-Commerce Product Discovery & Shopping Experience',
  url: 'https://shopsmart-catalog.vercel.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'E-Commerce / Frontend',
  summary: 'A modern e-commerce product catalog offering a seamless shopping experience with dynamic filtering, cart management, and an elegant UI/UX built for high performance.',
  tags: ['React', 'Next.js', 'TailwindCSS', 'Vercel', 'JavaScript'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Type', value: 'E-Commerce Storefront' },
    { label: 'Hosting', value: 'Vercel (Live)' },
    { label: 'Performance', value: 'Highly Optimized' }
  ],
  features: [
    {
      icon: Globe,
      title: 'Seamless Discovery',
      desc: 'Advanced product search and filtering mechanism for rapid discovery.'
    },
    {
      icon: Cpu,
      title: 'Dynamic Cart Management',
      desc: 'Real-time state management for handling user cart and checkout flow seamlessly.'
    },
    {
      icon: BarChart3,
      title: 'High-Performance UI',
      desc: 'Optimized asset delivery and fast page load times ensuring minimal bounce rate.'
    },
    {
      icon: ShieldAlert,
      title: 'Secure Browsing',
      desc: 'Secure and optimized frontend architecture providing safe browsing experience.'
    }
  ]
};

const ShopSmartAdminProject = {
  title: 'ShopSmart Admin Portal',
  tagline: 'Comprehensive E-Commerce Management Dashboard',
  url: 'https://shopsmart-admin-iota.vercel.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'E-Commerce / Backoffice',
  summary: 'A secure administrative portal for managing products, categories, orders, and customer data with real-time analytics, inventory control, and secure access.',
  tags: ['React', 'Dashboard', 'Vercel', 'Analytics', 'JavaScript'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Type', value: 'Admin Dashboard' },
    { label: 'Security', value: 'Role-Based Access' },
    { label: 'Hosting', value: 'Vercel (Live)' }
  ],
  features: [
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      desc: 'Live dashboard tracking sales metrics, user activity, and inventory levels.'
    },
    {
      icon: ShieldAlert,
      title: 'Secure Access Control',
      desc: 'Role-based authentication ensuring administrative actions are restricted to authorized personnel.'
    },
    {
      icon: Terminal,
      title: 'Inventory Management',
      desc: 'Comprehensive tools to add, edit, and categorize e-commerce products dynamically.'
    },
    {
      icon: BellRing,
      title: 'Order Tracking',
      desc: 'End-to-end lifecycle management of customer orders, from placement to delivery.'
    }
  ]
};

const PrintWebProject = {
  title: 'Antigravity Print SaaS',
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

const Projects = () => {`;

content = content.replace('};\n\nconst Projects = () => {', newProjects);

const newStates = `const Projects = () => {
  const [showPlaceMentorSpecs, setShowPlaceMentorSpecs] = useState(false);
  const [showSearchSpecs, setShowSearchSpecs] = useState(false);
  const [showTempleSpecs, setShowTempleSpecs] = useState(false);
  const [showShopSmartCatalogSpecs, setShowShopSmartCatalogSpecs] = useState(false);
  const [showShopSmartAdminSpecs, setShowShopSmartAdminSpecs] = useState(false);
  const [showPrintWebSpecs, setShowPrintWebSpecs] = useState(false);`;

content = content.replace('const Projects = () => {\n  const [showPlaceMentorSpecs, setShowPlaceMentorSpecs] = useState(false);\n  const [showSearchSpecs, setShowSearchSpecs] = useState(false);\n  const [showTempleSpecs, setShowTempleSpecs] = useState(false);', newStates);

const makeCard = (projObj, stateVar, setVar) => `
        {/* ── ${projObj} Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="editorial-card"
          style={{
            marginTop: '2.5rem',
            background: 'var(--uo-green-dark)',
            color: '#FFFFFF',
            border: '2px solid var(--uo-yellow)',
            padding: '0',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(13,46,33,0.15)'
          }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--uo-yellow)', boxShadow: '0 0 10px var(--uo-yellow)' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>
                {${projObj}.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {${projObj}.category}
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
                      overflow: 'hidden', flexShrink: 0, background: 'var(--uo-green-dark)',
                      display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                      <Globe size={30} color="var(--uo-yellow)" />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {${projObj}.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {${projObj}.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {${projObj}.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {${projObj}.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={${projObj}.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.85rem 1.75rem',
                      background: 'var(--uo-yellow)',
                      color: 'var(--uo-green-dark)',
                      textDecoration: 'none',
                      fontWeight: 700,
                      border: '2px solid var(--uo-yellow)'
                    }}
                  >
                    Visit Site <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => ${setVar}(!${stateVar})}
                    style={{
                      display: 'inline-flex',
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
                      transition: 'all 0.2s'
                    }}
                  >
                    {${stateVar} ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {${projObj}.metrics.map(m => (
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
              {${stateVar} && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {${projObj}.features.map(f => {
                      const Icon = f.icon;
                      return (
                        <div key={f.title} style={{ display: 'flex', gap: '1rem', background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
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
        </motion.div>\n`;

const additionalCards = 
  makeCard('ShopSmartCatalogProject', 'showShopSmartCatalogSpecs', 'setShowShopSmartCatalogSpecs') +
  makeCard('ShopSmartAdminProject', 'showShopSmartAdminSpecs', 'setShowShopSmartAdminSpecs') +
  makeCard('PrintWebProject', 'showPrintWebSpecs', 'setShowPrintWebSpecs');

content = content.replace('{/* CSS override for pulse animation */}', additionalCards + '\n        {/* CSS override for pulse animation */}');

fs.writeFileSync(file, content, 'utf8');
console.log('Patch complete.');
