import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/ProductShowcase.css";

const products = [
  {
    id: "Inhousesoftwarestack",
    name: "In house SoftWare stack (COTS)",
    img: "/IHSS2.jpg",
    Cdesc: "TBS’s In-House Software Stack (Commercial Off-The-Shelf, or COTS)",
    desc: "TBS’s In-House Software Stack (Commercial Off-The-Shelf, or COTS) is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems, middleware, and application layers to streamline development and reduce time-to-market.",
  },
  {
    id: "EVgenericdeck",
    name: "EV generic deck",
    img: "/EVdeck2.jpg",
    Cdesc: "TBS’s EV Generic Deck is a versatile, modular powertrain solution",
    desc: "TBS’s EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes a high-voltage motor, battery management system, and inverter, offering a plug-and-play foundation for prototyping and production. Compatible with various vehicle architectures",
  },
  {
    id: "HMI",
    name: "HMI",
    img: "/HMI.jpg",
    Cdesc: "TBS’s Automotive Human-Machine Interface (HMI)",
    desc: "TBS’s Automotive Human-Machine Interface (HMI) transforms vehicle cabins into intuitive, connected ecosystems, enhancing driver and passenger experiences while prioritizing safety. Powered by Android Automotive OS, it integrates advanced touchscreens, voice recognition, and gesture controls to unify navigation, multimedia",
  },
  {
    id: "SMU",
    name: "Secure Manufacturing Unit",
    img: "/SMU2.jpg",
    Cdesc: "TBS’s Secure Manufacturing Unit (SMU) safeguards automotive production",
    desc: "TBS’s Secure Manufacturing Unit (SMU) safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout. In connected factories",
  },
  {
    id: "SmartHIL",
    name: "Smart HIL",
    img: "/SmartHIL2.jpg",
    Cdesc: "TBS’s Smart Hardware-in-the-Loop (HIL)",
    desc: "TBS’s Smart Hardware-in-the-Loop (HIL) system revolutionizes automotive testing by bridging virtual simulations with real hardware, enabling precise validation of ECUs and control algorithms in a risk-free environment. Using real-time processors, it emulates vehicle dynamics, sensors, and actuators, testing scenarios from normal drives",
  },
  {
    id: "DFU",
    name: "Diagnostics flashing unit",
    img: "/DFU2.jpg",
    Cdesc: "TBS’s Diagnostics Flashing Unit (DFU)",
    desc: "TBS’s Diagnostics Flashing Unit (DFU) is an all-in-one tool for seamless ECU reprogramming and diagnostics, streamlining maintenance, calibration, and updates across the vehicle lifecycle. Supporting UDS, CCP/XCP, and OBD-II protocols, it enables secure flashing over CAN, Ethernet, or LIN, with encryption to prevent tampering.",
  },
  {
    id: "RTOS",
    name: "Free RTOS Safety Plugin",
    img: "/RTOS2.jpg",
    Cdesc: "TBS’s Free RTOS Safety Plugin transforms standard",
    desc: "TBS’s Free RTOS Safety Plugin transforms standard FreeRTOS kernels into certified safety-critical foundations for automotive embedded systems, pre-qualified to ISO 26262 ASIL-D and IEC 61508 SIL-3. This lightweight extension enhances robustness with error handling, memory partitioning, and deterministic scheduling",
  },
];

export default function ProductSlider() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const current = products[index];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevProduct = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const nextProduct = () =>
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  return (
    <div>
      <h2 style={{ color: "white" }}>Our Products</h2>

      {isMobile ? (
        <section className="products" >
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id} onClick={() => {
                  navigate(`/pages/${current.id}`);
                  window.scrollTo(0, 0);
                }}>
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.Cdesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="products" >
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
      )}

    </div>
  );
}
