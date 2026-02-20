import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P3 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();



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
                <li><strong>High-Resolution Display:</strong> A 7-inch capacitive touch screen with an 800 x 480 resolution and 300 nits brightness.</li>
                <li><strong>Dual-Processor Architecture:</strong> Integrated TI TMS570LC43x (VIP) and an FPGA-based Graphics Processor (GIP) for optimized data handling and UI rendering.</li>
                <li><strong>Automotive Connectivity:</strong> Full CAN Stack implementation supporting up to 500KBPS and UDS diagnostics (ISO 14229/ISO 15765) for software flashing and configuration.</li>
                <li><strong>Flexible Interface:</strong> Features dimming control (0–100%), an internal buzzer, and support for real-time 3D printed design prototypes.</li>
                <li><strong>Operational Durability:</strong> Rated for operating temperatures between -20°C and 70°C with a backlight lifetime exceeding 30,000 hours.</li>
                <li><strong>Efficient Power Management:</strong> Low power consumption design operating at 12V with a maximum current draw of 800 mA.</li>
                <li><strong>Comprehensive Software Stack:</strong> Includes Touch Screen Managers, Audio Managers, and a GPU Stack for a smooth, 30FPS user experience.</li>
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