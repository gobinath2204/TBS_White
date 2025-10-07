import React, { useEffect, useRef } from "react";
import './service-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/s5");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/s2");
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
          <h1 className="hero-title">System Development Services</h1>
        </div>
     {/* <h1 className="hero-title">System Development Services</h1> */}
        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0"}}>
                At TBS, our system engineering services deliver comprehensive solutions for automotive systems, ensuring safety, reliability, and compliance. Our expertise spans requirement elicitation, architecture development, risk analysis, communication protocols, functional safety, cybersecurity, diagnostics, and end-of-line (EOL) requirements, enabling robust and innovative vehicle systems.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>SYS.2 Requirement Elicitation</h2>
              <p>
                Our SYS.2 requirement elicitation process ensures precise, traceable system requirements. We collaborate with stakeholders to capture functional, performance, and safety needs, aligning with ASPICE and ISO 26262 standards. Using structured methodologies, we refine requirements to support system design, testing, and validation, ensuring clarity and compliance from the project outset.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>SYS.3 Architecture Development</h2>
              <p>
                We develop scalable, modular system architectures for automotive applications, adhering to AUTOSAR and ISO 14229 standards. Our SYS.3 services focus on optimizing system performance, interoperability, and maintainability. We design architectures that integrate hardware and software seamlessly, supporting complex functionalities while ensuring compliance with industry standards.
              
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>FMEA/DFMEA Development</h2>
            <p>
              Our Failure Mode and Effects Analysis (FMEA) and Design FMEA (DFMEA) services identify and mitigate system risks. Aligned with AIAG and VDA standards, we analyze potential failures, assess their impact, and implement preventive measures. This enhances system reliability, safety, and compliance with automotive regulatory requirements.           
            </p>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Communication Requirements</h2>
              <p>
                We define robust communication requirements for in-vehicle networks, including CAN, LIN, and Ethernet protocols. Our services ensure reliable data exchange, low latency, and compliance with standards like ISO 11898. We specify network topologies, message formats, and diagnostics, enabling seamless system integration and performance.
              
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Functional Safety</h2>
            <p>
              Our functional safety services ensure compliance with ISO 26262. We conduct hazard analysis, risk assessments, and define safety requirements for ASIL compliance. Through safety case development and validation, we ensure systems mitigate risks, enhancing vehicle safety and reliability across all development phases.
            
            </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Cybersecurity</h2>
              <p>
                We provide cybersecurity solutions aligned with ISO/SAE 21434 to protect automotive systems from threats. Our services include threat modeling, secure architecture design, and implementation of encryption and authentication protocols. We conduct penetration testing and vulnerability assessments to ensure robust, secure systems for connected vehicles.
              
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Diagnostics & EOL Requirements Development</h2>
            <p>
              We develop comprehensive diagnostics and end-of-line (EOL) requirements to ensure system reliability and manufacturability. Aligned with ISO 14229 (UDS), we define diagnostic protocols, fault codes, and EOL test procedures. Our solutions enable efficient troubleshooting, calibration, and quality assurance during production.
            
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

export default P2;
