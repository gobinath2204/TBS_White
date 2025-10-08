import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/HMI.mp4";

  const handlePrevious = () => {
    navigate("/pages/p3");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p5");
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
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Secure Manufacturing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/hmi.png" alt="HMI Core System" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div>
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0"}}>
                TBS’s Secure Manufacturing Unit (SMU) safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout. In connected factories, the SMU integrates hardware-secured enclaves with ISO/SAE 21434-compliant software to protect ECUs, robots, and IoT devices throughout the manufacturing lifecycle.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Touchscreen Display" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Secure Manufacturing Unit</h2>
              <p>
                Featuring encrypted firmware flashing, AI-driven anomaly detection, and role-based access controls, it prevents unauthorized interventions. The SMU supports parallel processing, flashing up to eight vehicles simultaneously via gateways, and embeds PKI for device authentication and secure OTA updates. Compliant with WP.29 regulations, it mitigates risks like ransomware and supply chain disruptions, with built-in auditing for regulatory compliance.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Embedded Security for Resilient Manufacturing</h2>
              <p>
                By embedding security at the design stage, including standardized encryption for AUTOSAR architectures, TBS’s SMU protects intellectual property and accelerates certification. Manufacturers gain resilient, future-proof production lines, turning potential threats into opportunities for trusted, high-quality output.
              </p>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow-btn left" onClick={handlePrevious}>
          <div className="arrow">
            {/* <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg> */}
            ❮
          </div>
        </button>

        <button className="nav-arrow-btn right" onClick={handleNext}>
          <div className=" arrow">
            {/* <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg> */}
            ❯
          </div>
        </button>

      </div>
    </>
  );
};

export default P1;
