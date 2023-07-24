import React from "react";
import { Product } from "./product/Product.jsx";
import { StyledProductList } from "./ProductList.js";

export function ProductsList({ loading, produtos, addCart, searchProducts }) {
  return (
    <StyledProductList>
      <Product
        loading={loading}
        produtos={produtos}
        addCart={addCart}
        searchProducts={searchProducts}
      />
    </StyledProductList>
  );
}
