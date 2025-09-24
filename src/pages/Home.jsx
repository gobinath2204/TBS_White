import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./ProductShowcase.css";
import "../index.css";



const products = [
  {
    id: "software",
    name: "In house SoftWare stack (COTS)",
    img: "/software.jpg",
    desc: "Pre-validated commercial off-the-shelf software components for automotive ECUs with ASPICE compliance and ISO 26262 safety certification, reducing development time by 40%"
  },
  {
    id: "deck",
    name: "EV generic deck",
    img: "/deck.jpg",
    desc: "Modular platform for electric vehicle control systems supporting OBC, BMS, and VCU applications with scalable architecture for various vehicle segments"
  },
  {
    id: "hmi",
    name: "HMI",
    img: "/hmi.jpg",
    desc: "Advanced Human-Machine Interface systems with customizable digital cockpits, touchscreen displays, and voice recognition supporting AUTOSAR adaptive platform"
  },
  {
    id: "smu",
    name: "Secure Manufacturing Unit",
    img: "/SMU.webp",
    desc: "Hardware security module for secure ECU programming and key management during manufacturing with TPM 2.0 compliance and secure boot capabilities"
  },
  {
    id: "hil",
    name: "Smart HIL",
    img: "/HIL.jpg",
    desc: "Hardware-in-the-loop testing platforms for comprehensive ECU validation with real-time simulation of vehicle networks and fault insertion capabilities"
  },
  {
    id: "dfu",
    name: "Diagnostics flashing unit",
    img: "/DFU.jpeg",
    desc: "Unified diagnostic services (UDS) compliant tool for ECU programming, parameterization, and troubleshooting supporting DoIP, CAN, and LIN protocols"
  },
  {
    id: "rtos",
    name: "Free RTOS Safety Plugin",
    img: "/RTOS.webp",
    desc: "ISO 26262 ASIL-D certified safety package for FreeRTOS with memory protection, timing analysis, and safety monitoring for automotive applications"
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

  // useEffect(() => {
  //   set each card’s initial flex-basis from product data
  //   products.forEach((p, i) => {
  //     gsap.set(cardsRef.current[i], { flexBasis: p.basis });
  //   });
  // }, []);

  // const expandCard = (index, img) => {
  //   // shrink others
  //   gsap.to(cardsRef.current, {
  //     flexBasis: "8%",
  //     duration: 0.8,
  //     ease: "power3.inOut"
  //   });

  // expand hovered card
  //   gsap.to(cardsRef.current[index], {
  //     flexBasis: "55%",
  //     duration: 1,
  //     ease: "power3.inOut",
  //     onStart: () => {
  //       cardsRef.current[index].style.background = `url(${img}) center/cover no-repeat`;
  //     }
  //   });
  // };

  // const resetCards = () => {
  //   products.forEach((p, i) => {
  //     gsap.to(cardsRef.current[i], {
  //       flexBasis: p.basis, // reset to original basis
  //       duration: 0.8,
  //       ease: "power3.inOut",
  //       onStart: () => {
  //         cardsRef.current[i].style.background =
  //           `linear-gradient(135deg, #f9f9f9, #eaeaea)`;
  //       }
  //     });
  //   });
  // };


  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        {/* <div className="hero-left">Partners in Software &amp; Testing</div>
          <div className="hero-right">
            <p>
              Test Base Solutions Advanced diagnostics, high-performance software,
              and EV innovation—from OBCs and BMS to DC-DC converters and
              beyond.<br />
              ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
            </p>
          </div> */}
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

      {/* SERVICES */}
      <section className="services" id="services">
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
      </section>


      {/* <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-container">
          {products.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="product-card"
              style={{ background: `linear-gradient(135deg, #f9f9f9, #eaeaea)` }}
              onMouseEnter={() => expandCard(i, p.img)}
              onMouseLeave={resetCards}
            >
              <div className="card-title">{p.name}</div>
              <div className="card-desc">
                <p>Dummy line 1 describing {p.name}...</p>
                <p>Dummy line 2 goes here...</p>
              </div>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </section> */}
      {/* PRODUCTS */}
      <section className="products" id="products">
        <h2>Our Products</h2>

        <div className="slider-container">
          {/* Left Arrow */}
          <button className="arrow left" onClick={prevProduct}>
            ❮
          </button>

          {/* Slide */}
          <div className="slide">
            <div className="slide-image">
              <img src={current.img} alt={current.name} />
            </div>
            <div className="slide-content">
              {/* <span className="tag">PRODUCT</span> */}
              <h3>{current.name}</h3>
              <p>{current.desc}</p>
              <button
                className="read-more"
                onClick={() => navigate(`/products/${current.id}`)}
              >
              Read More
              </button>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="arrow right" onClick={nextProduct}>
            ❯
          </button>
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
          compliance. <Link to="/about" style={{ textDecoration: 'none' }}>Learn More</Link>
        </p>
      </section>
    </>
  );
}
