import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ServiceSlider from "../components/ServiceSlider";
import "../index.css";

export default function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Fix hydration issue by checking window only after component mounts
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated YouTube embed with better parameters
  const youtubeParams = [
    'autoplay=1',
    'mute=1',
    'loop=1',
    'playlist=ejx06woQGA0',
    'controls=0',
    'rel=0',
    'playsinline=1',
    'enablejsapi=1'
  ].join('&');

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="video-background">
          <iframe
            src={`https://www.youtube.com/embed/ejx06woQGA0?${youtubeParams}`}
            title="Background video"
            frameBorder="0"
            allow="autoplay; encrypted-media; accelerometer; gyroscope"
            allowFullScreen
            aria-label="Background video showing our services"
          ></iframe>
        </div>

        <div className="hero-content">
          <div className="hero-left">Partners in Software and Testing</div>
          <div className="hero-right">
            <p>
              Test Base Solutions — Advanced diagnostics, high-performance
              software, and EV innovation: from OBCs and BMS to DC-DC converters
              and beyond. <br />
              ASPICE-Aligned. Rigorously Validated. Electrically Engineered.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" aria-labelledby="services-heading">
        {isMobile ? (
          <div className="cards-container">
            <ServiceSlider asCards={true} navigate={navigate} />
          </div>
        ) : (
          <ServiceSlider navigate={navigate} />
        )}
      </section>

      {/* PRODUCTS */}
      <section className="products-section" aria-labelledby="products-heading">
        {isMobile ? (
          <div className="cards-container">
            <ProductSlider asCards={true} navigate={navigate} />
          </div>
        ) : (
          <ProductSlider navigate={navigate} />
        )}
      </section>

      {/* ABOUT */}
      <section className="about" id="about" aria-labelledby="about-heading">
        <h2 id="about-heading">About Us</h2>
        <p>
          <strong>Test Base Solutions</strong> was founded with a clear
          vision—to shape the future of the automotive industry through
          innovation, precision, and quality. What began as a small team with
          big dreams has grown into a trusted engineering partner known for
          building excellence across every stage of the automotive lifecycle.
        </p>
        <p>
          Today, with nearly 100 dedicated employees, we deliver end-to-end
          expertise in system design, development, verification, validation, and
          compliance. Serving clients across the globe, our journey is powered
          by passion, perseverance, and a commitment to building smarter, safer,
          and cleaner mobility solutions.
        </p>
        <p>
          Our in-house programs focus on real-world automotive challenges—covering system engineering, diagnostics, embedded software, and ASPICE processes. We don't just build teams—we cultivate future-ready engineers who drive innovation, quality, and excellence in every project.
        </p>

        <button
          className="about-us-btn"
          onClick={() => {
            navigate(`/about`);
            window.scrollTo(0, 0);
          }}
          aria-label="Read more about our story"
        >
          <span>Our Story</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </section>
    </>
  );
}