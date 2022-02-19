import { all, put, takeLatest, select } from "redux-saga/effects";

import {
  removeItem,
  updateCart,
  updateProducts,
  updateTotalAction,
  updateTotalResult,
  setloginDetails,
  setfilters,
  fetchProducts,
} from "./actions";
import { loginCredentials, storeProducts } from "./data";
function* fetchFilterList() {
  try {
    yield put(fetchProducts());
    let tempProducts = yield select((state) => state.products);
    const initialObject = { color: [], person: [], type: [] };
    const keys = Object.keys(initialObject);
    const finalFilteredObj = tempProducts.reduce((total, current) => {
      for (let key in current) {
        if (keys.indexOf(key) >= 0 && total[key].indexOf(current[key]) === -1) {
          total[key].push(current[key]);
        }
      }
      return total;
    }, initialObject);

    yield put(setfilters(finalFilteredObj));
  } catch (ex) {}
}
function* fetchFilteredListOfItem(type = "color", item = "yellow") {
  try {
    if (type !== "All") {
      yield put(fetchProducts());
      let tempProducts = yield select((state) => state.products);
      tempProducts = tempProducts.filter((value) => value[type] === item);

      yield put(updateProducts(tempProducts));
    } else {
      yield put(updateProducts(storeProducts));
    }
  } catch (ex) {}
}
function* clearCart() {
  try {
    const tempCart = yield select((state) => state.cart);

    for (let i = 0; i < tempCart.length; i++) {
      const { id } = tempCart[i];

      yield put(removeItem(id));
    }
  } catch (ex) {
    console.log(ex);
  }
}

function* addItemToCart(id) {
  try {
    let tempProducts = yield select((state) => state.products);
    let tempCart = yield select((state) => state.cart);

    const [product] = tempProducts.filter((item) => item.id === id);

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    yield put(updateCart([...tempCart, product]));
    yield put(updateProducts([...tempProducts]));
    yield put(updateTotalAction());
  } catch (ex) {
    console.log(ex);
  }
}

function* removeItemInCart(id) {
  try {
    let tempProducts = yield select((state) => state.products);
    let tempCart = yield select((state) => state.cart);

    tempCart = tempCart.filter((item) => item.id !== id);

    for (let index = 0; index < tempProducts.length; index++) {
      const item = tempProducts[index];
      if (item.id === id) {
        item.inCart = false;
        item.count = 0;
        item.total = 0;
        break;
      }
    }

    yield put(updateCart(tempCart));
    yield put(updateProducts(tempProducts));
    yield put(updateTotalAction());
  } catch (ex) {
    console.log(ex);
  }
}
function* loginApi(email, password) {
  try {
    let proceedToCheckout = yield select((state) => state.proceedToCheckout);
    let loginModel = yield select((state) => state.loginModel);
    const data = loginCredentials;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        if (proceedToCheckout) {
          yield put(setloginDetails(email, password, true));
        } else {
          yield put(setloginDetails(email, password, false));
        }

        break;
      }
    }
  } catch (ex) {}
}
function* updateTotal() {
  try {
    let subtotal = 0;
    const tempCart = yield select((state) => state.cart);
    tempCart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    yield put(updateTotalResult(subtotal, tax, total));
  } catch (ex) {
    console.log(ex);
  }
}
function* quantityUpdate(id, mode, value) {
  try {
    const tempCart = yield select((state) => state.cart);

    for (let i = 0; tempCart.length; i++) {
      const product = tempCart[i];
      if (product.id === id) {
        if (mode === "add") {
          product.count = product.count + 1;
        } else if (mode === "remove") {
          product.count = product.count - 1;
          if (!product.count) {
            yield put(removeItem(id));
          }
        } else {
          product.count = value;
        }
        product.total = product.count * product.price;
        break;
      }
    }

    yield put(updateCart(tempCart));
    yield put(updateTotalAction());
  } catch (ex) {
    console.log(ex);
  }
}
/**
 * watchAddItem saga helps us to manage quantity update in cart page
 */
function* watchQuantityUpdate() {
  yield takeLatest("quantity_update", ({ id, mode, value }) =>
    quantityUpdate(id, mode, value)
  );
}
/**
 * watchAddItem saga helps us to fetch manage clear cart operation
 */
function* watchClearCart() {
  yield takeLatest("clear_cart", clearCart);
}
/**
 * watchAddItem saga helps us to manage remove product from cart operation
 */
function* watchRemoveItem() {
  yield takeLatest("remove_item_cart", ({ payload }) =>
    removeItemInCart(payload)
  );
}
/**
 * watchAddItem saga helps us to fetch filters of this application
 */
function* watchFilteredResult() {
  yield takeLatest("fetch_filter_result", ({ item, value }) =>
    fetchFilteredListOfItem(item, value)
  );
}
/**
 * watchAddItem saga helps us to do watch cart addition
 */
function* watchAddItem() {
  yield takeLatest("add_to_cart", ({ payload }) => addItemToCart(payload));
}
/**
 * watchUpdateTotal saga helps us to do total and tx in cart page
 */
function* watchUpdateTotal() {
  yield takeLatest("update_total", updateTotal);
}
/**
 * watchLogin saga helps us to do login attempt
 */
function* watchLogin() {
  yield takeLatest("login_attempt", ({ email, password }) =>
    loginApi(email, password)
  );
}
/**
 * watchfetchFilterLists saga helps us to fetch products based on filters
 */
function* watchfetchFilterLists() {
  yield takeLatest("fetch_filters", fetchFilterList);
}
export default function* rootSaga() {
  yield all([
    watchQuantityUpdate(),
    watchRemoveItem(),
    watchUpdateTotal(),
    watchAddItem(),
    watchClearCart(),
    watchLogin(),
    watchfetchFilterLists(),
    watchFilteredResult(),
  ]);
}
