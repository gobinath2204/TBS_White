import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/Hero_S/sysval.jpg";

  const handlePrevious = () => {
    navigate("/pages/Services/HardwareEngineering");
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    navigate("/pages/Services/SafetyandRegulatory");
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
          <section >
            <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
              Our <b>System Validation team</b> excels in system validation through comperhensive system understanding and  HIL design, development and comissionsing to achieve the end to end component validation to cover functional, fault inserstion, communicaiton, DVP validation and end of line validation.
            </p>
          </section>

          {/* Content Sections */}
          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture0.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>SYS.4 HIL Design Test & Automation</h2>
              <p>
                Our SYS.4 HIL services deliver high-precision validation for automotive systems using advanced simulation and automation. We accelerate development, enhance reliability, and ensure safety compliance.
              </p>
              <ul>
                <li><strong>Advanced HIL Platforms:</strong> dSPACE & NI systems for safe, repeatable real-world scenario validation.</li>
                <li><strong>Early Detection:</strong> Validates ECU behavior and control algorithms early, reducing prototyping costs.</li>
                <li><strong>Automated Pipelines:</strong> Python/MATLAB-driven regression testing and fault injection for consistent coverage.</li>
                <li><strong>ASPICE Level 4 Compliance:</strong> Ensures full traceability and structured test planning for high process maturity.</li>
                <li><strong>Multi-Domain Coverage:</strong> Validates powertrain, ADAS, EV, and AUTOSAR systems comprehensively.</li>
                <li><strong>Robustness Validation:</strong> Automated fault injection stress-tests ECUs under failure scenarios.</li>
                <li><strong>Network Simulation:</strong> Simulates CAN, LIN, Ethernet, and FlexRay for timing and load validation.</li>
                <li><strong>Proven Results:</strong> Reduces validation errors significantly through streamlined, automated workflows.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture1.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>SYS5. DVP, Test and Design</h2>
              <p>
                Our SYS5 DVP services deliver high-maturity validation aligned with ASPICE Level 5. Integrating predictive analytics and simulation, we accelerate development, enhance reliability, and ensure efficiency for automotive systems.
              </p>
              <ul>
                <li><strong>ASPICE Level 5 Excellence:</strong> Predictive modeling and mature controls for continuous improvement.</li>
                <li><strong>Comprehensive DVP:</strong> Detailed validation strategies with quantitative risk assessment across all domains.</li>
                <li><strong>Requirement Verification:</strong> Continuous mapping of requirements to tests for full lifecycle traceability.</li>
                <li><strong>Tools Integration:</strong> Seamless Simulink and Vector toolchain integration for design and verification.</li>
                <li><strong>Predictive Analysis:</strong> Uses historical data and analytics to anticipate bottlenecks and failures.</li>
                <li><strong>Efficiency Gains:</strong> Optimized workflows improve validation efficiency by up to 25% for safety-critical systems.</li>
                <li><strong>Holistic Validation:</strong> Cross-disciplinary collaboration ensuring a cohesive validation ecosystem.</li>
                <li><strong>Automated Compliance:</strong> Real-time tracking of regulatory and safety standards readiness.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture2.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>SYS.5 HIL Design Test & Automation</h2>
              <p>
                Our SYS.5 HIL services push validation limits for safety-critical systems with ASPICE Level 5 maturity. We deliver ultra-precise simulation, intelligent automation, and scalable environments for exceptional reliability and compliance.
              </p>
              <ul>
                <li><strong>High-Performance HIL:</strong> FPGA-based simulators for ultra-precise timing and complex environment replication.</li>
                <li><strong>System-Level Testing:</strong> Exhaustive validation of ECUs, interfaces, and network protocols.</li>
                <li><strong>Intelligent Automation:</strong> C++/LabVIEW frameworks orchestrating thousands of adaptive test cases.</li>
                <li><strong>Security & Safety:</strong> Cybersecurity, ASIL-D functional safety, and robustness testing under stress.</li>
                <li><strong>Regulatory Reporting:</strong> Automated documentation pipelines for streamlined audit preparation.</li>
                <li><strong>Cloud Scalability:</strong> Distributed HIL environments enabling global collaboration and parallel execution.</li>
                <li><strong>Proven Reliability:</strong> Accelerates validation cycles and strengthens safety-critical product reliability.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture3.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>Dyno Validation</h2>
              <p>
                Our System Integration and Dyno Validation services ensure complete subsystem harmony and high‑accuracy performance verification across automotive, hybrid, and electrified platforms.
              </p>
              <ul>
                <li><strong>Advanced Dyno Testing:</strong> High-fidelity chassis and engine dynamometers for torque, efficiency, and emissions evaluation.</li>
                <li><strong>Interface Integration:</strong> Reliable communication validation using CAN, CAN-FD, LIN, and Ethernet tools.</li>
                <li><strong>Comprehensive Validation:</strong> Transient response, endurance cycles, and durability analysis for enhanced reliability.</li>
                <li><strong>Hybrid System Expertise:</strong> Validation of BMS, energy flow, and hybrid control strategies.</li>
                <li><strong>Automated Testing:</strong> Scripts for repetitive and long-duration sequences to increase throughput.</li>
                <li><strong>Performance Optimization:</strong> Fine-tuning calibrations using simulation predictions and dyno results.</li>
                <li><strong>Failure Mode Investigation:</strong> Root-cause analysis via stress conditions and controlled faults.</li>
                <li><strong>Data Visualization:</strong> Advanced dashboards for test results and key performance indicators.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture4.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>LabCar Validation</h2>
              <p>
                Our LabCar Validation environment enables fast, reliable, and cost‑effective validation of complex automotive functions long before vehicle prototypes are available. By integrating complete electrical architectures, state-of-the-art calibration tools, and automated test frameworks, we empower engineering teams to detect issues early, accelerate development, and ensure ASPICE‑compliant quality.
              </p>
              <ul>
                <li><strong>Modular Bench Systems:</strong> Replicates full vehicle electrical topologies with production-grade ECUs.</li>
                <li><strong>Early-Stage Debugging:</strong> High-fidelity simulated environments for rapid software and hardware evaluation.</li>
                <li><strong>Calibration Tools:</strong> Advanced calibration and monitoring using industry-standard tools like INCA.</li>
                <li><strong>Automated Test Suite:</strong> Extensive functional, endurance, and fault-injection test scenarios.</li>
                <li><strong>AUTOSAR-Ready:</strong> Full support for AUTOSAR Classic and Adaptive prototyping.</li>
                <li><strong>Engineering Impact:</strong> Proven efficiency with up to 50% faster validation cycles.</li>
                <li><strong>End-to-End Testing:</strong> Integrated environmental, EMC, and thermal testing capabilities.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture5.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>Vehicle Validation</h2>
              <p>
                Our Vehicle Validation services ensure that every system performs flawlessly under real‑world driving conditions. Leveraging advanced instrumentation, global test fleets, and AI‑driven analytics, we validate vehicle behavior across environments, ensuring safety, compliance, and market readiness.
              </p>
              <ul>
                <li><strong>Advanced Instrumentation:</strong> High-precision data logging for handling, braking, and ADAS metrics.</li>
                <li><strong>Comprehensive Testing:</strong> Rigorous evaluation across terrains and weather per FMVSS/Euro NCAP.</li>
                <li><strong>Real-World Validation:</strong> Structured scenario testing including edge-case and boundary assessments.</li>
                <li><strong>Stress & Durability:</strong> Analysis of vibration, thermal impacts, and environmental stress.</li>
                <li><strong>EV Optimization:</strong> Workflows to optimize range, charging, and regenerative braking.</li>
                <li><strong>AI-Enhanced Insights:</strong> AI analytics for performance anomalies and safety risks.</li>
                <li><strong>Global Test Fleets:</strong> Validation under diverse cultural and regulatory contexts globally.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture6.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>EOL Validation</h2>
              <p>
                Our End‑of‑Line Validation systems ensure every product leaving the manufacturing line is fully compliant, defect‑free, and production‑ready. By combining automated inspection technologies, real‑time traceability, and advanced analytics, we help manufacturers deliver consistent quality at scale while protecting brand integrity.
              </p>
              <ul>
                <li><strong>Automated Quality Control:</strong> PLC-controlled stations with vision systems and electrical testers.</li>
                <li><strong>Manufacturing Integration:</strong> Seamless MES integration for full traceability and IATF 16949 compliance.</li>
                <li><strong>Functional Testing:</strong> Detailed parametric testing and diagnostic scripting for defect detection.</li>
                <li><strong>Yield Enhancements:</strong> Strategies achieving up to 25% yield improvement in production.</li>
                <li><strong>Predictive Analytics:</strong> AI monitoring to identify process drift and ensure stability.</li>
                <li><strong>Global Scalability:</strong> Scalable architectures for consistent testing across multiple plants.</li>
                <li><strong>Brand Assurance:</strong> Rigorous testing to ensure product quality and reputation.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
             <img src="/S_SV/Picture7.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>Environmental Validation</h2>
              <p>
                Our Environmental Validation services ensure that products deliver consistent performance under the harshest operating conditions. By leveraging advanced test chambers, accelerated aging methodologies, and aerospace‑grade validation expertise, we help engineering teams build solutions that meet global standards for durability, safety, and long‑term reliability.
              </p>
              <ul>
                <li><strong>Testing Chambers:</strong> Equipped for temperature, humidity, vibration, and corrosion testing.</li>
                <li><strong>Accelerated Aging:</strong> HALT/HASS methodologies for lifespan prediction and design improvement.</li>
                <li><strong>Aerospace Expertise:</strong> Validation for extreme altitudes and pressure variations.</li>
                <li><strong>Advanced Facilities:</strong> EMC test suites, thermal imaging, and high-precision monitoring.</li>
                <li><strong>EV Optimization:</strong> Data-driven support for battery efficiency and thermal stability.</li>
                <li><strong>Real-World Performance:</strong> Reliability testing against extreme environmental challenges.</li>
                <li><strong>Global Compliance:</strong> End-to-end validation aligned with international standards.</li>
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
