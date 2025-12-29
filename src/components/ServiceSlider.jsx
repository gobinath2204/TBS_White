import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/ServiceShowcase.css";


const services = [
  {
    id: "SystemDevelopment",
    name: "System Development",
    img: "/sysenggdev.jpg",
    Cdesc: "our system engineering services deliver comprehensive solutions",
    desc: "At TBS, our system engineering services deliver comprehensive solutions for automotive systems, ensuring safety, reliability, and compliance. Our expertise spans requirement elicitation, architecture development, risk analysis, communication protocols, functional safety",
  },
  {
    id: "SoftwareEngineering",
    name: "Software Engineering",
    img: "/swengg.jpg",
    Cdesc: "our software engineering services deliver robust, scalable",
    desc: "At TBS, our software engineering services deliver robust, scalable, and compliant solutions for automotive systems. Our expertise spans requirement development, architecture design, software development, detailed design, unit testing, interface validation, and acceptance testing",
  },
  {
    id: "HardwareEngineering",
    name: "Hardware Engineering",
    img: "/hwengg.jpg",
    Cdesc: "We provide complete ASPICE-compliant Hardware Engineering (HWE) services",
    desc: "At TBS, We provide complete ASPICE-compliant Hardware Engineering (HWE) services from HWE.1 to HWE.4. Our structured approach standardizes and improves hardware development, ensuring quality, reliability, and safety in complex automotive systems, while enabling seamless integration ",
  },
  {
    id: "SystemValidation",
    name: "System Validation",
    img: "/sysval.jpg",
    Cdesc: "we provide comprehensive system validation services to ensure automotive systems",
    desc: "At TBS, we provide comprehensive system validation services to ensure automotive systems meet performance, safety, and regulatory requirements. Our expertise encompasses design verification, hardware-in-the-loop (HIL) testing, system integration, and various validation methodologies",
  },
  {
    id: "SafetyandRegulatory",
    name: "Safety & Regulatory",
    img: "/s&r.jpg",
    Cdesc: "we deliver cutting-edge software and hardware solutions to ensure compliance",
    desc: "At TBS, we deliver cutting-edge software and hardware solutions to ensure compliance with stringent safety and regulatory standards. Our expertise spans functional safety, cybersecurity, high-voltage (HV) safety, automotive CAN standards, market regulations, electrical testing",
  },
];

export default function ServiceSlider() {
  const navigate = useNavigate();
  const [serviceIndex, setServiceIndex] = useState(0);
  const currentService = services[serviceIndex];

  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(window.innerWidth < 1024);
  
      const handleResize = () => setIsMobile(window.innerWidth < 1024);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const prevService = () =>
    setServiceIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );

  const nextService = () =>
    setServiceIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );

  return (
      <div>
      <h2>Our Services</h2>
      {isMobile ? (
        <section className="products">
          <div className="product-grid">
            {services.map((service) => (
              <div className="product-card" key={service.id} onClick={() => {
                  navigate(`/pages/${currentService.id}`);
                  window.scrollTo(0, 0);
                }}>
                <img src={service.img} alt={service.name} />
                <div className="product-info">
                  <h3>{service.name}</h3>
                  <p>{service.Cdesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="products" id="services">
        <div className="slide-container">
          <span className="arrow left" style={{ color: "white" }} onClick={prevService}>
            ❮
          </span>

          <div className="slide reverse">
            <div className="slide-content" style={{ paddingLeft: "4rem" }}>
              <h3>{currentService.name}</h3>
              <p>{currentService.desc}</p>
              <button
                className="read-more"
                onClick={() => {
                  navigate(`/pages/${currentService.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <span>Read More</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="slide-image">
              <img src={currentService.img} alt={currentService.name} />
              <span
                className="images-overlay"
                style={{
                  width: "65%",
                  left: "35%",
                  borderRadius: "0 25px 25px 0",
                }}
              ></span>
            </div>
          </div>

          <span className="arrow right" style={{ color: "white" }} onClick={nextService}>
            ❯
          </span>
        </div>
        </section>
      )}

    </div>
    
  );
}
