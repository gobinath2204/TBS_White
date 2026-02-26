import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const S4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
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
                <li><strong>Rig Architecture Design:</strong> Full SYS4/SYS5 HIL rigs replicating ECU networks, domain topologies and real-time plant interactions.</li>
                <li><strong>High-Fidelity I/O Expansion:</strong> Configurable analogue, digital, PWM, CAN, LIN, SPI, I2C, HV/LV channels supporting complex test behaviours.</li>
                <li><strong>Fault Injection Layer:</strong> OC, SCG, SCL, OORL and OORH simulation enabling robustness and failure-mode validation.</li>
                <li><strong>Real-Time Simulation Engine:</strong> HVAC, HVDC, LVDC and load models running on dSPACE/NI PXIe for deterministic execution.</li>
                <li><strong>Hardware Abstraction Interface:</strong> Sensor, actuator and controller interfacing enabling physical-to-model coherence.</li>
                <li><strong>Safety & Protection System:</strong> HV isolation, over-current protection and emergency-stop integration for safe bench operation.</li>
                <li><strong>Advanced Measurement Suite:</strong> CANoe, oscilloscopes, PXIe logging and RT trace tools for signal visibility and debug depth.</li>
                <li><strong>Industry-Standard Toolchain:</strong> dSPACE, NI TestStand, VT System, CADET, MATLAB/Simulink, XCP AutomationDesk capability.</li>
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
                <li><strong>Requirement Intake:</strong> SYS2/SYS3 requirements, HSIs, CAN/XCP databases and regulatory inputs forming the test foundation.</li>
                <li><strong>SYS.4 Feature Definition:</strong> Interface testing, interoperability checks, dynamic behavior assessment and timing compliance.</li>
                <li><strong>SYS.5 Feature Definition:</strong> System functionality, diagnostic coverage, safety behavior, operating modes and HV/LV operating ranges.</li>
                <li><strong>DVP & GAP Analysis:</strong> Classification of requirements with clear identification of missing, partial or ambiguous coverage.</li>
                <li><strong>Test Logic Development:</strong> Detailed flowcharts, block diagrams and sequence definitions mapping requirement → test action.</li>
                <li><strong>Procedure Authoring:</strong> SYS4/SYS5 stepwise procedures with pre‑conditions, timing windows, expected results and verdict logic.</li>
                <li><strong>Traceability Mapping:</strong> Full linkage from requirements → test case → log evidence → pass/fail verdict → PLM updates.</li>
                <li><strong>Deliverable Packaging:</strong> Upload‑ready documents for PLM with attribute population, linkage and review‑workflow readiness.</li>
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
                <li><strong>HIL Execution Capability:</strong> Powertrain, body, HVAC, ADAS, chassis and cross‑domain benches executed with full functional depth.​</li>
                <li><strong>24/7 Automation Pipeline:</strong> Night‑cycle regression and continuous validation driven by Python, CAPL, XML and TestStand.​</li>
                <li><strong>Dynamic Behavior Coverage:</strong> Real‑time behavior evaluation under simulated loads, disturbances and operating conditions.​</li>
                <li><strong>Advanced Log Ecosystem:</strong> RT, CAN, FTTI and waveform logs auto‑captured with structured templates for fast triage.​</li>
                <li><strong>Automated Reporting:</strong> HTML/PDF/Excel reports with verdict logic, KPI metrics, coverage analytics and failure clustering.​</li>
                <li><strong>Root Cause Acceleration:</strong> Automated failure reproduction using plant‑model manipulation and fault‑injection triggers.​</li>
                <li><strong>KPI‑Driven Monitoring:</strong> Stability trends, pass rates, defect hotspots and cycle‑time analytics feeding improvement loops.​</li>
                <li><strong>Pre‑Vehicle Maturity:</strong> Achieving functional maturity on HIL, minimizing field issues and reducing prototype dependency.​</li>
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
                <li><strong>Standards Alignment:</strong> Ready‑made profiles compliant with MIL‑STD‑810, IEC‑60068, ISO‑16750 and ISO‑20653 requirements.​</li>
                <li><strong>Thermal & Humidity Profiles:</strong> Temperature cycling, humidity ramps and thermal shock tests for environmental endurance.​</li>
                <li><strong>Vibration & Mechanical Stress:</strong> Random, sine, shock and mechanical excitation aligned with automotive and industrial norms.​</li>
                <li><strong>Corrosion & Ingress Testing:</strong> Salt‑spray, IP‑rated dust/water ingress and corrosion‑accelerated exposure profiles.​</li>
                <li><strong>Accelerated Aging (HALT/HASS):</strong> Early‑weakness identification supporting FMEA‑driven design improvements.​</li>
                <li><strong>EV‑Ready Environmental Packs:</strong> Battery, inverter, HVDC/LVDC environmental cycles for electric mobility systems.​</li>
                <li><strong>Real‑Time Instrumentation:</strong> CAN/RT/FTTI logging and oscilloscope monitoring integrated into chamber operations.​</li>
                <li><strong>Compliance Reporting:</strong> Full test matrices, acceptance criteria, compliance classifications and risk‑rating documents.​</li>
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
                <li><strong>Standards‑Compliant Procedures:</strong> ISO 16750‑2, LV123, LV124, LV148, ISO 7637, ISO 21498 and automotive transient standards support.​</li>
                <li><strong>Electrical Disturbance Validation:</strong> Surge, load dump, ESD, cranking, reverse polarity and voltage dip tests for robustness.​</li>
                <li><strong>HV/LV Safety Checks:</strong> Isolation, insulation resistance, leakage current and protection‑circuit verification for EV domains.​</li>
                <li><strong>Load & Power Simulation:</strong> Programmable SMPS load cycles, sinusoidal/RF disturbances and HV/LV power behavior analysis.​</li>
                <li><strong>Harness & PCB Validation:</strong> Wiring, PCB, sub‑assembly and ECU‑level electrical survivability under stress conditions.​</li>
                <li><strong>Automation Integration:</strong> Python, CAPL, TestStand and XML‑driven test automation for fully repeatable execution.​</li>
                <li><strong>Real‑Time Data Capture:</strong> Oscilloscope, PCI cards and CAN/LIN logs feeding waveform‑based diagnostic insights.​</li>
                <li><strong>Compliance Documentation:</strong> Detailed reporting with deviations, corrective actions, acceptance limits and standard mapping.​</li>
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
                <li><strong>Standards Framework:</strong> ISO 16750‑3, IEC 60068 and MIL‑STD‑810 mechanical test profiles for global compliance.​</li>
                <li><strong>Vibration Endurance:</strong> Random, sine and combined environment vibration for structure and connection robustness.​</li>
                <li><strong>Shock & Impact Loading:</strong> Drop, mechanical impact and shock pulses simulating real‑world sudden load events.​</li>
                <li><strong>Thermo‑Mechanical Cycles:</strong> Combined heat + mechanical stress for accelerated lifecycle behavior validation.​</li>
                <li><strong>Fixture Engineering:</strong> Custom fixtures ensuring precise strain, displacement and force measurements.​</li>
                <li><strong>Endurance Automation:</strong> Long‑cycle rigs with auto‑shutdown protection for safe extended operation.​</li>
                <li><strong>Instrumented Measurements:</strong> High‑accuracy accelerometers, strain gauges and displacement sensors for detailed analytics.​</li>
                <li><strong>Full Compliance Output:</strong> Procedures, calibration data, acceptance curves and structural reliability reports.​</li>
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
                <li><strong>CAN Physical Layer Verification:</strong> ISO 11898 validation ensuring timing margins, signal integrity and noise immunity.​</li>
                <li><strong>UDS Functional Validation:</strong> ISO 14229 service coverage, security access, diagnostic sessions and timing behavior checks.​</li>
                <li><strong>ISO 15765 TP Verification:</strong> Transport protocol validation for segmentation, message flow and error handling.​</li>
                <li><strong>Bootloader & Flashing Verification:</strong> Flash integrity, retry logic, rollback handling and download timing conformance.​</li>
                <li><strong>Automotive Ethernet Validation:</strong> IEEE 802.3bw (100BASE‑T1) communication verification and timing conformance.​</li>
                <li><strong>V2G / EVSE Interoperability:</strong> ISO 15118 and IEC 61851 tests for charging communication, authentication and power flow.​</li>
                <li><strong>CCP/XCP Validation:</strong> Timing, checksum, data integrity and acquisition‑rate conformance under dynamic loads.​</li>
                <li><strong>Mixed‑Mode Stress Testing:</strong> Communication verification under electrical disturbances, temperature and load variations.​</li>
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
                <li><strong>LabCar Validation:</strong> Early‑stage functional validation with high‑fidelity benches, rapid debugging and integration assurance.​</li>
                <li><strong>Vehicle Testing:</strong> Global terrain, climate and regulatory validation ensuring real‑world functional maturity.​</li>
                <li><strong>EMC/WMI/EMI Testing:</strong> CISPR 25, ISO 11452, ISO 7637, ISO 21498 compliance for radiated, conducted and immunity performance.​</li>
                <li><strong>Diagnostics & UDS Support:</strong> Part 1 / Part 2 diagnostic validation including backend and fault‑state verification.​</li>
                <li><strong>RTC & Endurance Cycles:</strong> Power‑cycle, wake/sleep, long‑duration and reliability validation with automated monitoring.​</li>
                <li><strong>Network Management Simulation:</strong> CAN/LIN/FlexRay/AUTOSAR NM behavior validation for complex networked systems.​</li>
                <li><strong>Flashing & Integration:</strong> Secure flashing, configuration, network activation and integration readiness support.​</li>
                <li><strong>DVP & Requirement Mapping:</strong> Full DVP planning, P‑diagram creation, test coverage analytics and compliance governance.​</li>
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
