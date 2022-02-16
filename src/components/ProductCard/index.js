import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <div className="product col-10 mx-auto col-md-6 col-lg-3 my-3">
      <div
        className="card"
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
          onClick={() => {
            // value.addToCart(product.id);
            // value.openModal(product.id);
          }}
        >
          {product.inCart ? (
            <p className="text-capitalize mb-0" disabled>
              {""}In Cart
            </p>
          ) : (
            <span>
              <i className="fas fa-plus-circle me-1 plus-icon"></i> Add To Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {};
