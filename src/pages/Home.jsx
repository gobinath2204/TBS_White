import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import ServiceSlider from "../components/ServiceSlider";
import "../index.css";

export default function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideo, setActiveVideo] = useState(1);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVideoEnded = () => {
    const nextVideo = activeVideo === 1 ? 2 : 1;
    const nextRef = nextVideo === 1 ? videoRef1 : videoRef2;
    const currentRef = activeVideo === 1 ? videoRef1 : videoRef2;

    if (nextRef.current) {
      nextRef.current.currentTime = 0;
      nextRef.current.play();
      setActiveVideo(nextVideo);
      
      setTimeout(() => {
        if (currentRef.current) {
          currentRef.current.pause();
        }
      }, 1000);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="video-background">
          <video
            ref={videoRef1}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            style={{ 
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% -5%', 
              opacity: activeVideo === 1 ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',
              zIndex: activeVideo === 1 ? 2 : 1
            }}
            aria-label="Background video showing our services"
          >
            <source src="/Grok%20Hero%20Pan.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoRef2}
            muted
            playsInline
            onEnded={handleVideoEnded}
            style={{ 
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% -5%', 
              opacity: activeVideo === 2 ? 1 : 0, 
              transition: 'opacity 1s ease-in-out',
              zIndex: activeVideo === 2 ? 2 : 1
            }}
            aria-label="Background video showing our services"
          >
            <source src="/Grok%20Hero%20Pan.mp4" type="video/mp4" />
          </video>
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