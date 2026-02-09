import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const products = [
  {
    id: "Inhousesoftwarestack",
    name: "In house SoftWare stack (COTS)",
    img: "/Hero_P/IHSS.png",
    desc: "TBS's In-House Software Stack is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems and middleware to streamline development.",
  },
  {
    id: "EVgenericdeck",
    name: "EV generic deck",
    img: "/Hero_P/EVdeck.png",
    desc: "TBS's EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes high-voltage motor, battery management system, and inverter for plug-and-play foundation.",
  },
  {
    id: "HMI",
    name: "HMI",
    img: "/Hero_P/HMI.png",
    desc: "TBS's Automotive HMI transforms vehicle cabins into intuitive, connected ecosystems. Powered by Android Automotive OS, it integrates advanced touchscreens, voice recognition, and gesture controls for enhanced experiences.",
  },
  {
    id: "SMU",
    name: "Secure Manufacturing Unit",
    img: "/Hero_P/SMU.png",
    desc: "TBS's Secure Manufacturing Unit safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout with ISO/SAE 21434-compliant software protection.",
  },
  {
    id: "SmartHIL",
    name: "Smart HIL",
    img: "/Hero_P/SmartHIL.png",
    desc: "TBS's Smart HIL system revolutionizes automotive testing by bridging virtual simulations with real hardware, enabling precise validation of ECUs and control algorithms in a risk-free environment.",
  },
  {
    id: "DFU",
    name: "Diagnostics flashing unit",
    img: "/Hero_P/DFU.png",
    desc: "TBS's Diagnostics Flashing Unit is an all-in-one tool for seamless ECU reprogramming and diagnostics, supporting UDS, CCP/XCP, and OBD-II protocols with secure flashing capabilities.",
  },
  {
    id: "RTOS",
    name: "Free RTOS Safety Plugin",
    img: "/Hero_P/RTOS.png",
    desc: "TBS's Free RTOS Safety Plugin transforms standard FreeRTOS kernels into certified safety-critical foundations, pre-qualified to ISO 26262 ASIL-D and IEC 61508 SIL-3 for automotive systems.",
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/pages/Our Products/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="services-container">
      <h2 className="services-title">Our Products</h2>
      <p className="services-description" style={{ textAlign: 'justify', marginBottom: '3rem' }}>
        Test Base Solutions offers innovative automotive products designed to accelerate development and enhance vehicle performance. 
        Our portfolio includes safety-certified software stacks, advanced testing platforms, and secure manufacturing solutions 
        that empower OEMs and Tier-1 suppliers to deliver next-generation automotive systems.
      </p>
      <div className="services-list">
        {products.map((product, index) => (
          <div 
            className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`} 
            key={product.id}
          >
            <div className="service-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="service-content">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <button className="read-more" onClick={() => handleNavigate(product.id)}>
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
};

export default ProductsPage;
