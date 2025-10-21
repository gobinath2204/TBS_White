import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/s1");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/s3");
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
          <h1 className="hero-title">Software Engineering Services</h1>
        </div>
     {/* <h1 className="hero-title">Software Engineering Services</h1> */}
        {/* Creative Content Sections */}
        <div className="product-page">

          <section  style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div  >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0 0 0"}}>
                At TBS, our software engineering services deliver robust, scalable, and compliant solutions for automotive systems. Our expertise spans requirement development, architecture design, software development, detailed design, unit testing, interface validation, and acceptance testing, ensuring high-quality software that meets stringent industry standards.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/bg_less.png" alt="Custom UI" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Software Requirement Development</h2>
              <p>
                We specialize in developing precise and structured software requirements tailored for EV systems, 
                fully aligned with ISO 26262 and ASPICE standards. Our team works closely with clients to define both 
                functional and non-functional requirements that ensure safety, reliability, and performance. 
                Through iterative refinement and traceability, we deliver clear, testable, and comprehensive specifications 
                that enable high-quality and compliant EV software development. Our process includes impact analysis, 
                bidirectional traceability, prioritization, categorization, and correctness validation. 
                Inputs are derived from system requirements, architecture, CAN database, and HSI/hardware schematics. 
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Software Architecture Development</h2>
              <p>
                Our software architecture development focuses on creating modular, scalable, and safety-compliant designs for 
                automotive and EV systems. Guided by AUTOSAR and ISO 14229 standards, we begin with use case analysis, static 
                and dynamic behavior modeling, and identification of software components. Inputs are derived from system 
                architecture, software requirements, bookshelf components, hardware–software interface specifications, and 
                safety requirements to ensure complete functionality coverage. The process involves defining component interfaces,
                 allocating software requirements, estimating ROM, RAM, and CPU resources, and setting resource consumption 
                 objectives. We also ensure software reusability, consistency, bidirectional traceability, and evaluation of 
                 alternative architectures to optimize performance and maintainability. Dynamic behavior is described clearly, 
                 ensuring seamless interaction between components. Once finalized, the architecture is captured in the 
                 EA architecture tool and integrated into the Product Lifecycle Management (PLM) tool, ensuring traceability 
                 with SWE.1 and defining the required set of attributes for compliance and project governance. 
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Software Development and Tools Expertise</h2>
            <p>
              We provide strong expertise in software architecture, functional safety, AUTOSAR, and non-AUTOSAR development 
              for automotive ECUs, including Instrument Clusters, BMS, IVI, DC-DC, Charger, BISG Alternator, and EV Charge 
              Controllers. Our capabilities extend to functional safety up to ASIL-C, AUTOSAR OS, MCAL, BSW, RTE configuration, 
              Flash Bootloader, and freeRTOS with safety plugins. We ensure software quality assurance with UML-based HLD, 
              MISRA-2012 compliance, zero compiler warnings, 100% code and MCDC coverage (ASIL-D). Our tools expertise spans 
              proprietary kernels (QNX, WinCE, Linux), MATLAB/Simulink, Stateflow, Trace32, S32 Design Studio, CubeSuite+, and 
              protocol analyzers. We also have proven AUTOSAR tools capability with Vector DaVinci, EB Tresos, ECU Spectrum, 
              CANoe CAPL scripting, and flashing tools, ensuring seamless integration and high-quality EV software solutions. 
            </p>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Software Detailed Design (Check)</h2>
              <p>
                Our detailed design services translate requirements into structured software components. We create comprehensive design documentation, including flowcharts, state diagrams, and module specifications, adhering to MISRA C guidelines. This ensures maintainable, robust software that meets functional and safety requirements for automotive applications.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Software Unit Design & Test</h2>
            <p>
              We perform Software Unit Design and Testing in alignment with ISO 26262 to ensure reliable, 
              ASIL-compliant software modules. Using tools like Tessy, VectorCAST, Ceedling, Unity, LDRA, and 
              traceability platforms such as Polarion, Confluence, and JIRA, we validate individual units through automated 
              testing. Our unit test strategy includes isolated tests, loop boundary checks, MCDC condition testing, array 
              and pointer validation, and parameter boundary tests. We conduct static analysis, develop and execute test scripts, 
              and generate reports for 100% code coverage (statement, branch, MCDC). All test activities are traceable to 
              requirements, ensuring bidirectional traceability. Key deliverables include test scripts, specifications, static 
              and coverage reports, traceability records, and CI-integrated test results—ensuring defect-free, safety-critical software.
            </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Interface Design & Test</h2>
              <p>
                We provide Interface Design and Testing services to ensure seamless interaction between software modules and 
                hardware. We develop and validate APIs and communication protocols like CAN, LIN, and Ethernet through rigorous 
                integration and component testing, ensuring compliance with automotive standards.Our integration test strategy 
                focuses on resource usage, dataflow between software items, timing dependencies, dynamic interactions, and correct 
                data interpretation. We use tools such as Tessy, Polarion, Confluence, and JIRA for test design, execution, and 
                traceability.We ensure 100% test coverage, static analysis, and bidirectional traceability to requirements. 
                Deliverables include test scripts, test specifications, static and coverage reports, traceability records, and 
                CI-integrated test results, ensuring robust, defect-free, and safety-critical automotive software. 
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Acceptance Test</h2>
            <p>
              We conduct comprehensive Acceptance Testing to validate software against customer and regulatory requirements, 
              ensuring readiness for production and compliance with standards like ASPICE. Using real-world scenarios, automated 
              frameworks, and CAPL scripts, we verify functionality, safety, network behavior, fault handling, and measurement 
              requirements.Our process includes developing a clear test strategy and test specifications, maintaining bidirectional
               traceability, ensuring consistency, and reporting results. Inputs are taken from SWE.1, HSI documents, CAN, and 
               diagnostic databases.We ensure accurate verification of performance and safety aspects, including fault response 
               times and functional safety checks. Deliverables include test results uploaded to project lifecycle management 
               tools, with requirement linking and attribute setting for full traceability and compliance. 
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
