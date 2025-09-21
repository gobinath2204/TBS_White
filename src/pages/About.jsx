// About.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './About.css';

export default function About() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="about-container">
        {/* Title Section */}
        <section className="title-section">
          <div className="title-content">
            <h1>About Us</h1>
            <p>Learn about our journey, values, and the team behind Test Base Solutions</p>
          </div>
        </section>

        {/* Story Card Section */}
        <section className="story-card-section">
          <div className="story-card">
            <div className="story-card-content">
              <h2>Our Story</h2>
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
                cleaner mobility solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="hero-section">
          <h1>About Our Journey</h1>
          <p>Come join us in our journey to growth and betterment.</p>
        </section>

        <section className="timeline-section">
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-content left">
                <h2>FOUNDED</h2>
                <p>Founded in Coventry, United Kingdom with a vision to innovate in the automotive engineering space</p>
              </div>
              <div className="timeline-date right">2018</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date left">2020</div>
              <div className="timeline-content right">
                <h2>Early Growth</h2>
                <p>Started Supporting Tier-1 Suppliers with bench-level-validation and foundational software services, gaining trust in diagnostics and ECU focused projects.</p>
                <p className="highlight">Introduced ISO 26262 safety lifecycle support.</p>          
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content left">
                <h2>Building the Team</h2>
                <p>Scaled our engineering team with a strong focus on quality, domain, training and mentorship. Built internal capability across Software, Hardware and Systems Domains. Strengthened ASPICE process integration and developed MIL/SIL/HIL validation pipelines.</p>        
              </div>
              <div className="timeline-date right">2022</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date left">2024</div>
              <div className="timeline-content right">
                <h2>Driving Impact Worldwide</h2>
                <p>Now a global team of nearly 100 engineers, trusted full-lifecycle automotive engineering solutions across diagnostics, safety, electrification and compliance.</p>        
              </div>
            </div>
          </div>
        </section>      
      </div>
      <Footer />
    </>
  );
}