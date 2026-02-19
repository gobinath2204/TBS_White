import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const S5 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
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
              Our <b>safety and regulatory team</b> delivers cutting-edge compliance solutions for automotive systems, covering functional safety, cybersecurity, and high-voltage safety standards. We excel in ISO 26262, ISO 21434, R155, R156, LV123, LV124, HV safety automotive CAN protocols, and global market regulations, ensuring robust system protection and full compliance. From comprehensive testing to validation and certification support, we help clients achieve safe, reliable, and market-ready automotive solutions.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SR/Picture0.png" alt="FS" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Functional Safety</h2>
              <p>
                TBS provides comprehensive ISO 26262 compliance and functional safety engineering. Our systematic approach ensures that every safety-critical automotive system meets international regulatory standards through expert development and rigorous testing.
              </p>
              <ul>
                <li><strong>Communication Integrity:</strong> We implement hardware redundancy and monitoring to prevent message corruption across vehicle buses.</li>
                <li><strong>Processing Unit Safety:</strong> TBS develops software self-tests and lockstep configurations to ensure core processing reliability.</li>
                <li><strong>Electrical Element Analysis:</strong> We provide online monitoring solutions for relays and harnesses to detect electrical failures.</li>
                <li><strong>Sensor & Actuator Validation:</strong> Our team implements voting logic and correlation checks for precise, safe system performance.</li>
                <li><strong>I/O Safeguard Implementation:</strong> We deploy test patterns and code protection to secure analog and digital interface data.</li>
                <li><strong>Clock & Sequence Monitoring:</strong> We integrate advanced watchdogs to maintain perfect software execution timing and logical flow.</li>
                <li><strong>Power Supply Regulation:</strong> TBS designs voltage and current control mechanisms to protect systems from power-related failures.</li>
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
                Our cybersecurity solutions protect automotive systems from evolving threats with comprehensive security measures:
              </p>
              <ul>
                <li><strong>ISO/SAE 21434 & UNECE R155 Compliance:</strong> Secure-by-design principles integrated throughout development lifecycle</li>
                <li><strong>Vulnerability Assessment:</strong> Comprehensive security assessments identifying potential system weaknesses</li>
                <li><strong>Robust Security Implementation:</strong> Advanced encryption and authentication protocols for system protection</li>
                <li><strong>Penetration Testing:</strong> Thorough testing ensuring resilience against sophisticated cyberattacks</li>
                <li><strong>Tara Analysis:</strong> Provide expert TARA services to identify and mitigate cybersecurity risks</li>
                <li><strong>Connected Vehicle Protection:</strong> Comprehensive safeguarding of connected vehicles and user data</li>
                <li><strong>Evolving Threat Response:</strong> Adaptive security measures addressing emerging cybersecurity challenges</li>
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
                We ensure high-voltage (HV) systems in electric vehicles meet comprehensive safety standards:
              </p>
              <ul>
                <li><strong>ISO 6469 Compliance:</strong> Complete adherence to high-voltage safety standards for electric vehicles</li>
                <li><strong>HV Architecture Design:</strong> Safe and efficient high-voltage system architectures</li>
                <li><strong>Insulation Monitoring:</strong> Advanced monitoring systems ensuring electrical safety and integrity</li>
                <li><strong>Fail-Safe Mechanisms:</strong> Robust safety mechanisms protecting against electrical hazards</li>
                <li><strong>Comprehensive Testing:</strong> Dielectric strength and thermal stress tests validating system safety</li>
                <li><strong>User Protection:</strong> Complete protection of users and components from electrical hazards</li>
                <li><strong>EV Safety Standards:</strong> Full compliance with electric vehicle safety requirements and regulations</li>
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
