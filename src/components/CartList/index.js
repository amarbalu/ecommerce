import React from "react";
import CartItem from "../CartItem";

export default function CartList({ cart }) {
  return (
    <div className="d-flex col-xs-12 col-md-6  col-xl-9 flex-wrap">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} cart={cart} />;
      })}
    </div>
  );
}
