import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Briefs.css";
import SEO from "../../components/SEO";

const EngineeringBrief = () => {
  const location = useLocation();

  return (
    <div className="brief-page">
      <SEO
        title="Engineering Reinforcement - Technical Brief | Test Base Solutions"
        description="Senior EV engineering capability that integrates with customer programmes from day one. Systems, software, hardware and HIL validation across UK and India."
        keywords="Systems Engineering, Software Engineering, Hardware Engineering, HIL Validation, ASPICE, ISO 26262, ISO 21434"
      />

      {/* Hero Section */}
      <header className="brief-hero">
        <div className="container">
          <p className="kicker">Engineering Reinforcement</p>
          <h1>Engineers who hit the ground running</h1>
          <p className="hero-sub">
            Hiring senior EV engineers takes months. Programme deadlines don't.
          </p>
        </div>
      </header>

      {/* Two-Column Layout */}
      <div className="brief-layout">
        {/* Main Content */}
        <main className="brief-main-content">
          {/* Section: Who we are */}
          <section>
            <h2>Who we are</h2>
            <p className="lead">
              TBS is a UK-headquartered engineering company specialising in electrified and
              safety-critical systems. We bring senior engineers into customer programmes to deliver the
              foundational systems, software, hardware and validation work that programmes need but
              rarely have spare capacity for.
            </p>
            <div className="stat-row">
              <div className="stat-card">
                <div className="num">120+</div>
                <div className="label">Engineers</div>
                <div className="sub">across UK and India</div>
              </div>
              <div className="stat-card">
                <div className="num">2</div>
                <div className="label">Engineering hubs</div>
                <div className="sub">Coventry, UK and Trichy, India</div>
              </div>
              <div className="stat-card">
                <div className="num">2018</div>
                <div className="label">Operating since</div>
                <div className="sub">Founder-managed, engineering-led</div>
              </div>
            </div>
          </section>

          {/* Section: Our disciplines */}
          <section>
            <h2>Our disciplines</h2>
            <p>
              End-to-end capability across the four engineering disciplines that EV ECU programmes
              need. Engineers integrate alongside customer teams, not as a replacement.
            </p>
            <div className="pillar-row">
              <div className="pillar">
                <h3>Systems</h3>
                <h4>Architecture &amp; requirements</h4>
                <p>
                  System requirement engineering. Architecture. Functional safety and cybersecurity
                  requirement engineering. HV standards compliance.
                </p>
              </div>
              <div className="pillar">
                <h3>Software</h3>
                <h4>AUTOSAR &amp; embedded</h4>
                <p>
                  AUTOSAR Classic and non-AUTOSAR. EV-domain application software. CDD development
                  and integration into the customer-selected AUTOSAR toolchain.
                </p>
              </div>
              <div className="pillar">
                <h3>Hardware</h3>
                <h4>Design &amp; bring-up</h4>
                <p>
                  ECU architecture and detailed design. Board bring-up. HV test rig design and
                  development. Silicon evaluation across MCU families.
                </p>
              </div>
              <div className="pillar">
                <h3>Validation</h3>
                <h4>HIL &amp; automation</h4>
                <p>
                  HIL benches. Plant modelling. System integration and validation test specification
                  and automation. Customer-site bring-up.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Process maturity */}
          <section>
            <h2>Process maturity</h2>
            <p className="lead">
              Engineering practice grounded in ASPICE, ISO 26262 and ISO 21434. Designed to fit a
              customer assessment journey rather than substitute for one.
            </p>
            <ul className="tick-list">
              <li>ASPICE-aligned work products across system and software</li>
              <li>ISO 26262 functional safety hooks built into platform architecture</li>
              <li>ISO 21434 cybersecurity-aware engineering with Secure Boot and HSM-ready hooks</li>
              <li>AUTOSAR Classic-friendly integration with the customer's chosen toolchain</li>
              <li>Bidirectional traceability through customer-side tools (Polarion, Enterprise Architect)</li>
            </ul>
          </section>

          {/* Section: Full ASPICE V-model coverage */}
          <section>
            <h2>Full ASPICE V-model coverage</h2>
            <p className="lead">
              Production-grade ECU delivery requires every stage of the ASPICE V to be staffed by
              competent engineers. TBS engineering teams cover the full V from system requirements at
              the top of the descending arm through to system validation at the top of the ascending arm.
            </p>

            {/* V-Model SVG */}
            <svg
              className="v-model-svg"
              viewBox="0 0 800 560"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="ASPICE V-model showing TBS coverage from system requirements through to system validation"
            >
              <rect x="0" y="0" width="800" height="560" fill="#F8F9FB" />
              <text
                x="400"
                y="34"
                textAnchor="middle"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="16"
                fontWeight="700"
                fill="#1F3864"
              >
                ASPICE V-model coverage
              </text>
              <text
                x="400"
                y="54"
                textAnchor="middle"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#7F7F7F"
                fontStyle="italic"
              >
                TBS engineering teams cover every stage
              </text>
              <line x1="100" y1="120" x2="400" y2="480" stroke="#1F3864" strokeWidth="3" strokeLinecap="round" />
              <line x1="400" y1="480" x2="700" y2="120" stroke="#1F3864" strokeWidth="3" strokeLinecap="round" />
              <line x1="100" y1="120" x2="700" y2="120" stroke="#A0A0A0" strokeWidth="1" strokeDasharray="5,4" />
              <line x1="200" y1="240" x2="600" y2="240" stroke="#A0A0A0" strokeWidth="1" strokeDasharray="5,4" />
              <line x1="300" y1="360" x2="500" y2="360" stroke="#A0A0A0" strokeWidth="1" strokeDasharray="5,4" />
              
              <circle cx="100" cy="120" r="16" fill="#ED7D31" stroke="#fff" strokeWidth="2" />
              <text x="100" y="125" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SYS.1/2
              </text>
              <text x="80" y="103" textAnchor="end" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1F3864">
                System Requirements
              </text>
              <text x="80" y="120" textAnchor="end" fontFamily="Segoe UI, Arial, sans-serif" fontSize="11" fill="#7F7F7F">
                Stakeholder and system level
              </text>

              <circle cx="200" cy="240" r="14" fill="#ED7D31" stroke="#fff" strokeWidth="2" />
              <text x="200" y="245" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SYS.3
              </text>
              <text x="180" y="225" textAnchor="end" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1F3864">
                System Architecture
              </text>

              <circle cx="300" cy="360" r="14" fill="#ED7D31" stroke="#fff" strokeWidth="2" />
              <text x="300" y="365" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SWE.1-3
              </text>
              <text x="280" y="345" textAnchor="end" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1F3864">
                Software Design
              </text>

              <circle cx="400" cy="480" r="18" fill="#1F3864" stroke="#fff" strokeWidth="2" />
              <text x="400" y="486" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SWE.4
              </text>
              <text x="400" y="515" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="700" fill="#1F3864">
                Implementation
              </text>

              <circle cx="500" cy="360" r="14" fill="#ED7D31" stroke="#fff" strokeWidth="2" />
              <text x="500" y="365" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SWE.5
              </text>
              <text x="520" y="345" textAnchor="start" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1F3864">
                SW Integration Test
              </text>

              <circle cx="600" cy="240" r="14" fill="#ED7D31" stroke="#fff" strokeWidth="2" />
              <text x="600" y="245" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SWE.6
              </text>
              <text x="620" y="225" textAnchor="start" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1F3864">
                SW Qualification Test
              </text>

              <circle cx="700" cy="120" r="16" fill="#ED7D31" stroke="#fff" strokeWidth="2" />
              <text x="700" y="125" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">
                SYS.4/5
              </text>
              <text x="720" y="103" textAnchor="start" fontFamily="Segoe UI, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#1F3864">
                System Validation
              </text>
              <text x="720" y="120" textAnchor="start" fontFamily="Segoe UI, Arial, sans-serif" fontSize="11" fill="#7F7F7F">
                Integration and test
              </text>
            </svg>

            <p className="v-model-caption">
              Hardware engineering operates in parallel with the same V-model discipline (HWE.1 to
              HWE.4).
            </p>

            <div className="discipline-pills">
              <span className="discipline-pill">Systems Engineering</span>
              <span className="discipline-pill">Software Engineering</span>
              <span className="discipline-pill">Hardware Engineering</span>
              <span className="discipline-pill orange">HIL and System Validation</span>
            </div>
          </section>

          {/* Section: How we engage */}
          <section>
            <h2>How we engage</h2>
            <p>
              TBS engineers integrate into customer programmes from day one. We work alongside your
              team, not in parallel to it. Senior engineering involvement on every programme from
              architecture through to bring-up and validation. Offshore-friendly delivery between
              Coventry and Trichy where it accelerates the programme.
            </p>
            <p>
              The accelerator model: combining the TBS EV ECU platform with targeted systems,
              software, hardware and validation engineering. Designed to complement existing customer
              capability, not replace it.
            </p>
          </section>

          {/* Bottom CTA Box */}
          <div className="brief-cta-box">
            <h3>Tell us where you need engineers</h3>
            <p>
              If your programme has hit a foundations problem disguised as a resourcing one, we should
              talk. Reach out and we will arrange a conversation with the engineering team.
            </p>
            <a
              href="mailto:info@testbasesolutions.co.uk?subject=Engineering%20Reinforcement%20-%20Capability%20Discussion"
              className="cta-button"
            >
              Email info@testbasesolutions.co.uk
            </a>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="brief-sidebar">
          {/* Card: Download PDF */}
          <div className="sidebar-card pdf-download-card">
            <h3>Download Brief PDF</h3>
            <a
              href="/briefs/TBS_Technical_Briefs.pdf"
              download="TBS_Technical_Briefs.pdf"
              className="download-button"
            >
              Download brief (PDF)
            </a>
          </div>

          {/* Card: Technical Brief Navigation */}
          <div className="sidebar-card nav-card">
            <h3>Technical Briefs</h3>
            <nav className="sidebar-links">
              <Link
                to="/briefs/ev-generic-deck"
                className={`sidebar-link-item ${
                  location.pathname === "/briefs/ev-generic-deck" ? "active" : ""
                }`}
              >
                EV Generic Deck Platform
              </Link>
              <Link
                to="/briefs/engineering-reinforcement"
                className={`sidebar-link-item ${
                  location.pathname === "/briefs/engineering-reinforcement" ? "active" : ""
                }`}
              >
                Engineering Reinforcement
              </Link>
              <Link
                to="/briefs/partnership-brief"
                className={`sidebar-link-item ${
                  location.pathname === "/briefs/partnership-brief" ? "active" : ""
                }`}
              >
                Platform + Engineering Integration
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EngineeringBrief;
