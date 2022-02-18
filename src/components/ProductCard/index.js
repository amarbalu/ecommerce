import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocartAction } from "../../actions";
import { CartContainer } from "./styles";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <CartContainer className="  product col-xs-2  col-md-6 col-lg-6 col-xl-4 ">
      <div
        className="card my-3 mx-3"
        onClick={() => {
          //   value.handleDetail(product.id);
        }}
      >
        <Link to="/details">
          <div className="card-image rounded image-wrapper">
            <div className="inner">
              <img
                src={product.img}
                alt="product"
                className="card-img-top p-5"
              />
            </div>
          </div>
        </Link>

        <div className="card-body">
          <h5 className="card-title title">{product.title}</h5>
          <p className="card-text price">{product.info}</p>
          <div className="d-flex justify-content-between">
            <p className="card-text price">Rs. {product.price}</p>
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
              In Cart
            </p>
          ) : (
            <span>
              <i class="bi bi-cart-plus-fill"></i>
              Add To Cart
            </span>
          )}
        </button>
      </div>
    </CartContainer>
  );
};

export default Product;

Product.propTypes = {};
