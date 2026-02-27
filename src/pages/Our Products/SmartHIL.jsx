import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P5 = () => {
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
          title="Smart HIL (Hardware-in-the-Loop)"
          description="TBS Smart HIL platform transforms automotive validation through intelligent hardware-software integration."
          keywords="Smart HIL, HIL, Hardware-in-the-Loop, TBS, Automotive Validation, ECU Testing"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/SmartHIL.png" alt="Smart HIL (Hardware-in-the-Loop)" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">Smart HIL (Hardware-in-the-Loop)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p className="fs-1-2rem text-justify">
              TBS's Smart HIL platform transforms automotive validation through intelligent hardware-software integration. Our system delivers real-time ECU testing with advanced fault simulation, multi-protocol connectivity, and AI-driven automation. Designed for next-generation vehicle development, it accelerates testing cycles while ensuring ISO 26262 compliance and seamless integration with industry-standard development tools.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_HIL/Picture.jpeg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>Smart HIL (Hardware-in-the-Loop)</h2>
              <ul>
                <li><strong>System Simulation:</strong> Enables highly simplified yet remarkably accurate simulation of complex physical systems.</li>
                <li><strong>Tool Compatibility:</strong> Seamlessly compatible with industry-standard Vector CAN and Peak CAN toolchains.</li>
                <li><strong>Cost Efficiency:</strong> Intentionally designed for exceptional ease of use and maximum operational cost efficiency.</li>
                <li><strong>High-Speed Simulation:</strong> Outputs dynamically simulated via CAN Panel and CAPL at rapid 1–10ms intervals.</li>
                <li><strong>Precision Measurement:</strong> Inputs precisely measured and instantly broadcasted to CAN networks at 1–10ms intervals.</li>
                <li><strong>Standalone Operation:</strong> Operates entirely independently, completely free from restrictive complex software dependencies.</li>
                <li><strong>Configurable I/O:</strong> Offers highly adaptable I/O matrices meticulously tailored to specific project requirements.</li>
                <li><strong>Programmable Logic:</strong> Fully supports deeply programmable CAN communication and complex sensor emulation profiles.</li>
                <li><strong>Multi-Domain Support:</strong> Proven capability across advanced Automotive, Aerospace, and Railway domain applications.</li>
              </ul>
            </div>
          </section>

        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="products" currentId="SmartHIL" />
      </div>
    </>
  );
};

export default P5;