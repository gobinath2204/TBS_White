import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P5 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/SMU");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/DFU");
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
          <h1 className="hero-title" style={{color: 'white'}}>Smart HIL (Hardware-in-the-Loop)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div>
              <p style={{fontSize: "1.5rem", textAlign: "justify", padding: "6rem 0"}}>
                TBS’s Smart Hardware-in-the-Loop (HIL) system revolutionizes automotive testing by bridging virtual simulations with real hardware, enabling precise validation of ECUs and control algorithms in a risk-free environment. Using real-time processors, it emulates vehicle dynamics, sensors, and actuators, testing scenarios from normal drives to edge-case faults without physical prototypes.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Smart HIL (Hardware-in-the-Loop)</h2>
              <p>
                Supporting fault insertion, scalable I/O for CAN, LIN, and Ethernet, and MATLAB/Simulink integration, it complies with ISO 26262 ASIL-D standards, ensuring deterministic timing and traceability. AI-optimized test automation reduces cycles by up to 50%, enhancing efficiency. Ideal for ADAS, powertrain, and electrification development, TBS’s Smart HIL minimizes costly road tests while maximizing coverage.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Advanced HIL Testing for Software-Defined Vehicles</h2>
              <p>
                Clients achieve early defect detection and seamless transitions to vehicle-in-the-loop phases, fostering robust, safe designs. TBS’s HIL accelerates time-to-market and enhances reliability in software-defined vehicles, driving innovation in automotive testing.
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

export default P5;
