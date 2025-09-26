import React, { useEffect, useRef } from "react";
import './service-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/s2");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/s4");
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
        {/* <div className="hero-container">
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title">In-house Software Stacks</h1>
        </div> */}
     <h1 className="hero-title">Hardware Engineering Services</h1>
        {/* Creative Content Sections */}
        <div className="product-page">

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Overview</h2>
              <p>
                At TBS, our hardware engineering services deliver innovative and reliable solutions for automotive systems. Our expertise spans requirement development, schematic and PCB design, risk analysis, simulations, and verification, ensuring high-performance hardware that meets stringent industry standards.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Hardware Requirement Development</h2>
              <p>
                We excel in defining precise hardware requirements aligned with automotive standards like ISO 26262. Our team collaborates with clients to establish functional, performance, and safety specifications. Through iterative refinement and traceability, we ensure requirements are robust, testable, and compliant, laying a strong foundation for hardware development.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Schematic Design</h2>
              <p>
                Our schematic design services create detailed, optimized circuit designs for automotive applications. We focus on reliability, efficiency, and compliance with standards like IPC-2221. Using advanced tools, we develop schematics that support complex functionalities, ensuring seamless integration with vehicle systems while minimizing design risks.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>PCB Design & Development</h2>
            <p>
              We provide comprehensive PCB design and development, delivering high-quality layouts for automotive electronics. Our services include multilayer PCB design, signal integrity analysis, and thermal management, adhering to standards like IPC-A-600. We ensure manufacturability, reliability, and compliance with automotive requirements, supporting robust system performance.
            </p>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>FMEA/DFMEA</h2>
              <p>
                Our Failure Mode and Effects Analysis (FMEA) and Design FMEA (DFMEA) services identify potential risks in hardware design. Aligned with AIAG and VDA standards, we analyze failure modes, assess severity, and implement mitigation strategies. This proactive approach enhances reliability, safety, and compliance in automotive systems.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Design Calculations/Simulations</h2>
            <p>
              We conduct precise design calculations and simulations to validate hardware performance. Using tools like SPICE and MATLAB, we perform thermal, electrical, and signal integrity simulations. These analyses optimize designs, reduce development risks, and ensure compliance with performance and safety standards, accelerating time-to-market.
            </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>HARA/FMEDA Development</h2>
              <p>
                Our Hazard Analysis and Risk Assessment (HARA) and Failure Modes, Effects, and Diagnostic Analysis (FMEDA) services ensure safety-critical hardware compliance with ISO 26262. We identify hazards, assess risks, and define safety measures, delivering detailed FMEDA reports to support ASIL compliance and robust system design.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Hardware Verification</h2>
            <p>
              We provide rigorous hardware verification to ensure functionality and reliability. Our services include functional testing, environmental stress testing, and compliance validation against standards like ISO 16750. Using automated test setups, we verify performance under real-world conditions, ensuring hardware meets automotive quality and safety requirements.
            </p>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow-btn left" onClick={handlePrevious}>
          <div className="arrow">
            {/* <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg> */}
            ❮
          </div>
        </button>

        <button className="nav-arrow-btn right" onClick={handleNext}>
          <div className=" arrow">
            {/* <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg> */}
            ❯
          </div>
        </button>
      </div>
    </>
  );
};

export default P2;
