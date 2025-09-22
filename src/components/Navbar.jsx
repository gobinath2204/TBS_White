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

  const handleServicesClick = () => {
    // If we're not already on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      // Navigate to home page, then scroll to services
      window.location.href = '/#services';
    } else {
      // If already on home page, just scroll to services
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav>
        <div className="logo">
          <img src="/logo.png" alt="Test Base Solutions Logo" />
        </div>
        <ul>
          <li><a href="/">HOME</a></li>
          <li>
          <a 
            href="/#services" 
            onClick={handleServicesClick}
          >
            SERVICES
          </a>
        </li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><a href="#careers">CAREERS</a></li>
        </ul>
      </nav>
  );
}
