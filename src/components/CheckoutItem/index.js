import React from "react";
import styled from "styled-components";

export default function CheckoutItem({ item, cart }) {
  const { id, title, img, price, total, count } = item;

  return (
    <div className=" my-1 text-capitalize col-xs-12 col-sm-6 col-md-4 col-lg-3 ">
      <div class="card ">
        <div class="card-body">
          <div className="col-12 text-center">
            <img src={img} className="img-fluid" alt="product" />
          </div>
          <div className="col-12">
            <strong>{title}</strong>
            <div>Rs. {price}</div>

            <div>
              <span>Qty - {count}</span>
            </div>

            <div>
              <strong>Rs. {total}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
