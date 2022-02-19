const addtocartAction = (id) => {
  return {
    type: "add_to_cart",
    payload: id,
  };
};
const fetchProducts = () => ({
  type: "fetch_products",
});
const updateQty = (id, mode, value) => ({
  type: "quantity_update",
  id,
  mode,
  value,
});

const toggleLoginModal = (proceedToCheckout) => ({
  type: "toggle_login_modal",
  proceedToCheckout,
});

const updateCart = (payload) => ({
  type: "update_cart",
  payload,
});
const updateProducts = (payload) => ({
  type: "update_products",
  payload,
});
const updateTotalAction = (payload) => ({
  type: "update_total",
  payload,
});
const updateTotalResult = (subtotal, tax, total) => ({
  type: "update_total_result",
  subtotal,
  tax,
  total,
});
const removeItem = (payload) => ({
  type: "remove_item_cart",
  payload,
});
const clearCartItems = () => ({
  type: "clear_cart",
});
const login = (email, password) => ({
  type: "login_attempt",
  email,
  password,
});
const setloginDetails = (email, password, loginSuccess) => ({
  type: "set_login_details",
  email,
  password,
  loginSuccess,
});
const logout = () => ({
  type: "logout_attempt",
});
const setLoginError = (msg) => ({
  type: "login_error",
  msg,
});
const fetch_filters = () => ({
  type: "fetch_filters",
});
const setfilters = (filters) => ({
  type: "set_filters",
  filters,
});
const fetchFilteredResult = (item, value) => ({
  type: "fetch_filter_result",
  value,
  item,
});
const clearProceedToCheckout = () => ({
  type: "clear_proceed_to_checkout",
});
export {
  clearProceedToCheckout,
  addtocartAction,
  updateQty,
  updateCart,
  updateProducts,
  toggleLoginModal,
  updateTotalAction,
  updateTotalResult,
  removeItem,
  fetchProducts,
  clearCartItems,
  login,
  setloginDetails,
  logout,
  fetch_filters,
  setfilters,
  setLoginError,
  fetchFilteredResult,
};
