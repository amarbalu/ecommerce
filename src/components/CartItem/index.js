import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQty } from "../../actions";

export default function CartItem({ item, cart }) {
  const dispatch = useDispatch();
  const { id, title, img, price, total, count } = item;

  return (
    <div className=" my-1 text-capitalize  ">
      <div className="card ">
        <div className="card-body">
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
                  <i className="bi bi-cart-plus"></i>
                </button>
              </span>
              <span className="btn btn-black mx-1">
                <input
                  type="text"
                  value={count}
                  onChange={(e) => {
                    dispatch(updateQty(id, "manual", e.target.value));
                  }}
                  onBlur={(e) => {
                    if (e.target.value) {
                      dispatch(updateQty(id, "manual", e.target.value));
                    } else {
                      dispatch(removeItem(id));
                    }
                  }}
                  style={{ width: "3rem" }}
                ></input>
              </span>

              <span className="btn btn-black mx-1">
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
          <div className="col-10 mx-auto col-lg-2">
            <div
              className="text-danger"
              onClick={() => dispatch(removeItem(id))}
            >
              <i className="bi bi-trash"></i>
            </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <strong className="d-lg-none">item total : {total}</strong>
            <strong>Rp. {total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
