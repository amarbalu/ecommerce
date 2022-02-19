import React from "react";

export default function CheckoutItem({ item, cart }) {
  const { title, img, total, count } = item;

  return (
    <div className=" my-1 text-capitalize col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
      <div className="card ">
        <div className="card-body">
          <div className="col-12 text-center">
            <img src={img} className="img-fluid" alt="product" />
          </div>
          <div className="col-12 mt-1">
            <div className="d-flex justify-content-between">
              <strong>{title}</strong>
              <span>Qty - {count}</span>
            </div>

            <div>
              <span>Rs. {total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
