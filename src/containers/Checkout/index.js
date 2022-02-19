import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { clearCartItems } from "../../actions";
import CheckoutList from "../../components/CheckoutList";
import { CheckoutSection } from "./styles";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <CheckoutSection className="container mt-2">
      <div className="row">
        <div className="col-12 d-flex justify-content-center justify-content-sm-between mx-auto my-2  text-center text-slide">
          <div>
            <i class="bi bi-cart4"></i>
            <span>One step ahead to checkout</span>
          </div>
          <Link to="/">
            <button
              className="btn 
               text-uppercase mb-3 px-5"
              type="button"
              onClick={() => dispatch(clearCartItems())}
            >
              Confirm Order
            </button>
          </Link>
        </div>
        {cart.length ? (
          <React.Fragment>
            <CheckoutList cart={cart} />
          </React.Fragment>
        ) : (
          <Navigate to="/cart" />
        )}
      </div>
    </CheckoutSection>
  );
}
