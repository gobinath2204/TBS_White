// About.js
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './About.css';

export default function About() {
  const navigate = useNavigate();
  
  // Scroll animation useEffect for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all three sections
    const sections = document.querySelectorAll(
      '.story-card-section, .pillars-of-excellence-section, .fostering-talent-section'
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Counter animation useEffect (scroll-triggered)
  useEffect(() => {
    // Smooth counter animation function
    const animateValue = (obj, start, end, duration, suffix = '') => {
      let startTimestamp = null;
      const frameDuration = 1000 / 60; // 60 FPS
      let lastFrameTime = 0;
      
      // Smooth easing function
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        
        // Maintain consistent frame rate
        if (timestamp - lastFrameTime < frameDuration) {
          window.requestAnimationFrame(step);
          return;
        }
        
        lastFrameTime = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        
        // For smaller numbers (like years), we can show decimals for smoother animation
        let value;
        if (end - start <= 10) {
          value = (easedProgress * (end - start) + start).toFixed(1);
        } else {
          value = Math.floor(easedProgress * (end - start) + start);
        }
        
        obj.innerHTML = value + suffix;
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          // Ensure final value is exact
          obj.innerHTML = end + suffix;
        }
      };
      
      window.requestAnimationFrame(step);
    };

    // Set up Intersection Observer to trigger animation when counter section is in view
    const counterSection = document.querySelector('.counter-section');
    let animationTriggered = false;

    if (counterSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animationTriggered) {
              animationTriggered = true;
              
              // Start animations when counter section is in view
              const employeeCounter = document.getElementById("employee-counter");
              const yearsCounter = document.getElementById("years-counter");
              
              if (employeeCounter && yearsCounter) {
                // Reset counters to 0
                employeeCounter.innerHTML = '0';
                yearsCounter.innerHTML = '0';
                
                // Animate employee counter from 0 to 100
                animateValue(employeeCounter, 0, 100, 2500, '+');
                
                // Animate years counter from 0 to 6 with a slight delay
                setTimeout(() => {
                  animateValue(yearsCounter, 0, 6, 2000, '+');
                }, 300);
              }
              
              // Stop observing after animation is triggered
              observer.unobserve(counterSection);
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is visible
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(counterSection);
    }

    // Cleanup
    return () => {
      if (counterSection) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const observer = new IntersectionObserver(() => {});
        observer.unobserve(counterSection);
      }
    };
  }, []);

  // Video playback control
  useEffect(() => {
    const videoSection = document.querySelector('.video-section');
    const heroVideo = document.querySelector('.content-video');
    
    if (videoSection && heroVideo) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Play video when section is in view
              heroVideo.play().catch(error => {
                console.log('Video autoplay failed:', error);
              });
            } else {
              // Pause video when section is out of view
              heroVideo.pause();
            }
          });
        },
        {
          threshold: 0.5
        }
      );

      observer.observe(videoSection);

      // Cleanup
      return () => {
        observer.unobserve(videoSection);
      };
    }
  }, []);

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

        {/* Pillars of excellence */}
        <section className="pillars-of-excellence-section">
          <div className="pillars-of-excellence">
            <div className="pillars-of-excellence-content">
              <h2>Pillars of Excellence</h2>
              <p>
                At <strong>Test Base Solutions</strong> we specialize in delivering cutting-edge <strong>ASPICE-compliant 
                solutions</strong> across all areas of System Engineering (SYS), Software Engineering (SWE), and Hardware Engineering (HWE). 
                Our expertise includes collaborating closely with ECU suppliers to <strong>deliver bespoke automotive base 
                software development</strong>, such as:
                </p>
                <ul className="excellence-list">
                    <li>Scheduler and Real-Time Operating System (RTOS).</li>
                    <li>AUTOSAR and Non-AUTOSAR drivers.</li>
                    <li>CAN, UDS, LIN, FLEXRAY, and CCP/XCP stacks.</li>
                    <li>Primary Boot-loader and Security Algorithm Software.</li>
                    <li>Application Software and IoT Software Development.</li>
                </ul>
            </div>
          </div>
        </section>

        {/* Fostering Talent */}
        <section className="fostering-talent-section">
          <div className="fostering-talent">
            <div className="fostering-talent-content">
              <h2>Fostering Talents</h2>
              <p>
                At <strong>Test Base Solutions</strong>, we believe people are our greatest strength. 
                From fresh graduates to experienced professionals, we invest in nurturing talent through structured training, mentorship, 
                and hands-on project experience.
                </p>
                <p className="fostering-talent-p">
                    Our in-house programs focus on real-world automotive challenges—covering system engineering, diagnostics, embedded software, and ASPICE processes. 
                    We don't just build teams—we cultivate future-ready engineers who drive innovation, quality, and excellence in every project.
                </p>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className="counter-section">
          <div className="counter-container">
            <div className="counter-item">
              <div id="employee-counter" className="counter-number">0</div>
              <div className="counter-label">Employees</div>
            </div>
            <div className="counter-item">
              <div id="years-counter" className="counter-number">0</div>
              <div className="counter-label">Years of Excellence</div>
            </div>
          </div>
          <p className="counter-tagline">Driving innovation in automotive technology</p>
        </section> 

        {/* Video Section (formerly Hero Section) */}
        <section className="video-section">
          <div className="video-background">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="hero-video"
            >
              <source src="/videos/tbs_short.mp4" type="video/mp4" />
              {/* <source src="/src/assets/videos/tbs_short.webm" type="video/webm" /> */}
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
          <div className="hero-contents">
            <h1>About Our Journey</h1>
            <p>Come join us in our journey to growth and betterment.</p>
          </div>
        </section>

        <section className="timeline-section">
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-content left">
                <h2>FOUND</h2>
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
    </>
  );
}