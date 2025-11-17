import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/SafetyandRegulatory");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/SoftwareEngineering");
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
          <h1 className="hero-title">System Development Services</h1>
        </div>
        <div className="product-page">

          <section style={{ marginTop: "0", paddingTop: "0.5rem" }}>
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{ fontSize: "1.5rem", textAlign: "center", padding: "6rem 0 0 0" }}>
                TBS's <b>SYS.2 Requirement Elicitation</b> framework provides exceptional system engineering, generating accurate, fully traceable requirements that drive cutting-edge automotive advancements.
                Collaborating with stakeholders—including OEMs, suppliers, and end-users—we capture essential needs: functional specs, performance metrics (modes, measurements, ranges, derating, slew rates), efficiency goals, set points, protections, and safety protocols compliant with ISO 26262 and ASPICE.
                Using structured methodologies, we generate requirements from varied origins: generic features, HV safety norms (LV123, LV124, VDA 320), OEM standards regulations (GBT, FMVSS), and standards such as ISO 26262, 21434. Coverage spans diagnostics, calibration, communications (CAN, LIN, Wi-Fi/ISO 15118, Ethernet), and applications like power transfer, positioning, object detection, motor control, and boost/buck converters.
                With tools enabling bi-directional traceability— Cameo/Catia Magic, Polarion, DOORS, Enterprise Architect, etc., We deliver categorized, reusable requirements integrated with ASIL/SIL, vehicle builds, verification, and acceptance criteria. This strategy eliminates ambiguities, streamlines design-to-validation, ensures compliance, cuts risks, and boosts reliability.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse" style={{ backgroundColor: "#ebebeb" }}>
            <div className="section-image-wrapper" style={{ marginLeft: '0' }}>
              <img src="/S1/Picture1.png" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS.3 Architecture Development</h2>
              <p>
                At TBS, we excel in SYS.3 system architecture analysis, delivering scalable, modular designs tailored for automotive applications. Adhering strictly to AUTOSAR standards, we meticulously evaluate technical design aspects across the product lifecycle—from concept to deployment and maintenance. We optimize for peak performance, seamless interoperability, and long-term maintainability, ensuring hardware and software integrate flawlessly to support complicated functionalities.
                Our comprehensive services include deriving precise estimates for project management, identifying special hardware characteristics, and documenting robust rationales for every architectural decision. This approach minimizes risks, accelerates time-to-market, and guarantees compliance with industry benchmarks. Partner with TBS to architect resilient, future-proof systems that drive innovation and efficiency in the automotive sector.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S1/Picture2.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>FMEA Development</h2>
              <p>
                At TBS, our FMEA expertise empowers automotive innovation through rigorous Design FMEA (DFMEA) and Process FMEA (PFMEA) methodologies. We meticulously identify project boundaries using targeted questions on customer needs, design control, and regulatory compliance, ensuring focused analyses that exclude non-essential scopes. Our DFMEA uncovers potential design failures via Fault tree analysis (FTA), simulations, and root cause analysis etc., optimizing reliability and safety. Complementing this, PFMEA targets manufacturing, assembly, and logistics variances to pre-empt defects, enhancing controls pre-production.
                Leveraging cross-functional core and extended teams, we integrate prior experiences, business case preparations, and expert insights for comprehensive risk mitigation. Compliant with AUTOSAR and ISO standards, TBS delivers resilient systems that minimize warranty claims, accelerate market entry, and safeguard cyber-physical integrity. Partner with us for proactive, data-driven FMEA excellence.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S1/Picture3.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Communication Requirements</h2>
              <p>
                At TBS, Our Communication expertise delivers meticulously crafted requirements for vehicle networks, spanning CAN, LIN, Ethernet and wireless protocols. We specify robust physical layers—including baud rates, termination resistors, and bus-off conditions—alongside network management for ECU knockout, partial networking, and secure wake-up/sleep cycles. Our RX/TX message definitions encompass timing, signal allocation, cyclic/on-event properties, and error handling, ensuring low-latency data exchange, seamless diagnostics, and fail-safe designs informed by extensive testing experience.
                We are experts in the ISO 15118 protocol and have delivered successful projects recently. Pioneers in wireless EV charging, we leverage tools like CANoe, CANalyzer, CANape, and CANdela Studio to preempt network failures, optimize topologies, and guarantee interoperability. Partner with TBS for resilient, standards-driven communication architectures that drive automotive innovation.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S1/Picture4.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Functional Safety</h2>
              <p>
                Our functional safety services guarantee ISO 26262 compliance, empowering automotive innovation with unwavering reliability. We perform in-depth hazard analysis and risk assessments to pinpoint potential threats, then craft precise safety requirements tailored for ASIL levels, ensuring robust mitigation strategies.
                Partnering closely with clients, we map the entire safety lifecycle: from defining technical safety requirements (TSR) and developing the technical safety concept—including detailed system design—to outlining integration and testing steps, comprehensive validation processes, and thorough functional safety assessments.
                Through meticulous safety case development and end-to-end validation, we minimize risks across all development phases—from concept to deployment—elevating vehicle safety, performance, and trustworthiness in every project.

              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S1/Picture5.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Cybersecurity</h2>
              <p>
                TBS’s HV Cyber Security services strengthen automotive systems against evolving threats, ensuring compliance with ISO 21434, ISO 26262, UN R155/R156, and ENISA guidelines. We integrate HARA inputs and customer needs into a structured process: Threat Assessment and Management (TARA analysis for risk reports and plans), Security Requirements Engineering (STRIDE-based ITEMS, C2A specs via JIRA, Polarion, GitHub), Verification and Validation (CAL 2 fuzz testing, code analysis tools), and Cybersecurity Concept & Implementation.
                For EV components, our SYS.2 generic deck delivers robust SYS.2 requirements—secure firmware updates (M16), hardware root of trust, bootloader integrity, HSM/VKMS protections against replay/unauthorized attacks (M10), cryptographic safeguards (M11), and denial-of-service mitigations (M11). This yields traceability matrices, architecture documents, implementation plans, test procedures, and reports, enabling resilient, connected vehicles.

              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S1/Picture6.png" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Diagnostics & EOL Requirements Development</h2>
              <p>
                At TBS, our Diagnostics and End-of-Line (EOL) expertise crafts comprehensive requirements that strengthen system reliability and manufacturability in automotive production. Aligned with ISO 14229 (UDS), we expertly define diagnostic protocols, fault codes, and tailored EOL test procedures to streamline troubleshooting, calibration, and quality assurance on the assembly line.
                As experts in UDS ISO 14229, our engineers draw from decades of hands-on experience in vehicle manufacturing to author precise EOL requirements and diagnostic architectures. This enables rapid issue detection, efficient debugging, and seamless fixes, minimizing downtime and warranty risks while ensuring compliance and peak performance.
                Partner with TBS for proactive, production-ready diagnostics that accelerate market readiness and safeguard vehicle integrity.

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

export default S1;
