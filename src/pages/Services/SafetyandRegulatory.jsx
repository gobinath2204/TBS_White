import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const S5 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const imagePath = "/s&r.jpg";

  const handlePrevious = () => {
    navigate("/pages/Services/SystemValidation");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Services/SystemDevelopment");
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
          <img src={imagePath} alt="Safety & Regulatory Services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Safety & Regulatory Services</h1>
        </div>
        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0 0 0"}}>
                Our <b>safety and regulatory team</b> delivers cutting-edge compliance solutions for automotive systems, covering functional safety, cybersecurity, and high-voltage safety standards. We excel in ISO 26262, ISO 21434, automotive CAN protocols, and global market regulations, ensuring robust system protection and full compliance. From comprehensive testing to validation and certification support, we help clients achieve safe, reliable, and market-ready automotive solutions.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Functional Safety Development & Testing</h2>
              <p>
                We specialize in developing and testing systems compliant with ISO 26262 functional safety standards:
              </p>
              <ul>
                <li><strong>Risk Assessment & Safety Requirements:</strong> Comprehensive hazard analysis and safety requirement definition</li>
                <li><strong>Safety Mechanism Implementation:</strong> Robust safety mechanisms to mitigate identified hazards and risks</li>
                <li><strong>ASIL Compliance:</strong> Full Automotive Safety Integrity Level (ASIL) requirements from concept to production</li>
                <li><strong>Rigorous Testing:</strong> Fault injection and safety case analysis ensuring system reliability</li>
                <li><strong>Complete Lifecycle Support:</strong> From concept through production ensuring continuous compliance</li>
                <li><strong>Vehicle Safety Enhancement:</strong> Enhanced vehicle reliability and passenger safety assurance</li>
                <li><strong>Standards Compliance:</strong> Full ISO 26262 compliance with comprehensive documentation</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Cybersecurity Development & Testing</h2>
              <p>
                Our cybersecurity solutions protect automotive systems from evolving threats with comprehensive security measures:
              </p>
              <ul>
                <li><strong>ISO/SAE 21434 Compliance:</strong> Secure-by-design principles integrated throughout development lifecycle</li>
                <li><strong>Vulnerability Assessment:</strong> Comprehensive security assessments identifying potential system weaknesses</li>
                <li><strong>Robust Security Implementation:</strong> Advanced encryption and authentication protocols for system protection</li>
                <li><strong>Penetration Testing:</strong> Thorough testing ensuring resilience against sophisticated cyberattacks</li>
                <li><strong>Threat Modeling:</strong> Systematic threat analysis and mitigation strategy development</li>
                <li><strong>Connected Vehicle Protection:</strong> Comprehensive safeguarding of connected vehicles and user data</li>
                <li><strong>Evolving Threat Response:</strong> Adaptive security measures addressing emerging cybersecurity challenges</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
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
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
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
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
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

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
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
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Environmental Standards</h2>
              <p>
                We support compliance with environmental standards promoting sustainable automotive solutions:
              </p>
              <ul>
                <li><strong>ISO 14001 Compliance:</strong> Environmental management systems and regional environmental regulations</li>
                <li><strong>Lifecycle Assessments:</strong> Comprehensive environmental impact analysis throughout product lifecycle</li>
                <li><strong>Emissions Testing:</strong> Rigorous testing ensuring compliance with environmental emission standards</li>
                <li><strong>Material Compliance:</strong> RoHS, REACH, and other material safety and environmental regulations</li>
                <li><strong>Sustainable Design:</strong> Eco-friendly system design reducing environmental impact</li>
                <li><strong>Regulatory Compliance:</strong> Meeting environmental demands and promoting sustainable practices</li>
                <li><strong>Eco-Friendly Solutions:</strong> Supporting development of environmentally responsible automotive technologies</li>
              </ul>
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

export default S5;
