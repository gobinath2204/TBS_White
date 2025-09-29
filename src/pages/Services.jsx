import React from "react";
import ServiceSlider from "../components/ServiceSlider";

const ServicesPage = ({ navigate }) => {
  return (
    <div>
      <ServiceSlider navigate={navigate} />
    </div>
  );
};

export default ServicesPage;
