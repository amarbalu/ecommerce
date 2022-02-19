import React from "react";
import { Link } from "react-router-dom";
import { toggleLoginModal } from "../../actions";

export default function CartTotal({
  cartSubtotal,
  cartTax,
  cartTotal,
  isloggedIn,
  dispatch,
}) {
  return (
    <div>
      <div className="card ">
        <div className="card-body">
          <h5>
            <div className="col-6">
              <span className="text-title">Subtotal</span>
            </div>
            <div className="col-6">
              <strong>Rs. {cartSubtotal}</strong>
            </div>
          </h5>
          <h5>
            <div className="col-6">
              <span className="text-title">tax</span>
            </div>
            <div className="col-6">
              <strong>Rs. {cartTax}</strong>
            </div>
          </h5>
          <h5>
            <div className="col-6">
              <span className="text-title">total</span>
            </div>
            <div className="col-6">
              <strong>Rs. {cartTotal}</strong>
            </div>
          </h5>
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
        <button
          className="btn btn-outline-danger text-uppercase mb-3 px-5"
          type="button"
        >
          Proceed to checkout
        </button>
      </Link>
    </div>
  );
}
