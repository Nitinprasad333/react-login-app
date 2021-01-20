import watchIncrement from "./saga";
import { all } from "redux-saga/effects";
export default function* watchersRootSaga() {
  yield all([watchIncrement()]);
}
