import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/SMU.mp4";

  const handlePrevious = () => {
    navigate("/pages/HMI");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/SmartHIL");
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
          <img src="/SMU.png" alt="Secure Manufacturing Unit" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Secure Manufacturing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div>
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                Our <b>Secure Manufacturing Unit (SMU)</b> safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout. In connected factories, the SMU integrates hardware-secured enclaves with ISO/SAE 21434-compliant software to protect ECUs, robots, and IoT devices throughout the manufacturing lifecycle.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Secure Manufacturing" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Secure Manufacturing Unit</h2>
              <p>
                Featuring encrypted firmware flashing, AI-driven anomaly detection, and role-based access controls for comprehensive manufacturing security:
              </p>
              <ul>
                <li><strong>Encrypted Firmware Flashing:</strong> Secure flashing protocols preventing unauthorized code modifications</li>
                <li><strong>AI-Driven Anomaly Detection:</strong> Real-time threat identification and automated response systems</li>
                <li><strong>Role-Based Access Controls:</strong> Granular permissions ensuring only authorized personnel access</li>
                <li><strong>Parallel Processing:</strong> Simultaneous flashing of up to eight vehicles via secure gateways</li>
                <li><strong>PKI Integration:</strong> Device authentication and secure OTA update capabilities</li>
                <li><strong>WP.29 Compliance:</strong> Meeting automotive cybersecurity regulations and standards</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Resilient Manufacturing" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Embedded Security for Resilient Manufacturing</h2>
              <p>
                By embedding security at the design stage, TBS's SMU delivers comprehensive protection and operational excellence:
              </p>
              <ul>
                <li><strong>Design-Stage Security:</strong> Embedded protection from initial development through production</li>
                <li><strong>AUTOSAR Encryption:</strong> Standardized security protocols for automotive architectures</li>
                <li><strong>IP Protection:</strong> Safeguarding intellectual property and proprietary manufacturing processes</li>
                <li><strong>Accelerated Certification:</strong> Streamlined compliance processes reducing time-to-market</li>
                <li><strong>Threat Mitigation:</strong> Protection against ransomware and supply chain disruptions</li>
                <li><strong>Future-Proof Design:</strong> Scalable security architecture adapting to emerging threats</li>
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

export default P4;