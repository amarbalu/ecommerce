import Homepage from "./containers/Homepage";
import CartPage from "./containers/CartPage";
import Checkout from "./containers/Checkout";

export const routes = [
  { path: "/homepage", component: <Homepage /> },
  { path: "/cart", component: <CartPage /> },
  { path: "/checkout", component: <Checkout /> },
];
