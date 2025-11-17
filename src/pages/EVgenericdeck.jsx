import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/Inhousesoftwarestack");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/HMI");
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
          <h1 className="hero-title" style={{color: 'white'}}>EV Generic Deck</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div >
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0"}}>
                TBS’s EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes a high-voltage motor, battery management system, and inverter, offering a plug-and-play foundation for prototyping and production. Compatible with various vehicle architectures, it supports power outputs up to 400V and 66 kWh, from compact urban EVs to high-performance models.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>EV Generic Deck</h2>
              <p>Designed for efficiency, it incorporates advanced thermal management and regenerative braking to optimize range and performance. Compliant with ISO 15118 for charging interoperability, it integrates with diagnostic protocols for real-time monitoring and OTA updates. The deck reduces development risks by simulating real-world scenarios like fault insertion and load testing, suitable for R&D and assembly lines.</p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Customizable EV Platform Architecture</h2>
              <p>
                Clients can customize the platform to specific needs while leveraging TBS’s pre-validated components, ensuring faster market entry and cost savings. The EV Generic Deck empowers manufacturers to deliver sustainable, high-performing vehicles with superior drivability.
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

export default P2;
