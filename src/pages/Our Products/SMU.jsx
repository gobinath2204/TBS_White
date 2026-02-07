import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/SMU.mp4";

  const handlePrevious = () => {
    navigate("/pages/Our Products/HMI");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/SmartHIL");
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
          <img src="/Hero_P/SMU.png" alt="Secure Manufacturing Unit" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Secure Manufacturing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div>
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                The <b>Secure Manufacturing Unit (SMU)</b> safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout. In connected factories, the SMU integrates hardware-secured enclaves with ISO/SAE 21434-compliant software to protect ECUs, robots, and IoT devices throughout the manufacturing lifecycle.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_SMU/SMU1.png" alt="Secure Manufacturing" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Core Capabilities</h2>
              <ul>
                <li><strong>Secure Firmware & Software Flashing</strong> – Ensures only authenticated and trusted software is flashed to the ECU</li>
                <li><strong>Secure OEM Connectivity</strong> – Connects securely with the OEM backend to fetch firmware and production data</li>
                <li><strong>End‑of‑Line (EOL) Flashing</strong> – Performs firmware flashing and writes production/product data directly to the ECU at the EOL station</li>
                <li><strong>Server‑Connected Provisioning</strong> – Automatically retrieves the correct firmware for each registered device</li>
                <li><strong>Secure Key Injection</strong> – Enables encrypted and secure cryptographic key injection into devices</li>
                <li><strong>Anti‑Cloning Protection</strong> – Prevents unauthorized duplication and tampering</li>
                <li><strong>Traceability & Logging</strong> – Maintains tamper‑proof logs for compliance and quality audits</li>
                <li><strong>Multi‑Protocol Support</strong> – Compatible with CAN, CAN FD, DoIP (Diagnostics over IP), and CANopen</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_SMU/SMU2.png" alt="Resilient Manufacturing" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Key Advantages & Operational Excellence</h2>
              <ul>
                <li><strong>Modular & Future-Ready Architecture:</strong> Plugin-based design enabling seamless integration and upgrades</li>
                <li><strong>Customizable Flash Sequences:</strong> Easily configurable plugin-based scripts tailored to specific production requirements</li>
                <li><strong>Scalable Infrastructure:</strong> Grows seamlessly with production demands and manufacturing expansion</li>
                <li><strong>Flexible Communication Options:</strong> Multiple IPC protocols including CAN and Ethernet connectivity</li>
                <li><strong>Enhanced Security & Compliance:</strong> Strengthens manufacturing security posture while ensuring regulatory adherence</li>
                <li><strong>Complete Traceability:</strong> Full lifecycle tracking from production through after-sales service</li>
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