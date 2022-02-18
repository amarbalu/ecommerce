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
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-10 mt-2 ms-sm-5  col-sm-8 text-capitalize text-end">
            <Link
              to="/checkout"
              onClick={(event) => {
                if (!isloggedIn) {
                  event.preventDefault();
                  dispatch(toggleLoginModal());
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
            <h5>
              <span className="text-title">subtotal</span>
              <strong>Rp. {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax</span>
              <strong>Rp. {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total</span>
              <strong>Rp. {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
