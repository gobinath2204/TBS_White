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
            <p style={{ fontSize: "1.5rem", textAlign: "justify", padding: "6rem 0 0 0" }}>
              TBS excels in System Validation through comprehensive SYS.4 DVP, Test and Design frameworks, delivering robust validation solutions for automotive and embedded systems. Our services integrate Design Validation Planning with sophisticated testing methodologies, ensuring compliance with ISO 26262 and other critical safety standards. We provide end-to-end validation from HIL testing to vehicle validation, utilizing advanced automation and model-based development to optimize system performance and reliability.
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
                Our SYS.4 HIL Design Test & Automation services represent a cornerstone in validating complex hardware-software integrations for automotive applications. Hardware-in-the-Loop (HIL) testing allows us to simulate real-world scenarios in a controlled lab environment, using platforms like dSPACE or National Instruments to interface physical hardware with virtual models. This approach enables early detection of discrepancies in ECU behaviour, sensor fusion, and control algorithms, significantly cutting down on costly physical prototyping. <br />
                We automate the entire testing pipeline with scripts in languages like Python and MATLAB, executing regression tests, scenario-based validations, and fault injections automatically. This ensures comprehensive coverage of ASPICE Level 4 requirements, focusing on traceability and repeatability. Our automation frameworks integrate with CI/CD pipelines, facilitating agile development cycles where changes are validated swiftly. For instance, in ADAS development, our HIL setups have helped clients reduce validation errors by 35%, leading to faster iterations and enhanced safety features. By prioritizing modularity and customization, we tailor HIL environments to specific project needs, from powertrain controls to infotainment systems. Trust our expertise to automate and streamline your SYS.4 validations, delivering reliable systems that meet global standards and exceed performance expectations.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S4/Picture2.svg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS5. DVP, Test and Design</h2>
              <p>
                In the realm of high-maturity processes, our SYS5. DVP, Test and Design services elevate system validation to ASPICE Level 5 standards, incorporating predictive modelling and AI-enhanced design optimizations. We craft detailed Design Validation Plans (DVPs) that encompass quantitative metrics for risk assessment, ensuring systems in aerospace and automotive domains achieve unparalleled reliability. Our integrated approach combines virtual prototyping with empirical testing, using tools like Simulink for model refinement and Vector tools for requirement traceability.<br/>
                This service focuses on proactive defect prevention through advanced techniques such as Monte Carlo simulations and machine learning-driven test case generation. By analysing vast datasets from previous validations, we predict potential failure modes and refine designs, accordingly, minimizing rework. A notable application is in autonomous systems, where our methods have enabled clients to comply with stringent regulations while improving efficiency by 25%. We foster collaboration across engineering disciplines, ensuring holistic validation from concept to certification. With our SYS5 expertise, your projects benefit from reduced time-to-market, cost savings, and superior quality, positioning your innovations at the forefront of technological advancement in demanding industries.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S4/Picture3.svg" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS.5 HIL Design Test & Automation</h2>
              <p>
                Our SYS.5 HIL Design Test & Automation pushes the boundaries of validation for safety-critical systems, aligning with the highest ASPICE maturity levels. We deploy sophisticated Hardware-in-the-Loop (HIL) configurations that incorporate real-time emulations of complex environments, using FPGA-based simulators for ultra-precise timing and response. This allows for exhaustive testing of interconnected modules, from ECUs to network protocols, under simulated extreme conditions without real hardware risks.<br/>
                Automation is key: our custom frameworks in C++ and LabVIEW orchestrate thousands of test scenarios, including adaptive algorithms that evolve based on test outcomes for optimal coverage. This service excels in validating cybersecurity measures and functional safety per ASIL-D requirements, with integrated reporting for regulatory audits. Clients in the medical device sector have seen validation cycles shortened by 40% through our automated HIL pipelines, ensuring robust performance in life-critical applications. We emphasize scalability to cloud-based HIL for distributed teams, enhancing global collaboration. Choose our SYS.5 solutions for automation that not only validates but anticipates future challenges, delivering systems engineered for resilience and innovation.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-text" style={{width: "100%"}}>
              <h2>System Integration/Dyno Validation</h2>
              <p>
                System Integration and Dyno Validation form the backbone of our services, where we meticulously combine subsystems and validate them on dynamometers to mimic real operational stresses. Ideal for powertrain and vehicle dynamics, our process uses chassis and engine dynos equipped with high-fidelity load simulation to test torque, efficiency, and emissions under varied profiles. We start with interface mapping via CAN and Ethernet tools, ensuring seamless data flow and synchronization.<br/>
                Our validation includes transient testing and durability cycles, leveraging data analytics to pinpoint optimizations. This has proven vital for hybrid systems, where we've helped OEMs integrate battery management with combustion engines, reducing fuel consumption by 20%. Compliant with ISO 17025, our dyno facilities feature environmental controls for accurate replications of altitude or temperature effects. Automation scripts handle repetitive tests, freeing engineers for deeper analysis. By bridging simulation and physical testing, our services accelerate integration, minimize failures, and ensure compliance with global standards, empowering your projects with reliable, high-performance outcomes.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-text">
              <h2>LabCar Validation</h2>
              <p>
                LabCar Validation offers a flexible, bench-based alternative to full vehicle testing, enabling precise validation of electronic components in a simulated vehicle context. Our setups replicate entire vehicle electrical architectures, integrating ECUs, wiring harnesses, and actuators on modular benches for repeatable experiments. This service is crucial for early stage debugging of software updates and hardware iterations, using tools like INCA for calibration and monitoring.<br/>
                We conduct functional, endurance, and fault-injection tests, with automated sequences ensuring high throughput. For AUTOSAR-compliant systems, our LabCar environments support rapid prototyping, reducing dependency on scarce prototypes. Clients have benefited from 50% faster validation in infotainment projects, identifying integration issues pre-field. Our labs are equipped for EMC testing and thermal cycling, providing comprehensive insights. With a focus on cost-efficiency and accuracy, LabCar Validation streamlines your development, fostering innovation while maintaining stringent quality controls in automotive electronics.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S4/Picture5.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Vehicle Validation</h2>
              <p>
                Vehicle Validation brings our expertise to the forefront, conducting on-road and track tests to confirm system performance in authentic environments. We equip vehicles with advanced instrumentation like GPS, accelerometers, and data loggers to capture metrics on handling, braking, and ADAS efficacy across diverse terrains and weather. Our protocols follow FMVSS and Euro NCAP guidelines, incorporating scenario-based testing for edge cases.<br/>
                This hands-on validation identifies real-world discrepancies not caught in labs, such as vibration-induced failures or thermal impacts. For electric vehicles, we've optimized range and regenerative braking, leading to 30% efficiency gains for clients. Automation in data processing accelerates analysis, with AI highlighting anomalies. Our global test fleets ensure cultural and regulatory relevance, delivering validated vehicles that excel in safety and user experience, ready for market deployment.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-text">
              <h2>EOL Validation</h2>
              <p>
                End-of-Line (EOL) Validation is our final quality gate, automating checks on assembled products to ensure they meet specifications before shipping. Using PLC-controlled stations with vision systems and electrical testers, we verify functionality, calibration, and software integrity in high-volume lines. This service integrates with manufacturing execution systems for real-time traceability, compliant with IATF 16949.<br/>
                Our EOL setups include parametric testing and diagnostic scripting, catching defects like misalignments or firmware glitches. Clients in consumer electronics have improved yields by 25%, minimizing returns. We incorporate predictive analytics to forecast process drifts, enhancing overall production efficiency. Scalable for global plants, our EOL Validation safeguards brand integrity through rigorous, automated assurance.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-text">
              <h2>Environmental Validation</h2>
              <p>
                Environmental Validation rigorously evaluates system endurance against harsh conditions, using chambers for temperature, humidity, vibration, and corrosion tests per MIL-STD and IEC norms. We accelerate aging through HALT/HASS methods to predict lifespans, analysing failures via FMEA for design improvements.<br/>
                This service is essential for aerospace components, where we've validated avionics against extreme altitudes, reducing field failures by 45%. Our facilities include EMC testing and thermal imaging for comprehensive assessments. By combining physical and simulation data, we optimize for sustainability, like in EV batteries. Our Environmental Validation ensures products thrive in real-world adversities, delivering long-term reliability and compliance.
              </p>
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
