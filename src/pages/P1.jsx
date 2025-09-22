import React, { useEffect, useRef } from "react";
import './product-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/HMI.mp4";

  const handlePrevious = () => {
    navigate("/pages/p3");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p2");
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
          <h1 className="hero-title">HMI for Electric Vehicles</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <div className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="HMI Core System" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Next-Gen HMI for Wireless Charging</h2>
              <p className="paragraph-content">
                Our Smart HMI is a powerful standalone device for wireless power
                transfer applications. It ensures seamless integration into
                automotive and industrial systems with support for Foreign Object
                Detection (FOD), Load Detection (LOD), Positioning, and Power
                Transfer.
              </p>
            </div>
          </div>

          <div className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Touchscreen Display" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Display & User Interface</h2>
              <ul>
                <li>High-resolution touchscreen with fluid performance</li>
                <li>Fully customizable graphics & UI</li>
                <li>Intuitive interaction without distractions</li>
              </ul>
            </div>
          </div>

          <div className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Connectivity</h2>
              <ul>
                <li>Supports CAN & UART protocols</li>
                <li>Open for third-party API integration</li>
                <li>Flexible interface configuration</li>
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

export default P1;
