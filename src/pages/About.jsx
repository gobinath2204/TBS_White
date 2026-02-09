import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './About.css';

export default function About() {
  const navigate = useNavigate();
  const words = ["TBS", "Team"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    if (subIndex === words[index].length + 1 && !deleting) {
      setPause(true);
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pause]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  useEffect(() => {
    if (pause && deleting) setPause(false);
  }, [pause, deleting]);

  // Section fade-in animation
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

    const sections = document.querySelectorAll(
      '.story-card-section, .pillars-of-excellence-section, .fostering-talent-section'
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Counter animation
  useEffect(() => {
    const animateValue = (obj, start, end, duration, suffix = '') => {
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);

        const value = Math.floor(progress * (end - start) + start);
        obj.innerHTML = value + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          obj.innerHTML = end + suffix;
        }
      };

      window.requestAnimationFrame(step);
    };

    const counterSection = document.querySelector('.counter-section');

    if (counterSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const employeeCounter = document.getElementById("employee-counter");
              const yearsCounter = document.getElementById("years-counter");

              if (employeeCounter && yearsCounter) {
                employeeCounter.innerHTML = '0';
                yearsCounter.innerHTML = '0';

                animateValue(employeeCounter, 0, 90, 2500, '+');

                setTimeout(() => {
                  animateValue(yearsCounter, 0, 7, 2000, '+');
                  animateValue(yearsCounter, 0, 7, 2000, '+');
                }, 300);
              }
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(counterSection);

      return () => {
        observer.unobserve(counterSection);
      };
    }
  }, []);

  // Video play/pause on scroll
  useEffect(() => {
    const videoSection = document.querySelector('.video-section');
    const heroVideo = document.querySelector('.content-video');

    if (videoSection && heroVideo) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              heroVideo.play().catch((error) => {
                console.log('Video autoplay failed:', error);
              });
            } else {
              heroVideo.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(videoSection);

      return () => {
        observer.unobserve(videoSection);
      };
    }
  }, []);

  // Timeline scroll animation (ClearMotion-style)
  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineLine = document.querySelector(".timeline-line");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineItems.forEach((item) => observer.observe(item));

    const handleScroll = () => {
      const section = document.querySelector(".timeline-section");
      if (!section || !timelineLine) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrollPercent = Math.min(
        Math.max((windowHeight - rect.top) / (sectionHeight + windowHeight), 0),
        1
      );

      timelineLine.style.setProperty("--progress", scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      <div className="about-container">
        {/* 1. We are team, TBS animation */}
        <div className="typing-wrapper">
          <h1 className="typing-text" >
            We are{" "}
            <span className="highlight" >{words[index].substring(0, subIndex)}</span>
            <span className={`cursor ${blink ? "active" : ""}`}  >|</span>
          </h1>
        </div>

        {/* 2. Our story container */}
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
                Today, with dedicated employees, we deliver end-to-end expertise in system design,
                development, verification, validation, and compliance. Serving clients across the globe, our
                journey is powered by passion, perseverance, and a commitment to building smarter, safer, and
                cleaner mobility solutions.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Pillars container and fostering talents */}
        <div className="Horizontal">
          {/* Pillars of Excellence */}
          <section className="pillars-of-excellence-section">
            <div className="pillars-of-excellence-content">
              <h2>Pillars of Excellence</h2>
              <p>
                At <strong>Test Base Solutions</strong> we specialize in delivering cutting-edge
                <strong> ASPICE-compliant solutions</strong> across all areas of System Engineering (SYS),
                Software Engineering (SWE), and Hardware Engineering (HWE).
              </p>
              <ul className="excellence-list">
                <li>Scheduler and Real-Time Operating System (RTOS)</li>
                <li>AUTOSAR and Non-AUTOSAR drivers</li>
                <li>CAN, UDS, LIN, FLEXRAY, and CCP/XCP stacks</li>
                <li>Primary Boot-loader and Security Algorithm Software</li>
                <li>Application Software and IoT Software Development</li>
              </ul>
            </div>
          </section>

          {/* Fostering Talent */}
          <section className="fostering-talent-section">
            <div className="fostering-talent-content">
              <h2>Fostering Talents</h2>
              <p>
                At <strong>Test Base Solutions</strong>, we believe people are our greatest strength.
                From fresh graduates to experienced professionals, we invest in nurturing talent through
                structured training, mentorship, and hands-on project experience.
              </p> <br />
              <p className="fostering-talent-p">
                Our in-house programs focus on real-world automotive challenges—covering system engineering,
                diagnostics, embedded software, and ASPICE processes. We don't just build teams—we cultivate
                future-ready engineers who drive innovation, quality, and excellence in every project.
              </p>
            </div>
          </section>
        </div>

        {/* 4. Employee counter and year counter */}
        <section className="counter-section">
          <div className="counter-columns">
            <div className="counter-column">
              <div id="employee-counter" className="counter-number-box"></div>
              <div className="counter-label-box">Employees</div>
            </div>

            <div className="counter-column">
              <div id="years-counter" className="counter-number-box"></div>
              <div className="counter-label-box">Years of Excellence</div>
            </div>
          </div>

          <p className="counter-tagline">
            Driving innovation in automotive technology
          </p>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2>Key milestones</h2>
          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-content left">
                <h2>FOUND</h2>
                <p>Founded in Coventry, United Kingdom with a vision to innovate in the automotive engineering space.</p>
              </div>
              <div className="timeline-date right">2018</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date left">2020</div>
              <div className="timeline-content right">
                <h2>Early Growth</h2>
                <p>Started supporting Tier-1 Suppliers with bench-level validation and foundational software services.</p>
                <p className="highlight">Introduced ISO 26262 safety lifecycle support.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content left">
                <h2>Building the Team</h2>
                <p>Scaled our engineering team with strong focus on quality, domain expertise, and ASPICE integration.</p>
              </div>
              <div className="timeline-date right">2022</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date left">2024</div>
              <div className="timeline-content right">
                <h2>Driving Impact Worldwide</h2>
                <p>Now a global team of nearly 100 engineers, delivering trusted full-lifecycle automotive engineering solutions.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>About Our Journey</h2>
        </section>
        {/* Video Section */}
        <section className="video-section">
          
          <div className="video-background">
            <video autoPlay muted loop playsInline className="content-video">
              <source src="/videos/About.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
          </div>
        </section>
      </div>
    </>
  );
}