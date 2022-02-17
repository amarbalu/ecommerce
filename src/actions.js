const addtocartAction = (id) => {
  return {
    type: "add_to_cart",
    payload: id,
  };
};
const fetchProducts = () => ({
  type: "fetch_products",
});
const updateQty = (id, mode) => ({
  type: "quantity_update",
  id,
  mode,
});

const toggleLoginModal = () => ({
  type: "toggle_login_modal",
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
export {
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
};
