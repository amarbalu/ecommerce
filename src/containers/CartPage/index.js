import React from "react";
import { CartSection } from "./Styles";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import EmptyCart from "../../components/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
/**
 * CartPage function provides the CartPage template
 * @returns Component
 */
export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const cartSubtotal = useSelector((state) => state.cartSubtotal);
  const cartTotal = useSelector((state) => state.cartTotal);
  const cartTax = useSelector((state) => state.cartTax);
  const isloggedIn = useSelector((state) => state.isloggedIn);
  const proceedToCheckout = useSelector((state) => state.proceedToCheckout);
  const loginSuccess = useSelector((state) => state.loginSuccess);
  const dispatch = useDispatch();

  return !loginSuccess || !proceedToCheckout ? (
    <CartSection>
      {cart.length ? (
        <div className="container mt-2">
          <div className="col-12 d-flex justify-content-center justify-content-sm-between mx-auto my-2  text-center text-slide">
            <div>
              <i className="header bi bi-cart4"></i>
              <span>Your Cart</span>
            </div>
          </div>
          <div className=" d-flex r justify-content-between flex-wrap flex-md-nowrap">
            <CartList cart={cart} />

            <CartTotal
              cartTotal={cartTotal}
              cartSubtotal={cartSubtotal}
              cartTax={cartTax}
              isloggedIn={isloggedIn}
              dispatch={dispatch}
              proceedToCheckout={proceedToCheckout}
              loginSuccess={loginSuccess}
            />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </CartSection>
  ) : (
    <Navigate to="/checkout" />
  );
}
