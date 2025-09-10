import React, { useEffect, useRef } from "react";
import './product-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from '../components/Navbar.jsx';

const P3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/2792370-hd_1920_1080_30fps.mp4";

  const sections = [
    {
      title: "Overview",
      content: (
        <div className='paragraph-content'>
          <p>The Test Base Solutions (TBS) Smart HMI is a dedicated, standalone Human-Machine Interface (HMI) device designed for wireless power transfer applications. Engineered with customization flexibility, it seamlessly integrates into automotive, industrial, and specialized power transfer systems, offering a robust solution for Foreign Object Detection (FOD), Load Detection (LOD), Positioning, and Power Transfer Operations.</p>
        </div>
      )
    },
    {
      title: "Display & User Interface",
      content: (
        <ul className="specs-list">
          <li>Touchscreen Display: High-resolution, Nextion-configurable UI with smooth graphical performance.</li>
          <li>Customizable UI & Graphics: Fully configurable through Nextion development tools.</li>
          <li>No Voice Recognition: Dedicated touchscreen interaction for streamlined user experience.</li>
        </ul>
      )
    },
    {
      title: "Communication & Connectivity",
      content: (
        <ul className="specs-list">
          <li>Default Protocols: Supports CAN & UART for seamless data transmission.</li>
          <li>Configurable Interfaces: Compatible with any communication protocol supported by the TMS570 & Nexteon boards.</li>
          <li>Third-Party Integration: Open for custom API and software integrations.</li>
        </ul>
      )
    },
    {
      title: "Flashing & Software Updates",
      content: (
        <ul className="specs-list">
          <li>Over-the-Air (OTA) Updates: Available when integrated with a telematics module.</li>
          <li>UDS-Based Flashing: Supports Unified Diagnostic Services (UDS) for direct software updates.</li>
          <li>Operating System: Built on an AUTOSAR-compliant Safe OS, ensuring real-time execution & safety.</li>
        </ul>
      )
    },
    {
      title: "Power Consumption & Efficiency",
      content: (
        <ul className="specs-list">
          <li>Power Source: Runs on HW381 DC-DC converter, ensuring efficient power management.</li>
          <li>Optimized for Low Power Consumption: Designed to operate in harsh automotive environments with minimal energy loss.</li>
        </ul>
      )
    },
    {
      title: "Processing & Hardware Architecture",
      content: (
        <ul className="specs-list">
          <li>Processors: TMS570 LaunchPad & Nexteon (real-time, safety-critical)</li>
          <li>Memory & Storage: Board-specified, high-speed performance</li>
          <li>Power Supply: HW381 DC-DC converter (stable & efficient)</li>
          <li>Safety: ISO 26262 ASIL-certified</li>
        </ul>
      )
    }
  ];

  const handlePrevious = () => {
    navigate("/pages/p2");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p1");
    window.scrollTo(0, 0);
  };

  // Animate sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting
            ? entry.target.classList.add("visible")
            : null
        ),
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      const secs = contentRef.current.querySelectorAll(".content-section");
      secs.forEach((sec) => observer.observe(sec));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div ref={contentRef}>
        {/* NAVBAR */}
        {/* Hero Section */}
        <div className="hero-container">
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Smart HIL</h1>
        </div>

        {/* Content Sections */}
        <div className="product-page">
          {sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2 className="section-subtitle">{section.title}</h2>
              {section.content}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="nav-arrow-btn left"
          onClick={handlePrevious}
          aria-label="Previous product"
        >
          <div className="nav-arrow-btn-inner">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </button>

        <button
          className="nav-arrow-btn right"
          onClick={handleNext}
          aria-label="Next product"
        >
          <div className="nav-arrow-btn-inner">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </button>
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
      </div>
    </>
  );
};

export default P3;
