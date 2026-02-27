import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const S5 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);
  const imagePath = "/Hero_S/S&R.jpeg";



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
          title="Safety & Regulatory Services"
          description="TBS safety and regulatory team delivers cutting-edge compliance solutions for automotive systems, covering functional safety and cybersecurity."
          keywords="Safety & Regulatory, ISO 26262, ISO 21434, HV Safety, CAN, EMC Testing, TBS"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src={imagePath} alt="Safety & Regulatory Services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Safety & Regulatory Services</h1>
        </div>
        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p className="fs-1-2rem text-justify">
              Our <b>Safety and Regulatory Engineering team</b> supports automotive OEMs and Tier-1 suppliers in achieving full compliance with global safety and regulatory requirements. We provide end-to-end engineering solutions across functional safety, cybersecurity, high-voltage safety, and vehicle-level regulatory frameworks. With deep expertise in ISO 26262 (Functional Safety), ISO 21434 (Cybersecurity), UNECE R155 & R156, LV123, LV124, and high-voltage system safety standards, we ensure that complex automotive systems meet stringent safety, security, and performance requirements. Our capabilities extend to safety concept development, HARA, FMEA, FMEDA, FTA, DFA, verification & validation planning, cybersecurity risk assessment, compliance testing, safety audit, confirmation review and safety assessment.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture0.png" alt="FS" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Functional Safety</h2>
              <p>
                TBS provide engineering services for compliance to ISO 26262, functional Safety (FuSa / FuSi) standard including part: 2 – 9, 11 and 12.
              </p>
              <ul>
                <li><strong>Part 2 Management of Functional Safety:</strong> Safety planning, monitoring and tracking, DIA, managing supplier meetings, etc.​</li>
                <li><strong>Part 3 Concept phase:</strong> Preparation of Item definition, HARA,  Safety goals, Functional FMEA, FTA, Functional Safety Requirements & concept (FSR / FSC).​</li>
                <li><strong>Part 4 System Development:</strong> System safety analysis (FTA /DFMEA / DFA), Safety mechanism, Technical safety requirements / concept (TSR / TSC), system safety architecture, System integration and verification, Support for safety validation.​</li>
                <li><strong>Part 5 Hardware Development:</strong> Hardware safety requirement, Hardware design, Hardware metric calculation (SPFM, LFM, PMHF), hardware integration and verification.​</li>
                <li><strong>Part 6 Software development:</strong> Software safety requirements,  software architecture design, software unit design testing, implementation, verification, testing of embedded software.​</li>
                <li><strong>Part 7 Production,  operation service and decommissioning:</strong> Process FMEA, safety requirements.​</li>
                <li><strong>Part 8 Supporting processes:</strong> managing suppliers / customers with DIA, verification, documentation, tool qualification, etc.​</li>
                <li><strong>Part 9 ASIL / Safety analyses:</strong> ASIL decomposition, criteria for co-existence, Analysis of dependent failures, safety analysis (FMEA / FTA)​</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture1.png" alt="" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Cybersecurity Development & Testing</h2>
              <p>
                TBS provides engineering services for compliance to ISO/SAE 21434 and UNECE R155 / R156 Cybersecurity regulations, covering the complete cybersecurity lifecycle.
              </p>
              <ul>
                <li><strong>Clause 5, 6 Cybersecurity Management:</strong> Cybersecurity planning, work product management, audit preparation, and compliance tracking.​</li>
                <li><strong>Clause 7, 8: Distributed / Continual Activities:</strong> Customer / supplier coordination, risk assessment, vulnerability management​</li>
                <li><strong>Clause 9, 15: concept phase:</strong> Item definition, Threat Analysis and Risk Assessment (TARA) (Identify threats and threat scenarios, Assess impacts and likelihood, Determine risks and decide on treatment strategies.) security attributes, cybersecurity goals. ​</li>
                <li><strong>Clause 10 Product Development:</strong> Cybersecurity concept / cybersecurity requirements at system  / hardware / software level.  Architecture design, cybersecurity verification and analysis.​</li>
                <li><strong>Clause 11 cybersecurity validation:</strong> Test cases and testing support.​</li>
                <li><strong>Clause 12, 13 and 14 Production, Operation, decommissioning:</strong> Cybersecurity analysis and requirements​</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture2.png" alt="HV" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>HV Safety Development & Testing</h2>
              <p>
                TBS provides services to derive HV safety requirements and mapping, test specifications and test support covering global HV safety regulations and standards.
              </p>
              <ul>
                <li><strong>UNECE R100 Rev.3 (UN R100) Regulatory:</strong> Electrical safety for electric power train + REESS (shock protection, isolation, post-crash, discharge, etc.)​</li>
                <li><strong>UN GTR No. 20 Regulatory:</strong> Harmonized set of safety requirements for electric vehicles (EVs) to minimize the risk of fire, explosion, and electric shock​</li>
                <li><strong>ISO 6469-1 (RESS safety) standard:</strong> Battery pack safety requirements, design review, verification planning​</li>
                <li><strong>ISO 6469-2 (Operational safety):</strong> Operational safety concept, misuse / user interaction safety analysis​</li>
                <li><strong>ISO 6469-3 (In-use electrical safety):</strong> Electrical safety requirements for voltage class B circuits (shock + thermal incident protection)​</li>
                <li><strong>ISO 17409 (Conductive charging connection safety):</strong> Charging safety architecture review, interlock/HV enable logic, validation​</li>
                <li><strong>IEC 61851-1 (EV conductive charging system):</strong> EV supply equipment requirements for charging up to 1000 VAC / 1500 VDC​</li>
                <li><strong>IEC 62196-1 (Connectors/inlets for conductive charging):</strong> Connector selection & compliance support, thermal/contact safety validation​</li>
                <li><strong>ISO 19363 (Wireless power transfer safety):</strong> WPT safety analysis (clearance, EMF, interlocks), validation planning​</li>
                <li><strong>LV123 (HV component validation – German OEMs):</strong> HV component validation (electrical, environmental, abuse) Validation planning, DV/PV execution support​</li>
                <li><strong>FMVSS 305 (49 CFR §571.305, USA) Regulatory :</strong> Compliance assessment, crash/post-crash electrical safety analysis, test support​</li>
                <li><strong>AIS-038 Rev.2 (India):</strong> India homologation support, test planning, documentation.​</li>
              </ul>
            </div>
          </section>


          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture3.png" alt="CAN" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Automotive CAN Standard Development & Testing</h2>
              <p>
                Our expertise in Controller Area Network (CAN) standards ensures reliable in-vehicle communication:
              </p>
              <ul>
                <li><strong>CAN Protocol Development:</strong> Comprehensive CAN, CAN FD, and CAN XL protocol development and testing</li>
                <li><strong>Seamless Data Exchange:</strong> Reliable in-vehicle communication ensuring optimal system performance</li>
                <li><strong>Network Design:</strong> Robust CAN network architectures for automotive applications</li>
                <li><strong>Conformance Testing:</strong> Rigorous testing ensuring protocol compliance and reliability</li>
                <li><strong>Diagnostic Capabilities:</strong> Advanced diagnostics for network troubleshooting and maintenance</li>
                <li><strong>ISO 11898 Compliance:</strong> Full adherence to international CAN communication standards</li>
                <li><strong>Automotive Performance:</strong> Robust performance ensuring reliable automotive communication systems</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture4.png" alt="Market" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Market Regulatory Standards</h2>
              <p>
                We guide clients through global automotive regulatory requirements ensuring comprehensive market compliance:
              </p>
              <ul>
                <li><strong>Global Standards Expertise:</strong> UNECE, FMVSS, and regional automotive regulatory requirements</li>
                <li><strong>Compliance Roadmaps:</strong> Clear pathways to regulatory compliance with detailed documentation</li>
                <li><strong>Homologation Support:</strong> Complete support for vehicle certification and approval processes</li>
                <li><strong>Market-Specific Compliance:</strong> Ensuring vehicles meet regional safety and performance standards</li>
                <li><strong>Streamlined Certification:</strong> Efficient processes reducing time-to-market while maintaining compliance</li>
                <li><strong>Documentation Excellence:</strong> Comprehensive regulatory documentation and compliance records</li>
                <li><strong>Global Market Access:</strong> Enabling successful vehicle deployment across international markets</li>
              </ul>
            </div>
          </section>

          {/* <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture5.png" alt="Electrical" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Electrical Testing</h2>
              <p>
                Our electrical testing services validate the performance and safety of automotive electrical systems:
              </p>
              <ul>
                <li><strong>EMC Testing:</strong> Electromagnetic compatibility testing ensuring system interference immunity</li>
                <li><strong>Load Analysis:</strong> Comprehensive electrical load analysis and circuit integrity validation</li>
                <li><strong>CISPR 25 Compliance:</strong> Full adherence to automotive electromagnetic compatibility standards</li>
                <li><strong>State-of-the-Art Facilities:</strong> Advanced testing equipment ensuring accurate and reliable results</li>
                <li><strong>Real-World Validation:</strong> Testing ensuring components withstand actual operating conditions</li>
                <li><strong>Durability Enhancement:</strong> Comprehensive testing improving component longevity and reliability</li>
                <li><strong>Standards Compliance:</strong> Full compliance with automotive electrical testing requirements</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture6.png" alt="Environmental" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Environmental Standards</h2>
              <p>
                Design, development, and validation of automotive software, systems, and hardware compliant with global environmental test standards.
              </p>
              <ul>
                <li><strong>Applicable Standards:</strong> Environmental compliance aligned to ISO 16750‑4, ISO 19453‑4, and AIS029 validation frameworks.</li>
                <li><strong>Temperature Testing:</strong> High/low and cyclic temperature validation per IEC 60068‑2‑1, IEC 60068‑2‑2, and GB/T 2423.1.</li>
                <li><strong>Thermal Shock:</strong> Rapid temperature transition testing as per IEC 60068‑2‑14.</li>
                <li><strong>Humidity & Damp Heat:</strong> Cyclic and steady humidity endurance per IEC 60068‑2‑30 and IEC 60068‑2‑78.</li>
                <li><strong>Water Ingress Protection:</strong> IP rating validation aligned to IEC 60529 and ISO 20653.</li>
                <li><strong>Corrosion & Salt Spray:</strong> Corrosion resistance testing per IEC 60068‑2‑11 and IEC 60068‑2‑52.</li>
                <li><strong>Solar & Climate Exposure:</strong> UV and radiation durability validation per IEC 60068‑2‑5.</li>
                <li><strong>Chemical Resistance:</strong> Harmful gas and chemical exposure testing per IEC 60068‑2‑60.</li>
              </ul>
            </div>
          </section> */}
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="services" currentId="SafetyandRegulatory" />
      </div>
    </>
  );
};

export default S5;
