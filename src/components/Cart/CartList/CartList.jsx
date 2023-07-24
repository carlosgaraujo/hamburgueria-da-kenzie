import React from "react";

export function CartList({item,removeCart}) {
  return (
    <li key={item.id}>
      <div className="itens__container">
        <div className="div__img">
          <img src={item.img} alt="" />
        </div>
        <div className="div__itens">
          <h3>{item.name}</h3>
          <p>{item.category}</p>
        </div>
      </div>
      <button className="remover" onClick={() => removeCart(item.id)}>
        Remover
      </button>
    </li>
  );
}
