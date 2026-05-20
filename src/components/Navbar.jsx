import React, { useState, useEffect } from 'react';

const links = [
  { name: 'Home',         href: '#home' },
  { name: 'About',        href: '#about' },
  { name: 'Academics',    href: '#academics' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact',      href: '#contact' },
];

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
