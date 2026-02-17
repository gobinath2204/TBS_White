import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/pages/Our Products/Inhousesoftwarestack");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/HMI");
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
          title="EV Generic Deck"
          description="TBS EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development."
          keywords="EV Generic Deck, EV Development, TBS, Powertrain, BMS, Inverter, DC-DC"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/EVdeck.png" alt="EV Generic Deck" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">EV Generic Deck</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">


          <section>
            <p className="fs-1-2rem text-justify">
              Our <b>EV Generic Deck</b> is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes a high-voltage motor, battery management system, and inverter, offering a plug-and-play foundation for prototyping and production. Compatible with various vehicle architectures, it supports power outputs up to 400V and 66 kWh, from compact urban EVs to high-performance models.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_EVdeck/Picture.png" alt="Strategic EV Development" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Strategic EV Development Framework</h2>
              <ul>
                <li><strong>Ensure ASPICE Compliance:</strong> Position compliance as a strategic differentiator to meet OEM mandates (~70% require Level 2/3).</li>
                <li><strong>Scalable EV Feature Library:</strong> Concentrates on BMS, Inverter, DC-DC, and OBC, embedding ASPICE-compliant processes for reuse.</li>
                <li><strong>Measurable Outcomes (KPIs):</strong> Target 40% reduction in development time, 90% improved defect detection, and 20% cost reduction.</li>
                <li><strong>Address Organizational Challenges:</strong> Mitigate talent shortages with training/templates and automate documentation for massive artifact requirements.</li>
                <li><strong>Emphasize Business Value:</strong> Focus on faster RFQ turnarounds and long-term savings through standardized workflows.</li>
                <li><strong>Global Expansion:</strong> Adapt framework for Europe/Asia and create opportunities for consulting and strategic partnerships.</li>
                <li><strong>Integrate Standards Alignment:</strong> Ensure compatibility with ISO 26262 (Functional Safety) and ISO 21434 (Cybersecurity).</li>
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

export default P2;