import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const S3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);
  const imagePath = "/Hero_S/hwengg.jpg";



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
          title="Hardware Engineering Services"
          description="TBS hardware engineering team delivers exceptional ASPICE-compliant hardware solutions covering the complete development lifecycle."
          keywords="Hardware Engineering, PCB Design, Schematic Design, FMEA, ISO 26262, ASPICE, TBS"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src={imagePath} alt="HW Engineering services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Hardware Engineering Services</h1>
        </div>
        {/* Creative Content Sections */}
        <div className="product-page">
          <section >
            <p className="fs-1-2rem text-justify">
              Our <b>hardware engineering team</b> delivers exceptional ASPICE-compliant hardware solutions covering the complete development lifecycle from requirements to verification. We excel in schematic and PCB design, safety analysis (FMEA/DFMEA), advanced simulations, and rigorous testing methodologies. From concept to production, we deliver robust, high-performance hardware that ensures functional safety, industry compliance, and accelerated time-to-market.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_HW/Picture0.png" alt="HWE1" className="section-image" />
            </div>
            <div className="section-text">
              <h2>HWE.1 Hardware Requirement Development</h2>
              <p>
                Our team delivers robust, fully traceable hardware requirements engineered to meet stringent automotive standards, ensuring seamless ASPICE alignment and ISO 26262 functional safety compliance.
              </p>
              <ul>
                <li><strong>Hardware Requirements Elicitation:</strong> Transforming system requirements into precise hardware specifications with clear functional, performance, and electrical expectations.</li>
                <li><strong>Hardware Safety Requirements (HSR):</strong> Deriving Hardware Safety Requirements from TSRs, aligned with ISO 26262 functional safety processes and safety goals.</li>
                <li><strong>Platform Hardware Requirements:</strong> Deriving platform hardware requirements, including hardware safety requirements for safety‑compliant microcontrollers and automotive‑grade ASICs</li>
                <li><strong>Functional and Non‑Functional Requirements</strong> Capturing functional behaviors and non‑functional attributes including performance, thermal limits, reliability, and diagnostics.</li>
                <li><strong>Electrical Test Requirements:</strong> Defining LV and HV electrical test requirements per LV124, LV148, LV123, and essential EV safety standards.</li>
                <li><strong>High Voltage (HV) and Low Voltage (LV) Requirements:</strong> Defining HV and LV electrical requirements covering behavior, protection, isolation, derating, and automotive standards.</li>
                <li><strong>Communication Requirements:</strong> Defining hardware communication needs for CAN, LIN, SPI, I2C, Ethernet, and RS232 with diagnostics.</li>
                <li><strong>Requirement Management in Polarion:</strong> Managing requirements in Polarion with bidirectional traceability to SYS.2 allocations and customer communication</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper h-auto">
              <img src="/S_HW/Picture1.jpeg" alt="Design" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Schematic Design</h2>
              <p>
                Our team excels in schematic design for advanced automotive electronic systems, delivering innovative solutions with uncompromising.
              </p>
              <ul>
                <li><strong>End-to-End Design Services:</strong> Comprehensive schematic design solutions for ECUs, sensor AFEs, control modules, and automotive electronic components</li>
                <li><strong>Architecture & Component Selection:</strong> Definition of optimal system architecture, rigorous component selection and derating, with comprehensive validation.</li>
                <li><strong>Industry-Leading Tools:</strong> Altium Designer, Autodesk Fusion, and Ki-Cad for precision and reliability</li>
                <li><strong>Global Standards Compliance:</strong> ISO 26262, AEC-Q100/Q200, CISPR 25, IEC 60617, and IATF 16949</li>
                <li><strong>Design Principles:</strong> Design for Manufacturability (DFM), Design for Testability (DFT), and Design for Safety (DFS)</li>
                <li><strong>Comprehensive Documentation:</strong> Thorough design documentation and reviews ensuring transparency, full traceability, and regulatory compliance.</li>
                <li><strong>EMI/EMC Guidelines:</strong> Application of industry best practices to ensure robust, reliable, EMI-compliant and market-ready electronic solutions.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper h-auto">
              <img src="/S_HW/Picture2.png" alt="Connectivity" className="section-image object-fit-none h-auto" />
            </div>
            <div className="section-text">
              <h2>PCB Design & Development</h2>
              <p>
                We provide complete PCB design and development services tailored for demanding automotive environments:
              </p>
              <ul>
                <li><strong>Advanced PCB Layout:</strong> Designing multilayer PCB layouts with controlled impedance, high‑speed routing, and optimized signal integrity.</li>
                <li><strong>Component Footprint & Library Creation:</strong> Creating accurate PCB footprints and validated library elements for reliable placement and manufacturability.</li>
                <li><strong>Layout Planning & Placement Strategy:</strong> Planning component placement considering signal flow, thermal zones, clearances, and manufacturability constraints.</li>
                <li><strong>Thermal & Power Management:</strong> Applying thermal analysis, copper balancing, and power‑distribution optimization for reliable PCB performance.</li>
                <li><strong>DFM & DFT Reviews:</strong> Conducting Design for Manufacturability and Design for Testability reviews to ensure efficient production.</li>
                <li><strong>Standards & Compliance:</strong> Ensuring PCB compliance with IPC standards, AEC‑Q specifications and automotive quality rules</li>
                <li><strong>Fabrication Files & Manufacturing Support:</strong> Preparing Gerbers, drill files, and fabrication documents while supporting manufacturers through production and assembly.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper h-auto">
              <img src="/S_HW/Picture3.jpeg" alt="Connectivity" className="section-image h-auto" />
            </div>
            <div className="section-text">
              <h2>Safety Analysis (FMEA / DFMEA / FMEDA / FTA)</h2>
              <p>
                We conduct structured safety analyses to identify failures, quantify risks, and ensure ISO 26262‑compliant hardware safety and reliability.
              </p>
              <ul>
                <li><strong>DFMEA Development:</strong> Performing Design FMEA to identify potential design failures early and support preventive safety‑driven improvements.</li>
                <li><strong>FMEDA Quantification:</strong> Calculating failure rates, diagnostic coverage, and safety metrics to support ASIL targets and hardware safety compliance.</li>
                <li><strong>System DFMEA Execution:</strong> Evaluating system‑level failure modes, interactions, and cascading effects to strengthen overall safety robustness.</li>
                <li><strong>Fault Tree Analysis (FTA):</strong> Conducting top‑down fault modeling to trace root causes and verify safety goal achievement.</li>
                <li><strong>Risk Assessment & Prioritization:</strong> Ranking critical failure modes using structured severity, occurrence, and detection‑based prioritization methods.</li>
                <li><strong>Standards‑Aligned Safety Compliance:</strong> Ensuring all analyses meet ISO 26262, IEC 61508, and relevant automotive safety integrity requirements.</li>
                <li><strong>Safety Documentation & Certification Support:</strong> Preparing complete safety reports, FMEDA datasets, DFMEA summaries, and documentation required for certification readiness.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper h-auto">
              <img src="/S_HW/Picture4.jpeg" alt="Software Updates" className="section-image h-auto" />
            </div>
            <div className="section-text">
              <h2>Design Calculations & Circuit Simulations</h2>
              <p>
                We perform advanced design calculations and simulation‑driven analysis to ensure precision, stability, and long‑term hardware reliability.
              </p>
              <ul>
                <li><strong>Electrical Design Calculations:</strong> Performing accurate electrical calculations using engineering principles, datasheet parameters, and design constraints to validate circuit behavior.</li>
                <li><strong>Worst‑Case & Margin Evaluation:</strong> Analyzing component tolerances, voltage and current margins, and temperature effects to ensure robust operation.</li>
                <li><strong>Power & Thermal Assessment:</strong> Evaluating power dissipation, thermal rise, derating, and thermal management requirements for long‑term reliability.</li>
                <li><strong>Signal Integrity & Timing Analysis:</strong> Assessing signal quality, timing characteristics, noise behavior, and interface stability across operating conditions.</li>
                <li><strong>Simulation Tools & Modeling:</strong> Simulating circuits using LTspice, PLECS, PSpice, ANSYS, and MATLAB/Simulink for accurate analog and power‑electronic modeling.</li>
                <li><strong>Transient & Fault Simulation:</strong> Simulating load dumps, inrush currents, short circuits, and switching transients to validate circuit robustness.</li>
                <li><strong>Optimization & Verification Reports:</strong> Delivering optimized design parameters, simulation outputs, and calculation summaries supporting safe and reliable hardware development.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper h-auto">
              <img src="/S_HW/Picture5.jpg" alt="HARA" className="section-image h-auto" />
            </div>
            <div className="section-text">
              <h2>HARA Development</h2>
              <p>
                We deliver ISO 26262‑compliant Hazard Analysis and Risk Assessment to identify, evaluate, and mitigate vehicle‑level safety hazards.
              </p>
              <ul>
                <li><strong>Concept Phase Hazard Identification:</strong> Identifying hazards from hardware or system malfunctions during intended vehicle operation.</li>
                <li><strong>Operational Situation & Misuse Analysis:</strong> Defining scenarios, environments, and foreseeable misuse to assess exposure realistically.</li>
                <li><strong>ASIL Determination:</strong> Assigning ASIL using severity, exposure, and controllability assessments.</li>
                <li><strong>Safety Goals Definition:</strong> Establishing safety goals addressing hazards and guiding Functional and Technical safety concepts.</li>
                <li><strong>Functional Safety Requirements:</strong> Deriving testable FSRs from safety goals for hazard prevention and control.</li>
                <li><strong>Diagnostics & Mitigation:</strong> Specifying detection, fault reaction, degradation modes, and driver warnings with traceability.</li>
                <li><strong>HARA Documentation:</strong> Providing HARA reports, ASIL justifications, and full traceability to system requirements.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper h-auto">
              <img src="/S_HW/Picture6.jpeg" alt="Software Updates" className="section-image h-auto" />
            </div>
            <div className="section-text">
              <h2>Hardware Verification</h2>
              <p>
                Our experts perform detailed hardware verification aligned with automotive standards and ASPICE HWE.4 process guidelines:
              </p>
              <ul>
                <li><strong>Test Procedure Development:</strong> Creating comprehensive, requirement‑based test procedures covering all hardware inspections, analyses, and verification activities.</li>
                <li><strong>Analytical Verification:</strong> Performing electrical, thermal, derating, and worst‑case analyses to validate hardware robustness and reliability.</li>
                <li><strong>Hardware Inspection Reviews:</strong> Reviewing schematics, datasheets, components, and architecture to confirm design correctness before testing.</li>
                <li><strong>Board Bring‑Up Testing:</strong> Executing initial bring‑up, power sequencing verification, and basic functional checks on prototype hardware.</li>
                <li><strong>Board‑Level Functional Testing:</strong> Validating hardware performance through electrical measurements, interface tests, and requirement‑driven functional evaluation.</li>
                <li><strong>Integration Testing:</strong> Verifying hardware behavior within integrated systems to ensure software compatibility and interface performance.</li>
                <li><strong>Environmental & Stress Testing:</strong> Testing hardware under temperature, load, and real‑world stress conditions to ensure durability and compliance.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="services" currentId="HardwareEngineering" />
      </div>
    </>
  );
};

export default S3;
