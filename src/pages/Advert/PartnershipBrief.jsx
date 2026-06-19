import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Briefs.css";
import SEO from "../../components/SEO";

const PartnershipBrief = () => {
  const location = useLocation();

  return (
    <div className="brief-page">
      <SEO
        title="Platform + Engineering Integration - Technical Brief | Test Base Solutions"
        description="EV Generic Deck plus TBS Engineering equals EV ECU baseline delivered in months. Accelerate development with reusable foundations and engineering scale."
        keywords="EV ECU Baseline, Technical Partnership, AUTOSAR Classic, EV Generic Deck, Silicon Support, Systems Software Hardware Integration"
      />

      {/* Hero Section */}
      <header className="brief-hero">
        <div className="container">
          <p className="kicker">Turbo-boost your ECU delivery</p>
          <h1>Platform + engineering = delivery in months, not years</h1>
          <p className="hero-sub">
            Reusable EV ECU foundations plus the engineering scale to deliver them.
          </p>
        </div>
      </header>

      {/* Two-Column Layout */}
      <div className="brief-layout">
        {/* Main Content */}
        <main className="brief-main-content">
          {/* Section: The fusion */}
          <section>
            <h2>The fusion</h2>
            <p className="lead">
              The EV Generic Deck on its own is a platform. The TBS engineering team on its own is
              delivery capability. Combined, they turn a customer's first-of-a-kind EV ECU programme
              into a months-to-baseline engagement rather than a years-long rebuild.
            </p>

            {/* Convergence SVG */}
            <svg
              className="convergence-svg"
              viewBox="0 0 800 360"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="EV Generic Deck plus TBS Engineering equals EV ECU baseline delivered in months"
            >
              <rect x="20" y="20" width="250" height="130" fill="#1F3864" rx="3" />
              <text
                x="40"
                y="55"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="20"
                fontWeight="700"
                fill="#ED7D31"
              >
                EV Generic Deck
              </text>
              <text x="40" y="83" fontFamily="Segoe UI, Arial, sans-serif" fontSize="15" fill="#fff">
                Reusable platform
              </text>
              <line x1="40" y1="98" x2="80" y2="98" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
              <text
                x="40"
                y="120"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#BFD3EE"
                fontStyle="italic"
              >
                ASPICE-aligned EV ECU
              </text>
              <text
                x="40"
                y="136"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#BFD3EE"
                fontStyle="italic"
              >
                foundations
              </text>

              <rect x="20" y="210" width="250" height="130" fill="#2E4E8E" rx="3" />
              <text
                x="40"
                y="245"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="20"
                fontWeight="700"
                fill="#ED7D31"
              >
                TBS Engineering
              </text>
              <text x="40" y="273" fontFamily="Segoe UI, Arial, sans-serif" fontSize="15" fill="#fff">
                Scale to deliver
              </text>
              <line x1="40" y1="288" x2="80" y2="288" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
              <text
                x="40"
                y="310"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#BFD3EE"
                fontStyle="italic"
              >
                Systems &middot; software &middot;
              </text>
              <text
                x="40"
                y="326"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#BFD3EE"
                fontStyle="italic"
              >
                hardware &middot; validation
              </text>

              <text
                x="305"
                y="195"
                textAnchor="middle"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="44"
                fontWeight="700"
                fill="#7F7F7F"
              >
                +
              </text>

              <polygon points="335,170 470,170 470,150 530,180 470,210 470,190 335,190" fill="#D9D9D9" />

              <text
                x="555"
                y="195"
                textAnchor="middle"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="40"
                fontWeight="700"
                fill="#ED7D31"
              >
                =
              </text>

              <rect x="580" y="100" width="200" height="160" fill="#ED7D31" rx="3" />
              <text
                x="595"
                y="138"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="20"
                fontWeight="700"
                fill="#fff"
              >
                EV ECU baseline
              </text>
              <text
                x="595"
                y="166"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="15"
                fill="#fff"
              >
                in months, not years
              </text>
              <line x1="595" y1="180" x2="635" y2="180" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
              <text
                x="595"
                y="203"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#fff"
                fontStyle="italic"
              >
                Runnable, ASPICE-aligned,
              </text>
              <text
                x="595"
                y="219"
                fontFamily="Segoe UI, Arial, sans-serif"
                fontSize="12"
                fill="#fff"
                fontStyle="italic"
              >
                customer-tailored.
              </text>
              <text x="595" y="246" fontFamily="Segoe UI, Arial, sans-serif" fontSize="11" fill="#fff">
                Customer keeps the IP.
              </text>
            </svg>

            {/* Pillar Grid */}
            <div className="pillar-row">
              <div className="pillar">
                <h3>The Platform</h3>
                <p>
                  EV Generic Deck supplies reusable, ASPICE-aligned EV ECU foundations. Same
                  application layer ports across silicon families.
                </p>
              </div>
              <div className="pillar">
                <h3>The Integration</h3>
                <p>
                  TBS engineering delivers the systems, software, hardware and validation work.
                  Senior engineers integrate alongside customer teams.
                </p>
              </div>
              <div className="pillar">
                <h3>The IP</h3>
                <p>
                  The customer keeps the differentiating IP that makes their product distinct. The
                  foundation is configurable, not locked.
                </p>
              </div>
            </div>
          </section>

          {/* Section: How an engagement runs */}
          <section>
            <h2>How an engagement runs</h2>
            <p className="lead">
              A staged engagement model that escalates as confidence builds. Lowest-friction first,
              with clear technical and commercial gates between stages.
            </p>
            <ul className="tick-list">
              <li>
                <strong>Technical alignment</strong> &mdash; device selection, architecture review,
                safety assumptions agreed
              </li>
              <li>
                <strong>Reference implementation</strong> &mdash; lead ECU variant taken to runnable
                baseline with HIL and bench validation
              </li>
              <li>
                <strong>Customer enablement</strong> &mdash; first customer opportunities supported
                alongside the customer's engineering team
              </li>
              <li>
                <strong>Commercial model</strong> &mdash; delivery responsibilities, escalation path and
                commercial arrangement agreed once joint engagements are in flight
              </li>
            </ul>
          </section>

          {/* Section: Silicon support */}
          <section>
            <h2>Silicon support</h2>
            <p>
              Works with the customer-selected AUTOSAR Classic toolchain. Optional TBS verified
              hardware reference design where it accelerates the baseline.
            </p>
            <div className="silicon-strip">
              <span className="label">SUPPORTED ACROSS</span>
              TI &middot; ST &middot; NXP &middot; Infineon
            </div>
          </section>

          {/* Section: What customers get */}
          <section>
            <h2>What customers get</h2>
            <ul className="tick-list">
              <li>
                A faster route from AUTOSAR Classic foundation to integrated, production-intent EV ECU
                baseline
              </li>
              <li>
                A predictable engagement: TBS handles the standard work, customer focuses on their
                differentiating IP
              </li>
              <li>Engineering capacity that integrates from day one, not after a six-month hiring cycle</li>
              <li>Process maturity that supports ASPICE assessment journeys rather than substituting for them</li>
              <li>An ECU baseline that is configurable across silicon families, customer programmes and product lines</li>
            </ul>
          </section>

          {/* Request Technical Brief */}
          <div className="brief-cta-box">
            <h3>Start a conversation</h3>
            <p>
              If you are scoping an EV ECU programme and want to compare notes on how a
              platform-and-engineering combination could accelerate delivery, reach out and we will
              arrange a session with the engineering team.
            </p>
            <a
              href="mailto:info@testbasesolutions.co.uk?subject=Partnership%20Discussion%20-%20EV%20ECU%20Delivery"
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
            <div className="qr-container">
              <img
                src="/briefs/partnership-qr.jpg"
                alt="Partnership Integration Brief Rollup QR Code"
                className="qr-image"
              />
            </div>
            <p className="qr-caption">
              Scan this QR code from the rollup banner to view the deck directly on your mobile
              device.
            </p>
            <a
              href="/briefs/TBS_TradeShow_Rollups_v5.1.pdf"
              download="TBS_TradeShow_Rollups_v5.1.pdf"
              className="download-button"
            >
              Download PDF Rollup
            </a>
          </div>

          {/* Card: Technical Brief Navigation */}
          <div className="sidebar-card nav-card">
            <h3>Trade Show Briefs</h3>
            <nav className="sidebar-links">
              <Link
                to="/advert/ev-generic-deck"
                className={`sidebar-link-item ${
                  location.pathname === "/advert/ev-generic-deck" ? "active" : ""
                }`}
              >
                EV Generic Deck Platform
              </Link>
              <Link
                to="/advert/engineering-reinforcement"
                className={`sidebar-link-item ${
                  location.pathname === "/advert/engineering-reinforcement" ? "active" : ""
                }`}
              >
                Engineering Reinforcement
              </Link>
              <Link
                to="/advert/partnership-brief"
                className={`sidebar-link-item ${
                  location.pathname === "/advert/partnership-brief" ? "active" : ""
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

export default PartnershipBrief;
