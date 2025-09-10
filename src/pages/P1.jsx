import React, { useEffect, useRef } from "react";
import './product-pages.css';
import { useNavigate, Link  } from "react-router-dom";
import "../index.css";
import Navbar from '../components/Navbar.jsx';

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/HMI.mp4";

  const sections = [
    {
      title: "Next-Gen HMI for Wireless Charging",
      content: (
        <div className="paragraph-content">
          <p>
            Our Smart HMI is a powerful standalone device for wireless power
            transfer applications. It ensures seamless integration into
            automotive and industrial systems with support for Foreign Object
            Detection (FOD), Load Detection (LOD), Positioning, and Power
            Transfer.
          </p>
        </div>
      ),
    },
    {
      title: "Display & User Interface",
      content: (
        <ul className="specs-list">
          <li>High-resolution touchscreen with fluid performance</li>
          <li>Fully customizable graphics & UI</li>
          <li>Intuitive interaction without distractions</li>
        </ul>
      ),
    },
    {
      title: "Connectivity",
      content: (
        <ul className="specs-list">
          <li>Supports CAN & UART protocols</li>
          <li>Open for third-party API integration</li>
          <li>Flexible interface configuration</li>
        </ul>
      ),
    },
  ];

  const handlePrevious = () => {
    navigate("/pages/p3");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p2");
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
        {/* <div className="logo">
          <img src="/logo.png" alt="Test Base Solutions Logo" />
        </div>
        <ul>
          <li><a href="/Home.jsx">HOME</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><a href="#careers">CAREERS</a></li>
        </ul> */}
        {/* Hero Section */}
        <div className="hero-container">
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title">HMI for Electric Vehicles</h1>
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

export default P1;
