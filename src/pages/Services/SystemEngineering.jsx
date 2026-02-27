import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const SystemEngineering = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);
  const imagePath = "/Hero_S/Sysengg.png";



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
        <SEO
          title="System Engineering Services"
          description="TBS system engineering team delivers exceptional system engineering with accurate, fully traceable requirements for automotive ECUs."
          keywords="System Engineering, Requirements Elicitation, Architecture Development, FMEA, Functional Safety, Cybersecurity, ISO 26262, ISO 21434, TBS"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src={imagePath} alt="System engineering development" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">System Engineering Services</h1>
        </div>
        <div className="product-page">

          <section >
            <p className="fs-1-2rem text-justify">
              Our <b>system engineering team</b> delivers exceptional system engineering with accurate, fully traceable requirements for functional, non-functional (electrical, mechanical, and environmental), communication, diagnostics, and EOL for cutting-edge automotive ECUs. We deliver the system engineering in compliance with Functional Safety (ISO 26262), Cybersecurity (ISO 21434), and Regulatory Standards (UN R100).
            </p>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture0.jpeg" alt="SYS.2 Requirements Elicitation" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS.2 Requirements Elicitation</h2>
              <p>
                Our comprehensive SYS.2 requirements elicitation process ensures complete system specification through systematic analysis and documentation:
              </p>
              <ul>
                <li><strong>Functional Requirements Elicitation:</strong> Measurements, Control functions, Protection, Vehicle functions and system behaviors</li>
                <li><strong>Non-Functional Requirements:</strong> Performance, Efficiency , Drive cycle, lifetime and operational constraints</li>
                <li><strong>Compliance Standards:</strong> Functional safety (ISO 26262), cybersecurity (ISO 21434, R155, R156), and Regulatory standards(R100)</li>
                <li><strong>Environmental Requirements:</strong> Temperature (ISO 16750), Chemical (ISO 16750), Mechanical (ISO 16750), HV safety(ISO 16750, ISO 16469) and Electrical (ISO ISO 21498, LV123, LV124)</li>
                <li><strong>Communication Requirements:</strong> CAN & CANFD(ISO 11898), UDS(ISO 14229), LIN(ISO 17987), Ethernet(ISO 13400), V2G(ISO 15118), and Low level drivers</li>
                <li><strong>End-of-Line Requirements:</strong> Manufacturing test procedures and process validation requirements</li>
                <li><strong>Test Requirements:</strong> Design validation, Process validation and System validation startergies for the comprehesive system testing</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture1.jpeg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SYS.3 Architecture Development</h2>
              <p>
                Our Comprehensive SYS.3 system architecture analysis, delivering scalable, modular designs tailored for automotive applications. Adhering strictly to AUTOSAR standards, we optimize for peak performance and long-term maintainability:
              </p>
              <ul>
                <li><strong>Technical Design Evaluation:</strong> Comprehensive analysis across product lifecycle from concept to deployment and maintenance</li>
                <li><strong>Performance Optimization:</strong> Peak performance, seamless interoperability, and hardware-software integration</li>
                <li><strong>Project Management Support:</strong> Precise estimates and special hardware characteristic identification</li>
                <li><strong>Architectural Documentation:</strong> Robust rationales for every architectural decision</li>
                <li><strong>Risk Mitigation:</strong> Minimized risks and accelerated time-to-market</li>
                <li><strong>Industry Compliance:</strong> Guaranteed compliance with AUTOSAR and industry benchmarks</li>
                <li><strong>Future-Proof Systems:</strong> Resilient, scalable architectures that drive automotive innovation</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture2.jpeg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>FMEA Development</h2>
              <p>
                Our FMEA expertise empowers automotive innovation through rigorous Design FMEA (DFMEA) and Process FMEA (PFMEA) methodologies. We deliver comprehensive risk mitigation strategies:
              </p>
              <ul>
                <li><strong>Project Boundary Identification:</strong> Targeted questions on customer needs, design control, and regulatory compliance</li>
                <li><strong>Design FMEA (DFMEA):</strong> Fault tree analysis (FTA), simulations, and root cause analysis for design failure prevention</li>
                <li><strong>Process FMEA (PFMEA):</strong> Manufacturing, assembly, and logistics variance analysis for defect prevention</li>
                <li><strong>Cross-Functional Teams:</strong> Integration of prior experiences, business case preparations, and expert insights</li>
                <li><strong>Risk Mitigation:</strong> Minimized warranty claims and accelerated market entry</li>
                <li><strong>Cyber-Physical Integrity:</strong> Comprehensive protection for connected automotive systems</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture3.jpeg" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Communication Requirements</h2>
              <p>
                Our communication expertise delivers meticulously crafted requirements for vehicle networks, spanning CAN, LIN, Ethernet, and wireless protocols:
              </p>
              <ul>
                <li><strong>Physical Layer Specifications:</strong> Robust physical layers with comprehensive test requirements for reliable network performance</li>
                <li><strong>Communication Standards:</strong> Message format specifications, signal properties, network management, and sleep/wake-up mechanisms</li>
                <li><strong>Error Handling Mechanisms:</strong> Clearly defined protocols supporting low-latency data exchange, seamless diagnostics, and fail-safe designs</li>
                <li><strong>ISO 15118 Protocol Expertise:</strong> Comprehensive implementation capabilities covering parts 1, 2, 3, 8, and 20 to cover V2G Charging</li>
                <li><strong>Communication Tools Proficiency:</strong> Extensive experience with simulation tools for rest bus operations and monitoring bus traffic</li>
                <li><strong>Design Verification Standards:</strong> Expert implementation of ISO 11898, ISO 14229, ISO 15765, and ASM 1.1 compliance</li>
                <li><strong>Network Optimization:</strong> Advanced topology design and interoperability assurance for automotive communication systems</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture4.jpeg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Functional Safety</h2>
              <p>
                Our functional safety expertise ensures comprehensive ISO 26262 compliance through systematic risk analysis and robust safety engineering:
              </p>
              <ul>
                <li><strong>Technical Safety Requirements (TSR) Development:</strong> Expert support in defining TSR from safety goals with comprehensive fault tree analysis backing</li>
                <li><strong>ASIL-Tailored Safety Requirements:</strong> Customized safety requirements specifically designed for each ASIL level with robust mitigation strategies</li>
                <li><strong>Hazard Analysis & Risk Assessment:</strong> In-depth analysis to identify and assess potential threats throughout the system lifecycle</li>
                <li><strong>Safety Standards Compliance:</strong> Rigorous design validation ensuring adherence to strict safety standards through systematic failure identification</li>
                <li><strong>Diagnostic Coverage Analysis:</strong> Comprehensive measurement of diagnostic effectiveness and coverage capabilities</li>
                <li><strong>Safety Metrics Calculation:</strong> Expert computation of critical metrics including SPFM, LFM, and PMHF for quantitative safety assessment</li>
                <li><strong>FMEDA Development:</strong> Advanced failure modes, effects, and diagnostic analysis to predict failure rates and assess diagnostic effectiveness</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture5.jpeg" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Cybersecurity</h2>
              <p>
                Our Cybersecurity team strengthens automotive systems against evolving threats, ensuring compliance with ISO 21434, UN R155/R156, and ENISA guidelines. We integrate HARA inputs and customer needs into a structured process:
              </p>
              <ul>
                <li><strong>Threat Assessment and Management:</strong> TARA analysis for risk reports and plans</li>
                <li><strong>Security Requirements Engineering:</strong> STRIDE-based ITEMS, C2A specs via JIRA, Polarion, GitHub</li>
                <li><strong>Verification and Validation:</strong> CAL 2 fuzz testing, code analysis tools</li>
                <li><strong>Cybersecurity Concept & Implementation:</strong> Development of robust security concepts and their practical implementation through M0 to M24</li>
                <li><strong>End-to-End Validation:</strong> Complete validation of secure firmware updates (M16), hardware root of trust, bootloader integrity, HSM/VKMS protections against replay/unauthorized attacks (M10), cryptographic safeguards (M11), and denial-of-service mitigations (M11)</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SD/Picture6.jpeg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Diagnostics & EOL Requirements Development</h2>
              <p>
                Our Diagnostics team specializes in deriving SYS.2 diagnostics requirements in full compliance with ISO 14229 and ISO 15765 standards. We deliver comprehensive solutions for vehicle diagnostics and manufacturing:
              </p>
              <ul>
                <li><strong>Diagnostic Definition:</strong> Expert definition of diagnostic services, fault codes, Data Identifiers (DIDs), and routine controls</li>
                <li><strong>Manufacturing Alignment:</strong> Development of EOL requirements that align with manufacturing team processes and guidelines for smooth delivery</li>
                <li><strong>Market Readiness:</strong> Proactive, production-ready diagnostics designed to accelerate market readiness and safeguard vehicle integrity</li>
                <li><strong>Test Automation:</strong> Readily available test procedures and automation scripts compliant with GGDS for service, communication, and software download</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="services" currentId="SystemEngineering" />
      </div>
    </>
  );
};

export default SystemEngineering;
