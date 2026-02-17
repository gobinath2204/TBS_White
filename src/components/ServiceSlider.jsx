import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/ServiceShowcase.css";

const services = [
  {
    id: "SystemEngineering",
    name: "System Engineering",
    img: "/Hero_S/Sysengg.png",
    Cdesc: "our system engineering services deliver comprehensive solutions",
    desc: "Our system engineering team delivers exceptional system engineering with accurate, fully traceable requirements for automotive ECUs. We deliver solutions in compliance with Functional Safety (ISO 26262), Cybersecurity (ISO 21434), and Regulatory Standards.",
  },
  {
    id: "SoftwareEngineering",
    name: "Software Engineering",
    img: "/Hero_S/swengg.jpg",
    Cdesc: "our software engineering services deliver robust, scalable",
    desc: "TBS delivers comprehensive software engineering services for automotive systems, covering requirement development, architecture design, and rigorous testing methodologies. Our expertise spans AUTOSAR and non-AUTOSAR development with ISO 26262 compliance.",
  },
  {
    id: "HardwareEngineering",
    name: "Hardware Engineering",
    img: "/Hero_S/hwengg.jpg",
    Cdesc: "We provide complete ASPICE-compliant Hardware Engineering (HWE) services",
    desc: "TBS provides comprehensive ASPICE-compliant Hardware Engineering services covering the complete development lifecycle from requirements to verification. Our expertise includes schematic and PCB design, safety analysis, and rigorous testing methodologies.",
  },
  {
    id: "SystemValidation",
    name: "System Validation",
    img: "/Hero_S/sysval.jpg",
    Cdesc: "we provide comprehensive system validation services to ensure automotive systems",
    desc: "TBS excels in System Validation through comprehensive SYS.4 DVP frameworks, delivering robust validation solutions for automotive systems. Our services ensure compliance with ISO 26262 and utilize advanced automation for optimal performance.",
  },
  {
    id: "SafetyandRegulatory",
    name: "Safety & Regulatory",
    img: "/Hero_S/S&R.jpeg",
    Cdesc: "we deliver cutting-edge software and hardware solutions to ensure compliance",
    desc: "TBS delivers cutting-edge safety and regulatory compliance solutions covering functional safety, cybersecurity, and high-voltage safety standards. Our expertise spans ISO 26262, ISO 21434, and global market regulations.",
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
                navigate(`/pages/Services/${service.id}`);
                window.scrollTo(0, 0);
              }}>
                <img src={service.img} alt={service.name} />
                <div className="product-info service-card-content">
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
            <span className="arrow left text-white" onClick={prevService}>
              ❮
            </span>

            <div className="slide reverse" key={currentService.id}>
              <div className="slide-content pl-4rem">
                <h3>{currentService.name}</h3>
                <p>{currentService.desc}</p>
                <button
                  className="read-more"
                  onClick={() => {
                    navigate(`/pages/Services/${currentService.id}`);
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
                  className="images-overlay w-65-perc left-35-perc br-0-25px-25px-0"
                ></span>
              </div>
            </div>

            <span className="arrow right text-white" onClick={nextService}>
              ❯
            </span>
          </div>
        </section>
      )}

    </div>

  );
}
