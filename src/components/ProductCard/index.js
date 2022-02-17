import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addtocartAction } from "../../actions";
import { CartContainer } from "./styles";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CartContainer className="product col-xs-3  col-md-6 col-lg-3  ">
      <div
        className="card my-3 mx-3"
        onClick={() => {
          //   value.handleDetail(product.id);
        }}
      >
        <Link to="/details">
          <div className="card-image rounded">
            <img src={product.img} alt="product" className="card-img-top p-5" />
          </div>
        </Link>

        <div className="card-body">
          <h5 className="card-title title">{product.title}</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text price">Rp. {product.price}</p>
            <i className="fas fa-shipping-fast fa-2x text-lightgreen"></i>
          </div>
        </div>

        <button
          className="btn cart-btn"
          disabled={product.inCart ? true : false}
          onClick={() => dispatch(addtocartAction(product.id))}
        >
          {product.inCart ? (
            <p className="text-capitalize mb-0" disabled>
              <i class="bi bi-cart-check-fill"></i>
              {/* In Cart */}
            </p>
          ) : (
            <span>
              <i class="bi bi-cart-plus-fill"></i>
              {/* Add To Cart */}
            </span>
          )}
        </button>
      </div>
    </CartContainer>
  );
};

export default Product;

Product.propTypes = {};
