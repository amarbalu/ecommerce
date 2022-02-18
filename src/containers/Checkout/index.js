import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CheckoutList from "../../components/CheckoutList";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  return (
    <section>
      {cart.length ? (
        <React.Fragment>
          <div className="container-fluid">
            <CheckoutList cart={cart} />
          </div>
        </React.Fragment>
      ) : (
        <Navigate to="/cart" />
      )}
    </section>
  );
}
