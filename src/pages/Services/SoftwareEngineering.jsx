import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/Hero_S/swengg.jpg";

  const handlePrevious = () => {
    navigate("/pages/Services/SystemEngineering");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Services/HardwareEngineering");
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
          <img src={imagePath} alt="SW Engineering services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Software Engineering Services</h1>
        </div>
        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p style={{fontSize: "1.2rem", textAlign: "justify"}}>
                Our <b>software engineering team</b> delivers comprehensive automotive software solutions strictly aligned with the ASPICE V-Model (SWE.1 to SWE.6). We cover the entire lifecycle from Requirements Elicitation and Architectural Design to Detailed Design, Unit Verification, Integration, and Qualification Testing. Ensuring full compliance with ISO 26262 and cybersecurity standards, we provide robust, scalable, and safety-critical software for next-generation automotive ECUs.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SW/Picture0.png" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.1 Requirements Elicitation</h2>
              <p>
                The SWE.1 process derives, analyzes, and documents software requirements from SYS.2 specifications with full traceability.
              </p>
              <ul>
                <li><strong>Functional Requirements:</strong> Derives software operating modes, measurement capabilities (e.g., CAN signal reads), control functions, and system behaviors.</li>
                <li><strong>Non-Functional Requirements:</strong> Analyzes performance metrics, efficiency standards, lifetime expectations, and operational constraints like memory usage.</li>
                <li><strong>Standards Compliance:</strong> Aligns with ISO/SAE 21434 (Cybersecurity), ISO 26262 (Safety), and ISO/IEC/IEEE 15288/12207.</li>
                <li><strong>Specialized Scopes:</strong> Includes Environmental, Communication (CAN, Ethernet, etc.), End-of-Line, and Test Requirements.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SW/Picture1.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.2 Software Architectural Design</h2>
              <p>
                We deliver scalable, modular software architectures for automotive ECUs, strictly adhering to AUTOSAR standards.
              </p>
              <ul>
                <li><strong>Technical Evaluation:</strong> Conducts comprehensive analysis across the software lifecycle with documented rationales for every design decision.</li>
                <li><strong>Documentation:</strong> Provides detailed static/dynamic specifications, component interfaces, and behavioral models using UML/SysML.</li>
                <li><strong>Risk & Performance:</strong> Minimizes change impact while optimizing timings and resource efficiency through bidirectional traceability to SWE.1.</li>
                <li><strong>Integration:</strong> Ensures seamless hardware-software integration with robust concurrency handling for multi-threading and interrupts.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SW/Picture2.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.3 Software Detailed Design & Unit Construction</h2>
              <p>
                We translate architectural requirements into structured software components and comprehensive detailed design documentation.
              </p>
              <ul>
                <li><strong>Standardization:</strong> Adheres to MISRA C guidelines to ensure maintainable and robust software for automotive applications.</li>
                <li><strong>Coverage:</strong> Designs comprehensive interfaces, software units, data flow, and control flow.</li>
                <li><strong>Dynamic Modeling:</strong> Captures software unit interactions and dynamic behaviors through UML/SysML models.</li>
                <li><strong>Traceability:</strong> Maintains bidirectional links between SWE.3 tests and SWE.2 architecture.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SW/Picture3.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.4 Software Unit Verification</h2>
              <p>
                We perform ASIL-compliant unit verification using industry-standard tools such as Tessy, Ceedling, and LDRA.
              </p>
              <ul>
                <li><strong>Testing Measures:</strong> Includes static analysis (MISRA), code reviews, and unit testing with full regression coverage.</li>
                <li><strong>Analysis Methods:</strong> Performs code coverage analysis, static analysis, and fault injection to ensure defect-free software.</li>
                <li><strong>Rigor Levels:</strong> Supports Statement, Branch, and Decision coverage, up to MC/DC coverage for ASIL-D safety requirements.</li>
                <li><strong>Traceability:</strong> Establishes bidirectional links between verification results, units, and detailed design.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SW/Picture4.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.5 Software Integration & Integration Verification</h2>
              <p>
                We conduct sequential integration testing, moving from individual units to the full software stack, verified against the SWE.2 architecture.
              </p>
              <ul>
                <li><strong>Strategy:</strong> Defines sequences and pass/fail criteria for comprehensive dataflow and timing verification.</li>
                <li><strong>Environment:</strong> Utilizes SIL (Software-in-the-Loop) environments, hardware debug interfaces, and continuous integration.</li>
                <li><strong>Behavioral Testing:</strong> Validates interface compliance, resource consumption, and dynamic interactions.</li>
                <li><strong>Traceability:</strong> Maintains full bidirectional links between integration tests and software architecture.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SW/Picture5.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.6 Software Qualification Testing</h2>
              <p>
                We verify the integrated software against SWE.1 software requirements to ensure complete functional compliance.
              </p>
              <ul>
                <li><strong>Testing Methodology:</strong> Executes functional and non-functional tests within HIL (Hardware-in-the-Loop) and SIL environments.</li>
                <li><strong>Key Verification Areas:</strong> Focuses on boundary values, error handling, performance, and communication requirements.</li>
                <li><strong>Compliance:</strong> Supports ISO 26262 ASIL A-D and ASPICE Level 1-3 requirements.</li>
                <li><strong>Traceability:</strong> Ensures every software requirement is verified with documented evidence and bidirectional links.</li>
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

export default S2;
