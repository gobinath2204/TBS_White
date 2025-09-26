import React, { useEffect, useRef } from "react";
import './service-pages.css';
import { useNavigate } from "react-router-dom";
import "../index.css";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/s1");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/s3");
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
        {/* <div className="hero-container">
          <video autoPlay muted loop className="hero-video">
            <source src={videoPath} type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <h1 className="hero-title">In-house Software Stacks</h1>
        </div> */}
     <h1 className="hero-title">Software Engineering Services</h1>
        {/* Creative Content Sections */}
        <div className="product-page">

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Overview</h2>
              <p>
                At TBS, our software engineering services deliver robust, scalable, and compliant solutions for automotive systems. Our expertise spans requirement development, architecture design, software development, detailed design, unit testing, interface validation, and acceptance testing, ensuring high-quality software that meets stringent industry standards.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Software Requirement Development</h2>
              <p>
                We specialize in crafting precise software requirements aligned with ISO 26262 and ASPICE standards. Our team collaborates with clients to define functional, performance, and safety requirements, ensuring traceability and testability. Through iterative refinement, we create clear, comprehensive specifications that serve as the foundation for reliable automotive software development.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Software Architecture Development</h2>
              <p>
                Our software architecture development focuses on creating modular, scalable designs for automotive systems. Adhering to AUTOSAR and ISO 14229 standards, we design architectures that optimize performance, maintainability, and interoperability. Our solutions ensure seamless integration with hardware and support future scalability for complex vehicle applications.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Software Development (Tools Expertise)</h2>
            <p>
              We leverage industry-leading tools like MATLAB/Simulink, Vector CANoe, and dSPACE for automotive software development. Our team excels in embedded programming (C, C++, Python) and AUTOSAR-compliant development. We deliver optimized, high-performance code, ensuring reliability, efficiency, and compliance with automotive standards for ECUs and vehicle systems.
            </p>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Software Detailed Design</h2>
              <p>
                Our detailed design services translate requirements into structured software components. We create comprehensive design documentation, including flowcharts, state diagrams, and module specifications, adhering to MISRA C guidelines. This ensures maintainable, robust software that meets functional and safety requirements for automotive applications.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Software Unit Design & Test</h2>
            <p>
              We design and test software units to ensure functionality and reliability. Our unit testing, aligned with ISO 26262, uses tools like Tessy and LDRA to validate individual modules. We perform code coverage analysis, static analysis, and fault injection, ensuring defect-free software that meets ASIL requirements.
            </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Interface Design & Test</h2>
              <p>
                Our interface design and testing services ensure seamless communication between software modules and hardware. We develop robust APIs and protocols, including CAN, LIN, and Ethernet, and validate them through integration testing. Our rigorous testing ensures reliable data exchange and compliance with automotive communication standards.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Acceptance Test</h2>
            <p>
              We conduct comprehensive acceptance testing to validate software against customer and regulatory requirements. Using real-world scenarios and automated test frameworks, we verify functionality, performance, and safety. Our acceptance tests ensure systems are production-ready, compliant with standards like ASPICE, and meet client expectations for quality and reliability.
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

export default P2;
