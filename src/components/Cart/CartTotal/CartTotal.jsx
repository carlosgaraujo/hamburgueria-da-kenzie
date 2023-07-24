import React from "react";
import { StyledCartTotal } from "./CartTotal.js";

export default function CartTotal({ removeCart, cart, removeAll ,totalMoney}) {
 
  return (
    <StyledCartTotal>
      <div className="cart__total">
        <div className="subtotal">
          <p className="total">Total</p>
          <span className="price">R$ {totalMoney.toFixed(2)}</span>
        </div>
        <button onClick={() => removeAll(cart.id)} >Remover Todos</button>
      </div>
    </StyledCartTotal>
  );
}
