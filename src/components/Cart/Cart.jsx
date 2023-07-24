import React from "react";
import CartTotal from "./CartTotal/CartTotal.jsx";
import { StyledCart } from "./Cart.js";
import { CartList } from "./CartList/CartList.jsx";

export default function Cart({ removeCart, cart, removeAll, totalMoney }) {
  return (
    <StyledCart>
      <div className="div__cart">
        <p className="div__cart--title">Carrinho de Compras</p>
      </div>
      <ul>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <CartList key={item.id} item={item}  removeCart={removeCart}></CartList>
            ))}
            <CartTotal cart={cart}  removeCart={removeCart} removeAll={removeAll}totalMoney={totalMoney}/>
          </>
        ) : (
          <div className="cart__empty">
            <p className="noItens">Sua sacola está vazia</p>
            <span className="addItens">Adicione itens</span>
          </div>
        )}
      </ul>
    </StyledCart>
  );
}
