import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/ProductShowcase.css";



const products = [
  {
    id: "P1",
    name: "In house SoftWare stack (COTS)",
    img: "/software.jpg",
    desc: "TBS’s In-House Software Stack (Commercial Off-The-Shelf, or COTS) is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems, middleware, and application layers to streamline development and reduce time-to-market.",
  },
  {
    id: "P2",
    name: "EV generic deck",
    img: "/deck.jpg",
    desc: "TBS’s EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes a high-voltage motor, battery management system, and inverter, offering a plug-and-play foundation for prototyping and production.",
  },
  {
    id: "P3",
    name: "HMI",
    img: "/hmi.jpg",
    desc: "TBS’s Automotive Human-Machine Interface (HMI) transforms vehicle cabins into intuitive, connected ecosystems, enhancing driver and passenger experiences while prioritizing safety.",
  },
  {
    id: "P4",
    name: "Secure Manufacturing Unit",
    img: "/SMU.webp",
    desc: "TBS’s Secure Manufacturing Unit (SMU) safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout.",
  },
  {
    id: "P5",
    name: "Smart HIL",
    img: "/HIL.jpg",
    desc: "TBS’s Smart Hardware-in-the-Loop (HIL) system revolutionizes automotive testing by bridging virtual simulations with real hardware, enabling precise validation of ECUs and control algorithms.",
  },
  {
    id: "P6",
    name: "Diagnostics flashing unit",
    img: "/DFU.jpeg",
    desc: "TBS’s Diagnostics Flashing Unit (DFU) is an all-in-one tool for seamless ECU reprogramming and diagnostics, streamlining maintenance, calibration, and updates across the vehicle lifecycle.",
  },
  {
    id: "P7",
    name: "Free RTOS Safety Plugin",
    img: "/RTOS.webp",
    desc: "TBS’s Free RTOS Safety Plugin transforms standard FreeRTOS kernels into certified safety-critical foundations for automotive embedded systems.",
  },
];

export default function ProductSlider() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const current = products[index];

  const prevProduct = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const nextProduct = () =>
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  return (
    <section className="products" id="products">
      <h2 style={{ color: "white" }}>Our Products</h2>

      <div className="slider-container">
        <span className="arrow left" style={{ color: "white" }} onClick={prevProduct}>
          ❮
        </span>

        <div className="slide">
          <div className="slide-image">
            <img src={current.img} alt={current.name} />
            <span className="image-overlay"></span>
          </div>
          <div className="slider-content">
            <h3>{current.name}</h3>
            <p>{current.desc}</p>
            <button
              className="reads-more"
              onClick={() => {
                navigate(`/pages/${current.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <span>Read More</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
            </svg>
            </button>
          </div>
        </div>

        <span className="arrow right" style={{ color: "Black" }} onClick={nextProduct}>
          ❯
        </span>
      </div>
    </section>
  );
}
