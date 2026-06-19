import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Briefs.css";
import SEO from "../../components/SEO";

const EVGenericDeckBrief = () => {
  const location = useLocation();

  return (
    <div className="brief-page">
      <SEO
        title="EV Generic Deck - Technical Brief | Test Base Solutions"
        description="A reusable, ASPICE-aligned EV ECU platform for BMS, Inverter, OBC and DC-DC. Sits on top of the customer-selected AUTOSAR Classic stack."
        keywords="EV ECU, BMS, Inverter, OBC, DC-DC, AUTOSAR Classic, ASPICE, ISO 26262, ISO 21434"
      />

      {/* Hero Section */}
      <header className="brief-hero">
        <div className="container">
          <p className="kicker">EV Generic Deck</p>
          <h1>The reusable layer in your EV ECU stack</h1>
          <p className="hero-sub">
            Most EV platforms are reused. Almost none of them are reusable. Until now.
          </p>
        </div>
      </header>

      {/* Brief Two-Column Layout */}
      <div className="brief-layout">
        {/* Main Content */}
        <main className="brief-main-content">
          {/* Section: What it is */}
          <section>
            <h2>What it is</h2>
            <p className="lead">
              A reusable, ASPICE-aligned EV ECU foundation that sits on top of the
              customer-selected AUTOSAR Classic stack. The customer keeps the differentiating IP.
              TBS provides the EV-domain reusable layer underneath.
            </p>
            <p>
              Designed for engineering organisations under pressure to deliver electrified ECU
              programmes faster, without rebuilding the same foundations for every new product.
              Configurable, not locked. Portable across MCU families. Integrates with the
              customer's existing AUTOSAR Classic toolchain rather than replacing it.
            </p>
          </section>

          {/* Section: What is inside */}
          <section>
            <h2>What is inside</h2>
            <ul className="tick-list">
              <li>
                EV application software components for BMS, Inverter, OBC and DC-DC, authored
                AUTOSAR-compliantly
              </li>
              <li>
                BSW configuration and integration patterns for Communication, Diagnostics, Memory,
                Mode and Safety modules
              </li>
              <li>ASPICE-aligned documentation, traceability and verification artefacts</li>
              <li>Functional safety (ISO 26262) and cybersecurity (ISO 21434) hooks built in</li>
              <li>Parameterised configuration model with sensible defaults per ECU domain</li>
              <li>Optional verified hardware reference design where it accelerates the baseline</li>
            </ul>
          </section>

          {/* Section: The proof points */}
          <section>
            <h2>The proof points</h2>
            <div className="stat-row">
              <div className="stat-card">
                <div className="num">5,927</div>
                <div className="label">Parameters identified</div>
                <div className="sub">
                  in a single BMS AUTOSAR configuration. The platform pre-resolves most of this so
                  customer engineering teams focus on what differentiates the vehicle.
                </div>
              </div>
              <div className="stat-card">
                <div className="num">Months</div>
                <div className="label">Not years</div>
                <div className="sub">
                  from spec to runnable EV ECU demo, when platform reuse, known MCU families and
                  existing safety concepts apply.
                </div>
              </div>
              <div className="stat-card">
                <div className="num">ASPICE</div>
                <div className="label">Aligned</div>
                <div className="sub">
                  across system, software and (in progress) hardware work products. Designed to
                  support customer assessment journeys.
                </div>
              </div>
            </div>
          </section>

          {/* Section: How it sits in the stack */}
          <section>
            <h2>How it sits in the stack</h2>
            <p className="lead">
              The customer differentiating IP sits on top. The EV Generic Deck provides the reusable
              EV-domain layer underneath. The customer-selected AUTOSAR Classic foundation provides
              RTE, BSW and OS. The customer-selected silicon provides MCU and drivers.
            </p>

            {/* Stack Visual */}
            <div className="stack-visual">
              <div className="stack-layer ip-layer">
                <span className="layer-title">Customer differentiating IP</span>
                <span className="layer-sub">your algorithms, your strategies, your IP</span>
              </div>
              <div className="stack-layer deck-layer">
                <div className="deck-title">EV GENERIC DECK</div>
                <div className="deck-sub">The reusable layer in your EV ECU stack</div>
                <div className="deck-rule"></div>
                <ul className="deck-ticks">
                  <li>EV application SWCs</li>
                  <li>BSW configuration &amp; integration</li>
                  <li>ASPICE artefacts &amp; traceability</li>
                  <li>FuSa &amp; cybersecurity hooks</li>
                </ul>
              </div>
              <div className="stack-layer arxml-layer">
                <span className="layer-title">AUTOSAR description / ARXML</span>
                <span className="layer-sub">handover boundary</span>
              </div>
              <div className="stack-layer autosar-layer">
                <span className="layer-title">Customer-selected AUTOSAR Classic foundation</span>
                <span className="layer-sub">RTE &middot; BSW &middot; OS</span>
              </div>
              <div className="stack-layer silicon-layer">
                <span className="layer-title">Customer-selected microcontroller &amp; silicon</span>
                <span className="layer-sub">TI &middot; ST &middot; NXP &middot; Infineon</span>
              </div>
              <div className="stack-layer optional-hw">
                <span className="layer-title">Optional &mdash; TBS verified hardware reference design</span>
                <span className="layer-sub">accelerates the baseline</span>
              </div>
            </div>

            {/* Pillar Grid */}
            <div className="pillar-row">
              <div className="pillar">
                <h4>The customer keeps</h4>
                <p>
                  Differentiating algorithms, control strategies, calibration values. The IP that
                  defines the product.
                </p>
              </div>
              <div className="pillar">
                <h4>TBS provides</h4>
                <p>
                  EV application SWCs, BSW configuration, ASPICE artefacts, FuSa and cybersecurity
                  hooks.
                </p>
              </div>
              <div className="pillar">
                <h4>Customer selects</h4>
                <p>AUTOSAR Classic provider, silicon family, hardware reference design.</p>
              </div>
            </div>
          </section>

          {/* Section: Commercial models */}
          <section>
            <h2>Commercial models</h2>
            <p className="lead">
              Designed to fit how customers actually engage with platform IP, not the other way
              around.
            </p>
            <p>
              Commercial models range from configurable platform reuse for a single programme,
              through to broader licensing arrangements including source code, models, hardware
              design and verification infrastructure where appropriate. The right model depends on
              the customer's engagement shape, programme volume and longer-term roadmap.
            </p>
            <p className="confidential">
              Specific commercial terms and licensing options discussed under NDA. Reach out via the
              email button below for a conversation.
            </p>
          </section>

          {/* Section: Multi-silicon support */}
          <section>
            <h2>Multi-silicon support</h2>
            <p>
              The same TBS application layer ports across MCU families. Only MCAL and OS
              configuration change between silicon variants. Hardware adaptation handled separately.
              Currently being proven across all four major automotive silicon vendors.
            </p>
            <div className="silicon-strip">
              <span className="label">SUPPORTED ACROSS</span>
              TI &middot; ST &middot; NXP &middot; Infineon
            </div>
            <p className="confidential">Engineering status and roadmap shared under NDA on request.</p>
          </section>

          {/* Request Technical Brief */}
          <div className="brief-cta-box">
            <h3>Request the full technical brief</h3>
            <p>
              If repeated platform engineering is consuming your delivery capacity, we should
              compare notes. Reach out and we will send the full technical brief and arrange a
              conversation with the engineering team.
            </p>
            <a
              href="mailto:info@testbasesolutions.co.uk?subject=EV%20Generic%20Deck%20-%20Request%20for%20Technical%20Brief"
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
                src="/briefs/ev-generic-deck-qr.jpg"
                alt="EV Generic Deck Rollup QR Code"
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

export default EVGenericDeckBrief;
