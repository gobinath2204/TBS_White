import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P3 = () => {
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
          title="HMI (Human-Machine Interface)"
          description="TBS specializes in developing high-performance, user-friendly HMI systems for automotive and industrial applications."
          keywords="HMI, Human-Machine Interface, TBS, User Experience, Automotive HMI"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/HMI.png" alt="HMI (Human-Machine Interface)" className="hero-video scale-1-2" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">HMI (Human-Machine Interface)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section >
            <p className="fs-1-2rem text-justify">
              Our <b> HMI Display solution </b>  utilizes a dual-processor architecture, combining a Vehicle Interface Processor (VIP) powered by the TI TMS570 and a Graphics Interface Processor (GIP) to deliver high-performance automotive visualization. Designed for electric vehicle integration, the system facilitates seamless communication over CAN and UART protocols, offering a robust platform for real-time energy information, drive mode settings, and climate control management. This architecture ensures reliable processing of vehicle data alongside a responsive user interface.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_HMI/Picture1.png" alt="HMI Architecture" className="section-image" />
            </div>
            <div className="section-text">
              <h2>HMI (Human-Machine Interface)</h2>
              <ul>
                <li><strong>High-Resolution Display:</strong> Vibrant 7-inch capacitive touch screen featuring 800x480 resolution and 300 nits brightness.</li>
                <li><strong>Dual-Processor Architecture:</strong> TI TMS570LC43x (VIP) paired with an FPGA GPU for highly optimized UI rendering.</li>
                <li><strong>Automotive Connectivity:</strong> Full CAN Stack supporting 500KBPS alongside complete UDS diagnostics for secure flashing.</li>
                <li><strong>Flexible Interface:</strong> Responsive 0–100% dimming control, internal buzzer alerts, and rapid prototype support.</li>
                <li><strong>Operational Durability:</strong> Rugged design rated for -20°C to 70°C with an exceptional 30,000+ hour backlight lifespan.</li>
                <li><strong>Efficient Power Management:</strong> Ultra-low power consumption architecture operating natively at 12V, drawing under 800mA.</li>
                <li><strong>Comprehensive Software Stack:</strong> Deep integration of Touch and Audio managers driving a flawlessly smooth 30FPS experience.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="products" currentId="HMI" />
      </div>
    </>
  );
};

export default P3;