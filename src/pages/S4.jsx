import React, { useEffect, useRef } from "react";
import './Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";

const P2 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const videoPath = "/videos/In-house-Software.mp4";

  const handlePrevious = () => {
    navigate("/pages/s3");
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    navigate("/pages/s5");
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
          <h1 className="hero-title">System Validation Services</h1>
        </div>
     {/* <h1 className="hero-title">System Validation Services</h1> */}
        {/* Creative Content Sections */}
        <div className="product-page">

          <section style={{marginTop: "0", paddingTop: "0.5rem"}}>
            {/* <div className="section-image-wrapper">
              <img src="/software.jpg" alt="Software Overview" className="section-image" />
              <div className="section-image-overlay"></div>
            </div> */}
            <div >
              {/* <h2>Overview</h2> */}
              <p style={{fontSize: "1.5rem", textAlign: "center", padding: "6rem 0"}}>
                At TBS, we provide comprehensive system validation services to ensure automotive systems meet performance, safety, and regulatory requirements. Our expertise encompasses design verification, hardware-in-the-loop (HIL) testing, system integration, and various validation methodologies, delivering reliable and efficient solutions for automotive clients.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/SMU.jpg" alt="Custom UI" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>SYS.4 DVP & Test+Design</h2>
              <p>
                Our SYS.4 Design Verification Plan (DVP) and testing services ensure robust system performance. We develop tailored DVP strategies, integrating design and testing to validate system functionality against requirements. Our team conducts simulations, stress tests, and failure mode analysis to ensure compliance with standards like ISO 26262, delivering high-quality systems ready for production.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>SYS.4 HIL Design Test & Automation</h2>
              <p>
                We specialize in SYS.4 Hardware-in-the-Loop (HIL) design, testing, and automation. Our HIL solutions simulate real-world conditions to validate electronic control units (ECUs). We design automated test environments, enabling rapid, repeatable testing for reliability and performance. This reduces development time while ensuring compliance with automotive standards.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>SYS.5 DVP & Test+Design</h2>
            <p>
              For SYS.5, we provide advanced DVP and testing services, focusing on next-generation automotive systems. Our integrated approach combines design optimization with rigorous testing, including functional and environmental tests, to meet stringent requirements. We ensure systems are robust, scalable, and compliant with industry standards like ISO 16750.
            </p>
            </div>
          </section>
        

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>SYS.5 HIL Design Test & Automation</h2>
              <p>
                Our SYS.5 HIL services focus on advanced HIL testbeds for complex systems. We design automated HIL setups to validate ECUs under dynamic conditions, ensuring seamless integration and performance. Our automation frameworks enhance test efficiency, enabling comprehensive validation of cutting-edge automotive technologies while meeting regulatory demands.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>System Integration/Dyno Validation</h2>
            <p>
              We offer system integration and dynamometer (dyno) validation to ensure seamless interaction of vehicle subsystems. Our services include integration testing, performance tuning, and dyno-based validation under real-world conditions. This ensures optimal system interoperability, efficiency, and compliance with performance specifications.
            </p>
            </div>
          </section>

        <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Labcar Validation</h2>
              <p>
                Our Labcar validation services provide a controlled environment for testing automotive systems. We simulate vehicle conditions to validate ECUs, sensors, and actuators, ensuring functionality and reliability. Our rigorous testing protocols, aligned with industry standards, accelerate development and reduce risks before vehicle integration.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Vehicle Validation</h2>
            <p>
              We conduct comprehensive vehicle validation to ensure systems perform reliably in real-world scenarios. Our services include on-road and track testing, covering performance, safety, and durability. We validate systems against regulatory and OEM requirements, ensuring vehicles are market-ready and compliant with global standards.
            </p>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/HIL.jpg" alt="Connectivity" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>EOL Validation</h2>
              <p>
                Our End-of-Line (EOL) validation ensures manufacturing quality and system performance. We develop automated EOL test protocols to verify functionality, safety, and calibration of vehicle systems. This ensures every unit meets specifications, enhancing production efficiency and customer satisfaction.
              </p>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/hmi.png" alt="Software Updates" className="section-image" />
              <div className="section-image-overlay"></div>
            </div>
            <div className="section-text">
              <h2>Environmental Validation</h2>
            <p>
              We provide environmental validation to ensure systems withstand harsh conditions. Our testing includes temperature, humidity, vibration, and corrosion assessments, adhering to standards like ISO 16750. We validate durability and performance, ensuring compliance with environmental regulations and reliability in extreme conditions.
            </p>
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
          <div className=" arrow">
            ❯
          </div>
        </button>
      </div>
    </>
  );
};

export default P2;
