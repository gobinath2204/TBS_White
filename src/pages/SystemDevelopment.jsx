import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Prod-Serv-pages.css';

const TechSection = ({ title, description, items, image, reverse }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="section-header-full">
        <h2 className="header-title-text">{title}</h2>
        <div className="header-underline"></div>
      </div>

      <div className="section-grid-layout">
        <div className="section-image-container">
          <img src={image} alt={title} className="blueprint-image" />
        </div>

        <div className="section-data-container">
          <p className="section-intro-text">{description}</p>
          <div className="bento-dashboard-grid">
            {items.map((item, index) => {
              const [label, ...details] = item.split(':');
              return (
                <div key={index} className="tech-bento-card">
                  <div className="card-status-indicator"></div>
                  <div className="card-content">
                    <strong className="card-label">{label}:</strong>
                    <span className="card-detail">{details.join(':')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const S1 = () => {
  const navigate = useNavigate();

  const handlePrevious = () => { navigate("/pages/SafetyandRegulatory"); window.scrollTo(0, 0); };
  const handleNext = () => { navigate("/pages/SoftwareEngineering"); window.scrollTo(0, 0); };

  const sections = [
    {
      title: "SYS.2 REQUIREMENTS ELICITATION",
      description: "Our comprehensive SYS.2 requirements elicitation process ensures complete system specification through systematic analysis and documentation:",
      image: "/S1/Picture0.png",
      reverse: false,
      items: [
        "Functional Requirements Elicitation: Operating modes, measurement capabilities, control functions, and system behaviors",
        "Non-Functional Requirements: Performance metrics, efficiency standards, lifetime expectations, and operational constraints",
        "Compliance Standards: Functional safety (ISO 26262), cybersecurity (ISO 21434), and market regulatory standards",
        "Environmental Requirements: Temperature ranges, chemical resistance, mechanical durability, and electrical specifications",
        "Communication Requirements: CAN, UDS, LIN, Ethernet, ISO 15118, and other protocol specifications",
        "End-of-Line Requirements: Manufacturing test procedures and process validation requirements",
        "Test Requirements: Verification and validation strategies for comprehensive system testing"
      ]
    },
    {
      title: "SYS.3 ARCHITECTURE DEVELOPMENT",
      description: "We excel in SYS.3 system architecture analysis, delivering scalable, modular designs tailored for automotive applications adhering to AUTOSAR standards:",
      image: "/S1/Picture1.png",
      reverse: true,
      items: [
        "Technical Design Evaluation: Comprehensive analysis across product lifecycle from concept to deployment",
        "Performance Optimization: Peak performance, seamless interoperability, and hardware-software integration",
        "Project Management Support: Precise estimates and special hardware characteristic identification",
        "Architectural Documentation: Robust rationales for every architectural decision",
        "Risk Mitigation: Minimized risks and accelerated time-to-market",
        "Industry Compliance: Guaranteed compliance with AUTOSAR and industry benchmarks",
        "Future-Proof Systems: Resilient, scalable architectures that drive automotive innovation"
      ]
    },
    {
      title: "FMEA DEVELOPMENT",
      description: "Our FMEA expertise empowers automotive innovation through rigorous Design FMEA (DFMEA) and Process FMEA (PFMEA) methodologies:",
      image: "/S1/Picture2.png",
      reverse: false,
      items: [
        "Project Boundary Identification: Targeted questions on customer needs, design control, and regulatory compliance",
        "Design FMEA (DFMEA): Fault tree analysis (FTA), simulations, and root cause analysis for failure prevention",
        "Process FMEA (PFMEA): Manufacturing, assembly, and logistics variance analysis for defect prevention",
        "Cross-Functional Teams: Integration of prior experiences, business case preparations, and expert insights",
        "Standards Compliance: AUTOSAR and ISO standards adherence for industry benchmarks",
        "Risk Mitigation: Minimized warranty claims and accelerated market entry",
        "Cyber-Physical Integrity: Comprehensive protection for connected automotive systems"
      ]
    },
    {
      title: "COMMUNICATION REQUIREMENTS",
      description: "Our communication expertise delivers meticulously crafted requirements for vehicle networks spanning CAN, LIN, Ethernet, and wireless protocols:",
      image: "/S1/Picture3.png",
      reverse: true,
      items: [
        "Physical Layer Specifications: Robust physical layers with comprehensive test requirements",
        "Communication Standards: Message format specifications, signal properties, and network management",
        "Error Handling Mechanisms: Protocols supporting low-latency data exchange and fail-safe designs",
        "ISO 15118 Protocol Expertise: Comprehensive implementation capabilities covering all parts",
        "Communication Tools Proficiency: Extensive experience with simulation tools for bus traffic monitoring",
        "Design Verification Standards: Expert implementation of ISO 11898, ISO 14229, and ISO 15765",
        "Network Optimization: Advanced topology design and interoperability assurance"
      ]
    },
    {
      title: "FUNCTIONAL SAFETY",
      description: "Our functional safety expertise ensures comprehensive ISO 26262 compliance through systematic risk analysis and safety engineering:",
      image: "/S1/Picture4.png",
      reverse: false,
      items: [
        "Technical Safety Requirements (TSR): Expert support in defining TSR from safety goals with FTA backing",
        "ASIL-Tailored Safety Requirements: Customized safety requirements specifically designed for each ASIL level",
        "Hazard Analysis & Risk Assessment: In-depth analysis to identify potential threats throughout the lifecycle",
        "Safety Standards Compliance: Rigorous design validation ensuring adherence to strict safety standards",
        "Diagnostic Coverage Analysis: Comprehensive measurement of diagnostic effectiveness",
        "Safety Metrics Calculation: Expert computation of critical metrics including SPFM, LFM, and PMHF",
        "FMEDA Development: Advanced failure modes, effects, and diagnostic analysis"
      ]
    },
    {
      title: "CYBERSECURITY",
      description: "Our Cybersecurity team strengthens automotive systems against evolving threats, ensuring compliance with ISO 21434 and UN R155/R156:",
      image: "/S1/Picture5.png",
      reverse: true,
      items: [
        "Threat Assessment and Management: TARA analysis for risk reports and plans",
        "Security Requirements Engineering: STRIDE-based ITEMS, C2A specs via JIRA and Polarion",
        "Verification and Validation: CAL 2 fuzz testing and code analysis tools",
        "Cybersecurity Concept & Implementation: Development of robust security concepts",
        "End-to-End Validation: Validation of secure firmware updates, HSM/VKMS, and bootloader integrity"
      ]
    },
    {
      title: "DIAGNOSTICS & EOL REQUIREMENTS",
      description: "Our Diagnostics team specializes in deriving SYS.2 diagnostics requirements in full compliance with ISO 14229 and ISO 15765:",
      image: "/S1/Picture6.png",
      reverse: false,
      items: [
        "Diagnostic Definition: Expert definition of services, fault codes, DIDs, and routine controls",
        "Manufacturing Alignment: Development of EOL requirements that align with manufacturing team processes",
        "Market Readiness: Proactive, production-ready diagnostics designed to accelerate market readiness",
        "Test Automation: Readily available test procedures and automation scripts compliant with GGDS"
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="hero-container">
        <img src="/sysenggdev.jpg" alt="System Development" className="hero-video" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">System Development Services</h1>

        </div>
      </div>

      <div className="product-page">
        <section className="main-intro-section">
          <p className="lead-paragraph">
            Our <b>System Engineering Team</b> delivers exceptional system engineering with accurate, fully traceable requirements for functional, non-functional (electrical, mechanical, and environmental), communication, diagnostics, and EOL for cutting-edge automotive ECUs.
          </p>
        </section>

        {sections.map((sec, i) => (
          <TechSection key={i} {...sec} />
        ))}
      </div>

      <button className="nav-arrow-btn left" onClick={handlePrevious}>❮</button>
      <button className="nav-arrow-btn right" onClick={handleNext}>❯</button>
    </div>
  );
};

export default S1;