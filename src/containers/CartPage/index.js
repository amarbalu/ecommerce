import React, { Component } from "react";
import Title from "./Title";
import CartColumn from "../../components/CartColumn";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import EmptyCart from "../../components/EmptyCart";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  return (
    <section>
      {cart.length ? (
        <React.Fragment>
          <Title name="Your" title="cart"></Title>
          <CartColumn />
          <CartList cart={cart} />
          <CartTotal cart={cart} />
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
