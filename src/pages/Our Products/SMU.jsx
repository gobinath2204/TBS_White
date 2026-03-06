import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P4 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);


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
          title="Secure Manufacturing Unit"
          description="TBS Secure Manufacturing Unit (SMU) provides end-to-end security for industrial manufacturing processes."
          keywords="SMU, Secure Manufacturing Unit, TBS, Industrial Security, Manufacturing Tech"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/SMU.png" alt="Secure Manufacturing Unit" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">Secure Manufacturing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section >
            <p className="fs-1-2rem text-justify">
              The <b>Secure Manufacturing Unit (SMU)</b> safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout. In connected factories, the SMU integrates hardware-secured enclaves with ISO/SAE 21434-compliant software to protect ECUs, robots, and IoT devices throughout the manufacturing lifecycle.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_SMU/SMU1.jpg" alt="Secure Manufacturing" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Core Capabilities</h2>
              <ul>
                <li><strong>Secure Firmware Flashing:</strong> Ensures only fully authenticated and inherently trusted software reaches the ECU.</li>
                <li><strong>OEM Connectivity:</strong> Seamlessly establishes secure backend connections to fetch validated firmware and production data.</li>
                <li><strong>End‑of‑Line (EOL) Flashing:</strong> Rapidly performs firmware flashing while writing critical product data directly at EOL stations.</li>
                <li><strong>Server Provisioning:</strong> Intelligently automates the retrieval of device-specific firmware for strictly registered hardware.</li>
                <li><strong>Secure Key Injection:</strong> Facilitates heavily encrypted, secure cryptographic key provisioning directly into connected devices.</li>
                <li><strong>Anti‑Cloning Protection:</strong> Actively prevents unauthorized hardware duplication and safeguards against malicious tampering.</li>
                <li><strong>Traceability & Logging:</strong> Maintains fully tamper‑proof operational logs supporting strict compliance and quality audits.</li>
                <li><strong>Multi‑Protocol Support:</strong> Natively compatible with CAN, CAN FD, DoIP (Diagnostics over IP), and CANopen standards.</li>
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
                <li><strong>Modular Architecture:</strong> Future-ready, plugin-based design ensuring seamless operational integration and rapid deployment upgrades.</li>
                <li><strong>Customizable Flash Sequences:</strong> Easily adaptable plugin scripts precisely tailored to unique, complex production requirements.</li>
                <li><strong>Scalable Infrastructure:</strong> Grows effortlessly alongside escalating production demands and continuous manufacturing expansion.</li>
                <li><strong>Flexible Communication Options:</strong> Broad support for multiple IPC protocols including robust CAN and high-speed Ethernet capabilities.</li>
                <li><strong>Enhanced Security:</strong> Substantially strengthens factory security posture while rigorously enforcing global compliance standards.</li>
                <li><strong>Complete Traceability:</strong> End-to-end lifecycle tracking extending from initial production straight through after-sales service.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="products" currentId="SMU" />
      </div>
    </>
  );
};

export default P4;