import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P1 = () => {
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
          title="In-House Software Stack (COTS)"
          description="TBS In-House Commercial off the shelf software stack developed for Automotive communication, Diagnostics, Calibration, and Safety RTOS."
          keywords="COTS, Software Stack, TBS, Automotive Communication, CAN, UDS, XCP, RTOS"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/IHSS.png" alt="In-House Software Stack" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">In-House Software Stack (COTS)</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p className="fs-1-2rem text-justify">
              Our <b>In House Commercial off the shelf software stack</b> developed for Automotive communication (CAN), Diagnostics(UDS),UDS on CAN,  Calibration(XCP), Safe RTOS(Free RTOS + Safety Plugin), Flash Boot Loaders(PBL +SBL+App), NVM Manager & BSW Low Level Drivers. Our stacks are in compliance with respective ISO Standards. Our stacks are already in production vehicles. Our all stack have configuration Tools.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture0.jpeg" alt="CAN Stack" className="section-image object-fit-fill h-100" />
            </div>
            <div className="section-text">
              <h2>CAN Stack (Controller Area Network)</h2>
              <ul>
                <li><strong>Features:</strong> Multi-Channel, GUI Auto Code Tool, ISO11898/ASIL-B compliant, AUTOSAR architecture, production-ready.</li>
                <li><strong>CAN NM:</strong> Efficiently manages network Wakeup & Sleep CAN Modes.</li>
                <li><strong>CAN Manager:</strong> Exposes crucial network signals directly to the application layer.</li>
                <li><strong>CAN PDUR:</strong> Routes protocol-independent I-PDUs seamlessly between upper and lower bus layers.</li>
                <li><strong>CAN TP:</strong> Segments and reassembles large N-PDUs (&gt;8 bytes) across multiple CAN frames.</li>
                <li><strong>CAN IF:</strong> Facilitates interaction between upper software layers and underlying hardware.</li>
                <li><strong>CAN Driver:</strong> Direct low-level interaction with CAN Controllers and Transceivers.</li>
                <li><strong>ISO11898 Compliance:</strong> Delivered with physical/communication test procedures and concrete evidence.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture1.jpeg" alt="UDS Stack" className="section-image object-fit-fill h-100" />
            </div>
            <div className="section-text">
              <h2>UDS Stack (Unified Diagnostic Services - ISO 14229)</h2>
              <ul>
                <li><strong>Standards:</strong> Full UDSonCAN, ISO14229, and ISO15765 compliance.</li>
                <li><strong>Features:</strong> Interactive GUI configuration, AUTOSAR architecture, and production-proven reliability.</li>
                <li><strong>Core Modules:</strong> Includes UDS Core, App Support, SecAcc, DTC Core, and DTC Application.</li>
                <li><strong>ISO14229 Automated Tests:</strong> Comprehensive scripts proving stack service compliance across physical and functional addressing.</li>
                <li><strong>ISO15765 Automated Tests:</strong> Detailed scripts verifying UDSonCAN communication compliance with complete test evidence.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture2.jpeg" alt="XCP Stack" className="section-image object-fit-fill h-100" />
            </div>
            <div className="section-text">
              <h2>XCP Stack (Universal Measurement and Calibration Protocol)</h2>
              <ul>
                <li>XCPonCAN Support</li>
                <li>ASAM 1.1 Part 2 Protocol Layer Compliance</li>
                <li>ASAM 1.1 Part 3 Transport Layer Compliance</li>
                <li>In production Vehicles</li>
                <li>Configuration Tool to support selection of services and NRCs</li>
                <li>Supports measurement, calibration, and flash programming in automotive systems.</li>
                <li>Synchronous data acquisition</li>
                <li>Synchronous data stimulation</li>
                <li>Online memory calibration (read / write access)</li>
                <li>Flash Programming for ECU development purposes.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture3.jpeg" alt="NVM manager" className="section-image object-fit-fill h-100" />
            </div>
            <div className="section-text">
              <h2>NVM Manager, Watchdog & Drivers</h2>
              <ul>
                <li><strong>NVM Manager:</strong> Flash management, EEPROM emulation, Backup RAM, ensuring reliable data storage across power cycles.</li>
                <li><strong>Watchdog Manager:</strong> Configurable multi-window execution monitoring with immediate event alerts.</li>
                <li><strong>Low Level Drivers:</strong> Comprehensive suite including Bluetooth, Sound, Timers, PWM, ADC, UART, SPI, RTC, and Flash/EEPROM drivers.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_COTS/Picture4.jpeg" alt="Flash Bootloader Stack" className="section-image object-fit-fill h-100" />
            </div>
            <div className="section-text">
              <h2>Flash Bootloader Stack</h2>
              <ul>
                <li><strong>Robust Updates:</strong> A highly reliable flash programming solution for consistent ECU software updates.</li>
                <li><strong>Secure Flashing:</strong> Employs secure download, erase, and programming flows for seamless in-field reprogramming.</li>
                <li><strong>Integrity Checks:</strong> Ensures strictly controlled startup handling via robust built-in integrity verification.</li>
                <li><strong>OEM Integration:</strong> Designed for effortless integration with standard OEM diagnostic tools and protocols.</li>
                <li><strong>Safety Focused:</strong> Aligns with ASIL-based safety requirements preventing critical unsafe operating states.</li>
                <li><strong>Standard Architecture:</strong> Provides unified interfaces for memory, diagnostics, and secure bootloader communication.</li>
                <li><strong>Platform Availability:</strong> Readily available for TI Sitara, R4F/R5F, ST Platforms, and the Infineon family.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_RTOS/Picture.jpeg" alt="Free RTOS Safety Plugin Features" className="section-image object-fit-fill h-100" />
            </div>
            <div className="section-text">
              <h2>Free RTOS Safety Plugin Features</h2>
              <p>
                Our Free RTOS Safety Plugin empowers automotive embedded systems with ISO 26262 ASIL-D compliance.
              </p>
              <ul>
                <li><strong>SAFECRC Checker:</strong> Assures comprehensive data integrity across the entire Safety RTOS environment.</li>
                <li><strong>SAFEX Change:</strong> Strictly facilitates safe, fully validated data exchange between core system components.</li>
                <li><strong>Kernel Updates:</strong> Deploys validated Free RTOS versions completely preserving essential real-time execution behavior.</li>
                <li><strong>SAFE Checkpoints:</strong> Actively monitors critical tasks ensuring correct sequencing within strict time limits.</li>
                <li><strong>Safety Analysis:</strong> Deep kernel evaluation targeting complex memory, timing, and scheduling failure modes.</li>
                <li><strong>Execution Verification:</strong> Confirms critical tasks consistently reach defined execution points within mandatory time windows.</li>
              </ul>
            </div>
          </section>
        </div>
        {/* Navigation Arrows */}
        <PageNavigation type="products" currentId="Inhousesoftwarestack" />
      </div>
    </>
  );
};

export default P1;