import React, { Component } from "react";
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
          <div className="container-fluid">
            <CartColumn cart={cart} />
            <CartList cart={cart} />
            <CartTotal
              cartTotal={cartTotal}
              cartSubtotal={cartSubtotal}
              cartTax={cartTax}
            />
          </div>
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
