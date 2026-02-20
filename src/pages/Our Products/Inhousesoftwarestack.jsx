import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P1 = () => {
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
                <li>Multi Channel Support, GUI Config Auto Code Tool, ISO11898 Compliance, ASIL – B Support, Autosar Architecture framework, In production Vehicles</li>
                <li><strong>CAN NM:</strong> Manages Wakeup & Sleep CAN Modes</li>
                <li><strong>CAN Manager:</strong> Exposes signals to the application layer</li>
                <li><strong>CAN Pdur:</strong> PDUR (PDU Router) routes protocol-independent I-PDUs between upper layers and lower bus-specific layers (CANIf/LINIf) in CAN stack.</li>
                <li><strong>CAN TP:</strong> Segments large N-PDUs (&gt;8 bytes) into multiple CAN frames and reassembles them on reception.</li>
                <li><strong>CAN IF:</strong> Interacts with Upper layer & hardware.</li>
                <li><strong>CAN Driver:</strong> Interacts with CAN Controller & CAN Transceiver</li>
                <li><strong>ISO11898 Compliance</strong> CAN Physical and Communication Test procedure and evidence</li>
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
                <li>UDSonCAN Support​, ISO14229 Compliance​, ISO15765 Compliance​</li>
                <li>Interactive GUI Tool for Configuration​, AutoSaR Framework Architecure​, In Production Vehciles​</li>
                <li>UDS Core, UDS app, UDS app support, UDS SecAcc, DTC Core & DTC application</li>
                <li><strong>Automated Test script</strong> to Prove the stack compliance of Services(ISO14229) Test procedure and evidences for applicable and no applicable services and sub functions for both Physical and Functional addressing</li>
                <li><strong>Automated Test script</strong>to Prove the stack compliance of Communication UDSonCAN(ISO15765) Test procedure and evidences for applicable and no applicable services and sub functions for both Physical and Functional addressing</li>
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
                <li><strong>NVM Manager:</strong> Flash Management, EEPROM Emulation, Backup RAM, Config Tool. Ensures reliable data storage and retrieval across power cycles.</li>
                <li><strong>Watchdog Manager:</strong> Multi Window, Event alert, Configurable</li>
                <li><strong>Low Level Drivers:</strong> Bluetooth Stack, Sound Manager, Timers, PWM, ADC, Port, UART, I2C, SPI, Real Time Clock, EEPROM Driver, Flash Driver</li>
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
                <li>A reliable and robust Flash programming solution for safe and consistent ECU software updates.</li>
                <li>Supports secure download, erase, and programming flows for seamless in‑field reprogramming.</li>
                <li>Ensures controlled startup and update handling with built‑in integrity checks.</li>
                <li>Designed for smooth integration with OEM diagnostic tools and standard communication protocols.</li>
                <li>ASIL‑based safety requirements to avoid unsafe states.</li>
                <li>Provides standard architecture and interfaces for communication, memory, and diagnostics used in the bootloader.</li>
                <li>Standard for CAN communication used during flashing and diagnostics.</li>
                <li>Standard diagnostics protocol for ECU reprogramming.</li>
                <li>Defines download, data transfer, and security access for flashing.</li>
                <li>Readily available for TI – Sitara & TI R4F & R5F & ST Platform & Infineon Family</li>
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
        <PageNavigation type="products" currentId="Inhousesoftwarestack" />
      </div>
    </>
  );
};

export default P1;