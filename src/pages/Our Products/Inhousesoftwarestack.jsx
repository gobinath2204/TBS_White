import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P1 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/pages/Our Products/RTOS");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/Our Products/EVgenericdeck");
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
          <img src="/Hero_P/IHSS.png" alt="In-House Software Stack" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title" style={{ color: 'white' }}>In-House Software Stack (COTS)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p style={{fontSize: "1.2rem", textAlign: "justify", }}>
                Our <b>In House Commercial off the shelf software stack</b> developed for Automotive communication (CAN), Diagnostics(UDS),UDS on CAN,  Calibration(XCP), Safe RTOS(Free RTOS + Safety Plugin), Flash Boot Loaders(PBL +SBL+App), NVM Manager & BSW Low Level Drivers. Our stacks are in compliance with respective ISO Standards. Our stacks are already in production vehicles. Our all stack have configuration Tools. 
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture2.png" alt="CAN Stack" className="section-image" style ={{objectFit: "fill",height: "100%"}} />
            </div>
            <div className="section-text">
              <h2>CAN Stack (Controller Area Network)</h2>
              <p>
                Ensures reliable and efficient data communication across the vehicle network:
              </p>
              <ul>
                <li><strong>Reliable Communication:</strong> Provides a robust framework for high-speed data exchange between ECUs.</li>
                <li><strong>Signal Management:</strong> Handles complex message filtering, periodic transmission, and reception with minimal CPU overhead.</li>
                <li><strong>Fault Handling:</strong> Integrated network management to detect and recover from communication bus errors.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture3.png" alt="UDS Stack" className="section-image" style ={{objectFit: "fill",height: "100%"}} />
            </div>
            <div className="section-text">
              <h2>UDS Stack (Unified Diagnostic Services - ISO 14229)</h2>
              <p>
                Provides comprehensive diagnostic capabilities compliant with ISO 14229:
              </p>
              <ul>
                <li><strong>Diagnostics & Servicing:</strong> Full implementation of diagnostic services for fault memory (DTC) reading, data sampling, and routine controls.</li>
                <li><strong>Security Access:</strong> Managed authentication levels to protect sensitive ECU functions during workshop or factory access.</li>
                <li><strong>Standard Compliance:</strong> Fully aligned with automotive standards for seamless integration with external tester tools.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture4.png" alt="XCP Stack" className="section-image" style ={{objectFit: "fill",height: "100%"}} />
            </div>
            <div className="section-text">
              <h2>XCP Stack (Universal Measurement and Calibration Protocol)</h2>
              <p>
                Facilitates real-time measurement and calibration for optimal ECU performance:
              </p>
              <ul>
                <li><strong>Real-Time Calibration:</strong> Enables high-performance measurement and calibration of internal ECU variables during runtime.</li>
                <li><strong>Transport Independence:</strong> Operates efficiently over CAN, Ethernet, or FlexRay interfaces.</li>
                <li><strong>Optimization:</strong> Optimized for low memory footprint while maintaining high data throughput for developers and testers.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture1.png" alt="NVM manager" className="section-image" style ={{objectFit: "fill",height: "100%"}} />
            </div>
            <div className="section-text">
              <h2>NVM Manager</h2>
              <p>
                Delivers robust non-volatile memory management for critical data retention and system configuration:
              </p>
              <ul>
                <li><strong>Reliable Storage:</strong> Provides flash memory management for dependable data storage and system updates.</li>
                <li><strong>EEPROM Emulation:</strong> Supports emulation using flash memory for non-volatile data storage.</li>
                <li><strong>Data Integrity:</strong> Utilizes backup RAM to retain critical information during system resets or power loss.</li>
                <li><strong>Customization:</strong> Includes a dedicated configuration tool for streamlined setup and easy customization.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture0.png" alt="Flash Bootloader Stack" className="section-image" style ={{objectFit: "fill",height: "100%"}} />
            </div>
            <div className="section-text">
              <h2>Flash Bootloader Stack</h2>
              <p>
                Ensures secure system startup and reliable software updates through a multi-stage boot process:
              </p>
              <ul>
                <li><strong>Primary Bootloader (PBL):</strong> Responsible for hardware initialization and validating the integrity of the Secondary Bootloader.</li>
                <li><strong>Secondary Bootloader (SBL):</strong> Manages secure flash programming, diagnostics, and critical application updates.</li>
                <li><strong>Application (App):</strong> Contains the core ECU functionality and executes only after successful boot validation.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_RTOS/Picture.jpeg" alt="Free RTOS Safety Plugin Features" className="section-image" style={{objectFit: "fill",height: "100%"}}/>
            </div>
            <div className="section-text">
              <h2>Free RTOS Safety Plugin Features</h2>
              <p>
                Our Free RTOS Safety Plugin empowers automotive embedded systems with ISO 26262 ASIL-D compliance.
              </p>
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

export default P1;