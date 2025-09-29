import React from "react";
import ProductSlider from "../components/ProductSlider";

const ProductsPage = ({ navigate }) => {
  return (
    <div>
      <ProductSlider navigate={navigate} />
    </div>
  );
};

export default ProductsPage;
