import React, { Component } from "react";
import Title from "./Title";
import CartColumn from "../../components/CartColumn";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import EmptyCart from "../../components/EmptyCart";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const cartSubtotal = useSelector((state) => state.cartSubtotal);
  const cartTotal = useSelector((state) => state.cartTotal);
  const cartTax = useSelector((state) => state.cartTax);
  return (
    <section>
      {cart.length ? (
        <React.Fragment>
          <Title name="Your" title="cart"></Title>
          <CartColumn cart={cart} />
          <CartList cart={cart} />
          <CartTotal
            cartTotal={cartTotal}
            cartSubtotal={cartSubtotal}
            cartTax={cartTax}
          />
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
