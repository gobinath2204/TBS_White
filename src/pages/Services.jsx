import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Services.css";

const services = [
  {
    id: "SystemDevelopment",
    name: "System Development",
    img: "/sysenggdev.jpg",
    desc: "Our system engineering team delivers exceptional system engineering with accurate, fully traceable requirements for automotive ECUs. We deliver solutions in compliance with Functional Safety (ISO 26262), Cybersecurity (ISO 21434), and Regulatory Standards.",
  },
  {
    id: "SoftwareEngineering",
    name: "Software Engineering",
    img: "/swengg.jpg",
    desc: "TBS delivers comprehensive software engineering services for automotive systems, covering requirement development, architecture design, and rigorous testing methodologies. Our expertise spans AUTOSAR and non-AUTOSAR development with ISO 26262 compliance.",
  },
  {
    id: "HardwareEngineering",
    name: "Hardware Engineering",
    img: "/hwengg.jpg",
    desc: "TBS provides comprehensive ASPICE-compliant Hardware Engineering services covering the complete development lifecycle from requirements to verification. Our expertise includes schematic and PCB design, safety analysis, and rigorous testing methodologies.",
  },
  {
    id: "SystemValidation",
    name: "System Validation",
    img: "/sysval.jpg",
    desc: "TBS excels in System Validation through comprehensive SYS.4 DVP frameworks, delivering robust validation solutions for automotive systems. Our services ensure compliance with ISO 26262 and utilize advanced automation for optimal performance.",
  },
  {
    id: "SafetyandRegulatory",
    name: "Safety & Regulatory",
    img: "/s&r.jpg",
    desc: "TBS delivers cutting-edge safety and regulatory compliance solutions covering functional safety, cybersecurity, and high-voltage safety standards. Our expertise spans ISO 26262, ISO 21434, and global market regulations.",
  },
];

export default function ServiceShowcase() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/pages/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="services-container">
      <h2 className="services-title">Our Services</h2>
      <h2 className="services-content">Type content here, Very blank with just the heading</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div 
            className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`} 
            key={service.id}
          >
            <div className="service-image">
              <img src={service.img} alt={service.name} />
            </div>
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <button className="read-more" onClick={() => handleNavigate(service.id)}>
                <span>Read More</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}