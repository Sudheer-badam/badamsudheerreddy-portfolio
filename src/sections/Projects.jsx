import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Terminal, ShieldAlert, Award, FileText, BellRing, BarChart3, Radio, BookOpen, Globe, Landmark, Music } from 'lucide-react';

const PlaceMentorProject = {
  title: 'PlaceMentor AI',
  tagline: 'Autonomous Student Placement Intelligence & Neural Notification Engine',
  url: 'https://placementor-ai-badamsudheerreddy.streamlit.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'AI / Full-Stack Analytics',
  summary: 'A futuristic academic co-pilot and placement preparation ecosystem built to empower KL University students. Features real-time official news scraping, AI resume scoring, and institutional data analytics.',
  tags: ['Python', 'Streamlit', 'NLP & Spacy', 'SQLite3', 'Pandas & NumPy', 'BeautifulSoup4', 'Plotly'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Core Architecture', value: 'Platform Intelligent' },
    { label: 'Sync Capability', value: 'Real-time Neural Feed' },
    { label: 'Admin Security', value: 'Master ID Bypass' },
  ],
  features: [
    {
      icon: Cpu,
      title: 'AI Resume Parser & Optimizer',
      desc: 'Integrates automated NLP engines to parse resumes, map core competencies, and generate placement preparedness scores.'
    },
    {
      icon: Radio,
      title: 'KLU Live Updates Scraper',
      desc: 'An automated live scraper that aggregates announcements from KL University official channels and renders them inside the app.'
    },
    {
      icon: BellRing,
      title: 'Pulsing Neural Notice Board',
      desc: 'Features custom notifications styled with high-contrast, pulsing badges to ensure high-priority academic alerts are never missed.'
    },
    {
      icon: BarChart3,
      title: 'Developer Control Dashboard',
      desc: 'Provides secure user access controls and deep-dive analytics to track student progress, college affiliations, and scores.'
    }
  ]
};

const SearchPvtLtdProject = {
  title: 'Sudheer Pvt.Ltd',
  tagline: 'Global Business Intelligence Platform & Corporate Directory API',
  url: 'https://badamsudheerreddy-search-pvt-ltd.vercel.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'FinTech / Data Intelligence',
  summary: 'A corporate intelligence directory and developer API ecosystem providing real-time KYC, GST verification, and company information validation for 50M+ Private Limited companies.',
  tags: ['React', 'Next.js', 'JSON API', 'Vercel', 'Corporate KYC', 'Node.js', 'JavaScript'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Database Coverage', value: '50M+ Indian Companies' },
    { label: 'API Response Latency', value: '< 150ms Real-time' },
    { label: 'Integration Protocols', value: 'REST JSON Endpoints' }
  ],
  features: [
    {
      icon: Cpu,
      title: 'Real-time Verification',
      desc: 'Instantly check CIN/UIN status, active directors, company category, and registration details from official corporate registries.'
    },
    {
      icon: Terminal,
      title: 'Developer JSON API',
      desc: 'Robust RESTful API platform enabling developers to verify company details and automate corporate KYC checks programmatically.'
    },
    {
      icon: ShieldAlert,
      title: 'Corporate Directory KYC',
      desc: 'Searchable database categorized by industry sector, such as IT, AI Startups, Finance, Logistics, and E-commerce.'
    },
    {
      icon: Award,
      title: 'Global Business Coverage',
      desc: 'Enriched insights spanning over 50+ countries with advanced search patterns, revenue predictions, and company size mappings.'
    }
  ]
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Terminal, ShieldAlert, Award, FileText, BellRing, BarChart3, Radio, BookOpen, Globe, Landmark, Music } from 'lucide-react';

const PlaceMentorProject = {
  title: 'PlaceMentor AI',
  tagline: 'Autonomous Student Placement Intelligence & Neural Notification Engine',
  url: 'https://placementor-ai-badamsudheerreddy.streamlit.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'AI / Full-Stack Analytics',
  summary: 'A futuristic academic co-pilot and placement preparation ecosystem built to empower KL University students. Features real-time official news scraping, AI resume scoring, and institutional data analytics.',
  tags: ['Python', 'Streamlit', 'NLP & Spacy', 'SQLite3', 'Pandas & NumPy', 'BeautifulSoup4', 'Plotly'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Core Architecture', value: 'Platform Intelligent' },
    { label: 'Sync Capability', value: 'Real-time Neural Feed' },
    { label: 'Admin Security', value: 'Master ID Bypass' },
  ],
  features: [
    {
      icon: Cpu,
      title: 'AI Resume Parser & Optimizer',
      desc: 'Integrates automated NLP engines to parse resumes, map core competencies, and generate placement preparedness scores.'
    },
    {
      icon: Radio,
      title: 'KLU Live Updates Scraper',
      desc: 'An automated live scraper that aggregates announcements from KL University official channels and renders them inside the app.'
    },
    {
      icon: BellRing,
      title: 'Pulsing Neural Notice Board',
      desc: 'Features custom notifications styled with high-contrast, pulsing badges to ensure high-priority academic alerts are never missed.'
    },
    {
      icon: BarChart3,
      title: 'Developer Control Dashboard',
      desc: 'Provides secure user access controls and deep-dive analytics to track student progress, college affiliations, and scores.'
    }
  ]
};

const SearchPvtLtdProject = {
  title: 'Sudheer Pvt.Ltd',
  tagline: 'Global Business Intelligence Platform & Corporate Directory API',
  url: 'https://badamsudheerreddy-search-pvt-ltd.vercel.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'FinTech / Data Intelligence',
  summary: 'A corporate intelligence directory and developer API ecosystem providing real-time KYC, GST verification, and company information validation for 50M+ Private Limited companies.',
  tags: ['React', 'Next.js', 'JSON API', 'Vercel', 'Corporate KYC', 'Node.js', 'JavaScript'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Database Coverage', value: '50M+ Indian Companies' },
    { label: 'API Response Latency', value: '< 150ms Real-time' },
    { label: 'Integration Protocols', value: 'REST JSON Endpoints' }
  ],
  features: [
    {
      icon: Cpu,
      title: 'Real-time Verification',
      desc: 'Instantly check CIN/UIN status, active directors, company category, and registration details from official corporate registries.'
    },
    {
      icon: Terminal,
      title: 'Developer JSON API',
      desc: 'Robust RESTful API platform enabling developers to verify company details and automate corporate KYC checks programmatically.'
    },
    {
      icon: ShieldAlert,
      title: 'Corporate Directory KYC',
      desc: 'Searchable database categorized by industry sector, such as IT, AI Startups, Finance, Logistics, and E-commerce.'
    },
    {
      icon: Award,
      title: 'Global Business Coverage',
      desc: 'Enriched insights spanning over 50+ countries with advanced search patterns, revenue predictions, and company size mappings.'
    }
  ]
};

const TempleProject = {
  title: 'Narasingapadu Sivalayam',
  tagline: 'Palnati Kasi — Ancient Sacred Shrine & Bilingual Digital Heritage Portal',
  url: 'https://narasingapadu-temple.vercel.app/',
  role: 'Badam Sudheer Reddy',
  status: 'Live / Production Ready',
  category: 'Cultural Heritage / Web',
  summary: 'A full-stack bilingual (Telugu & English) temple heritage website for Narasingapadu Sivalayam — an ancient Shiva shrine in Palnadu district, AP. Features a secure social login portal, live visitor tracking, 100 classical Telugu verses by Jnanpith laureate Viswanatha Satyanarayana, temple history, festival calendar, gallery, rituals, and committee contacts. Deployed live on Vercel.',
  tags: ['Firebase Auth', 'Live Visitor Tracking', 'Next.js', 'React', 'CSS', 'Vercel', 'JavaScript', 'Telugu Bilingual', 'SEO'],
  metrics: [
    { label: 'Developer', value: 'Badam Sudheer Reddy' },
    { label: 'Type', value: 'Cultural Heritage Portal' },
    { label: 'Hosting', value: 'Vercel (Live)' },
    { label: 'Language Support', value: 'Telugu & English' },
  ],
  features: [
    {
      icon: ShieldAlert,
      title: 'Secure Social Login Portal',
      desc: 'Advanced authentication system utilizing Firebase Auth with support for Google, Facebook, Twitter, YouTube, and Microsoft sign-ins with reCAPTCHA Enterprise protection.'
    },
    {
      icon: BarChart3,
      title: 'Live Visitor Tracking',
      desc: 'Real-time visitor counter with a glassmorphism widget, dynamically tracking and displaying the live user engagement metrics.'
    },
    {
      icon: BookOpen,
      title: '100 Classical Telugu Verses',
      desc: 'Full archive of 100 Madhyakkara poems composed by Jnanpith laureate Kavi Samrat Viswanatha Satyanarayana in 1958, dedicated to Lord Kasi Visweswar at Narasingapadu.'
    },
    {
      icon: Globe,
      title: 'Bilingual Interface (Telugu & English)',
      desc: 'Fully bilingual website with seamless language toggle, serving both local Telugu-speaking devotees and the global audience with complete content in both languages.'
    },
    {
      icon: Landmark,
      title: 'Temple History & Heritage',
      desc: 'Comprehensive temple history spanning from 1178 CE Palnati war era to the 1958 Maha Samprokshanam, detailing sacred geography, miraculous events, and priestly lineages.'
    },
    {
      icon: Music,
      title: 'Festivals, Rituals & Gallery',
      desc: 'Detailed festival calendar (Maha Shivaratri, Karthika Brahmotsavams, Teppotsavam), daily ritual schedule, photo gallery, and temple committee with contact information.'
    }
  ]
};

const CapstoneProject = {
  title: 'AI Sentiment & Trend Analysis Platform',
  tagline: 'KL University Capstone Project 220 — Real-Time Social Media Analytics',
  url: 'https://capstone-project-220-batch.vercel.app/',
  role: 'Badam Sudheer Reddy & Team',
  status: 'Live / Completed',
  category: 'AI / Full-Stack',
  summary: 'A comprehensive design system and architecture report for a real-time social media analytics platform. Built with React, FastAPI, and BERT. Features an 87.2% accuracy model for sentiment and trend analysis, utilizing Firebase Auth and Firestore for real-time collaboration.',
  tags: ['React', 'FastAPI', 'BERT', 'Firebase', 'Next.js', 'Socket.io', 'AI/ML'],
  metrics: [
    { label: 'Developer', value: 'Batch 220 (KL University)' },
    { label: 'Model Accuracy', value: '87.2% (BERT Ensemble)' },
    { label: 'Real-time Comm.', value: 'Socket.io WebSockets' },
    { label: 'Hosting', value: 'Vercel (Live)' },
  ],
  features: [
    {
      icon: Cpu,
      title: 'Implementation & Architecture',
      desc: 'Scalable technical foundation covering Next.js frontend, FastAPI backend, and real-time Socket.io WebSockets.'
    },
    {
      icon: ShieldAlert,
      title: 'Secure Firebase Auth',
      desc: 'Enterprise-grade guard logic leveraging Firebase Auth and Firestore, limiting access exclusively to authorized university emails.'
    },
    {
      icon: BarChart3,
      title: 'Results & Metrics',
      desc: 'Model performance evaluation, demonstrating 87.2% accuracy using the BERT ensemble for sentiment and trend tracking.'
    },
    {
      icon: FileText,
      title: 'Comprehensive Documentation',
      desc: 'Interactive markdown-based digital report viewer seamlessly rendering diagrams (UML, DFD, ERD) and results with PDF export capabilities.'
    }
  ]
};

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

const Projects = () => {
  const [showPlaceMentorSpecs, setShowPlaceMentorSpecs] = useState(false);
  const [showSearchSpecs, setShowSearchSpecs] = useState(false);
  const [showTempleSpecs, setShowTempleSpecs] = useState(false);
  const [showCapstoneSpecs, setShowCapstoneSpecs] = useState(false);
  const [showShopSmartCatalogSpecs, setShowShopSmartCatalogSpecs] = useState(false);
  const [showShopSmartAdminSpecs, setShowShopSmartAdminSpecs] = useState(false);
  const [showPrintWebSpecs, setShowPrintWebSpecs] = useState(false);

  return (
    <section id="projects" style={{ background: 'var(--uo-cream)', padding: '90px 20px', borderBottom: '1px solid var(--uo-border)' }}>
      <div className="section-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Section Heading */}
        <div className="section-heading-bar" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ border: '1px solid var(--uo-green)', color: 'var(--uo-green)' }}>Featured Case Studies</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: 'var(--uo-green)', marginTop: '0.5rem' }}>Core Projects</h2>
          <div className="editorial-divider" />
        </div>

        {/* Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card"
          style={{
            background: 'var(--uo-green-dark)',
            color: '#FFFFFF',
            border: '2px solid var(--uo-yellow)',
            padding: '0',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(13,46,33,0.15)'
          }}
        >
          {/* Top header bar */}
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
                {PlaceMentorProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {PlaceMentorProject.category}
            </span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>
              
              {/* Left Column: Core Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      border: '2.5px solid var(--uo-yellow)',
                      boxShadow: '0 0 16px rgba(255,213,0,0.4)',
                      overflow: 'hidden', flexShrink: 0, background: '#fff'
                    }}>
                      <img src="/PLACEMENTOR AI LOGO.png" alt="PlaceMentor AI Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {PlaceMentorProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {PlaceMentorProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {PlaceMentorProject.summary}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {PlaceMentorProject.tags.map(tag => (
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

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={PlaceMentorProject.url}
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
                    Launch Live App <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => setShowPlaceMentorSpecs(!showPlaceMentorSpecs)}
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
                    {showPlaceMentorSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              {/* Right Column: Key metrics */}
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  System Architecture Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {PlaceMentorProject.metrics.map(m => (
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

            {/* Technical specs detailed view */}
            <AnimatePresence>
              {showPlaceMentorSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {PlaceMentorProject.features.map(f => {
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
        </motion.div>

        {/* ── Search Pvt.Ltd Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
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
          {/* Top header bar */}
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
                {SearchPvtLtdProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {SearchPvtLtdProject.category}
            </span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>
              
              {/* Left Column: Core Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      border: '2.5px solid var(--uo-yellow)',
                      boxShadow: '0 0 16px rgba(255,213,0,0.4)',
                      overflow: 'hidden', flexShrink: 0, background: '#fff'
                    }}>
                      <img src="/SUDHEER PVT.LTD.png" alt="Sudheer Pvt.Ltd Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {SearchPvtLtdProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {SearchPvtLtdProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {SearchPvtLtdProject.summary}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {SearchPvtLtdProject.tags.map(tag => (
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

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={SearchPvtLtdProject.url}
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
                    Launch Live App <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => setShowSearchSpecs(!showSearchSpecs)}
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
                    {showSearchSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              {/* Right Column: Key metrics */}
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {SearchPvtLtdProject.metrics.map(m => (
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

            {/* Technical specs detailed view */}
            <AnimatePresence>
              {showSearchSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {SearchPvtLtdProject.features.map(f => {
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
        </motion.div>

        {/* ── Mart Project Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            marginTop: '2.5rem',
            background: 'var(--uo-green-dark)',
            color: '#FFFFFF',
            border: '2px solid var(--uo-yellow)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(13,46,33,0.15)',
          }}
        >
          {/* Top bar */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--uo-yellow)', boxShadow: '0 0 10px var(--uo-yellow)' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>Live / Production Ready</span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>E-Commerce / Full-Stack</span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>

              {/* Left */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      border: '2.5px solid var(--uo-yellow)',
                      boxShadow: '0 0 16px rgba(255,213,0,0.4)',
                      overflow: 'hidden', flexShrink: 0, background: '#fff'
                    }}>
                      <img src="/SUDHEER MART LOGO.png" alt="Sudheer Mart Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      Badam Mart
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    Modern E-Commerce Store &amp; Product Showcase Platform
                  </div>
                </div>
                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
                  A fully deployed e-commerce web application featuring a clean product catalogue, responsive UI, and seamless shopping experience. Built and hosted live on Vercel.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {['React', 'Vite', 'CSS', 'Vercel', 'JavaScript'].map(tag => (
                    <span key={tag} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href="https://badamsudheerreddy-mart.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    id="mart-live-btn"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '0.85rem 1.75rem',
                      background: 'var(--uo-yellow)', color: 'var(--uo-green-dark)',
                      textDecoration: 'none', fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                    }}
                  >
                    Visit Live Site <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Right — specs */}
              <div style={{ background: 'rgba(0,0,0,0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>Project Specs</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'Type', value: 'E-Commerce Store' },
                    { label: 'Hosting', value: 'Vercel (Live)' },
                    { label: 'Developer', value: 'Badam Sudheer Reddy' },
                  ].map(m => (
                    <div key={m.label} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{m.label}</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px' }}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Narasingapadu Temple Card ── */}
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
          {/* Top header bar */}
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
                {TempleProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {TempleProject.category}
            </span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>

              {/* Left Column: Core Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      border: '2.5px solid var(--uo-yellow)',
                      boxShadow: '0 0 16px rgba(255,213,0,0.4)',
                      overflow: 'hidden', flexShrink: 0, background: '#fff'
                    }}>
                      <img src="/NARASINGAPADU TEMPLE LOGO.jpg" alt="Narasingapadu Sivalayam Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {TempleProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {TempleProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {TempleProject.summary}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {TempleProject.tags.map(tag => (
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

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={TempleProject.url}
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
                    Visit Temple Site <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => setShowTempleSpecs(!showTempleSpecs)}
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
                    {showTempleSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              {/* Right Column: Key metrics */}
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {TempleProject.metrics.map(m => (
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

            {/* Technical specs detailed view */}
            <AnimatePresence>
              {showTempleSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {TempleProject.features.map(f => {
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
        </motion.div>

        
        {/* ── Capstone Project Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            marginTop: '2.5rem',
            background: 'var(--uo-green-dark)',
            color: '#FFFFFF',
            border: '2px solid var(--uo-yellow)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(13,46,33,0.15)',
          }}
        >
          {/* Top bar */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--uo-yellow)', boxShadow: '0 0 10px var(--uo-yellow)' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--uo-yellow)' }}>{CapstoneProject.status}</span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{CapstoneProject.category}</span>
          </div>

          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'start' }}>

              {/* Left */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      border: '2.5px solid var(--uo-yellow)',
                      boxShadow: '0 0 16px rgba(255,213,0,0.4)',
                      overflow: 'hidden', flexShrink: 0, background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--uo-green)' }}>CP</div>
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {CapstoneProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {CapstoneProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {CapstoneProject.summary}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {CapstoneProject.tags.map(tag => (
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

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <a
                    href={CapstoneProject.url}
                    target="_blank"
                    rel="noreferrer"
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
                    View Project <ExternalLink size={15} />
                  </a>
                  <button
                    onClick={() => setShowCapstoneSpecs(!showCapstoneSpecs)}
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
                    {showCapstoneSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              {/* Right Column: Key metrics */}
              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {CapstoneProject.metrics.map(m => (
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

            {/* Technical specs detailed view */}
            <AnimatePresence>
              {showCapstoneSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {CapstoneProject.features.map(f => {
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
        </motion.div>

        {/* ── ShopSmartCatalogProject Card ── */}
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
                {ShopSmartCatalogProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {ShopSmartCatalogProject.category}
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
                      <img src="/shopsmart-logo.png" alt="ShopSmart Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {ShopSmartCatalogProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {ShopSmartCatalogProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {ShopSmartCatalogProject.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {ShopSmartCatalogProject.tags.map(tag => (
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
                    href={ShopSmartCatalogProject.url}
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
                    onClick={() => setShowShopSmartCatalogSpecs(!showShopSmartCatalogSpecs)}
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
                    {showShopSmartCatalogSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {ShopSmartCatalogProject.metrics.map(m => (
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
              {showShopSmartCatalogSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {ShopSmartCatalogProject.features.map(f => {
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
        </motion.div>

        {/* ── ShopSmartAdminProject Card ── */}
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
                {ShopSmartAdminProject.status}
              </span>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)' }}>
              {ShopSmartAdminProject.category}
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
                      <img src="/shopsmart-logo.png" alt="ShopSmart Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 900, color: 'var(--uo-yellow)', lineHeight: 1.1, margin: 0 }}>
                      {ShopSmartAdminProject.title}
                    </h3>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                    {ShopSmartAdminProject.tagline}
                  </div>
                </div>

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {ShopSmartAdminProject.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {ShopSmartAdminProject.tags.map(tag => (
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
                    href={ShopSmartAdminProject.url}
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
                    onClick={() => setShowShopSmartAdminSpecs(!showShopSmartAdminSpecs)}
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
                    {showShopSmartAdminSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--uo-yellow)', marginBottom: '1.25rem' }}>
                  Project Specs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {ShopSmartAdminProject.metrics.map(m => (
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
              {showShopSmartAdminSpecs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden', marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {ShopSmartAdminProject.features.map(f => {
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
        </motion.div>

        {/* ── PrintWebProject Card ── */}
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
                      <img src="/print-saas-logo.png" alt="Antigravity Print SaaS Logo"
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

                <div style={{ width: '60px', height: '3px', background: 'var(--uo-yellow)' }} />

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.85)' }}>
                  {PrintWebProject.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {PrintWebProject.tags.map(tag => (
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
                    href={PrintWebProject.url}
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
                    onClick={() => setShowPrintWebSpecs(!showPrintWebSpecs)}
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
                    {showPrintWebSpecs ? 'Hide Details' : 'View Deep Tech Specs'}
                  </button>
                </div>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.15)', padding: '1.75rem', borderLeft: '3px solid var(--uo-yellow)' }}>
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
        </motion.div>

        {/* CSS override for pulse animation */}
        <style>{`
          @keyframes pulse-light {
            0% { transform: scale(0.95); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.7; }
          }
          .pulse-dot {
            animation: pulse-light 2s infinite ease-in-out;
          }
          @media (max-width: 768px) {
            #projects .editorial-card > div {
              padding: 1.5rem !important;
            }
            #projects div[style*="grid-template-columns: 3fr 2fr"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            #projects div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
