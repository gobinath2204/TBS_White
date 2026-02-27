import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const S4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);
  const imagePath = "/Hero_S/sysval.jpg";



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
          title="System Validation Services"
          description="TBS System Validation team excels in HIL design, development, and commissioning for comprehensive component validation."
          keywords="System Validation, HIL, dSPACE, NI, Automotive Testing, DVP, EOL Validation, TBS"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src={imagePath} alt="System validation services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">System Validation Services</h1>
        </div>

        {/* Main Product Page */}
        <div className="product-page">
          <section >
            <p className="fs-1-2rem text-justify">
              Our <b>System Validation team</b> excels in system validation through comperhensive system understanding and  HIL design, development and comissionsing to achieve the end to end component validation to cover functional, fault inserstion, communicaiton, DV PV validation and end of line validation.
            </p>
          </section>

          {/* Content Sections */}
          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture0.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>HIL Design & Development​</h2>
              <p>
                Our HIL Design & Development services provide high-precision rig architecture and real-time simulation environments. We integrate high-fidelity I/O, fault injection layers, and safety systems to create robust, industry-standard validation platforms.
              </p>
              <ul>
                <li><strong>Rig Architecture Design:</strong> Building comprehensive SYS4/SYS5 HIL rigs replicating ECU networks and real-time plant properties.</li>
                <li><strong>High-Fidelity I/O Expansion:</strong> Utilizing configurable channels linking analogue, digital, PWM, and communication interfaces.</li>
                <li><strong>Fault Injection Layer:</strong> Simulating OC, SCG, SCL, and out-of-range states for robust failure-mode validation.</li>
                <li><strong>Real-Time Simulation Engine:</strong> Executing HVAC, HVDC, and LVDC load models on deterministic dSPACE/NI PXIe architectures.</li>
                <li><strong>Hardware Abstraction:</strong> Interfacing sensors, actuators, and controllers ensuring tight physical-to-model coherence.</li>
                <li><strong>Safety & Protection:</strong> Integrating HV isolation, over-current safeguards, and e-stops for secure bench operation.</li>
                <li><strong>Advanced Measurement Suite:</strong> Leveraging CANoe, oscilloscopes, and PXIe tools for unmatched signal visibility and debug depth.</li>
                <li><strong>Industry-Standard Toolchain:</strong> Expert application of dSPACE, NI TestStand, VT System, MATLAB/Simulink, and AutomationDesk.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture1.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>System Validation: Test Procedure Development​</h2>
              <p>
                Our System Validation Test Procedure Development services provide a structured, end-to-end approach for creating robust validation strategies. From requirement intake and feature definition to detailed test logic and traceability mapping, we ensure comprehensive coverage and PLM-ready deliverables.
              </p>
              <ul>
                <li><strong>Requirement Intake:</strong> Establishing the test foundation using SYS2/SYS3 criteria, HSIs, CAN databases, and regulatory standards.</li>
                <li><strong>SYS.4 Feature Definition:</strong> Validating interface stability, interoperability limits, dynamic behavior, and strict timing compliance.</li>
                <li><strong>SYS.5 Feature Definition:</strong> Assessing system functionality, diagnostic coverage, operating modes, and HV/LV operating limits.</li>
                <li><strong>DVP & GAP Analysis:</strong> Reviewing requirements to explicitly identify missing, partial, or ambiguous testing coverage.</li>
                <li><strong>Test Logic Development:</strong> Drafting highly detailed flowcharts and sequence definitions seamlessly mapping requirements to actions.</li>
                <li><strong>Procedure Authoring:</strong> Creating SYS4/SYS5 stepwise test procedures detailing pre-conditions, timing windows, and definitive verdict logic.</li>
                <li><strong>Traceability Mapping:</strong> Sustaining full vertical linkage from base requirements through log evidence to conclusive PLM updates.</li>
                <li><strong>Deliverable Packaging:</strong> Structuring upload-ready PLM documentation with populated attributes and complete review-workflow readiness.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture2.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>System Validation Execution & Automation​</h2>
              <p>
                Our System Validation Execution & Automation services leverage advanced HIL capabilities and 24/7 automation pipelines to ensure rigorous functional depth. We focus on dynamic behavior coverage, automated reporting, and KPI-driven monitoring to achieve pre-vehicle maturity and accelerate root cause analysis.
              </p>
              <ul>
                <li><strong>HIL Execution Capability:</strong> Delivering full-depth functional validation for powertrain, body, HVAC, ADAS, and chassis domains.</li>
                <li><strong>24/7 Automation Pipeline:</strong> Driving continuous test cycles using advanced Python, CAPL, XML, and TestStand orchestration.</li>
                <li><strong>Dynamic Behavior Coverage:</strong> Evaluating complex real-time behavior under heavily simulated loads, disturbances, and varied conditions.</li>
                <li><strong>Advanced Log Ecosystem:</strong> Structuring automated capture of RT, CAN, FTTI, and waveform logs for rapid diagnostic triage.</li>
                <li><strong>Automated Reporting:</strong> Autogenerating comprehensive HTML/PDF/Excel reports featuring verdict logic, KPIs, and failure clustering.</li>
                <li><strong>Root Cause Acceleration:</strong> Empowering rapid automated failure reproduction via plant-model manipulation and fault-injection.</li>
                <li><strong>KPI‑Driven Monitoring:</strong> Analyzing stability trends, defect hotspots, and pass rates to feed continuous improvement loops.</li>
                <li><strong>Pre‑Vehicle Maturity:</strong> Guaranteeing pre-vehicle functional maturity to aggressively minimize subsequent field and prototype issues.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture3.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>Environmental Validation​</h2>
              <p>
                Our Environmental Validation services ensure product endurance and compliance through rigorous testing against global standards. We cover thermal, vibration, corrosion, and accelerated aging profiles, providing comprehensive analysis for automotive and EV systems.
              </p>
              <ul>
                <li><strong>Standards Alignment:</strong> Establishing ready-made baseline profiles reliably compliant with MIL-STD-810, IEC-60068, ISO-16750, and ISO-20653.</li>
                <li><strong>Thermal & Humidity Profiles:</strong> Validating environmental endurance via extensive temperature cycling, humidity ramps, and severe thermal shock testing.</li>
                <li><strong>Vibration & Mechanical Stress:</strong> Applying rigorous random, sine, and shock excitation firmly aligned with strict automotive norms.</li>
                <li><strong>Corrosion & Ingress Testing:</strong> Deploying salt-spray regimens and stringent IP-rated dust/water ingress screening procedures.</li>
                <li><strong>Accelerated Aging:</strong> Utilizing HALT/HASS methodologies for early-weakness identification supporting FMEA-driven product improvements.</li>
                <li><strong>EV-Ready Environmental Packs:</strong> Standardizing HVDC/LVDC environmental cycling uniquely tailored for complex electric mobility architectures.</li>
                <li><strong>Real-Time Instrumentation:</strong> Seamlessly integrating high-fidelity CAN/RT/FTTI logging and oscilloscope monitoring directly into chamber operations.</li>
                <li><strong>Compliance Reporting:</strong> Publishing definitive test matrices, acceptance baselines, compliance classifications, and detailed risk-rating documents.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture4.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>Electrical Testing</h2>
              <p>
                Our Electrical Testing services validate the robustness and safety of automotive electrical architectures. We conduct comprehensive electrical disturbance, HV/LV safety, and load simulation tests, ensuring full compliance with ISO and automotive standards.
              </p>
              <ul>
                <li><strong>Standards‑Compliant Procedures:</strong> Total support for ISO 16750-2, LV123, LV124, LV148, ISO 7637, and complex automotive transient sequences.</li>
                <li><strong>Electrical Disturbance:</strong> Comprehensively validating system robustness against surges, load dumps, ESD, continuous cranking, and reverse polarity.</li>
                <li><strong>HV/LV Safety Checks:</strong> Ensuring paramount safety via rigorous isolation, insulation resistance, and EV protection-circuit verification.</li>
                <li><strong>Load & Power Simulation:</strong> Simulating dynamic SMPS load cycles, RF transients, and nuanced HV/LV power behavior analytics.</li>
                <li><strong>Harness & PCB Validation:</strong> Guaranteeing electrical survivability of wiring layouts, PCB architectures, and complex ECU sub-assemblies.</li>
                <li><strong>Automation Integration:</strong> Implementing fully repeatable execution through advanced Python, CAPL, TestStand, and XML-driven frameworks.</li>
                <li><strong>Real-Time Data Capture:</strong> Deploying oscilloscopes and precision PCI cards feeding high-resolution waveform-based diagnostic triage.</li>
                <li><strong>Compliance Documentation:</strong> Formally delivering comprehensive reporting spanning recorded deviations, corrective mitigations, and explicit standard mapping.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture5.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>Mechanical Validation</h2>
              <p>
                Our Mechanical Validation services ensure structural integrity and durability through rigorous vibration, shock, and thermo-mechanical testing. We utilize custom fixtures and automated endurance rigs to deliver precise analytics and full compliance reporting.
              </p>
              <ul>
                <li><strong>Standards Framework:</strong> Establishing deep global compliance leveraging ISO 16750-3, IEC 60068, and exhaustive MIL-STD-810 mechanical parameters.</li>
                <li><strong>Vibration Endurance:</strong> Ensuring maximum connection robustness via aggressive random, sine, and complex multiaxial vibration scenarios.</li>
                <li><strong>Shock & Impact Loading:</strong> Simulating destructive real-world load events through highly calibrated drop, impact, and shock pulses.</li>
                <li><strong>Thermo-Mechanical Cycles:</strong> Validating dramatically accelerated lifecycle behavior combining extreme heat and sustained mechanical strain concurrently.</li>
                <li><strong>Fixture Engineering:</strong> Designing robust custom fixtures enabling uncompromising precision across strain, displacement, and force measurement thresholds.</li>
                <li><strong>Endurance Automation:</strong> Engineering autonomous long-cycle fatigue rigs equipped with highly redundant auto-shutdown safety parameters.</li>
                <li><strong>Instrumented Measurements:</strong> Utilizing elite-grade accelerometers, strain gauges, and displacement lasers informing uniquely detailed structural analytics.</li>
                <li><strong>Full Compliance Output:</strong> Generating certified procedures, calibration certs, dynamic acceptance curves, and definitive reliability dossiers.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture6.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>Design verification</h2>
              <p>
                Our Design Verification services focus on robust communication and protocol validation. We verify physical layers, transport protocols, and diagnostic services across CAN, Ethernet, and V2G interfaces to ensure interoperability and standards compliance.
              </p>
              <ul>
                <li><strong>CAN Physical Layer Verification:</strong> Enforcing absolute strict ISO 11898 signal integrity, rigid timing margins, and high noise immunity standards.</li>
                <li><strong>UDS Functional Validation:</strong> Validating ISO 14229 service coverage alongside secure access protocols and rigorous timing behavior checks.</li>
                <li><strong>ISO 15765 TP Verification:</strong> Guaranteeing flawless transport protocol operation spanning message segmentation, continuous flow, and error handling.</li>
                <li><strong>Bootloader Validation:</strong> Exhaustively testing critical flash integrity, robust retry contingencies, seamless rollback handling, and download conformance.</li>
                <li><strong>Automotive Ethernet:</strong> Verifying high-bandwidth IEEE 802.3bw (100BASE-T1) networking architectures ensuring deterministic timing behavior.</li>
                <li><strong>V2G / EVSE Interoperability:</strong> Demonstrating ISO 15118 and IEC 61851 charging protocol conformance handling authentication and power transfer.</li>
                <li><strong>CCP/XCP Validation:</strong> Continuously validating high-frequency timing, checksum integrity, and precise acquisition-rate conformance under immense dynamic loads.</li>
                <li><strong>Mixed-Mode Stress Testing:</strong> Concurrently stressing communication protocols against disruptive electrical disturbances, extreme thermal variation, and heavy bus loading.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SV/Picture7.jpeg" alt="Custom UI" className="section-image object-fit-cover h-auto w-100" />
            </div>
            <div className="section-text">
              <h2>Additional Validation Support​</h2>
              <p>
                Our Additional Validation Support covers a wide spectrum of testing needs, from LabCar and vehicle testing to EMC and network management. We provide comprehensive support for diagnostics, endurance cycles, and integration readiness to ensure holistic system maturity.
              </p>
              <ul>
                <li><strong>LabCar Validation:</strong> Enabling aggressive early-stage functional validation on high-fidelity benches facilitating unprecedented rapid debugging iteration workflows.</li>
                <li><strong>Vehicle Testing:</strong> Executing comprehensive multi-continent terrain, extreme climate, and exhaustive regulatory validation proving indisputable real-world maturity.</li>
                <li><strong>EMC/WMI/EMI Testing:</strong> Proving uncompromising CISPR 25, ISO 11452, and ISO 7637 compliance addressing radiated, conducted, and electromagnetic immunity performance.</li>
                <li><strong>Diagnostics & UDS Support:</strong> Guaranteeing comprehensive diagnostic coverage spanning in-depth backend interrogation and complex fault-state simulation verification frameworks.</li>
                <li><strong>RTC & Endurance Cycles:</strong> Automating punishing power-cycling, exhaustive wake/sleep transitions, and continuous long-duration reliability metrics gathering.</li>
                <li><strong>Network Management Simulation:</strong> Validating intricate CAN/LIN/FlexRay and AUTOSAR NM behavioral state-machines underpinning complex modern vehicular networking systems.</li>
                <li><strong>Flashing & Integration:</strong> Guaranteeing exceptionally secure flashing operations, robust network configuration parameterizing, and seamless system integration readiness.</li>
                <li><strong>DVP & Mapping:</strong> Delivering comprehensive end-to-end DVP documentation, robust P-diagram modeling, explicit coverage analytics, and definitive compliance governance.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <PageNavigation type="services" currentId="SystemValidation" />
      </div>
    </>
  );
};

export default S4;
