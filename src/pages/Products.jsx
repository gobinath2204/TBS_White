import React from "react";
import ProductSlider from "../components/ProductSlider";

const ProductsPage = ({ navigate }) => {
  return (
    <div>
      <section className="products-section" style={{position: 'relative', zIndex: 1, paddingTop: '9em', marginTop: '0', borderRadius: '0'}}>
              {/* PRODUCTS */}
              <ProductSlider navigate={navigate} />
      </section>
    </div>
  );
};

export default ProductsPage;
