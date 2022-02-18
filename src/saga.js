import { all, put, takeLatest, call, select } from "redux-saga/effects";
import {
  fetchProducts,
  removeItem,
  updateCart,
  updateProducts,
  updateTotalAction,
  updateTotalResult,
  setloginDetails,
} from "./actions";
import { loginCredentials } from "./data";
function* clearCart() {
  try {
    yield put(updateCart([]));
    yield put(updateTotalAction());
    yield put(fetchProducts);
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
    const data = loginCredentials;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        yield put(setloginDetails(email, password));
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

function* watchQuantityUpdate() {
  yield takeLatest("quantity_update", ({ id, mode, value }) =>
    quantityUpdate(id, mode, value)
  );
}

function* watchClearCart() {
  yield takeLatest("clear_cart", clearCart);
}

function* watchRemoveItem() {
  yield takeLatest("remove_item_cart", ({ payload }) =>
    removeItemInCart(payload)
  );
}

function* watchAddItem() {
  yield takeLatest("add_to_cart", ({ payload }) => addItemToCart(payload));
}
function* watchUpdateTotal() {
  yield takeLatest("update_total", updateTotal);
}
function* watchLogin() {
  yield takeLatest("login_attempt", ({ email, password }) =>
    loginApi(email, password)
  );
}
export default function* rootSaga() {
  yield all([
    watchQuantityUpdate(),
    watchRemoveItem(),
    watchUpdateTotal(),
    watchAddItem(),
    watchClearCart(),
    watchLogin(),
  ]);
}
