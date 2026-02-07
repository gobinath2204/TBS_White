import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/EVdeck.mp4";

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
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/EVdeck.png" alt="EV Generic Deck" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>EV Generic Deck</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div >
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                Our <b>EV Generic Deck</b> is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes a high-voltage motor, battery management system, and inverter, offering a plug-and-play foundation for prototyping and production. Compatible with various vehicle architectures, it supports power outputs up to 400V and 66 kWh, from compact urban EVs to high-performance models.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>EV Generic Deck</h2>
              <p>
                Designed for efficiency, it incorporates advanced features and comprehensive testing capabilities:
              </p>
              <ul>
                <li><strong>Advanced Thermal Management:</strong> Optimized thermal control systems for enhanced performance and range</li>
                <li><strong>Regenerative Braking:</strong> Integrated regenerative braking technology maximizing energy recovery</li>
                <li><strong>ISO 15118 Compliance:</strong> Charging interoperability ensuring seamless integration with charging infrastructure</li>
                <li><strong>Diagnostic Integration:</strong> Real-time monitoring protocols with OTA update capabilities</li>
                <li><strong>Development Risk Reduction:</strong> Real-world scenario simulation including fault insertion and load testing</li>
                <li><strong>Versatile Applications:</strong> Suitable for R&D environments and assembly line integration</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Customizable EV Platform Architecture</h2>
              <p>
                Clients can customize the platform to specific needs while leveraging TBS's pre-validated components:
              </p>
              <ul>
                <li><strong>Modular Customization:</strong> Flexible platform adaptation to specific vehicle requirements and applications</li>
                <li><strong>Pre-Validated Components:</strong> Proven, tested components reducing development time and costs</li>
                <li><strong>Faster Market Entry:</strong> Accelerated development cycles enabling quicker time-to-market</li>
                <li><strong>Cost Savings:</strong> Reduced development costs through reusable, validated platform components</li>
                <li><strong>Superior Drivability:</strong> Enhanced vehicle performance and driving experience optimization</li>
                <li><strong>Sustainable Solutions:</strong> Empowering manufacturers to deliver high-performing, environmentally friendly vehicles</li>
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

export default P2;