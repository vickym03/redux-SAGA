import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { GET_USERS_REQUESTED } from "../types";
import { getUsersSuccess, getUsersFailed } from "../actions/users";

const apiURL = "http://localhost:8000/notes";

function getApi() {
  return fetch(apiURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
    .then((resp) => {
      console.log("response at api", resp);
      return resp.json();
    })
    .catch((err) => {
      console.log("error getting url", err);
      {
        throw err;
      }
    });
}

function* fetchUsers(action) {
  console.log("action at saga", action);
  try {
    const data = yield call(getApi, action);
    
    if (data!==undefined) {
        console.log("resp at saga", data);
      yield put(getUsersSuccess(data));
    }
  } catch (error) {
    console.log("error at saga", error);
    yield put(getUsersFailed(error));
  }
}

const userSaga = [takeLatest(GET_USERS_REQUESTED, fetchUsers)];
export default userSaga;
