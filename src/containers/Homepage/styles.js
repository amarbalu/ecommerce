import styled from "styled-components";
import ProductList from "../../components/ProductList";

export const ProductListContainer = styled(ProductList)`
  display: inline-block;
  .product {
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
  }

  .product img {
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
  }

  .product:hover img {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  .product .card-image {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .product .card-image::before {
    content: "Tap to Details";
    position: absolute;
    background: rgba(0, 0, 0, 0.411);
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 9;
    color: #f3f3f3;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .product .card-image:hover::before {
    opacity: 1;
  }

  .product .cart-btn {
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
    background-color: #ffa400;
    opacity: 0.9;
  }

  .product .cart-btn .plus-icon {
    -webkit-transition: all 100ms linear;
    transition: all 100ms linear;
  }

  .product .cart-btn:hover {
    opacity: 1;
  }

  .product .cart-btn:hover .plus-icon {
    color: #00bfa5;
  }
`;
