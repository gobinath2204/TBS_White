import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/HMI.mp4";

  const handlePrevious = () => {
    navigate("/pages/p6");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p1");
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
          <h1 className="hero-title" style={{color: 'white'}}>Free RTOS Safety Plugin</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/hmi.png" alt="HMI Core System" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0"}}>
                TBS’s Free RTOS Safety Plugin transforms standard FreeRTOS kernels into certified safety-critical foundations for automotive embedded systems, pre-qualified to ISO 26262 ASIL-D and IEC 61508 SIL-3. This lightweight extension enhances robustness with error handling, memory partitioning, and deterministic scheduling, mitigating risks in applications like autonomous driving.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Touchscreen Display" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Free RTOS Safety Plugin</h2>
              <p>
                Seamlessly integrating with FreeRTOS codebases, it adds safety features like stack overflow protection and traceable APIs without requiring full recertification. Ideal for resource-constrained MCUs in ECUs, it supports AUTOSAR OS compliance and multi-threading. Developed via HAZOP analysis and TÜV SÜD-verified, it includes safety manuals for easy auditing.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Safety-Certified FreeRTOS for Automotive Applications</h2>
              <p>
                Clients upgrading from vanilla FreeRTOS benefit from an effortless migration, preserving familiarity while gaining safety assurances. TBS’s plugin enables faster certification, reduced costs, and reliable performance in high-stakes environments, empowering innovation in software-defined mobility.
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
