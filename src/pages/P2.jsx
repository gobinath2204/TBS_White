import React, { useEffect, useRef } from "react";
import './product-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/p1");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p3");
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
      <div ref={contentRef}>
        {/* Hero Section */}
        <div className="hero-container">
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title">In-house Software Stacks</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <div className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Overview</h2>
              <p>
                TBS Smart HMI is a standalone Human-Machine Interface designed
                for wireless power transfer. It integrates seamlessly into
                automotive and industrial systems, supporting FOD, LOD,
                Positioning, and Power Transfer.
              </p>
            </div>
          </div>

          <div className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Display & User Interface</h2>
              <ul>
                <li>High-resolution Nextion-configurable UI</li>
                <li>Customizable graphics and interface</li>
                <li>Touchscreen interaction without distractions</li>
              </ul>
            </div>
          </div>

          <div className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Communication & Connectivity</h2>
              <ul>
                <li>Supports CAN & UART protocols</li>
                <li>Compatible with TMS570 & Nexteon boards</li>
                <li>Open for third-party integrations</li>
              </ul>
            </div>
          </div>

          <div className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Flashing & Software Updates</h2>
              <ul>
                <li>Over-the-Air (OTA) Updates</li>
                <li>UDS-based Flashing</li>
                <li>AUTOSAR-compliant Safe OS</li>
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
      </div>
    </>
  );
};

export default P2;
