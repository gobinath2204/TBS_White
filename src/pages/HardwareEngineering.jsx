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
              <p style={{fontSize: "1.5rem", textAlign: "justify", padding: "6rem 0 0 0"}}>
                TBS provides comprehensive ASPICE-compliant Hardware Engineering services for modern automotive systems, covering the complete development lifecycle from requirements to verification. Our expertise includes schematic and PCB design, safety analysis (FMEA/DFMEA), advanced simulations, and rigorous testing methodologies. We deliver robust, high-performance hardware solutions that ensure functional safety, compliance with industry standards, and accelerated time-to-market.
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
                We specialize in developing detailed, traceable hardware requirements aligned with all relevant automotive standards. Our experts work closely with customers to understand system-level needs and translate them into hardware requirements based on function, performance, and electrical characteristics. Also, we derive Hardware Safety Requirements (HSR) systematically from Technical Safety Requirements (TSR) aligned with the safety standard ISO 26262 to ensure that safety goals defined in the system level are implemented in the hardware design. By leveraging requirement management using tools like Polarion, maintaining bi-directional traceability with high-level system requirements and allocating it to the corresponding elements in the architecture, we ensure that every hardware feature aligns with vehicle-level goals. Our approach minimizes rework, accelerates development, and supports effective hardware- software integration. We deliver hardware requirements as a final work product by adopting an iterative approach to refine and validate requirements, ensuring they are testable, complete, and consistent across the lifecycle and are formally agreed and communicated to the customers.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S3/Picture3.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Schematic Design</h2>
              <p>
                Our team excels in schematic design for advanced automotive electronic systems, delivering solutions that combine deep technical expertise with innovation and uncompromising quality. We provide end-to-end schematic design services for ECUs, sensors, control modules and all automotive components with a strong focus on optimal architecture definition, accurate component selection and derating, and rigorous validation through simulation and design rule checks. Using industry-leading EDA tools such as Altium Designer, Autodesk Fusion, and Ki-Cad, we ensure precision, reliability, and seamless hardware-software integration.<br />
                Every design is developed in strict adherence to global automotive standards including ISO 26262 for functional safety, AEC-Q100 and AEC-Q200 for component qualification, CISPR 25 for EMI/EMC compliance, IEC 60617 for schematic symbols, and IATF 16949 for quality management. Guided by Design for Manufacturability (DFM), Design for Testability (DFT), and Design for Safety (DFS) principles, we deliver scalable, production-ready hardware platforms that meet the demanding requirements of the automotive sector.<br />
                Along with design, we emphasize thorough design reviews and complete documentation to ensure transparency, traceability, and compliance. Our team follows established industry practices and EMI/EMC guidelines, enabling us to transform customer requirements into robust, reliable, and market-ready solutions.
                </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture4.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>PCB Design & Development</h2>
            <p>
              We provide complete PCB design and development services tailored for the automotive industry, ensuring reliable performance in demanding environments. Our expertise covers multilayer PCB design, controlled impedance, signal integrity analysis, high-speed routing, and thermal management. Every design is developed in compliance with IPC standards, AEC-Q100/200 component qualification, and automotive-specific requirements such as ISO 26262 functional safety and IATF 16949 quality standards.<br />
              We pay special attention to proper component selection, creepage and clearance requirements, and accurate component footprints to ensure safety and long-term durability. Our engineers carefully integrate electrical, thermal, and mechanical constraints while conducting Design for Manufacturability (DFM) and Design for Testability (DFT) reviews, minimizing risks and ensuring reliable production outcomes.<br />
              By validating layouts for electrical, thermal, and mechanical reliability, we deliver PCBs that meet stringent automotive operating conditions. From concept to production-ready designs, we ensure robust, compliant, and optimized PCB solutions for advanced automotive electronics.
              </p>
            </div>
          </section>
        
        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S3/Picture5.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Safety Analysis (FMEA/DFMEA/FMEDA)</h2>
              <p>
                We integrate safety analysis into every stage of product development to ensure functional reliability and compliance with ISO 26262 and IEC 61508 standards. During the concept and design phases, we perform DFMEA (Design Failure Mode and Effects Analysis) to evaluate the causes and effects and implement mitigation strategies before hardware validation for automotive ECUs. We use tools like ANSYS Medini Analyze to systematically identify potential design risks by determining the severity, occurrence and detection levels, and prioritize them using the Risk Priority Numbers (RPNs). As designs mature, we conduct FMEA (Failure Mode and Effects Analysis) and FMEDA (Failure Modes, Effects, and Diagnostic Analysis) to quantify failure rates, assess diagnostic coverage, and confirm system robustness against single-point and latent faults. At the system level, FTA (Fault Tree Analysis) is applied to trace root causes of critical failures and validate safety integrity levels. Our work product includes detailed safety reports, verified analysis of documentation, and compliance-ready datasets, empowering customers to achieve certified, reliable, and safety-compliant hardware designs.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture6.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Design Calculations / Simulations</h2>
            <p>
              We perform detailed schematic design calculations for every section of a system to ensure precision, stability, and long-term reliability. Each circuit is carefully analyzed using established engineering rules, theoretical formulas, datasheet parameters, and validated industry values. This structured and systematic approach enables us to detect discrepancies early, confirm design accuracy, and optimize overall hardware performance before implementation. <br />
              Our experienced engineers complement these calculations with advanced simulations using industry-standard tools such as LT Spice, PSpice, ANSYS, and MATLAB/Simulink. These simulations are essential to verify circuit behavior, analyze worst-case conditions, evaluate voltage and current margins, and assess component stress across a wide range of operating scenarios. By combining rigorous design calculations with predictive simulations, we minimize redesign costs, accelerate development cycles, and deliver robust, compliant, and production-ready hardware that meets the stringent requirements of modern automotive applications.
              </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S3/Picture7.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>HARA Development</h2>
              <p>
                We provide a comprehensive Hazard Analysis and Risk Assessment (HARA) in compliance with ISO 26262, ensuring the functional safety of automotive electronic systems. We initiate the HARA at the concept phase, where our experts systematically identify potential hazards that may occur during vehicle operation due to hardware or system malfunctions. Each identified hazard with different operating scenarios is analyzed based on severity, exposure, and controllability, leading to the determination of the corresponding Automotive Safety Integrity Level (ASIL A–D). From this analysis, we define high-level safety goals that form the foundation for detailed hardware and system design. We will develop specific Functional Safety Requirements (FSRs) from the identified safety goals that define how the system will prevent or control hazardous events. Our structured approach ensures that diagnostic measures are effective in detecting and mitigating failures, while maintaining full traceability throughout the safety lifecycle. The final work products we deliver include detailed HARA reports, ASIL classification summaries, and safety goal documentation, enabling our customers to achieve robust, functionally safe, and reliable automotive ECU systems.
                </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S3/Picture8.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Hardware Verification</h2>
            <p>
              Our experts perform detailed hardware verification process aligned with all relevant automotive standards along with ASPICE HWE.4 process guidelines. We derive-up and functional validation comprehensive test cases for every stage of validation and verification against both hardware requirements and hardware design. This includes board bring-up, functional testing, unit-level testing, integration testing, and destructive testing, using well-defined test setups and advanced testing equipment.<br/>
              Our engineers perform initial board bring-up testing and functional validation to verify component placement, Board impedance,  power sequencing, and communication interfaces. <br/>
              We conduct unit-level testing to evaluate circuit functionality, signal integrity, and power behaviour at the component and subsystem levels. Each test case is derived directly from hardware requirements, ensuring full coverage and compliance. <br/>
              In addition, we developed detailed test procedures for destructive testing and performed the tests under extreme voltage, temperature, and load conditions to validate component tolerance, long-term durability, and identify failure modes. <br/>
              Also, our experts conduct bench-level testing using controlled setups that replicate real-world automotive conditions where we perform detailed power-on checks, signal verification, and interface testing for digital, analog and communication channels like CAN. All tests are meticulously measured, logged and analyzed to detect potential issues. <br/>
              Our deliverables include detailed test reports, waveform captures, fault analysis, and traceability to design specifications, ensuring that our customers receive reliable hardware ready for integration and system-level testing.
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

export default S3;
