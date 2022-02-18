import React, { Component } from "react";
import Title from "./Title";
import CartColumn from "../../components/CartColumn";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import EmptyCart from "../../components/EmptyCart";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const cartSubtotal = useSelector((state) => state.cartSubtotal);
  const cartTotal = useSelector((state) => state.cartTotal);
  const cartTax = useSelector((state) => state.cartTax);
  const isloggedIn = useSelector((state) => state.isloggedIn);
  const dispatch = useDispatch();
  return (
    <section>
      {cart.length ? (
        <React.Fragment>
          <div className="container-fluid">
            <Title name="Your" title="cart"></Title>
            <CartColumn cart={cart} />
            <CartList cart={cart} />
            <CartTotal
              cartTotal={cartTotal}
              cartSubtotal={cartSubtotal}
              cartTax={cartTax}
              isloggedIn={isloggedIn}
              dispatch={dispatch}
            />
          </div>
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
