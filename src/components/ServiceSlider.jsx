import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "S1",
    name: "System Development",
    img: "/hmi.png",
    desc: "Standalone system engineering services deliver comprehensive solutions for automotive systems",
  },
  {
    id: "S2",
    name: "Software Engineering",
    img: "/software.jpg",
    desc: "Specialize in crafting precise software requirements aligned with ISO 26262 and ASPICE standards",
  },
  {
    id: "S3",
    name: "Hardware Engineering",
    img: "/HIL.jpg",
    desc: "Excel in defining precise hardware requirements aligned with automotive standards like ISO 26262",
  },
  {
    id: "S4",
    name: "System Validation",
    img: "/SMU.jpg",
    desc: "Comprehensive system validation services to ensure automotive systems meet performance, safety, and regulatory requirements",
  },
  {
    id: "S5",
    name: "Safety & Regulatory",
    img: "/HWS.png",
    desc: "Specialize in developing and testing systems compliant with ISO 26262 functional safety standards",
  },
];

export default function ServiceSlider() {
  const navigate = useNavigate();
  const [serviceIndex, setServiceIndex] = useState(0);
  const currentService = services[serviceIndex];

  const prevService = () =>
    setServiceIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );

  const nextService = () =>
    setServiceIndex((prev) =>
      prev === services.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="products" id="services">
      <h2>Our Services</h2>

      <div className="slider-container">
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
              Read More
            </button>
          </div>
          <div className="slide-image">
            <img src={currentService.img} alt={currentService.name} />
            <span
              className="image-overlay"
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
  );
}
