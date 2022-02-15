import { all, put, takeEvery, delay, takeLatest } from "redux-saga/effects";

//yield fork - non blocking call

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "increment" });
}

function* watchIncrementAdync() {
  yield takeEvery("increment_async", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAdync()]);
}
