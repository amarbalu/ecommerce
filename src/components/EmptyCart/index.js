import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function EmptyCart() {
  return (
    <Container className="container mt-5">
      <div className="row">
        <div className="col-12  mx-auto  text-center text-slide">
          <i class="bi bi-cart4"></i>
          <span>Your Cart is Empty</span>
        </div>
      </div>
      <div className="mx-auto text-center">
        <Link to="/">
          <button className="btn  text-center mb-3 px-5" type="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </Container>
  );
}
