import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ServiceSlider from "../components/ServiceSlider";
import "../index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>

      {/* INTERNAL STYLE (Home-specific) */}
      <style>
        {`
          footer {
            position: absolute;
            z-index: 10;
            top: 395%;
            left: 0;
            right: 0;
          }
        `}
      </style>
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
              Test Base Solutions Advanced diagnostics, high-performance
              software, and EV innovation—from OBCs and BMS to DC-DC converters
              and beyond.<br />
              ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
            </p>
          </div>
        </div>
      </section>
      <section className="services-section">
        {/* SERVICES */}
        <ServiceSlider navigate={navigate} />
      </section>

      <section className="products-section">
        {/* PRODUCTS */}
        <ProductSlider
          navigate={navigate}
        />
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          <strong>Test Base Solutions</strong> was founded with a clear vision—to shape the future of the
          automotive industry through innovation, precision, and quality. What began as a small team
          with big dreams has grown into a trusted engineering partner known for building excellence
          across every stage of the automotive lifecycle.
        </p>
        <p>
          Today, with nearly 100 dedicated employees, we deliver end-to-end expertise in system design,
          development, verification, validation, and compliance. Serving clients across the globe, our
          journey is powered by passion, perseverance, and a commitment to building smarter, safer, and
          cleaner mobility solutions.</p>
          {/* <button
              className="read-more"
              onClick={() => {
                navigate(`/about`);
                window.scrollTo(0, 0);
              }}
            >
              Know About US
            </button> */}

          <button
            className="about-us-btn"
            onClick={() => {
              navigate(`/about`);
              window.scrollTo(0, 0);
            }}
          >
            <span>Our Story</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        
      </section>
    </>
  );
}
