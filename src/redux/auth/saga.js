import { all, fork } from "redux-saga/effects";

export function* loginRequest() { }

export default function* rootSaga() {
  yield all([fork(loginRequest)])
}