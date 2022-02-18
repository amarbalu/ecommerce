import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCartItems, toggleLoginModal } from "../../actions";
import CheckoutItem from "../CheckoutItem";

export default function CheckoutList({ cart }) {
  const isloggedIn = useSelector((state) => state.isloggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((item) => {
        return <CheckoutItem key={item.id} item={item} cart={cart} />;
      })}
      <Link to="/">
        <button
          className="btn btn-outline-danger text-uppercase mb-3 px-5"
          type="button"
          onClick={() => dispatch(clearCartItems())}
        >
          Confirm Order
        </button>
      </Link>
    </div>
  );
}
