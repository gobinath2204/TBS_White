import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P5 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/SmartHIL2.mp4";

  const handlePrevious = () => {
    navigate("/pages/Our Products/SMU");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/DFU");
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
          <img src="/Hero_P/SmartHIL.png" alt="Smart HIL (Hardware-in-the-Loop)" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Smart HIL (Hardware-in-the-Loop)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div>
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                TBS's Smart HIL platform transforms automotive validation through intelligent hardware-software integration. Our system delivers real-time ECU testing with advanced fault simulation, multi-protocol connectivity, and AI-driven automation. Designed for next-generation vehicle development, it accelerates testing cycles while ensuring ISO 26262 compliance and seamless integration with industry-standard development tools.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Smart HIL (Hardware-in-the-Loop)</h2>
              <div className="bento-box" style={{borderRadius: '12px', padding: '1.5rem', backgroundColor: '#fff'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Advanced fault insertion capabilities for comprehensive testing scenarios</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Scalable I/O architecture supporting CAN, LIN, and Ethernet protocols</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Seamless MATLAB/Simulink integration for model-based development</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• ISO 26262 ASIL-D compliance ensuring deterministic timing and traceability</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• AI-optimized test automation reducing development cycles by up to 50%</li>
                  <li style={{paddingLeft: '1rem', position: 'relative'}}>• Ideal for ADAS, powertrain, and electrification development projects</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Advanced HIL Testing for Software-Defined Vehicles</h2>
              <div className="bento-box" style={{borderRadius: '12px', padding: '1.5rem', backgroundColor: '#fff'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Early defect detection capabilities throughout development lifecycle</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Seamless transitions to vehicle-in-the-loop testing phases</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Robust and safe design validation for critical automotive systems</li>
                  <li style={{marginBottom: '0.8rem', paddingLeft: '1rem', position: 'relative'}}>• Accelerated time-to-market for software-defined vehicle platforms</li>
                  <li style={{paddingLeft: '1rem', position: 'relative'}}>• Enhanced reliability driving innovation in automotive testing methodologies</li>
                </ul>
              </div>
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

export default P5;