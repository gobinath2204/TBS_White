import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h2 className="mt-neg-10px mb-0 mb-10px fs-2-5rem fw-bold text-primary">TEST BASE SOLUTIONS</h2>
          <a href="https://www.linkedin.com/company/testbasesolutions-ltd/?originalSubdomain=uk" target="_blank" rel="noreferrer" className="footer-contact-link no-decoration color-inherit">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M22.225 0H1.771C.792 0 0 .771 0 1.771v20.451C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.222V1.771C24 .771 23.2 0 22.225 0zM7.119 20.452H3.556V9h3.563v11.452zM5.338 7.433c-1.141 0-2.063-.926-2.063-2.065 0-1.14.922-2.066 2.063-2.066s2.063.926 2.063 2.066c0 1.139-.922 2.065-2.063 2.065zm15.115 13.019h-3.562v-5.605c0-1.337-.025-3.056-1.861-3.056-1.861 0-2.146 1.453-2.146 2.955v5.706h-3.562V9h3.419v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.6 0 4.267 2.369 4.267 5.452v6.288z" />
            </svg>
            <span className="fs-0-8rem ls-1px">FOLLOW US</span>
          </a>

          <a href="tel:+44(0)7918107720" className="footer-contact-link no-decoration color-inherit">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.21.2 2.42.57 3.54.1.35.03.73-.24 1.05l-2.2 2.2z" />
            </svg>
            <span className="fs-0-8rem ls-1px">GIVE A CALL</span>
          </a>

          <a href="mailto:info@testbasesolutions.co.uk" className="footer-contact-link no-decoration color-inherit">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="fs-0-8rem ls-1px">EMAIL US</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="footer-right align-flex-start">
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/pages/Services/SystemEngineering">System Engineering</Link></li>
              <li><Link to="/pages/Services/SoftwareEngineering">Software Engineering</Link></li>
              <li><Link to="/pages/Services/HardwareEngineering">Hardware Engineering</Link></li>
              <li><Link to="/pages/Services/SystemValidation">System Validation</Link></li>
              <li><Link to="/pages/Services/SafetyandRegulatory">Safety and Regulatory</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/pages/Our Products/Inhousesoftwarestack">In house Software stack</Link></li>
              <li><Link to="/pages/Our Products/EVgenericdeck">EV generic deck</Link></li>
              <li><Link to="/pages/Our Products/HMI">HMI</Link></li>
              <li><Link to="/pages/Our Products/SMU">Secure Manufacturing Unit</Link></li>
              <li><Link to="/pages/Our Products/SmartHIL">Smart HIL</Link></li>
              <li><Link to="/pages/Our Products/DFU">Diagnostic Tools</Link></li>

            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TEST BASE SOLUTIONS LTD | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
