import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";

const P5 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/pages/Our Products/SMU");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/DFU");
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
        <SEO
          title="Smart HIL (Hardware-in-the-Loop)"
          description="TBS Smart HIL platform transforms automotive validation through intelligent hardware-software integration."
          keywords="Smart HIL, HIL, Hardware-in-the-Loop, TBS, Automotive Validation, ECU Testing"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/SmartHIL.png" alt="Smart HIL (Hardware-in-the-Loop)" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">Smart HIL (Hardware-in-the-Loop)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p className="fs-1-2rem text-justify">
              TBS's Smart HIL platform transforms automotive validation through intelligent hardware-software integration. Our system delivers real-time ECU testing with advanced fault simulation, multi-protocol connectivity, and AI-driven automation. Designed for next-generation vehicle development, it accelerates testing cycles while ensuring ISO 26262 compliance and seamless integration with industry-standard development tools.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_HIL/Picture.png" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Smart HIL (Hardware-in-the-Loop)</h2>
              <ul>
                <li>Enables simplified and accurate simulation of physical systems</li>
                <li>Compatible with Vector CAN and Peak CAN tools</li>
                <li>Designed for ease of use and cost efficiency</li>
                <li>Outputs are simulated via CAN Panel & CAPL at 1–10 ms intervals</li>
                <li>Inputs are measured and broadcasted to CAN at 1–10 ms intervals</li>
                <li>Operates independently of complex software dependencies</li>
                <li>Offers configurable I/O tailored to project-specific needs</li>
                <li>Supports programmable CAN communication and sensor emulation</li>
                <li>Supports multi-domain applications: Automotive, Aerospace, Railways</li>
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
          <div className="arrow">
            ❯
          </div>
        </button>
      </div>
    </>
  );
};

export default P5;