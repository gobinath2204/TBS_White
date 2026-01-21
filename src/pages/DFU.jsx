import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P6 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/DFU.mp4";

  const handlePrevious = () => {
    navigate("/pages/SmartHIL");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/RTOS");
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
          <img src="/DFU.png" alt="Diagnostics Flashing Unit" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Diagnostics Flashing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div>
              <p style={{fontSize: "1.5rem", textAlign: "justify", padding: "6rem 0"}}>
                TBS’s Diagnostics Flashing Unit (DFU) is an all-in-one tool for seamless ECU reprogramming and diagnostics, streamlining maintenance, calibration, and updates across the vehicle lifecycle. Supporting UDS, CCP/XCP, and OBD-II protocols, it enables secure flashing over CAN, Ethernet, or LIN, with encryption to prevent tampering.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="User Interface" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Diagnostics Flashing Unit</h2>
              <p>
                Designed for lab, production, and service environments, the DFU offers automated workflows via ODX/OTX data, parallel processing for multiple ECUs, and remote capabilities through telematics. It diagnoses trouble codes in real-time, supporting VIN-specific adaptations for precision. For aftermarket and fleet operators, it facilitates OTA-like updates without specialized hardware, ensuring compliance with efficiency and emissions standards.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Hardware Architecture" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Intuitive Diagnostics & Flashing Unit for Modern Vehicles</h2>
              <p>
                With an intuitive interface and live support, TBS’s DFU empowers technicians to handle complex tasks confidently, reducing downtime and costs. Clients achieve reliable, future-ready diagnostics, keeping vehicles at peak performance.
              </p>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow-btn left" onClick={handlePrevious}>
          <div className="arrow">
            ❮
          </div>
        </button>

        <button className="nav-arrow-btn right" onClick={handleNext}>
          <div className=" arrow">
            ❯
          </div>
        </button>
      </div>
    </>
  );
};

export default P6;
