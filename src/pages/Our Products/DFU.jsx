import React, { useEffect, useRef } from "react";
import '/src/pages/Prod-Serv-pages.css';
import { useNavigate } from "react-router-dom";
import { useFeatureAnimations } from '../../utils/useFeatureAnimations';
import SEO from "../../components/SEO";
import PageNavigation from "../../components/PageNavigation";

const P6 = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useFeatureAnimations(contentRef);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting ? entry.target.classList.add("visible") : null
        ),
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      const secs = contentRef.current.querySelectorAll(".content-section");
      secs.forEach((sec) => observer.observe(sec));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={contentRef}>
        <SEO
          title="Diagnostic Tools"
          description="TBS Diagnostic Tools support DoIP, CAN FD, and standard CAN protocols, ensuring compatibility with multiple flash specifications."
          keywords="Diagnostic Tools, TBS, DoIP, CAN FD, UDS, TbsFLASH"
        />
        {/* Hero Section */}
        <div className="hero-container">
          <img src="/Hero_P/DFU.png" alt="Diagnostic Tools" className="hero-video" />
          <div className="hero-overlay"></div>
          <h1 className="hero-title text-white">Diagnostic Tools</h1>
        </div>

        {/* Creative Content Sections */}
        <div className="product-page">
          <section>
            <p className="fs-1-2rem text-justify">
              Our <b>Diagnostic Tools </b> supports DoIP, CAN FD, and standard CAN protocols, ensuring compatibility with multiple flash specifications. It features independent flashing tool support for various CAN interfaces, including Vector, NI, Intrepid, and Pak. With integrated DHCP for DoIP, XML-configurable sequences, and detailed logging, it enables quick verification for EOL and aftersales deployment while exposing COM APIs for integration.
            </p>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_DFU/Picture0.png" alt="Protocol Support" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>TbsFLASH</h2>
              <ul>
                <li><strong>Multi-Protocol Support:</strong> Native support for DoIP, CAN FD, and standard CAN protocols.</li>
                <li><strong>Flash Compatibility:</strong> Seamlessly compatible with multiple diverse flash specifications.</li>
                <li><strong>Interface Support:</strong> Connects via CAN interfaces including Vector, NI, Intrepid, and Peak.</li>
                <li><strong>Advanced Logging:</strong> Provides readable UDS logs, raw CAN/Wireshark dumps, and detailed diagnostics.</li>
                <li><strong>Integrated DHCP:</strong> Built-in DHCP server optimizing efficient DoIP connections.</li>
                <li><strong>Configurable Sequences:</strong> Customizable flash sequences easily controlled via XML configuration.</li>
                <li><strong>Rapid Verification:</strong> Quickly verify flash updates prior to EOL or aftersales tool deployment.</li>
                <li><strong>Integration APIs:</strong> Exposes robust COM APIs facilitating smooth integration with external tools.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image">
            <div className="section-image-wrapper">
              <img src="/P_DFU/Picture1.png" alt="Protocol Support" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Flashing Script (CANoe)</h2>
              <ul>
                <li><strong>Universal Flashing:</strong> Highly adaptable scripts capable of flashing any compatible module.</li>
                <li><strong>Configurable Setup:</strong> Users can effortlessly modify CANoe configurations per vehicle line.</li>
                <li><strong>Dual Logging:</strong> Simultaneous generation of readable text logs and dedicated CANoe log files.</li>
                <li><strong>Failure Analysis:</strong> Detailed user logs provide explicit failure reasons accelerating analysis.</li>
                <li><strong>XML Control:</strong> Flexible sequence control driven entirely by XML configuration files.</li>
                <li><strong>Rapid Verification:</strong> Thoroughly verify module flash updates before broad EOL or Aftersales deployment.</li>
              </ul>
            </div>
          </section>

          <section className="content-section section-with-image reverse">
            <div className="section-image-wrapper">
              <img src="/P_DFU/Picture2.png" alt="Protocol Support" className="section-image object-fit-cover h-auto" />
            </div>
            <div className="section-text">
              <h2>Part Number Reader</h2>
              <ul>
                <li><strong>Vehicle Readout:</strong> Instantly read part numbers and comprehensive DTC data across the entire vehicle.</li>
                <li><strong>Adaptable Configuration:</strong> Easily adjust CANoe configuration parameters tailored to target vehicle lines.</li>
                <li><strong>Comprehensive Reporting:</strong> Dual outputs featuring detailed HTML dashboards and raw CANoe log files.</li>
                <li><strong>DTC Parsing:</strong> Deep parsing of DTCs explicitly capturing snapshot and extended environmental data.</li>
                <li><strong>Part Number Comparison:</strong> Automates part number differentiation via intuitive color-coded Excel exports.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Arrows */}
        <PageNavigation type="products" currentId="DFU" />
      </div>
    </>
  );
};

export default P6;