import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/2792370-hd_1920_1080_30fps.mp4";

  const handlePrevious = () => {
    navigate("/pages/p2");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/p4");
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
          <h1 className="hero-title" style={{color: 'white'}}>HMI (Human-Machine Interface)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Smart HIL Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0"}}>
                TBS’s Automotive Human-Machine Interface (HMI) transforms vehicle cabins into intuitive, connected ecosystems, enhancing driver and passenger experiences while prioritizing safety. Powered by Android Automotive OS, it integrates advanced touchscreens, voice recognition, and gesture controls to unify navigation, multimedia, climate control, and ADAS feedback into a customizable dashboard.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="User Interface" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>HMI (Human-Machine Interface)</h2>
              <p>
                Adhering to ISO 26262 ASIL-B standards, our HMI minimizes distractions with AI-driven contextual interfaces, such as voice-activated commands and augmented reality heads-up displays. The 3D graphics engine delivers immersive visuals, while haptic feedback reduces cognitive load. Modular and OTA-updateable, it supports personalized themes, apps, and profiles, boosting user satisfaction and brand differentiation.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Hardware Architecture" className="section-image" />
              {/* <div className="section-image-overlay"></div> */}
            </div>
            <div className="section-text">
              <h2>Advanced HMI for Next-Generation Vehicle Interfaces</h2>
              <p>
                From instrument clusters to central infotainment, TBS’s HMI ensures seamless smartphone integration and real-time data visualization, fostering emotional connections between drivers and vehicles. Rigorous usability testing guarantees natural, secure interactions, paving the way for intelligent, future-ready mobility.
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

export default P3;
