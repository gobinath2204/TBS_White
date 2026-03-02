import React, { useEffect, useRef, useState } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const S2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);
  const imagePath = "/Hero_S/swengg.jpg";
  const galleryRef = useRef(null);

  const [activeImage, setActiveImage] = useState(null);
  const containerRef = useRef(null);
  const [scrollOffsetX, setScrollOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1)
      const totalScrollable = containerRef.current.offsetHeight - windowHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(0, scrolled / totalScrollable), 1);

      const grid = document.querySelector('.swe-gallery-grid');
      if (grid) {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          setScrollOffsetX(0); // Reset for mobile
          return;
        }

        const gridWidth = grid.scrollWidth;
        const viewportWidth = window.innerWidth;
        // The max scroll distance for the grid
        const maxMove = gridWidth - viewportWidth;
        setScrollOffsetX(progress * maxMove);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          title="Software Engineering Services"
          description="TBS software engineering team delivers comprehensive automotive software solutions strictly aligned with the ASPICE V-Model."
          keywords="Software Engineering, ASPICE, V-Model, ISO 26262, Cybersecurity, Automotive Software, TBS"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src={imagePath} alt="SW Engineering services" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title">Software Engineering Services</h1>
        </div>
        {/* Creative Content Sections */}
        <div className="product-page">

          <section >
            <p className="fs-1-2rem text-justify">
              Our <b>software engineering team</b> delivers comprehensive automotive software solutions strictly aligned with the ASPICE V-Model (SWE.1 to SWE.6). We cover the entire lifecycle from Requirements Elicitation and Architectural Design to Detailed Design, Unit Verification, Integration, and Qualification Testing. Ensuring full compliance with ISO 26262 and cybersecurity standards, we provide robust, scalable, and safety-critical software for next-generation automotive ECUs.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SW/Pictures0.jpeg" alt="Custom UI" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.1 Requirements Elicitation</h2>
              <p>
                The SWE.1 process derives, analyses, and documents software requirements from SYS.2 (System Requirements), SYS.3 (System Architecture), FuSa (Functional Safety) requirements, and HSI (Hardware Software Interface document or Hardware Schematics).
                Our SWE.1 process follows the ASPICE base practices, ensuring requirements are atomic, concise, and testable. It ensures bi-directional traceability and ASPICE compliance. Our requirements can be classified into:</p>
              <ul>
                <li><strong>Application requirements:</strong> Covers aspects of Measurement, Determination, Communication, Protection, and Control related requirements necessary for the application.</li>
                <li><strong>Basic Software Requirements:</strong> Covers middleware requirements such as timing/scheduling, MCU system services, interfacing of MCU drivers and libraries (Safety Libs, BIST Libs, Checksum Libs, Crypto Libs).</li>
                <li><strong>Microcontroller Requirements:</strong> Defines constraints like memory consumption, peripheral consumption, CPU consumption.</li>
                <li><strong>Diagnostics and Calibration Requirements:</strong> OBD, UDS and XCP (over CAN, Ethernet, LIN) adhering to automotive industry standards.</li>
                <li><strong>ASIL/SIL Level:</strong> Specifies the safety integrity level according to FuSa requirements and TSR manual.</li>
                <li><strong>CySa Level:</strong> Specifies the cyber security level according to CySa requirements.</li>
                <li><strong>Verification Type and Validation Criteria:</strong> Ensures the testability and adherence to V model or the ASPICE model.</li>
                <li><strong>FuSa and CySa Requirements:</strong> Covers the requirements derived from Functional Safety (ISO 26262) and Cybersecurity (ISO/SAE 21434) analyses, ensuring that the software system maintains safety compliance, freedom from unreasonable risk, and resilience against cyber threats throughout its lifecycle.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SW/Pictures1.jpeg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.2 Software Architectural Design</h2>
              <p>
                The SWE.2 process considers inputs from System Architecture (SYS.3), Software Requirements (SWE.1), FuSa (Functional Safety) requirements and HSI (Hardware Software Interface document or Hardware Schematics).
                Identify software components and follow modular approach for maximum re-usability. The process follows ASPICE base practices and ensures bidirectional traceability and ASPICE compliance.
              </p>
              <ul>
                <li><strong>Interface Diagrams:</strong> Context View and specification, Static and Dynamic diagrams (Sequence Diagrams), Use case diagrams.</li>
                <li><strong>Verification Type and Validation Criteria:</strong> Ensures the testability and adherence to V model or the ASPICE model.</li>
                <li><strong>Memory Map:</strong> RAM and ROM estimates.</li>
                <li><strong>Resource Map:</strong> CPU, peripheral and ISR estimates.</li>
                <li><strong>ASIL/SIL Level:</strong> Specifies the safety integrity level according to FuSa requirements.</li>
                <li><strong>CySa Level:</strong> Specifies the cyber security level according to CySa requirements.</li>
                <li><strong>Tools</strong> Enterprise Architect, MATLAB, Draw.io</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SW/Pictures2.jpeg" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.3 Software Detailed Design & Unit Construction</h2>
              <p>
                The SWE.3 process considers inputs from Software Requirements (SWE.1), FuSa (Functional Safety) requirements and SWE.2 (Software Architecture).
                The process identifies software units/ Functions and defines its interfaces (parameters and data types) to satisfy the input requirements. The process follows ASPICE base practices and ensures bidirectional traceability and ASPICE compliance.
              </p>
              <ul>
                <li><strong>Interface diagram:</strong> for each source file (Class diagram with public functions).</li>
                <li><strong>Sequence diagram:</strong> Represents the interaction of functions/ lifelines within the units.</li>
                <li><strong>Activity diagram/ Control Flow:</strong> (Flow Chart).</li>
                <li><strong>Data diagram:</strong> that provides information on the variables and the data types used within the units.</li>
                <li><strong>Tools:</strong> Enterprise Architect, Draw.io</li>
              </ul>
            </div>
          </section>
          {/* Sticky Horizontal Scroll Gallery */}
          <div className="sticky-gallery-wrapper" ref={containerRef}>
            <section className="swe-gallery">
              <h2 className="swe-gallery-heading">Our ASPICE Expertise</h2>
              <div className="swe-gallery-container">
                <div
                  className="swe-gallery-grid"
                  style={{ transform: `translateX(-${scrollOffsetX}px)` }}
                >
                  {[
                    { src: "/S_SW/Picture0.jpeg", label: "SWE.1 — Requirements" },
                    { src: "/S_SW/Picture1.jpeg", label: "SWE.2 — Architecture" },
                    { src: "/S_SW/Picture2.jpeg", label: "SWE.3 — Detailed Design" },
                    { src: "/S_SW/Picture3.jpeg", label: "SWE.4 — Unit Verification" },
                    { src: "/S_SW/Picture4.jpeg", label: "SWE.5 — Integration" },
                    { src: "/S_SW/Picture5.jpeg", label: "SWE.6 — Qualification" },
                  ].map((item, idx) => (
                    <div
                      className="swe-gallery-card"
                      key={idx}
                    /* onClick={() => setActiveImage(item)} */
                    >
                      <img src={item.src} alt={item.label} />
                      <span className="swe-gallery-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SW/Pictures3.jpeg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.4 Software Unit Verification</h2>
              <p>
                Comprehensive unit verification per detailed design specs with ISO 26262 ASIL compliance using Tessy, Ceedling, LDRA.
              </p>
              <ul>
                <li><strong>Verification strategy:</strong> Defined pass/fail criteria, entry/exit conditions, test infrastructure.</li>
                <li><strong>Statement Coverage:</strong> Every executable code line runs at least once. Basic white-box metric.</li>
                <li><strong>Branch Coverage:</strong> Tests true/false outcomes of decisions (if/else). Ensures both paths execute.</li>
                <li><strong>Decision Coverage:</strong> Same as branch—verifies decision points take both outcomes.</li>
                <li><strong>MC/DC Coverage:</strong> Each condition independently affects decision outcome. Highest rigor for ASIL-D safety (ISO 26262).</li>
                <li><strong>Bidirectional links:</strong> SWE.4 Tests ↔ SWE.3 units and detailed design.</li>
                <li><strong>Selected measures:</strong> Static analysis (MISRA), reviews, unit testing with regression coverage. The documented selection of verification measures shall have sufficient coverage according to the release scope.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/S_SW/Pictures4.jpeg" alt="Software Updates" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.5 Software Integration & Integration Verification</h2>
              <p>
                Sequential integration testing from units to full software stack with comprehensive verification against SWE.2 architecture.
              </p>
              <ul>
                <li>We define sequence, preconditions, and pass/fail criteria for comprehensive dataflow and timing verification.</li>
                <li>We leverage SIL environments, hardware debug interfaces, and continuous integration for robust validation.</li>
                <li>We do the Interface compliance, resource consumption, dynamic interaction validation.</li>
                <li>Stepwise or big-bang integration per release scope.</li>
                <li>Bidirectional links: SWE.5 Tests ↔ SWE.2 architecture.</li>
                <li>Consolidated pass/fail status communicated to all stakeholders for release decisions.</li>
                <li>Defined strategy, component testing, 100% coverage reports.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/S_SW/Pictures5.jpg" alt="Connectivity" className="section-image" />
            </div>
            <div className="section-text">
              <h2>SWE.6 Software Qualification Testing</h2>
              <p>
                Full verification of integrated software against SWE.1 requirements with defined techniques, criteria, and environments.
              </p>
              <ul>
                <li>We create test cases directly from SWE.1 requirements specs and verify integrated software produces exact expected outputs for each requirement.</li>
                <li>We test complete end-to-end functions (login → dashboard → data processing) ensuring software works correctly as a black box system.</li>
                <li>We Pass/fail criteria, entry/exit conditions, test sequences for functional/non-functional compliance, Selected measures covering release scope with regression testing.</li>
                <li>We Record pass/fail status and verification data for complete requirement coverage proof.</li>
                <li>Bidirectional links: SWE.5 Tests ↔ SWE.1 Requirements.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="services" currentId="SoftwareEngineering" />

        {/* Infographic Lightbox Modal */}
        {/* {activeImage && (
          <div className="infographic-modal" onClick={() => setActiveImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveImage(null)}>&times;</button>
              <div className="modal-body">
                <img src={activeImage.src} alt={activeImage.label} className="modal-image" />
                <h3 className="modal-caption">{activeImage.label}</h3>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default S2;
