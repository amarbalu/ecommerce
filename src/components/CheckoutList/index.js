import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCartItems, toggleLoginModal } from "../../actions";
import CheckoutItem from "../CheckoutItem";

export default function CheckoutList({ cart }) {
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-center flex-sm-wrap">
        {cart.map((item) => {
          return <CheckoutItem key={item.id} item={item} cart={cart} />;
        })}
      </div>
    </React.Fragment>
  );
}
