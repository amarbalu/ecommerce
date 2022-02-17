import React from "react";
import CartItem from "../CartItem";

export default function CartList({ cart }) {
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} cart={cart} />;
      })}
    </div>
  );
}
