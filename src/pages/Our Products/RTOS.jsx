import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P7 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/pages/Our Products/DFU");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/Inhousesoftwarestack");
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
          <img src="/Hero_P/RTOS.png" alt="Free RTOS Safety Plugin" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>Free RTOS Safety Plugin</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section >
            <p style={{fontSize: "1.2rem", textAlign: "justify", }}>
                Our <b>Free RTOS Safety Plugin</b> empowers automotive embedded systems with ISO 26262 ASIL-D compliance. It enhances standard FreeRTOS with critical safety features, including data integrity verification, secure data exchange, and real-time kernel monitoring, ensuring reliability for next-generation vehicles.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_RTOS/Picture.jpeg" alt="Free RTOS Safety Plugin Features" className="section-image" style={{objectFit: "fill",height: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>Free RTOS Safety Plugin Features</h2>
              <ul>
                <li><strong>SAFECRC Checker:</strong> Ensures complete data integrity within a Safety RTOS environment.</li>
                <li><strong>SAFEX Change:</strong> Facilitates safe and validated data exchange between system components.</li>
                <li><strong>Kernel Updates:</strong> Ensures the Safety RTOS utilizes validated and controlled Free RTOS versions without compromising real-time behavior.</li>
                <li><strong>SAFE Checkpoints Component:</strong> Monitors safety-critical tasks to ensure they execute in the correct sequence and within defined time limits.</li>
                <li><strong>Safety Analysis:</strong> Evaluates the kernel to identify potential failure modes affecting memory, timing, and scheduling.</li>
                <li><strong>Safe Checkpoints Verification:</strong> Verifies that critical tasks reach defined execution points within their expected time windows.</li>
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

export default P7;