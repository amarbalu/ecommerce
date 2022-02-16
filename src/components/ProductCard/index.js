import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import PropTypes from "prop-types";

const Product = (props) => {
  return (
    <div className="product col-10 mx-auto col-md-6 col-lg-3 my-3">
      <ProductConsumer>
        {(value) => (
          // mengirim value.product.id
          <div
            className="card"
            onClick={() => {
              value.handleDetail(value.product.id);
            }}
          >
            <Link to="/details">
              <div className="card-image rounded">
                {/* <img
                  src={value.product.img}
                  alt="product"
                  className="card-img-top p-5"
                /> */}
              </div>
            </Link>
            {/* BODY CARD */}
            <div className="card-body">
              <h5 className="card-title title">{value.title}</h5>
              <div className="d-flex justify-content-between">
                <p className="card-text price">Rp. {value.price}</p>
                <i className="fas fa-shipping-fast fa-2x text-lightgreen"></i>
              </div>
            </div>
            {/* BUTTON ADD TO CART */}
            {/* shorthand IF {inCart ? true : false} jika barang ada di cart maka true akan di disable dan tidak bisa tambah keranjang */}
            <button
              className="btn cart-btn"
              disabled={value.product.inCart ? true : false}
              onClick={() => {
                value.addToCart(value.product.id);
                value.openModal(value.product.id);
              }}
            >
              {/* Kondisi if ELSE*/}
              {value.product.inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {""}In Cart
                </p>
              ) : (
                <span>
                  <i className="fas fa-plus-circle me-1 plus-icon"></i> Add To
                  Cart
                </span>
              )}
            </button>
          </div>
        )}
      </ProductConsumer>
    </div>
  );
};

export default Product;

// PropTypes berfungsi memfilter tipe data dari tiap2 data props atau variabel yang masuk
Product.propTypes = {};
// const
