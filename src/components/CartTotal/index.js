import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggleLoginModal } from "../../actions";

const ProceedToCheckout = styled("button")`
  background-color: #51d4d3;
`;
export default function CartTotal({
  cartSubtotal,
  cartTax,
  cartTotal,
  isloggedIn,
  dispatch,
}) {
  return (
    <div className="col-12 col-md-6 col-xl-3 my-3">
      <div className="card ">
        <div className="card-header"> Cart Summary</div>
        <div className="card-body">
          <div className="d-flex">
            <div className="col-6">
              <span>Subtotal</span>
            </div>
            <div className="col-6">
              <strong>Rs. {cartSubtotal}</strong>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <span>tax</span>
            </div>
            <div className="col-6">
              <strong>Rs. {cartTax}</strong>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <span>total</span>
            </div>
            <div className="col-6">
              <strong>Rs. {cartTotal}</strong>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/checkout"
        onClick={(event) => {
          if (!isloggedIn) {
            event.preventDefault();
            dispatch(toggleLoginModal(true));
          }
        }}
      >
        <ProceedToCheckout className="btn prod-chk my-2" type="button">
          Proceed to checkout
        </ProceedToCheckout>
      </Link>
    </div>
  );
}
