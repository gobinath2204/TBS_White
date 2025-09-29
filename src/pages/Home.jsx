import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ServiceSlider from "../components/ServiceSlider";
import "./ProductShowcase.css";
import "../index.css";

export default function Home() {
  const navigate = useNavigate();

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
              Test Base Solutions Advanced diagnostics, high-performance
              software, and EV innovation—from OBCs and BMS to DC-DC converters
              and beyond.<br />
              ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServiceSlider navigate={navigate} />

      {/* PRODUCTS */}
      <ProductSlider navigate={navigate} />

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
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            style={{ textDecoration: "none" }}
          >
            ..Learn More
          </Link>
        </p>
      </section>
    </>
  );
}
