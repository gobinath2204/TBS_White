import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/sysval.jpg";

  const handlePrevious = () => {
    navigate("/pages/HardwareEngineering");
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    navigate("/pages/SafetyandRegulatory");
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
          <img src={imagePath} alt="System validation services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">System Validation Services</h1>
        </div>

        {/* Main Product Page */}
        <div className="product-page">
          <section style={{ marginTop: "0", paddingTop: "0.5rem" }}>
            <p style={{ fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0 0 0" }}>
              Our <b>system validation team</b> excels in comprehensive SYS.4 DVP, Test and Design frameworks, delivering robust validation solutions for automotive and embedded systems. We integrate Design Validation Planning with sophisticated testing methodologies, ensuring full compliance with ISO 26262 and critical safety standards. From HIL testing to vehicle validation, we provide end-to-end solutions utilizing advanced automation and model-based development for optimal system performance and reliability.
            </p>
          </section>

          {/* Content Sections */}
          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S4/Picture1.svg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS.4 HIL Design Test & Automation</h2>
              <p>
                Our SYS.4 HIL Design Test & Automation services represent excellence in validating complex hardware-software integrations for automotive applications:
              </p>
              <ul>
                <li><strong>Advanced HIL Platforms:</strong> dSPACE and National Instruments for real-world scenario simulation in controlled environments</li>
                <li><strong>Early Detection Capabilities:</strong> ECU behavior, sensor fusion, and control algorithm validation reducing physical prototyping costs</li>
                <li><strong>Automated Testing Pipeline:</strong> Python and MATLAB scripts for regression tests, scenario-based validations, and fault injections</li>
                <li><strong>ASPICE Level 4 Compliance:</strong> Comprehensive coverage focusing on traceability and repeatability requirements</li>
                <li><strong>CI/CD Integration:</strong> Automation frameworks facilitating agile development with swift change validation</li>
                <li><strong>Proven Results:</strong> 35% reduction in validation errors for ADAS development projects</li>
                <li><strong>Customized Solutions:</strong> Modular HIL environments tailored from powertrain controls to infotainment systems</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S4/Picture2.svg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS5. DVP, Test and Design</h2>
              <p>
                Our SYS5. DVP, Test and Design services elevate system validation to ASPICE Level 5 standards with advanced optimization techniques:
              </p>
              <ul>
                <li><strong>ASPICE Level 5 Standards:</strong> Predictive modeling and AI-enhanced design optimizations for high-maturity processes</li>
                <li><strong>Comprehensive DVP:</strong> Detailed Design Validation Plans with quantitative risk assessment metrics</li>
                <li><strong>Advanced Tools Integration:</strong> Simulink for model refinement and Vector tools for requirement traceability</li>
                <li><strong>Proactive Defect Prevention:</strong> Monte Carlo simulations and machine learning-driven test case generation</li>
                <li><strong>Predictive Analysis:</strong> Historical data analysis for failure mode prediction and design refinement</li>
                <li><strong>Proven Efficiency:</strong> 25% efficiency improvement in autonomous systems compliance</li>
                <li><strong>Holistic Validation:</strong> Cross-disciplinary collaboration from concept to certification</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S4/Picture3.svg" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS.5 HIL Design Test & Automation</h2>
              <p>
                Our SYS.5 HIL Design Test & Automation pushes validation boundaries for safety-critical systems at the highest ASPICE maturity levels:
              </p>
              <ul>
                <li><strong>Advanced HIL Configurations:</strong> FPGA-based simulators with ultra-precise timing and response for complex environments</li>
                <li><strong>Comprehensive Testing:</strong> Exhaustive validation of interconnected modules from ECUs to network protocols</li>
                <li><strong>Sophisticated Automation:</strong> Custom C++ and LabVIEW frameworks orchestrating thousands of adaptive test scenarios</li>
                <li><strong>Security & Safety Validation:</strong> Cybersecurity measures and ASIL-D functional safety requirements</li>
                <li><strong>Regulatory Compliance:</strong> Integrated reporting for regulatory audits and compliance validation</li>
                <li><strong>Proven Results:</strong> 40% reduction in validation cycles for medical device sector clients</li>
                <li><strong>Cloud-Based Scalability:</strong> Distributed HIL for global team collaboration and enhanced accessibility</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-text" style={{width: "100%"}}>
              <h2>System Integration/Dyno Validation</h2>
              <p>
                System Integration and Dyno Validation form the backbone of our comprehensive validation services:
              </p>
              <ul>
                <li><strong>Advanced Dyno Testing:</strong> Chassis and engine dynos with high-fidelity load simulation for torque, efficiency, and emissions</li>
                <li><strong>Interface Integration:</strong> CAN and Ethernet tools ensuring seamless data flow and synchronization</li>
                <li><strong>Comprehensive Validation:</strong> Transient testing and durability cycles with data analytics optimization</li>
                <li><strong>Hybrid System Expertise:</strong> Battery management integration with combustion engines achieving 20% fuel reduction</li>
                <li><strong>ISO 17025 Compliance:</strong> Environmental controls for accurate altitude and temperature effect replication</li>
                <li><strong>Automated Testing:</strong> Scripts handling repetitive tests enabling deeper engineering analysis</li>
                <li><strong>Performance Optimization:</strong> Bridging simulation and physical testing for reliable, high-performance outcomes</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-text">
              <h2>LabCar Validation</h2>
              <p>
                LabCar Validation offers flexible, bench-based alternatives to full vehicle testing with precise component validation:
              </p>
              <ul>
                <li><strong>Modular Bench Systems:</strong> Complete vehicle electrical architectures with ECUs, wiring harnesses, and actuators</li>
                <li><strong>Early Stage Debugging:</strong> Software updates and hardware iterations in simulated vehicle contexts</li>
                <li><strong>Advanced Calibration Tools:</strong> INCA for calibration and monitoring with comprehensive testing capabilities</li>
                <li><strong>Comprehensive Test Suite:</strong> Functional, endurance, and fault-injection tests with automated sequences</li>
                <li><strong>AUTOSAR Support:</strong> Rapid prototyping reducing dependency on scarce physical prototypes</li>
                <li><strong>Proven Results:</strong> 50% faster validation in infotainment projects with early integration issue identification</li>
                <li><strong>Complete Facilities:</strong> EMC testing and thermal cycling for comprehensive automotive electronics insights</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S4/Picture5.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Vehicle Validation</h2>
              <p>
                Vehicle Validation brings our expertise to authentic environments with comprehensive on-road and track testing:
              </p>
              <ul>
                <li><strong>Advanced Instrumentation:</strong> GPS, accelerometers, and data loggers capturing handling, braking, and ADAS metrics</li>
                <li><strong>Comprehensive Testing:</strong> Diverse terrains and weather conditions following FMVSS and Euro NCAP guidelines</li>
                <li><strong>Scenario-Based Validation:</strong> Edge case testing identifying real-world discrepancies not caught in labs</li>
                <li><strong>Specialized Applications:</strong> Vibration-induced failures, thermal impacts, and environmental stress analysis</li>
                <li><strong>Electric Vehicle Optimization:</strong> Range and regenerative braking optimization achieving 30% efficiency gains</li>
                <li><strong>AI-Enhanced Analysis:</strong> Automated data processing with AI highlighting anomalies and optimization opportunities</li>
                <li><strong>Global Test Fleets:</strong> Cultural and regulatory relevance ensuring market-ready vehicle deployment</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-text">
              <h2>EOL Validation</h2>
              <p>
                End-of-Line (EOL) Validation serves as our final quality gate with automated checks ensuring specification compliance:
              </p>
              <ul>
                <li><strong>Automated Quality Control:</strong> PLC-controlled stations with vision systems and electrical testers for high-volume lines</li>
                <li><strong>Manufacturing Integration:</strong> Real-time traceability with manufacturing execution systems compliant with IATF 16949</li>
                <li><strong>Comprehensive Testing:</strong> Parametric testing and diagnostic scripting catching defects like misalignments and firmware glitches</li>
                <li><strong>Proven Results:</strong> 25% yield improvement for consumer electronics clients minimizing product returns</li>
                <li><strong>Predictive Analytics:</strong> Process drift forecasting enhancing overall production efficiency</li>
                <li><strong>Global Scalability:</strong> Scalable solutions for global manufacturing plants</li>
                <li><strong>Brand Protection:</strong> Rigorous automated assurance safeguarding brand integrity and customer satisfaction</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-text">
              <h2>Environmental Validation</h2>
              <p>
                Environmental Validation rigorously evaluates system endurance against harsh conditions ensuring long-term reliability:
              </p>
              <ul>
                <li><strong>Comprehensive Testing Chambers:</strong> Temperature, humidity, vibration, and corrosion tests per MIL-STD and IEC standards</li>
                <li><strong>Accelerated Aging:</strong> HALT/HASS methods predicting lifespans with FMEA analysis for design improvements</li>
                <li><strong>Aerospace Applications:</strong> Avionics validation against extreme altitudes reducing field failures by 45%</li>
                <li><strong>Advanced Facilities:</strong> EMC testing and thermal imaging for comprehensive system assessments</li>
                <li><strong>Sustainability Optimization:</strong> Physical and simulation data combination for EV battery optimization</li>
                <li><strong>Real-World Adversity:</strong> Ensuring products thrive in challenging environmental conditions</li>
                <li><strong>Long-Term Reliability:</strong> Delivering compliance and sustained performance across diverse applications</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <button className="nav-arrow-btn left" onClick={handlePrevious}>
          <div className="arrow">❮</div>
        </button>

        <button className="nav-arrow-btn right" onClick={handleNext}>
          <div className="arrow">❯</div>
        </button>
      </div>
    </>
  );
};

export default S4;
