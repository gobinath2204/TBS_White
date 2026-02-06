import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P7 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/RTOS.mp4";

  const handlePrevious = () => {
    navigate("/pages/Our Products/DFU");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/Inhousesoftwarestack");
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
          <img src="/RTOS.png" alt="Free RTOS Safety Plugin" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Free RTOS Safety Plugin</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div>
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                Our comprehensive <b>Real-Time Operating System Solutions</b> deliver safety-critical foundations for automotive embedded systems, featuring Free RTOS Safety Plugin, SMU (Safety Management Unit), and Smart HIL testing platforms. These integrated solutions ensure ISO 26262 ASIL-D compliance while providing robust development and validation environments for next-generation automotive applications.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/RTOS.png" alt="Free RTOS Safety Plugin" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Free RTOS Safety Plugin</h2>
              <p>
                Transform standard FreeRTOS kernels into certified safety-critical foundations with our comprehensive safety plugin:
              </p>
              <ul>
                <li><strong>Safety Certification:</strong> Pre-qualified to ISO 26262 ASIL-D and IEC 61508 SIL-3 standards</li>
                <li><strong>Enhanced Robustness:</strong> Error handling, memory partitioning, and deterministic scheduling</li>
                <li><strong>Seamless Integration:</strong> Stack overflow protection and traceable APIs without full recertification</li>
                <li><strong>AUTOSAR Compliance:</strong> Supports AUTOSAR OS compliance and multi-threading capabilities</li>
                <li><strong>TÜV SÜD Verified:</strong> Developed via HAZOP analysis with comprehensive safety manuals</li>
                <li><strong>Effortless Migration:</strong> Preserves familiarity while gaining safety assurances</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Safety Management Unit" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SMU (Safety Management Unit)</h2>
              <p>
                Advanced safety management capabilities ensuring system integrity and compliance across automotive applications:
              </p>
              <ul>
                <li><strong>Real-Time Monitoring:</strong> Continuous system health monitoring and fault detection</li>
                <li><strong>Safety Mechanisms:</strong> Integrated watchdog timers and fail-safe operation modes</li>
                <li><strong>Diagnostic Capabilities:</strong> Comprehensive self-test and diagnostic functions</li>
                <li><strong>Fault Management:</strong> Automated fault isolation and recovery procedures</li>
                <li><strong>Compliance Support:</strong> Built-in support for automotive safety standards</li>
                <li><strong>Performance Optimization:</strong> Minimal overhead while maintaining safety integrity</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Smart HIL Testing" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Smart HIL (Hardware-in-the-Loop)</h2>
              <p>
                Comprehensive testing and validation platform for automotive embedded systems development:
              </p>
              <ul>
                <li><strong>Real-Time Simulation:</strong> High-fidelity vehicle dynamics and environmental modeling</li>
                <li><strong>Automated Testing:</strong> Comprehensive test case execution and validation workflows</li>
                <li><strong>Multi-Protocol Support:</strong> CAN, LIN, Ethernet, and FlexRay communication interfaces</li>
                <li><strong>Scalable Architecture:</strong> Modular design supporting various ECU configurations</li>
                <li><strong>Advanced Analytics:</strong> Real-time data analysis and performance metrics</li>
                <li><strong>Integration Ready:</strong> Seamless integration with development toolchains and CI/CD pipelines</li>
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
          <div className=" arrow">
            ❯
          </div>
        </button>
      </div>
    </>
  );
};

export default P7;