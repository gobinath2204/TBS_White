import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left Side */}
      <div className="footer-left">
        <h2>Test Base Solutions</h2>
        <p>
          Test Base Solutions Advanced diagnostics, high-performance software, and EV innovation—from OBCs and BMS to DC-DC converters and beyond.
        </p>

        {/* Social Media */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/testbasesolutions-ltd/?originalSubdomain=uk" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.225 0H1.771C.792 0 0 .771 0 
                1.771v20.451C0 23.229.792 
                24 1.771 24h20.451C23.2 
                24 24 23.229 24 
                22.222V1.771C24 .771 23.2 0 
                22.225 0zM7.119 20.452H3.556V9h3.563v11.452zM5.338 
                7.433c-1.141 0-2.063-.926-2.063-2.065 
                0-1.14.922-2.066 
                2.063-2.066s2.063.926 
                2.063 2.066c0 
                1.139-.922 2.065-2.063 
                2.065zm15.115 
                13.019h-3.562v-5.605c0-1.337-.025-3.056-1.861-3.056-1.861 
                0-2.146 1.453-2.146 2.955v5.706h-3.562V9h3.419v1.561h.049c.476-.9 
                1.637-1.849 3.37-1.849 3.6 0 4.267 
                2.369 4.267 5.452v6.288z"/>
            </svg>
          </a>

          <a href="tel:+447918107720" aria-label="Phone">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 
             1 0 011.05-.24c1.12.37 2.33.57 3.54.57.55 
             0 1 .45 1 1v3.5c0 .55-.45 1-1 
             1C10.07 21 3 13.93 3 5c0-.55.45-1 
             1-1H7.5c.55 0 1 .45 1 1 0 
             1.21.2 2.42.57 3.54.1.35.03.73-.24 
             1.05l-2.2 2.2z"/>
            </svg>
          </a>

          <a href="mailto:info@testbasesolutions.co.uk" aria-label="Email">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 
             2v12c0 1.1.9 2 2 2h16c1.1 
             0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
             4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="footer-right">
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/S1">System Development</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/S2">Software Engineering</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/S3">Hardware Engineering</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/S4">System Validation</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/S5">Safety & Regulatory</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P1">In house Software stack</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P2">EV generic deck</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P3">HMI</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P4">Secure Manufacturing Unit</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P5">Smart HIL</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P6">Diagnostics flashing unit</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/pages/P7">Free RTOS Safety Plugin</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/careers">Careers</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/about">About Us</Link></li>
            <li><Link onClick={() => { window.scrollTo(0, 0); }} to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Test Base Solutions | All Rights Reserved</p>
      </div>
    </footer>
  );
}
