import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const links = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Academics',    href: '#academics' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact',      href: '#contact' },
];

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActive(id);
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar-container" role="navigation" aria-label="Main navigation">
      {/* Brand */}
      <div className="navbar-brand">
        <img
          src="/BADAM SUDHEER REDDY .jpeg.png"
          alt="Badam Sudheer Reddy"
          className="navbar-brand-img"
        />
        <span className="navbar-brand-text">BADAM SUDHEER REDDY</span>
      </div>

      {/* Links */}
      <div className="navbar-links">
        {links.map(link => (
          <a
            key={link.name}
            href={link.href}
            id={`nav-${link.name.toLowerCase()}`}
            className={`navbar-link-item${active === link.href.replace('#', '') ? ' active' : ''}`}
            onClick={() => setActive(link.href.replace('#', ''))}
          >
            {link.name}
          </a>
        ))}

        <button
          onClick={handleLogout}
          style={{
            marginLeft: '1rem',
            padding: '6px 16px',
            background: '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.background = '#b71c1c'}
          onMouseLeave={(e) => e.target.style.background = '#d32f2f'}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
