import React, { useState } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
  { href: '#careers', label: 'Careers' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="logo"> <img src="/logo.png" alt="logo" /> </div>

      {/* <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? 'Close' : 'Menu'}
      </button> */}

      <ul
        id="main-navigation"
        className={open ? 'open' : ''}
      >
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={handleLinkClick}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
