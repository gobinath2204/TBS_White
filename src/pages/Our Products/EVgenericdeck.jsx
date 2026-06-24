import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import { useNavigate, Link } from "react-router-dom";
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P2 = () => {
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
            <div className="brief-callout" style={{
              background: '#eef3fc',
              borderLeft: '4px solid #213c7a',
              padding: '16px 20px',
              borderRadius: '0 6px 6px 0',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <span style={{ fontSize: '1rem', color: '#1f3864', fontWeight: '500' }}>
                📄 Looking for the technical rollup from the trade show?
              </span>
              <Link to="/briefs/ev-generic-deck" style={{
                color: '#e56b2e',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontFamily: 'Axiforma, sans-serif',
                fontSize: '0.95rem'
              }}>
                Read our Technical Brief &rarr;
              </Link>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_EVdeck/Picture.jpg" alt="Strategic EV Development" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Strategic EV Development Framework</h2>
              <ul>
                <li><strong>ASPICE Compliance:</strong> Strategically position compliance to satisfy strict OEM mandates requiring Level 2/3 certification.</li>
                <li><strong>Scalable Feature Library:</strong> Pre-built, ASPICE-compliant modules focusing on core BMS, Inverter, DC-DC, and OBC functions.</li>
                <li><strong>Measurable Outcomes:</strong> Target 40% faster development, 90% better defect detection, and significant 20% cost reductions.</li>
                <li><strong>Organizational Support:</strong> Overcome talent gaps via integrated training and completely automate heavy documentation burdens.</li>
                <li><strong>Maximum Business Value:</strong> Guarantee faster RFQ turnarounds and compound long-term savings via standardized workflows.</li>
                <li><strong>Global Expansion Ready:</strong> Easily adapted frameworks uniquely suited for European, Asian, and global consulting partnerships.</li>
                <li><strong>Strict Standards Alignment:</strong> Out-of-the-box compatibility with ISO 26262 (Functional Safety) and ISO 21434 paradigms.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="products" currentId="EVgenericdeck" />
      </div>
    </>
  );
};

export default P2;