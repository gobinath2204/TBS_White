import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P6 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/pages/Our Products/SmartHIL");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/RTOS");
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
          <img src="/Hero_P/DFU.png" alt="Diagnostics Flashing Unit" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{ color: 'white' }}>Diagnostics Flashing Unit</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section>
            <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
              Our <b>Diagnostics Tools </b> supports DoIP, CAN FD, and standard CAN protocols, ensuring compatibility with multiple flash specifications. It features independent flashing tool support for various CAN interfaces, including Vector, NI, Intrepid, and Pak. With integrated DHCP for DoIP, XML-configurable sequences, and detailed logging, it enables quick verification for EOL and aftersales deployment while exposing COM APIs for integration.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_DFU/Picture0.png" alt="Protocol Support" className="section-image" style={{ objectFit: "cover", height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>TbsFLASH</h2>
              <ul>
                <li><strong>Multi-Protocol Support:</strong> Supports DoIP, CAN FD, and standard CAN protocols.</li>
                <li><strong>Flash Compatibility:</strong> Compatible with multiple flash specifications.</li>
                <li><strong>Interface Support:</strong> Independent flashing tools support various CAN interfaces, including Vector, NI, Intrepid, and Pak.</li>
                <li><strong>Advanced Logging:</strong> Provides human-readable UDS logs and raw CAN dumps; DoIP includes UDS logs and Wireshark dumps.</li>
                <li><strong>Integrated DHCP:</strong> Built-in DHCP server for DoIP connections.</li>
                <li><strong>Detailed Analysis:</strong> User logs include detailed failure reasons for thorough analysis.</li>
                <li><strong>Configurable Sequences:</strong> Flash sequences can be configured and controlled via XML.</li>
                <li><strong>Rapid Verification:</strong> Flash specification updates can be quickly verified before deployment in EOL or aftersales tools.</li>
                <li><strong>Integration APIs:</strong> Exposes COM APIs for integration with other tools.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_DFU/Picture1.png" alt="Protocol Support" className="section-image" style={{ objectFit: "cover", height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>Flashing Script (CANoe)</h2>
              <ul>
                <li><strong>Universal Flashing:</strong> Capable of flashing any module.</li>
                <li><strong>Configurable Setup:</strong> User can change the Canoe configuration based on the vehicle line.</li>
                <li><strong>Dual Logging:</strong> Two logs are available (Readable log and Canoe CAN log file).</li>
                <li><strong>Failure Analysis:</strong> User log provides failure reasons to aid analysis.</li>
                <li><strong>XML Control:</strong> Sequence can be controlled with XML configuration.</li>
                <li><strong>Verification:</strong> Flash specification updates are quickly verified with this tool before updating EOL or Aftersales tools.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_DFU/Picture2.png" alt="Protocol Support" className="section-image" style={{ objectFit: "cover", height: "auto" }} />
            </div>
            <div className="section-text">
              <h2>Part Number Reader</h2>
              <ul>
                <li><strong>Vehicle Readout:</strong> Read Part numbers and DTC information for the whole vehicle.</li>
                <li><strong>Adaptable Configuration:</strong> User can change the Canoe configuration based on the vehicle line.</li>
                <li><strong>Comprehensive Reporting:</strong> Two logs are available (HTML report and Canoe CAN log file).</li>
                <li><strong>DTC Parsing:</strong> Parses DTCs, including snapshot and extended data.</li>
                <li><strong>Part Number Comparison:</strong> Highlights differentiation in Part numbers using Excel files with proper color coding.</li>
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

export default P6;