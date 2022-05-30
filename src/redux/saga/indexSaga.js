import { all } from "@redux-saga/core/effects";

import { userSaga, deleteSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([...userSaga, ...deleteSaga]);
}
