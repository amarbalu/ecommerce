import React, { Component, useEffect } from "react";
import Title from "./Title";
import CartColumn from "../../components/CartColumn";
import CartList from "../../components/CartList";
import CartTotal from "../../components/CartTotal";
import EmptyCart from "../../components/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { clearProceedToCheckout } from "../../actions";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const cartSubtotal = useSelector((state) => state.cartSubtotal);
  const cartTotal = useSelector((state) => state.cartTotal);
  const cartTax = useSelector((state) => state.cartTax);
  const isloggedIn = useSelector((state) => state.isloggedIn);
  const proceedToCheckout = useSelector((state) => state.proceedToCheckout);
  const loginSuccess = useSelector((state) => state.loginSuccess);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      if (proceedToCheckout && loginSuccess) {
        dispatch(clearProceedToCheckout());
      }
    };
  }, []);
  return !loginSuccess || !proceedToCheckout ? (
    <section>
      {cart.length ? (
        <React.Fragment>
          <div className="container-fluid">
            <Title name="Your" title="cart"></Title>
            <CartColumn cart={cart} />
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
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </section>
  ) : (
    <Navigate to="/checkout" />
  );
}
