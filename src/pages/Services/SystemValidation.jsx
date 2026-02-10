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
          <section style={{ marginTop: "0", paddingTop: "0.5rem" }}>
            <p style={{ fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0 0 0" }}>
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
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture4.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
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
              <img src="/S_SV/Picture5.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
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
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture6.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
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
            <div className="section-image-wrapper">
             <img src="/S_SV/Picture7.png" alt="Custom UI" className="section-image" style={{objectFit: "cover", height: "auto", width: "100%"}}/>
            </div>
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
