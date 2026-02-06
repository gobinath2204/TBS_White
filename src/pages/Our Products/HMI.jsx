import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/HMI2.mp4";

  const handlePrevious = () => {
    navigate("/pages/Our Products/EVgenericdeck");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/SMU");
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
          <img src="/HMI.png" alt="HMI (Human-Machine Interface)" className="hero-video" style={{ transform: 'scale(1.2)' }} />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{color: 'white'}}>HMI (Human-Machine Interface)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.2rem", textAlign: "justify", padding: "6rem 0"}}>
                Our <b>Automotive Human-Machine Interface (HMI)</b> transforms vehicle cabins into intuitive, connected ecosystems, enhancing driver and passenger experiences while prioritizing safety. Powered by Android Automotive OS, it integrates advanced touchscreens, voice recognition, and gesture controls to unify navigation, multimedia, climate control, and ADAS feedback into a customizable dashboard.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="User Interface" className="section-image" />
            </div>
            <div className="section-text">
              <h2>HMI (Human-Machine Interface)</h2>
              <p>
                Adhering to ISO 26262 ASIL-B standards, our HMI minimizes distractions with advanced interface technologies:
              </p>
              <ul>
                <li><strong>AI-Driven Contextual Interfaces:</strong> Voice-activated commands and augmented reality heads-up displays</li>
                <li><strong>3D Graphics Engine:</strong> Immersive visuals delivering enhanced user experience and engagement</li>
                <li><strong>Haptic Feedback:</strong> Tactile responses reducing cognitive load and improving safety</li>
                <li><strong>Modular & OTA-Updateable:</strong> Personalized themes, apps, and profiles with over-the-air updates</li>
                <li><strong>Brand Differentiation:</strong> Customizable interfaces boosting user satisfaction and brand identity</li>
                <li><strong>Safety Compliance:</strong> ISO 26262 ASIL-B standards ensuring distraction minimization</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Hardware Architecture" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Advanced HMI for Next-Generation Vehicle Interfaces</h2>
              <p>
                From instrument clusters to central infotainment, TBS's HMI ensures seamless integration and intelligent connectivity:
              </p>
              <ul>
                <li><strong>Seamless Smartphone Integration:</strong> Natural connectivity with mobile devices and applications</li>
                <li><strong>Real-Time Data Visualization:</strong> Dynamic information display fostering driver-vehicle connection</li>
                <li><strong>Emotional Connection:</strong> Intuitive interfaces creating meaningful interactions between drivers and vehicles</li>
                <li><strong>Rigorous Usability Testing:</strong> Comprehensive testing guaranteeing natural, secure user interactions</li>
                <li><strong>Future-Ready Mobility:</strong> Intelligent systems paving the way for next-generation transportation</li>
                <li><strong>Complete Integration:</strong> Unified experience from instrument clusters to central infotainment systems</li>
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

export default P3;