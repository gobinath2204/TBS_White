import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/hwengg.jpg";

  const handlePrevious = () => {
    navigate("/pages/SoftwareEngineering");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/SystemValidation");
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
          <img src={imagePath} alt="HW Engineering services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Hardware Engineering Services</h1>
        </div>
        {/* Creative Content Sections */}
        <div className="product-page">
          <section  style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div >
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0 0 0"}}>
                Our <b>hardware engineering team</b> delivers exceptional ASPICE-compliant hardware solutions covering the complete development lifecycle from requirements to verification. We excel in schematic and PCB design, safety analysis (FMEA/DFMEA), advanced simulations, and rigorous testing methodologies. From concept to production, we deliver robust, high-performance hardware that ensures functional safety, industry compliance, and accelerated time-to-market.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture2.png" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>HWE.1 Hardware Requirement Development</h2>
              <p>
                We specialize in developing detailed, traceable hardware requirements aligned with automotive standards and ISO 26262 safety compliance:
              </p>
              <ul>
                <li><strong>System-Level Translation:</strong> Converting system requirements into detailed hardware specifications based on function, performance, and electrical characteristics</li>
                <li><strong>Hardware Safety Requirements (HSR):</strong> Systematic derivation from Technical Safety Requirements (TSR) aligned with ISO 26262</li>
                <li><strong>Requirement Management:</strong> Bi-directional traceability using tools like Polarion with high-level system requirements</li>
                <li><strong>Architecture Allocation:</strong> Mapping requirements to corresponding elements ensuring vehicle-level goal alignment</li>
                <li><strong>Iterative Refinement:</strong> Continuous validation ensuring testable, complete, and consistent requirements</li>
                <li><strong>Customer Communication:</strong> Formal agreement and communication of finalized hardware requirements</li>
                <li><strong>Development Optimization:</strong> Minimizing rework and accelerating hardware-software integration</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S3/Picture3.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Schematic Design</h2>
              <p>
                Our team excels in schematic design for advanced automotive electronic systems, delivering innovative solutions with uncompromising quality:
              </p>
              <ul>
                <li><strong>End-to-End Design Services:</strong> Complete schematic design for ECUs, sensors, control modules, and automotive components</li>
                <li><strong>Architecture & Component Selection:</strong> Optimal architecture definition, accurate component selection and derating with validation</li>
                <li><strong>Industry-Leading Tools:</strong> Altium Designer, Autodesk Fusion, and Ki-Cad for precision and reliability</li>
                <li><strong>Global Standards Compliance:</strong> ISO 26262, AEC-Q100/Q200, CISPR 25, IEC 60617, and IATF 16949</li>
                <li><strong>Design Principles:</strong> Design for Manufacturability (DFM), Design for Testability (DFT), and Design for Safety (DFS)</li>
                <li><strong>Comprehensive Documentation:</strong> Thorough design reviews ensuring transparency, traceability, and compliance</li>
                <li><strong>EMI/EMC Guidelines:</strong> Industry practices enabling robust, reliable, and market-ready solutions</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture4.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>PCB Design & Development</h2>
              <p>
                We provide complete PCB design and development services tailored for demanding automotive environments:
              </p>
              <ul>
                <li><strong>Advanced PCB Design:</strong> Multilayer PCB design, controlled impedance, signal integrity analysis, and high-speed routing</li>
                <li><strong>Thermal Management:</strong> Comprehensive thermal analysis and management for reliable performance</li>
                <li><strong>Standards Compliance:</strong> IPC standards, AEC-Q100/200, ISO 26262, and IATF 16949 quality standards</li>
                <li><strong>Component Integration:</strong> Proper selection, creepage and clearance requirements, and accurate footprints</li>
                <li><strong>Design Reviews:</strong> Design for Manufacturability (DFM) and Design for Testability (DFT) reviews</li>
                <li><strong>Reliability Validation:</strong> Electrical, thermal, and mechanical reliability for automotive conditions</li>
                <li><strong>Production-Ready Solutions:</strong> Robust, compliant, and optimized PCB designs for advanced automotive electronics</li>
              </ul>
            </div>
          </section>
        
        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S3/Picture5.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Safety Analysis (FMEA/DFMEA/FMEDA)</h2>
              <p>
                We integrate comprehensive safety analysis into every development stage ensuring functional reliability and standards compliance:
              </p>
              <ul>
                <li><strong>DFMEA Implementation:</strong> Design Failure Mode and Effects Analysis during concept and design phases</li>
                <li><strong>Risk Assessment Tools:</strong> ANSYS Medini Analyze for systematic risk identification and prioritization</li>
                <li><strong>Standards Compliance:</strong> ISO 26262 and IEC 61508 alignment with severity, occurrence, and detection analysis</li>
                <li><strong>FMEA & FMEDA:</strong> Quantified failure rates, diagnostic coverage, and system robustness validation</li>
                <li><strong>Fault Tree Analysis (FTA):</strong> Root cause tracing and safety integrity level validation</li>
                <li><strong>Comprehensive Deliverables:</strong> Detailed safety reports, verified documentation, and compliance datasets</li>
                <li><strong>Certified Solutions:</strong> Reliable, safety-compliant hardware designs ready for certification</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture6.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Design Calculations / Simulations</h2>
              <p>
                We perform detailed design calculations and advanced simulations ensuring precision, stability, and long-term reliability:
              </p>
              <ul>
                <li><strong>Systematic Analysis:</strong> Detailed schematic calculations using engineering rules, theoretical formulas, and datasheet parameters</li>
                <li><strong>Early Detection:</strong> Structured approach detecting discrepancies and confirming design accuracy before implementation</li>
                <li><strong>Advanced Simulation Tools:</strong> LT Spice, PSpice, ANSYS, and MATLAB/Simulink for comprehensive analysis</li>
                <li><strong>Comprehensive Verification:</strong> Circuit behavior, worst-case conditions, voltage and current margins analysis</li>
                <li><strong>Component Stress Analysis:</strong> Assessment across wide range of operating scenarios and conditions</li>
                <li><strong>Cost Optimization:</strong> Minimized redesign costs and accelerated development cycles</li>
                <li><strong>Production-Ready Hardware:</strong> Robust, compliant solutions meeting stringent automotive requirements</li>
              </ul>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S3/Picture7.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>HARA Development</h2>
              <p>
                We provide comprehensive Hazard Analysis and Risk Assessment (HARA) in compliance with ISO 26262 for functional safety:
              </p>
              <ul>
                <li><strong>Concept Phase Analysis:</strong> Systematic hazard identification during vehicle operation due to hardware malfunctions</li>
                <li><strong>ASIL Classification:</strong> Severity, exposure, and controllability analysis determining Automotive Safety Integrity Levels (A-D)</li>
                <li><strong>Safety Goals Definition:</strong> High-level safety goals forming the foundation for detailed hardware design</li>
                <li><strong>Functional Safety Requirements:</strong> Specific FSRs defining system prevention and control of hazardous events</li>
                <li><strong>Diagnostic Measures:</strong> Effective detection and mitigation strategies with full lifecycle traceability</li>
                <li><strong>Comprehensive Deliverables:</strong> HARA reports, ASIL classification summaries, and safety goal documentation</li>
                <li><strong>Reliable ECU Systems:</strong> Robust, functionally safe, and reliable automotive ECU systems</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture8.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Hardware Verification</h2>
              <p>
                Our experts perform detailed hardware verification aligned with automotive standards and ASPICE HWE.4 process guidelines:
              </p>
              <ul>
                <li><strong>Comprehensive Test Cases:</strong> Functional validation against hardware requirements and design at every stage</li>
                <li><strong>Multi-Stage Testing:</strong> Board bring-up, functional, unit-level, integration, and destructive testing</li>
                <li><strong>Initial Validation:</strong> Component placement, board impedance, power sequencing, and communication interfaces</li>
                <li><strong>Circuit Analysis:</strong> Signal integrity, power behavior evaluation at component and subsystem levels</li>
                <li><strong>Extreme Condition Testing:</strong> Voltage, temperature, and load validation for component tolerance and durability</li>
                <li><strong>Real-World Simulation:</strong> Bench-level testing replicating automotive conditions with detailed analysis</li>
                <li><strong>Complete Documentation:</strong> Test reports, waveform captures, fault analysis, and design specification traceability</li>
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

export default S3;
