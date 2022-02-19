/**
 * Reducer of this Application - Data fetched from ./data
 *
 */
import { storeProducts } from "./data";
const initialState = {
  count: 0,
  products: [],
  cart: [],
  loginModal: false,
  cartSubtotal: 0,
  cartTax: 0,
  cartTotal: 0,
  email: "",
  password: "",
  isloggedIn: false,
  loginErrorMessage: "",
  filters: {},
  proceedToCheckout: false,
  loginSuccess: false,
  menu: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "selected_menu":
      return {
        ...state,
        menu: action.menu,
      };
    case "set_filters":
      return {
        ...state,
        filters: Object.assign({}, action.filters),
      };
    case "fetch_products":
      return {
        ...state,
        products: [...storeProducts],
      };
    case "add_to_cart":
      return {
        ...state,
        count: state.count + 1,
      };
    case "remove_item_cart":
      return {
        ...state,
        count: state.count - 1,
      };
    case "toggle_login_modal":
      return {
        ...state,
        loginModal: !state.loginModal,
        proceedToCheckout: action.proceedToCheckout,
      };
    case "update_cart":
      return {
        ...state,
        cart: action.payload,
      };
    case "update_products":
      return {
        ...state,
        products: action.payload,
      };
    case "update_total_result":
      return {
        ...state,
        cartSubtotal: action.subtotal,
        cartTax: action.tax,
        cartTotal: action.total,
      };
    case "set_login_details":
      return {
        ...state,
        email: action.email,
        password: action.password,
        isloggedIn: true,
        loginModal: action.loginModal,
        loginSuccess: action.loginSuccess,
      };
    case "logout_attempt":
      return {
        ...state,
        email: "",
        password: "",
        isloggedIn: false,
      };

    case "clear_proceed_to_checkout":
      return {
        ...state,
        proceedToCheckout: false,
        loginSuccess: false,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
