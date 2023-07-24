import React from "react";
import { StyledMainList } from "./Product.js";

export function Product({ loading, produtos, addCart, searchProducts }) {
  return (
    <div>
      {loading ? (
        <p>carregando....</p>
      ) : (
        <StyledMainList>
          {searchProducts.map((product) => (
            <li key={product.id}>
              <div className="div__img">
                <img src={product.img} alt="" />
              </div>
              <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>RS {product.price.toFixed(2)}</p>
                <button onClick={() => addCart(product)}>Adicionar</button>
              </div>
            </li>
          ))}
        </StyledMainList>
      )}
    </div>
  );
}
