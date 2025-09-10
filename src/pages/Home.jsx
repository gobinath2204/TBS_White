import React from "react";
import { useNavigate } from 'react-router-dom';
import "../index.css";

export default function Home() {
    const navigate = useNavigate();
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="Test Base Solutions Logo" />
        </div>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><a href="#careers">CAREERS</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          Partners in Software &amp; Testing
        </div>
        <div className="hero-right">
          <p>
            Test Base Solutions Advanced diagnostics, high-performance software, and EV
            innovation—from OBCs and BMS to DC-DC converters and beyond.<br />
            ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card" onClick={() =>{navigate('/pages/p1'); window.scrollTo(0, 0);}}>
            <img src="/hmi.png" alt="HMI for Electric Vehicles" />
            <div className="product-info">
              <h3>HMI for Electric Vehicles</h3>
              <p>
                Standalone HMI for Wireless Power Transfer - Customizable &amp;
                High-Performance
              </p>
            </div>
          </div>
          <div className="product-card" onClick={() =>{navigate('/pages/p2'); window.scrollTo(0, 0);}}>
            <img src="/software.jpg" alt="In-house Software Stacks" />
            <div className="product-info">
              <h3>In-house Software Stacks</h3>
              <p>
                Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.
              </p>
            </div>
          </div>
          <div className="product-card" onClick={() =>{navigate('/pages/p3'); window.scrollTo(0, 0);}}>
            <img src="/HIL.jpg" alt="Smart HIL" />
            <div className="product-info">
              <h3>Smart HIL</h3>
              <p>
                Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.
              </p>
            </div>
          </div>
          <div className="product-card" onClick={() => navigate('/pages/p3')}>
            <img src="/HIL.jpg" alt="Smart HIL" />
            <div className="product-info">
              <h3>Smart HIL</h3>
              <p>
                Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="orbit-container" aria-hidden="false">
          <div className="center-circle" aria-hidden="true">
            <span>Test Base<br />Solutions</span>
          </div>
          <div className="orbit">
            {[
              { title: 'System Engineering', desc: 'End-to-end system design and integration' },
              { title: 'Software Engineering', desc: 'ASPICE-compliant development lifecycle' },
              { title: 'Hardware Engineering', desc: 'Custom hardware solutions for automotive applications' },
              { title: 'HIL Bench ', desc: '(HIL Bench Commissioning) Complete hardware-in-the-loop system setup' },
              { title: 'Automotive Standards', desc: 'ISO 26262, ASPICE, and ISO 21434 compliance' },
            ].map((s, i) => (
              <div className="orbit-item" key={s.title} style={{ '--i': i }}>
                <button className="orbit-content" aria-label={s.title}>
                  <div className="orbit-labels">
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          Test Base Solutions was founded with a clear vision—to shape the future of
          the automotive industry through innovation, precision, and quality.
        </p>
        <p>
          Today, with nearly 100 dedicated employees, we deliver end-to-end expertise in
          system design, development, verification, validation, and compliance.
        </p>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <h3>Test Base Solutions</h3>
        <p>3, Birmingham Rd, Coventry, CV5 9AB</p>
        <p>Phone: +44 79181 07720 | Email: info@testbasesolutions.co.uk</p>
        <div className="footer-links">
          <a href="https://linkedin.com/company/testbasesolutions-ltd" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
        </div>
      </footer>
    </>
  );
}
