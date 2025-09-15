import React, { useEffect, useRef } from "react";
import './product-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from '../components/Navbar.jsx';

const P3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/2792370-hd_1920_1080_30fps.mp4";

  const handlePrevious = () => {
    navigate("/pages/p2");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p1");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting ? entry.target.classList.add("visible") : null
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
        {/* Hero Section */}
        <div className="hero-container">
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Smart HIL</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <div className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Smart HIL Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Overview</h2>
              <p>
                TBS Smart HIL delivers powerful testing for automotive and
                industrial systems. It enables FOD, LOD, Positioning, and Power
                Transfer with real-time monitoring in demanding environments.
              </p>
            </div>
          </div>

          <div className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="User Interface" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Display & User Interface</h2>
              <ul>
                <li>High-resolution configurable UI</li>
                <li>Customizable through development tools</li>
                <li>Simple, touchscreen-first design</li>
              </ul>
            </div>
          </div>

          <div className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Hardware Architecture" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Processing & Hardware Architecture</h2>
              <ul>
                <li>TMS570 LaunchPad & Nexteon processors</li>
                <li>ISO 26262 ASIL-certified safety</li>
                <li>Stable HW381 DC-DC power supply</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow-btn left" onClick={handlePrevious}>
          <div className="nav-arrow-btn-inner">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </button>

        <button className="nav-arrow-btn right" onClick={handleNext}>
          <div className="nav-arrow-btn-inner">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </button>

        {/* Footer */}
        <footer id="contact">
          <h3>Test Base Solutions</h3>
          <p>3, Birmingham Rd, Coventry, CV5 9AB</p>
          <p>Phone: +44 79181 07720 | Email: info@testbasesolutions.co.uk</p>
          <div className="footer-links">
            <a href="https://linkedin.com/company/testbasesolutions-ltd" target="_blank" rel="noreferrer">LinkedIn</a>
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
