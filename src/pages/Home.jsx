import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./ProductShowcase.css";
import "../index.css";


const products = [
  {
    id: "P1",
    name: "In house SoftWare stack (COTS)",
    img: "/software.jpg",
    desc: "TBS’s In-House Software Stack (Commercial Off-The-Shelf, or COTS) is a robust, ready-to-deploy foundation for automotive embedded systems. Built on proven COTS principles, this modular stack integrates real-time operating systems, middleware, and application layers to streamline development and reduce time-to-market. Validated to ISO 26262 for functional safety, it minimizes costs compared to custom solutions while ensuring high reliability."
  },
  {
    id: "P2",
    name: "EV generic deck",
    img: "/deck.jpg",
    desc: "TBS’s EV Generic Deck is a versatile, modular powertrain solution accelerating electric vehicle development. This comprehensive kit includes a high-voltage motor, battery management system, and inverter, offering a plug-and-play foundation for prototyping and production. Compatible with various vehicle architectures, it supports power outputs up to 400V and 66 kWh, from compact urban EVs to high-performance models."
  },
  {
    id: "P3",
    name: "HMI",
    img: "/hmi.jpg",
    desc: "TBS’s Automotive Human-Machine Interface (HMI) transforms vehicle cabins into intuitive, connected ecosystems, enhancing driver and passenger experiences while prioritizing safety. Powered by Android Automotive OS, it integrates advanced touchscreens, voice recognition, and gesture controls to unify navigation, multimedia, climate control, and ADAS feedback into a customizable dashboard."
  },
  {
    id: "P4",
    name: "Secure Manufacturing Unit",
    img: "/SMU.webp",
    desc: "TBS’s Secure Manufacturing Unit (SMU) safeguards automotive production lines against cyber threats, ensuring integrity from component assembly to vehicle rollout. In connected factories, the SMU integrates hardware-secured enclaves with ISO/SAE 21434-compliant software to protect ECUs, robots, and IoT devices throughout the manufacturing lifecycle."
  },
  {
    id: "P5",
    name: "Smart HIL",
    img: "/HIL.jpg",
    desc: "TBS’s Smart Hardware-in-the-Loop (HIL) system revolutionizes automotive testing by bridging virtual simulations with real hardware, enabling precise validation of ECUs and control algorithms in a risk-free environment. Using real-time processors, it emulates vehicle dynamics, sensors, and actuators, testing scenariosfrom normal drives to edge-case faults without physical prototypes."
  },
  {
    id: "P6",
    name: "Diagnostics flashing unit",
    img: "/DFU.jpeg",
    desc: "TBS’s Diagnostics Flashing Unit (DFU) is an all-in-one tool for seamless ECU reprogramming and diagnostics, streamlining maintenance, calibration, and updates across the vehicle lifecycle. Supporting UDS, CCP/XCP, and OBD-II protocols, it enables secure flashing over CAN, Ethernet, or LIN, with encryption to prevent tampering."
  },
  {
    id: "P7",
    name: "Free RTOS Safety Plugin",
    img: "/RTOS.webp",
    desc: "TBS’s Free RTOS Safety Plugin transforms standard FreeRTOS kernels into certified safety-critical foundations for automotive embedded systems, pre-qualified to ISO 26262 ASIL-D and IEC 61508 SIL-3. This lightweight extension enhances robustness with error handling, memory partitioning, and deterministic scheduling, mitigating risks in applications like autonomous driving."
  }
];


export default function Home() {
  const cardsRef = useRef([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const prevProduct = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const nextProduct = () =>
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const current = products[index];

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/ejx06woQGA0?autoplay=1&mute=1&loop=1&playlist=ejx06woQGA0&controls=0&modestbranding=1&showinfo=0"
            title="Background video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <div className="hero-content">
          <div className="hero-left">Partners in Software &amp; Testing</div>
          <div className="hero-right">
            <p>
              Test Base Solutions Advanced diagnostics, high-performance software,
              and EV innovation—from OBCs and BMS to DC-DC converters and
              beyond.<br />
              ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
            </p>
          </div>
        </div>
      </section>


      {/* <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>System Engineering</h3>
            <p>End-to-end system design and integration</p>
          </div>
          <div className="service-card">
            <h3>Software Engineering</h3>
            <p>ASPICE-compliant development lifecycle</p>
          </div>
          <div className="service-card">
            <h3>Hardware Engineering</h3>
            <p>Custom hardware solutions for automotive applications</p>
          </div>
          <div className="service-card">
            <h3>HIL Bench Commissioning</h3>
            <p>Complete hardware-in-the-loop system setup</p>
          </div>
          <div className="service-card">
            <h3>Automotive Standards</h3>
            <p>ISO 26262, ASPICE, and ISO 21434 compliance</p>
          </div>
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="services " id="services">
        <h2>Our Services</h2>
        <div className="product-grid">
          <div
            className="product-card"
            onClick={() => {
              navigate("/pages/s1");
              window.scrollTo(0, 0);
            }}
          >
            <img src="/hmi.png" alt="System Engineering" />
            <div className="product-info">
              <h3>System Engineering</h3>
              <p>
                Standalone system engineering services deliver comprehensive solutions for automotive systems
              </p>
            </div>
          </div>
          <div
            className="product-card"
            onClick={() => {
              navigate("/pages/s2");
              window.scrollTo(0, 0);
            }}
          >
            <img src="/software.jpg" alt="Software Engineering" />
            <div className="product-info">
              <h3>Software Engineering</h3>
              <p>
                Specialize in crafting precise software requirements aligned with ISO 26262 and ASPICE standards
              </p>
            </div>
          </div>
          <div
            className="product-card"
            onClick={() => {
              navigate("/pages/s3");
              window.scrollTo(0, 0);
            }}
          >
            <img src="/HIL.jpg" alt="Hardware Engineering" />
            <div className="product-info">
              <h3>Hardware Engineering</h3>
              <p>
                Excel in defining precise hardware requirements aligned with automotive standards like ISO 26262
              </p>
            </div>
          </div>
          <div
            className="product-card"
            onClick={() => navigate("/pages/s4")}
          >
            <img src="/SMU.jpg" alt="System Validation" />
            <div className="product-info">
              <h3>System Validation</h3>
              <p>
                Comprehensive system validation services to ensure automotive systems meet performance, safety, and regulatory requirements
              </p>
            </div>
          </div>
          <div
            className="product-card"
            onClick={() => navigate("/pages/s5")}
          >
            <img src="/SMU.jpg" alt="Safety & Regulatory" />
            <div className="product-info">
              <h3>Safety & Regulatory</h3>
              <p>
                Specialize in developing and testing systems compliant with ISO 26262 functional safety standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <h2>Our Products</h2>

        <div className="slider-container">
          {/* Left Arrow */}
          <span className="arrow left" style={{color:'white'}} onClick={prevProduct}>
            ❮
          </span>

          {/* Slide */}
          <div className="slide">
            
            <div className="slide-image ">
              
              <img src={current.img} alt={current.name} />
              <span className="image-overlay"></span>
            </div>
            <div className="slide-content">
              {/* <span className="tag">PRODUCT</span> */}
              <h3>{current.name}</h3>
              <p>{current.desc}</p>
              <button
                className="read-more"
                // onClick={() => navigate(`/pages/${current.id}`)}
                onClick={() => {
    navigate(`/pages/${current.id}`);
    window.scrollTo(0, 0);
  }}
              >
                Read More
              </button>
            </div>
          </div>
          {/* Right Arrow */}
          <span className="arrow right" style={{color:'white'}} onClick={nextProduct}>
            ❯
          </span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          Test Base Solutions was founded with a clear vision—to shape the
          future of the automotive industry through innovation, precision, and
          quality.
        </p>
        <p>
          Today, with nearly 100 dedicated employees, we deliver end-to-end
          expertise in system design, development, verification, validation, and
          compliance.<Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            style={{ textDecoration: 'none' }}
          >..Learn More</Link>
        </p>
      </section>
    </>
  );
}
