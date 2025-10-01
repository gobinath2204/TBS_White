import React from "react";
import ServiceSlider from "../components/ServiceSlider";

const ServicesPage = ({ navigate }) => {
  return (
    <div>
      <section className="services-section" style={{position: 'relative', zIndex: 1, paddingTop: '10em'}}>
      <ServiceSlider navigate={navigate} />
      </section>
    </div>
  );
};

export default ServicesPage;
