import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/s4");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/s1");
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
          <h1 className="hero-title">Safety & Regulatory Services</h1>
        </div>
     {/* <h1 className="hero-title">Safety & Regulatory Services</h1> */}
        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0 0 0"}}>
                At TBS, we deliver cutting-edge software and hardware solutions to ensure compliance with stringent safety and regulatory standards. Our expertise spans functional safety, cybersecurity, high-voltage (HV) safety, automotive CAN standards, market regulations, electrical testing, and environmental standards, empowering clients to achieve robust, safe, and compliant automotive systems.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Functional Safety Development & Testing</h2>
              <p>
                We specialize in developing and testing systems compliant with ISO 26262 functional safety standards. Our team conducts risk assessments, defines safety requirements, and implements safety mechanisms to mitigate hazards. From concept to production, we perform rigorous testing, including fault injection and safety case analysis, ensuring your systems meet ASIL (Automotive Safety Integrity Level) requirements, enhancing vehicle reliability and passenger safety.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Cybersecurity Development & Testing</h2>
              <p>
                Our cybersecurity solutions protect automotive systems from evolving threats. Aligned with ISO/SAE 21434, we integrate secure-by-design principles, conduct vulnerability assessments, and implement robust encryption and authentication protocols. Our testing includes penetration testing and threat modeling to ensure resilience against cyberattacks, safeguarding connected vehicles and user data.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>HV Safety Development & Testing</h2>
            <p>
              We ensure high-voltage (HV) systems in electric vehicles meet safety standards like ISO 6469. Our services include designing HV architectures, insulation monitoring, and fail-safe mechanisms. We conduct comprehensive testing, such as dielectric strength and thermal stress tests, to validate system safety, protecting users and components from electrical hazards.
            </p>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Automotive CAN Standard Development & Testing</h2>
              <p>
                Our expertise in Controller Area Network (CAN) standards ensures reliable in-vehicle communication. We develop and test CAN protocols, including CAN FD and CAN XL, for seamless data exchange. Our services include network design, conformance testing, and diagnostics, ensuring compliance with ISO 11898 and robust performance in automotive applications.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Market Regulatory Standards</h2>
            <p>
              We guide clients through global automotive regulatory requirements, including UNECE, FMVSS, and regional standards. Our team provides compliance roadmaps, documentation, and homologation support, ensuring vehicles meet market-specific regulations. We streamline certification processes, reducing time-to-market while maintaining compliance with safety and performance standards.
            </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Electrical Testing</h2>
              <p>
                Our electrical testing services validate the performance and safety of automotive electrical systems. We conduct tests for EMC (electromagnetic compatibility), load analysis, and circuit integrity, adhering to standards like CISPR 25. Our state-of-the-art facilities ensure components withstand real-world conditions, enhancing durability and compliance.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Environmental Standards</h2>
            <p>
              We support compliance with environmental standards like ISO 14001 and regional regulations. Our services include lifecycle assessments, emissions testing, and material compliance (e.g., RoHS, REACH). We help clients design sustainable systems, reducing environmental impact while meeting regulatory demands and promoting eco-friendly automotive solutions.
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
