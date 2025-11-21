import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/HMI.mp4";

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
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{ color: 'white' }}>In-House Software Stack (COTS)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{ marginTop: "0", paddingTop: "0.5rem" }}>
            <div >
              <p style={{ fontSize: "1.5rem", textAlign: "center", padding: "6rem 0" }}>
                TBS’s In-House Software Stack (Commercial Off-The-Shelf, or COTS) is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems, middleware, and application layers to streamline development and reduce time-to-market. Validated to ISO 26262 for functional safety, it minimizes costs compared to custom solutions while ensuring high reliability.
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
                Supporting multi-core processors and AUTOSAR architectures, it’s ideal for engine management, infotainment, and ADAS applications. Features like hypervisor extensions and board support packages enable rapid prototyping on commercial hardware without compromising performance or security. Clients benefit from lower lifecycle costs, scalability, and seamless upgrades, keeping pace with trends like software-defined vehicles. With TBS’s COTS stack, engineering teams can focus on innovation, delivering safer, smarter, and more efficient vehicles.
              </p>
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
