import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/IHSS.mp4";

  const handlePrevious = () => {
    navigate("/pages/RTOS");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/EVgenericdeck");
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
          <img src="/IHSS.png" alt="In-House Software Stack" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{ color: 'white' }}>In-House Software Stack (COTS)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{ marginTop: "0", paddingTop: "0.5rem" }}>
            <div >
              <p style={{ fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0" }}>
                Our <b>In-House Software Stack (Commercial Off-The-Shelf, or COTS)</b> is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems, middleware, and application layers to streamline development and reduce time-to-market. Validated to ISO 26262 for functional safety, it minimizes costs compared to custom solutions while ensuring high reliability.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Touchscreen Display" className="section-image" />
            </div>
            <div className="section-text">
              <h2>In-House Software Stack (COTS)</h2>
              <p>
                Supporting multi-core processors and AUTOSAR architectures, our COTS stack delivers comprehensive capabilities:
              </p>
              <ul>
                <li><strong>Multi-Core Support:</strong> Advanced multi-core processor compatibility with AUTOSAR architecture integration</li>
                <li><strong>Versatile Applications:</strong> Ideal for engine management, infotainment, and ADAS applications</li>
                <li><strong>Hypervisor Extensions:</strong> Advanced virtualization capabilities enabling rapid prototyping</li>
                <li><strong>Board Support Packages:</strong> Commercial hardware compatibility without compromising performance or security</li>
                <li><strong>Lifecycle Cost Reduction:</strong> Lower total cost of ownership with enhanced scalability</li>
                <li><strong>Seamless Upgrades:</strong> Keeping pace with software-defined vehicle trends and innovations</li>
                <li><strong>Innovation Focus:</strong> Enabling engineering teams to concentrate on core innovation and development</li>
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

export default P1;