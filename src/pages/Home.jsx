import React from "react";
import { useNavigate } from 'react-router-dom';
import "../index.css";
import Navbar from '../components/Navbar.jsx';
import Footer from "../components/Footer.jsx";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
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

      {/* SERVICES */}
      <section class="services" id="services">
        <h2>Our Services</h2>
        <div class="service-grid">
          <div class="service-card">
            <h3>System Engineering</h3>
            <p>End-to-end system design and integration</p>
          </div>
          <div class="service-card">
            <h3>Software Engineering</h3>
            <p>ASPICE-compliant development lifecycle</p>
          </div>
          <div class="service-card">
            <h3>Hardware Engineering</h3>
            <p>Custom hardware solutions for automotive applications</p>
          </div>
          <div class="service-card">
            <h3>HIL Bench Commissioning</h3>
            <p>Complete hardware-in-the-loop system setup</p>
          </div>
          <div class="service-card">
            <h3>Automotive Standards</h3>
            <p>ISO 26262, ASPICE, and ISO 21434 compliance</p>
          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card" onClick={() => { navigate('/pages/p1'); window.scrollTo(0, 0); }}>
            <img src="/hmi.png" alt="HMI for Electric Vehicles" />
            <div className="product-info">
              <h3>HMI for Electric Vehicles</h3>
              <p>
                Standalone HMI for Wireless Power Transfer - Customizable &amp;
                High-Performance
              </p>
            </div>
          </div>
          <div className="product-card" onClick={() => { navigate('/pages/p2'); window.scrollTo(0, 0); }}>
            <img src="/software.jpg" alt="In-house Software Stacks" />
            <div className="product-info">
              <h3>In-house Software Stacks</h3>
              <p>
                Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.
              </p>
            </div>
          </div>
          <div className="product-card" onClick={() => { navigate('/pages/p3'); window.scrollTo(0, 0); }}>
            <img src="/HIL.jpg" alt="Smart HIL" />
            <div className="product-info">
              <h3>Smart HIL</h3>
              <p>
                Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.
              </p>
            </div>
          </div>
          <div className="product-card" onClick={() => navigate('/pages/p3')}>
            <img src="/SMU.jpg" alt="SMU" />
            <div className="product-info">
              <h3>SMU</h3>
              <p>
                Aliquet adipiscing vivamus ultrices ipsum, commodo vitae, elit nec.
              </p>
            </div>
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
      <Footer />
    </>
  );
}
