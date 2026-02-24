import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ServiceSlider from "../components/ServiceSlider";
import "../index.css";
import SEO from "../components/SEO";

export default function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Test Base Solutions (TBS) is your partner in automotive software, testing, and EV innovation. Advanced diagnostics and high-performance software."
        keywords="Automotive Software, Testing, EV Innovation, Diagnostics, ASPICE, TBS, Automotive Software Developent, Bootloader, ECU, DC-DC Converters, HIL, HMI, In-House Software Stack, "
      />
      {/* HERO */}
      <section className="hero" id="home">
        <div className="video-background">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="pos-absolute top-0 left-0 w-100 h-100 object-fit-cover obj-pos-center-top"
            aria-label="Background video showing our services"
          >
            <source src="/videos/Hero_Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">PARTNERS IN SOFTWARE AND TESTING</div>
          <div className="hero-right">
            <p>
              ADVANCED DIAGNOSTICS, HIGH PERFORMANCE,
              SOFTWARE & EV INNOVATIONS : FROM OBC's TO DC-DC CONVERTERS AND BEYOND. <br />
              ASPICE-ALIGNED. RIGOUROUSLY VALIDATED. ELECTRICALLY ENGINEERED.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section" aria-labelledby="services-heading">
        {isMobile ? (
          <div className="cards-container">
            <ServiceSlider asCards={true} navigate={navigate} />
          </div>
        ) : (
          <ServiceSlider navigate={navigate} />
        )}
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products-section" aria-labelledby="products-heading">
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
          Today, dedicated employees, we deliver end-to-end
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