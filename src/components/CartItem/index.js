import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeItem, updateQty } from "../../actions";

const CartItemContainer = styled("div")`
  img {
    width: 10rem;
  }
  input {
    width: 3rem;
  }
  button {
    background-color: #51d4d3;
    border-color: #51d4d3;
  }
  .text-danger {
    cursor: pointer;
  }
`;
export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, title, img, total, count, price } = item;

  return (
    <CartItemContainer className="card d-flex col-11">
      <div className="card-body d-flex">
        <div className="col-xs-6 col-md-6 mx-2 col-lg-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        <div className="col-lg-5">
          <strong className="col-10  col-lg-2">{title}</strong>

          <div className="col-12  col-lg-12 my-2 my-lg-0">
            <div className="d-flex ">
              <span>
                <button onClick={() => dispatch(updateQty(id, "add"))}>
                  <i className="bi bi-cart-plus"></i>
                </button>
              </span>
              <span className="mx-1">
                <input
                  type="text"
                  value={count}
                  onChange={(e) => {
                    if (/[0-9]/g.test(e.target.value)) {
                      dispatch(updateQty(id, "manual", e.target.value));
                    } else if (!e.target.value) {
                      dispatch(updateQty(id, "manual", ""));
                    }
                  }}
                  onBlur={(e) => {
                    if (e.target.value) {
                      dispatch(updateQty(id, "manual", e.target.value));
                    } else {
                      dispatch(removeItem(id));
                    }
                  }}
                ></input>
              </span>

              <span>
                <button
                  onClick={() => {
                    if (count === 1) {
                      dispatch(removeItem(id));
                    } else if (count) {
                      dispatch(updateQty(id, "remove"));
                    }
                  }}
                >
                  <i className="bi bi-cart-dash"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="col-10  col-lg-2">
            <div
              className="text-danger d-flex"
              onClick={() => dispatch(removeItem(id))}
            >
              Remove
              <i className="bi bi-trash"></i>
            </div>
          </div>
          <div className="col-10  col-lg-6">
            <strong>Rs. {total ? total : price}</strong>
          </div>
        </div>
      </div>
    </CartItemContainer>
  );
}
