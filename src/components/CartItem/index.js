import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQty } from "../../actions";

export default function CartItem({ item, cart }) {
  const dispatch = useDispatch();
  const { id, title, img, price, total, count } = item;

  return (
    <div className="row justify-content-center my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1">
            <button onClick={() => dispatch(updateQty(id, "add"))}>
              {" "}
              <i class="bi bi-cart-plus"></i>
            </button>
          </span>
          <span className="btn btn-black mx-1">
            <input
              type="text"
              value={count}
              onChange={(e) =>
                e.target.value &&
                dispatch(updateQty(id, "manual", e.target.value))
              }
              style={{ width: "3rem" }}
            ></input>
          </span>

          <span className="btn btn-black mx-1">
            <button onClick={() => dispatch(updateQty(id, "remove"))}>
              <i class="bi bi-cart-dash"></i>
            </button>
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="text-danger" onClick={() => dispatch(removeItem(id))}>
          <i class="bi bi-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="d-lg-none">item total : {total}</strong>
        <strong>Rp. {total}</strong>
      </div>
    </div>
  );
}
