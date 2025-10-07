import React from "react";
import ServiceSlider from "../components/ServiceSlider";

const ServicesPage = ({ navigate }) => {
  return (
    <div>
      <section className="services-section" style={{position: 'relative', zIndex: 1, paddingTop: '9em', marginTop: '0', borderRadius: '0'}}>
      <ServiceSlider navigate={navigate} />
      </section>
    </div>
  );
};

export default ServicesPage;
