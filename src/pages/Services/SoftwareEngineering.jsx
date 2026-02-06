import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/swengg.jpg";

  const handlePrevious = () => {
    navigate("/pages/Services/SystemDevelopment");
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

          <section  style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div  >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0 0 0"}}>
                Our <b>software engineering team</b> delivers exceptional software solutions with comprehensive requirement development, architecture design, and rigorous testing methodologies for automotive ECUs. We excel in AUTOSAR and non-AUTOSAR development, ensuring full compliance with ISO 26262 and ASPICE standards for safety-critical applications. From detailed design to unit testing, we deliver robust, scalable software that meets the most stringent automotive industry requirements.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/bg_less.png" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Software Requirement Development</h2>
              <p>
                We specialize in developing precise and structured software requirements tailored for automotive systems, fully aligned with ISO 26262 and ASPICE standards:
              </p>
              <ul>
                <li><strong>Functional & Non-Functional Requirements:</strong> Comprehensive definition ensuring safety, reliability, and performance for automotive applications</li>
                <li><strong>Impact Analysis & Traceability:</strong> Bidirectional traceability with iterative refinement for clear, testable specifications</li>
                <li><strong>Requirement Prioritization:</strong> Systematic categorization and correctness validation for compliant development</li>
                <li><strong>Input Integration:</strong> Derived from system requirements, architecture, CAN database, and HSI/hardware schematics</li>
                <li><strong>Standards Compliance:</strong> Full alignment with ISO 26262 and ASPICE for safety-critical applications</li>
                <li><strong>Quality Assurance:</strong> Comprehensive specifications enabling high-quality automotive software development</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Software Architecture Development</h2>
              <p>
                Our software architecture development creates modular, scalable, and safety-compliant designs for automotive systems, guided by AUTOSAR and ISO 14229 standards:
              </p>
              <ul>
                <li><strong>Use Case Analysis & Modeling:</strong> Static and dynamic behavior modeling with comprehensive software component identification</li>
                <li><strong>Component Interface Design:</strong> Defining interfaces, allocating requirements, and estimating ROM, RAM, and CPU resources</li>
                <li><strong>Resource Optimization:</strong> Setting consumption objectives and evaluating alternative architectures for performance</li>
                <li><strong>Reusability & Consistency:</strong> Ensuring software reusability with bidirectional traceability and maintainability</li>
                <li><strong>Dynamic Behavior Description:</strong> Clear documentation ensuring seamless component interaction</li>
                <li><strong>Tool Integration:</strong> Architecture captured in EA tool and integrated into PLM for SWE.1 traceability</li>
                <li><strong>Compliance Governance:</strong> Required attributes defined for standards compliance and project governance</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Software Development and Tools Expertise</h2>
              <p>
                We provide comprehensive software development expertise for automotive ECUs with advanced tools and methodologies:
              </p>
              <ul>
                <li><strong>ECU Development Expertise:</strong> Instrument Clusters, BMS, IVI, DC-DC, Charger, BISG Alternator, and EV Charge Controllers</li>
                <li><strong>Functional Safety Capabilities:</strong> Up to ASIL-C with AUTOSAR OS, MCAL, BSW, RTE configuration, and Flash Bootloader</li>
                <li><strong>Quality Assurance Standards:</strong> UML-based HLD, MISRA-2012 compliance, zero compiler warnings, 100% code and MCDC coverage</li>
                <li><strong>Operating Systems:</strong> Proprietary kernels (QNX, WinCE, Linux) and freeRTOS with safety plugins</li>
                <li><strong>Development Tools:</strong> MATLAB/Simulink, Stateflow, Trace32, S32 Design Studio, CubeSuite+, and protocol analyzers</li>
                <li><strong>AUTOSAR Tools:</strong> Vector DaVinci, EB Tresos, ECU Spectrum, CANoe CAPL scripting, and flashing tools</li>
                <li><strong>Integration Excellence:</strong> Seamless integration ensuring high-quality automotive software solutions</li>
              </ul>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Software Detailed Design</h2>
              <p>
                Our detailed design services translate requirements into structured software components with comprehensive documentation:
              </p>
              <ul>
                <li><strong>Requirements Translation:</strong> Converting requirements into structured, implementable software components</li>
                <li><strong>Design Documentation:</strong> Comprehensive flowcharts, state diagrams, and module specifications</li>
                <li><strong>MISRA C Compliance:</strong> Adherence to MISRA C guidelines for automotive software standards</li>
                <li><strong>Maintainable Architecture:</strong> Robust software design meeting functional and safety requirements</li>
                <li><strong>Automotive Standards:</strong> Full compliance with automotive application requirements and standards</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Software Unit Design & Test</h2>
              <p>
                We perform comprehensive Software Unit Design and Testing in alignment with ISO 26262 for reliable, ASIL-compliant software modules:
              </p>
              <ul>
                <li><strong>Testing Tools Expertise:</strong> Tessy, VectorCAST, Ceedling, Unity, LDRA with traceability platforms (Polarion, Confluence, JIRA)</li>
                <li><strong>Comprehensive Test Strategy:</strong> Isolated tests, loop boundary checks, MCDC condition testing, array and pointer validation</li>
                <li><strong>Static Analysis & Coverage:</strong> 100% code coverage (statement, branch, MCDC) with automated test script execution</li>
                <li><strong>Bidirectional Traceability:</strong> All test activities traceable to requirements ensuring compliance</li>
                <li><strong>Complete Deliverables:</strong> Test scripts, specifications, static and coverage reports, traceability records</li>
                <li><strong>CI Integration:</strong> Continuous integration with automated test results for defect-free software</li>
                <li><strong>Safety-Critical Compliance:</strong> ISO 26262 alignment ensuring reliable, ASIL-compliant modules</li>
              </ul>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Interface Design & Test</h2>
              <p>
                We provide comprehensive Interface Design and Testing services ensuring seamless software-hardware interaction:
              </p>
              <ul>
                <li><strong>API & Protocol Development:</strong> Design and validation of CAN, LIN, and Ethernet communication protocols</li>
                <li><strong>Integration Test Strategy:</strong> Resource usage, dataflow, timing dependencies, and dynamic interaction validation</li>
                <li><strong>Testing Tools:</strong> Tessy, Polarion, Confluence, and JIRA for comprehensive test design and execution</li>
                <li><strong>Complete Coverage:</strong> 100% test coverage with static analysis and bidirectional traceability</li>
                <li><strong>Comprehensive Deliverables:</strong> Test scripts, specifications, static and coverage reports, traceability records</li>
                <li><strong>CI Integration:</strong> Continuous integration with automated test results for robust software</li>
                <li><strong>Automotive Standards:</strong> Full compliance ensuring defect-free, safety-critical automotive software</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Acceptance Test</h2>
              <p>
                We conduct comprehensive Acceptance Testing to validate software against customer and regulatory requirements:
              </p>
              <ul>
                <li><strong>Production Readiness Validation:</strong> Ensuring compliance with ASPICE standards and regulatory requirements</li>
                <li><strong>Real-World Testing:</strong> Automated frameworks and CAPL scripts for functionality, safety, and network behavior verification</li>
                <li><strong>Comprehensive Test Strategy:</strong> Clear specifications with bidirectional traceability and consistency reporting</li>
                <li><strong>Input Integration:</strong> SWE.1, HSI documents, CAN, and diagnostic databases for complete coverage</li>
                <li><strong>Performance & Safety Verification:</strong> Accurate fault response times and functional safety checks</li>
                <li><strong>PLM Integration:</strong> Test results uploaded to project lifecycle management tools with requirement linking</li>
                <li><strong>Full Traceability:</strong> Attribute setting ensuring complete traceability and compliance validation</li>
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

export default S2;
