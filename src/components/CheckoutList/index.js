import React from "react";
import CheckoutItem from "../CheckoutItem";

export default function CheckoutList({ cart }) {
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-start flex-sm-wrap">
        {cart.map((item) => {
          return <CheckoutItem key={item.id} item={item} cart={cart} />;
        })}
      </div>
    </React.Fragment>
  );
}
