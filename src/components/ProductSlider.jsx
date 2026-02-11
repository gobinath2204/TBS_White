import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/ProductShowcase.css";

const products = [
  {
    id: "Inhousesoftwarestack",
    name: "In house SoftWare stack (COTS)",
    img: "/Hero_P/IHSS.png",
    Cdesc: "TBS's In-House Software Stack (Commercial Off-The-Shelf, or COTS)",
    desc: "TBS's In-House Software Stack is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems and middleware to streamline development.",
  },
  {
    id: "EVgenericdeck",
    name: "EV generic deck",
    img: "/Hero_P/EVdeck.png",
    Cdesc: "TBS's EV Generic Deck is a versatile, modular powertrain solution",
    desc: "TBS's EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes high-voltage motor, battery management system, and inverter for plug-and-play foundation.",
  },
  {
    id: "HMI",
    name: "HMI",
    img: "/Hero_P/HMI.png",
    Cdesc: "TBS's Automotive Human-Machine Interface (HMI)",
    desc: "TBS's Automotive HMI transforms vehicle cabins into intuitive, connected ecosystems. Powered by Android Automotive OS, it integrates advanced touchscreens, voice recognition, and gesture controls for enhanced experiences.",
  },
  {
    id: "SMU",
    name: "Secure Manufacturing Unit",
    img: "/Hero_P/SMU.png",
    Cdesc: "TBS's Secure Manufacturing Unit (SMU) safeguards automotive production",
    desc: "TBS's Secure Manufacturing Unit safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout with ISO/SAE 21434-compliant software protection.",
  },
  {
    id: "SmartHIL",
    name: "Smart HIL",
    img: "/Hero_P/SmartHIL.png",
    Cdesc: "TBS's Smart Hardware-in-the-Loop (HIL)",
    desc: "TBS's Smart HIL system revolutionizes automotive testing by bridging virtual simulations with real hardware, enabling precise validation of ECUs and control algorithms in a risk-free environment.",
  },
  {
    id: "DFU",
    name: "Diagnostic Tools",
    img: "/Hero_P/DFU.png",
    Cdesc: "TBS's Diagnostic Tools (DFU)",
    desc: "TBS's Diagnostic Tools is an all-in-one tool for seamless ECU reprogramming and diagnostics, supporting UDS, CCP/XCP, and OBD-II protocols with secure flashing capabilities.",
  },
  {
    id: "RTOS",
    name: "Free RTOS Safety Plugin",
    img: "/Hero_P/RTOS.png",
    Cdesc: "TBS's Free RTOS Safety Plugin transforms standard",
    desc: "TBS's Free RTOS Safety Plugin transforms standard FreeRTOS kernels into certified safety-critical foundations, pre-qualified to ISO 26262 ASIL-D and IEC 61508 SIL-3 for automotive systems.",
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
      <h2 >Our Products</h2>

      {isMobile ? (
        <section className="products" >
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id} onClick={() => {
                navigate(`/pages/Our Products/${product.id}`);
                window.scrollTo(0, 0);
              }}>
                <img src={product.img} alt={product.name} />
                <div className="product-info product-card-content">
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

            <div className="slide" key={current.id} style={{ boxShadow: "0 12px 20px rgba(253, 253, 253, 0.37)" }}>
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
                    navigate(`/pages/Our Products/${current.id}`);
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
            <span className="arrow right" style={{ color: "white" }} onClick={nextProduct}>
              ❯
            </span>
          </div>
        </section>
      )}

    </div>
  );
}