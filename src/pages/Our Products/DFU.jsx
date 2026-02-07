import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P6 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/pages/Our Products/SmartHIL");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/RTOS");
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
          <img src="/Hero_P/DFU.png" alt="Diagnostics Flashing Unit" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Diagnostics Flashing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                Our <b>Diagnostics Flashing Unit (DFU)</b> is an all-in-one tool for seamless ECU reprogramming and diagnostics, streamlining maintenance, calibration, and updates across the vehicle lifecycle. Supporting UDS, CCP/XCP, and OBD-II protocols, it enables secure flashing over CAN, Ethernet, or LIN, with advanced encryption to prevent tampering and ensure system integrity.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="User Interface" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Diagnostics Flashing Unit</h2>
              <p>
                Designed for lab, production, and service environments, the DFU offers comprehensive automation and remote capabilities:
              </p>
              <ul>
                <li><strong>Automated Workflows:</strong> ODX/OTX data integration with parallel processing for multiple ECUs</li>
                <li><strong>Remote Capabilities:</strong> Telematics integration enabling remote diagnostics and updates</li>
                <li><strong>Real-Time Diagnostics:</strong> Trouble code diagnosis with VIN-specific adaptations for precision</li>
                <li><strong>OTA-Like Updates:</strong> Aftermarket and fleet operator support without specialized hardware</li>
                <li><strong>Compliance Assurance:</strong> Ensuring adherence to efficiency and emissions standards</li>
                <li><strong>Multi-Environment Support:</strong> Optimized for lab, production, and service applications</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Hardware Architecture" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Intuitive Diagnostics & Flashing Unit for Modern Vehicles</h2>
              <p>
                With an intuitive interface and comprehensive support, TBS's DFU empowers technicians for confident operation:
              </p>
              <ul>
                <li><strong>Intuitive Interface:</strong> User-friendly design enabling confident handling of complex tasks</li>
                <li><strong>Live Support:</strong> Real-time assistance reducing technician downtime and operational costs</li>
                <li><strong>Reliable Diagnostics:</strong> Future-ready diagnostic capabilities ensuring optimal vehicle performance</li>
                <li><strong>Cost Reduction:</strong> Minimized downtime and maintenance costs through efficient operations</li>
                <li><strong>Peak Performance:</strong> Keeping vehicles at optimal performance levels throughout their lifecycle</li>
              </ul>
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
          <div className="arrow">
            ❯
          </div>
        </button>
      </div>
    </>
  );
};

export default P6;