import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/Hero_S/hwengg.jpg";

  const handlePrevious = () => {
    navigate("/pages/Services/SoftwareEngineering");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Services/SystemValidation");
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
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0 0 0"}}>
                Our <b>hardware engineering team</b> delivers exceptional ASPICE-compliant hardware solutions covering the complete development lifecycle from requirements to verification. We excel in schematic and PCB design, safety analysis (FMEA/DFMEA), advanced simulations, and rigorous testing methodologies. From concept to production, we deliver robust, high-performance hardware that ensures functional safety, industry compliance, and accelerated time-to-market.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper" style={{ height: "auto" }}>
              <img src="/S_HW/Picture0.png" alt="Custom UI" className="section-image" style={{ objectFit: "fill", height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>HWE.1 Hardware Requirement Development</h2>
              <p>
                Our team delivers robust, fully traceable hardware requirements engineered to meet stringent automotive standards, ensuring seamless ASPICE alignment and ISO 26262 functional safety compliance.
              </p>
              <ul>
                <li><strong>Hardware Requirements Elicitation:</strong> We transform system requirements into precise hardware specifications with clear functional, performance, and electrical expectations.</li>
                <li><strong>Hardware Safety Requirements (HSR):</strong> We derive HSRs from Technical Safety Requirements (TSRs), systematically aligned with ISO 26262 functional safety processes and goals.</li>
                <li><strong>Functional and Non-Functional Requirements:</strong> Our process captures functional behaviors and non-functional attributes, including performance, thermal limits, reliability, and diagnostics.</li>
                <li><strong>Electrical Test Requirements:</strong> We define Low Voltage (LV) and High Voltage (HV) electrical test requirements in accordance with LV124, LV123, and essential EV safety standards.</li>
                <li><strong>HV and LV Specifications:</strong> We define electrical requirements covering behavior, protection, isolation, derating, and automotive standards for both high and low voltage systems.</li>
                <li><strong>Communication Requirements:</strong> We establish hardware communication needs for CAN, LIN, SPI, I2C, Ethernet, and RS232, including necessary diagnostics.</li>
                <li><strong>Requirement Management in Polarion:</strong> We manage requirements using tools like Polarion to ensure bidirectional traceability between SYS.2 allocations and customer communication.</li>
                <li><strong>Architecture Allocation:</strong> Our team maps requirements to corresponding elements to ensure alignment with vehicle-level goals.</li>
                <li><strong>Iterative Refinement:</strong> We provide continuous validation to ensure all requirements are testable, complete, and consistent.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper" style={{ height: "auto" }}>
              <img src="/S_HW/Picture1.jpeg" alt="Connectivity" className="section-image" style={{ objectFit: "cover", height: "auto" }}/>
            </div>
            <div className="section-text">
              <h2>Schematic Design</h2>
              <p>
                Our team excels in schematic design for advanced automotive electronic systems, delivering innovative solutions with uncompromising quality and reliability.
              </p>
              <ul>
                <li><strong>End-to-End Design Services:</strong> We offer comprehensive schematic design solutions for Electronic Control Units (ECUs), sensor modules, and various automotive electronic components.</li>
                <li><strong>Architecture & Component Selection:</strong> We define optimal system architecture and perform rigorous component selection and derating, supported by comprehensive validation.</li>
                <li><strong>Industry-Leading Tools:</strong> We utilize professional tools such as Altium Designer, Autodesk Fusion, and KiCad for maximum precision.</li>
                <li><strong>Global Standards Compliance:</strong> Our designs adhere to ISO 26262, AEC-Q100/Q200, CISPR 25, IEC 60617, and IATF 16949.</li>
                <li><strong>Core Design Principles:</strong> We integrate Design for Manufacturability (DFM), Design for Testability (DFT), and Design for Safety (DFS) into every project.</li>
                <li><strong>EMI/EMC Excellence:</strong> We apply industry best practices to ensure robust, reliable, and market-ready electronic solutions that meet strict EMI/EMC guidelines.</li>
                <li><strong>Comprehensive Documentation:</strong> We provide thorough design reviews and documentation to ensure transparency, full traceability, and regulatory compliance.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper" style={{ height: "auto" }}>
              <img src="/S_HW/Picture2.png" alt="Connectivity" className="section-image" style={{ objectFit: "none", height: "auto" }}/>
            </div>
            <div className="section-text">
              <h2>PCB Design & Development</h2>
              <p>
                our team supports complete PCB design and development services tailored for the demanding environments of the automotive industry.
              </p>
              <ul>
                <li><strong>Advanced PCB Layout:</strong> Our expertise includes designing multilayer PCB layouts with controlled impedance, high-speed routing, and optimized signal integrity.</li>
                <li><strong>Component Footprint & Library Creation:</strong> We create accurate PCB footprints and validated library elements to ensure reliable placement and manufacturability.</li>
                <li><strong>Strategic Layout Planning:</strong> We plan component placement by carefully considering signal flow, thermal zones, clearances, and manufacturing constraints.</li>
                <li><strong>Thermal & Power Management:</strong> We apply advanced thermal analysis, copper balancing, and power distribution optimization to ensure reliable performance under all conditions.</li>
                <li><strong>DFM & DFT Reviews:</strong> We conduct rigorous Design for Manufacturability and Design for Testability reviews to streamline production and assembly.</li>
                <li><strong>Standards & Compliance:</strong> Every design ensures compliance with IPC standards, AEC-Q specifications, ISO 26262, and IATF 16949 quality rules.</li>
                <li><strong>Manufacturing Support:</strong> We prepare production-ready fabrication files (Gerbers, drill files) and provide full support through the assembly process.</li>
              </ul>
            </div>
          </section>
        
        <section className="content-section section-with-image">
            <div className="section-image-wrapper" style={{ height: "auto" }}>
              <img src="/S_HW/Picture3.jpeg" alt="Connectivity" className="section-image" style={{ height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>Safety Analysis (HARA & Functional Safety)</h2>
              <p>
                Our team perform structured safety assessments to identify hazards, quantify risks, and ensure all hardware remains compliant with ISO 26262 standards.
              </p>
              <ul>
                <li><strong>Hazard Analysis and Risk Assessment (HARA):</strong> We conduct comprehensive assessments to identify potential hazards and define Safety Goals based on Automotive Safety Integrity Levels (ASIL).</li>
                <li><strong>DFMEA Development:</strong> Our team performs Design Failure Mode and Effects Analysis (DFMEA) to identify potential failures early, driving preventive, safety-oriented improvements.</li>
                <li><strong>FMEDA Quantification:</strong> We calculate failure rates, diagnostic coverage, and safety metrics to support specific ASIL targets and ensure hardware safety compliance.</li>
                <li><strong>Fault Tree Analysis (FTA):</strong> We utilize deductive analysis to identify root causes of system-level failures, ensuring a high level of functional safety.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper" style={{ height: "auto" }}>
              <img src="/S_HW/Picture4.jpeg" alt="Software Updates" className="section-image" style={{ height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>Hardware Design & Calculation</h2>
              <p>
                Our detailed design process incorporates rigorous calculations and simulations to ensure every circuit performs optimally before reaching the prototype stage.
              </p>
              <ul>
                <li><strong>Detailed Hardware Design:</strong> We perform rigorous circuit analysis, including Worst-Case Analysis (WCA), Signal Integrity (SI), and Power Integrity (PI).</li>
                <li><strong>Circuit Simulation & Analysis:</strong> Using industry-standard tools like LTspice and PSpice, we validate design correctness and performance under various conditions.</li>
                <li><strong>Thermal & Power Management:</strong> We apply advanced thermal analysis and power-distribution optimization to ensure reliable performance across all automotive temperature ranges.</li>
                <li><strong>Component Selection & Derating:</strong> Our process includes the definition of optimal system architecture and rigorous component selection with validated derating factors.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper" style={{ height: "auto" }}>
              <img src="/S_HW/Picture5.jpeg" alt="Software Updates" className="section-image" style={{ height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>Hardware Verification</h2>
              <p>
                Our experts perform comprehensive hardware verification aligned with automotive standards and ASPICE HWE.4 process guidelines to ensure every requirement is fully met.
              </p>
              <ul>
                <li><strong>Comprehensive Test Cases:</strong> We execute functional validation against hardware requirements and design specifications at every development stage.</li>
                <li><strong>Board Bring-Up Testing:</strong> Our team manages initial bring-up, verifying power sequencing and performing basic functional checks on prototype hardware.</li>
                <li><strong>Board-Level Functional Testing:</strong> We validate performance through precise electrical measurements, interface tests, and requirement-driven functional evaluations.</li>
                <li><strong>Integration Testing:</strong> We verify hardware behavior within integrated systems to ensure seamless software compatibility and interface performance.</li>
                <li><strong>Environmental & Stress Testing:</strong> Hardware is tested under extreme temperature, load, and real-world stress conditions to ensure long-term durability and compliance.</li>
                <li><strong>Detailed Documentation:</strong> Every test results in a complete report featuring waveform captures, fault analysis, and full traceability to the original design specifications.</li>
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

export default S3;
