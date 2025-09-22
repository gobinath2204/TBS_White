import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
import "./ProductShowcase.css";
import "../index.css";
import { Flip } from "gsap/dist/Flip"; 


gsap.registerPlugin(Flip);

const products = [
  { name: "In house SoftWare stack (COTS)", img: "/software.jpg", basis: "20%" },
  { name: "EV generic deck", img: "/deck.jpg", basis: "12%" },
  { name: "HMI", img: "/hmi.jpg", basis: "8%" },
  { name: "Secure Manufacturing Unit", img: "/SMU.webp", basis: "17%" },
  { name: "Smart HIL", img: "/HIL.jpg", basis: "10%" },
  { name: "Diagnostics flashing unit", img: "/DFU.jpeg", basis: "14%" },
  { name: "Free RTOS Safety Plugin", img: "/RTOS.webp", basis: "15%" }
];


export default function Home() {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
  // set each card’s initial flex-basis from product data
  products.forEach((p, i) => {
    gsap.set(cardsRef.current[i], { flexBasis: p.basis });
  });
}, []);

const expandCard = (index, img) => {
  // shrink others
  gsap.to(cardsRef.current, {
    flexBasis: "8%",
    duration: 0.8,
    ease: "power3.inOut"
  });

  // expand hovered card
  gsap.to(cardsRef.current[index], {
    flexBasis: "55%",
    duration: 1,
    ease: "power3.inOut",
    onStart: () => {
      cardsRef.current[index].style.background = `url(${img}) center/cover no-repeat`;
    }
  });
};

const resetCards = () => {
  products.forEach((p, i) => {
    gsap.to(cardsRef.current[i], {
      flexBasis: p.basis, // reset to original basis
      duration: 0.8,
      ease: "power3.inOut",
      onStart: () => {
        cardsRef.current[i].style.background =
          `linear-gradient(135deg, #f9f9f9, #eaeaea)`;
      }
    });
  });
};


  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-left">Partners in Software &amp; Testing</div>
        <div className="hero-right">
          <p>
            Test Base Solutions Advanced diagnostics, high-performance software,
            and EV innovation—from OBCs and BMS to DC-DC converters and
            beyond.<br />
            ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
          </p>
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

      {/* PRODUCTS */}
      <section className="products" id="products">
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
              {/* <div className="card-title">{p.name}</div>
              <div className="card-desc">
                <p>Dummy line 1 describing {p.name}...</p>
                <p>Dummy line 2 goes here...</p>
              </div> */}
              <span>{p.name}</span>
            </div>
          ))}
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
          compliance.
        </p>
      </section>
    </>
  );
}
