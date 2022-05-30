import { call, put, takeLatest } from "@redux-saga/core/effects";
import { GET_USERS_REQUESTED } from "../types";
import { getUsersSuccess, getUsersFailed } from "../actions/users";
//delte
import { GET_USERS_DELETE } from "../types";
import { getUserDeleteSuccess, getUserDeleteFailed } from "../actions/users";

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

    if (data !== undefined) {
      console.log("resp at saga", data);
      yield put(getUsersSuccess(data));
    }
  } catch (error) {
    console.log("error at saga", error);
    yield put(getUsersFailed(error));
  }
}

//delete

function deleteUrl(action) {
  const deleteURL = `http://localhost:8000/notes/?noteId=${action.id}`;

  console.log("id at api", action);
  return fetch(deleteURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      id: action.id,
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

function* deleteUsers(action) {
  console.log("action at saga", action);
  try {
    const data = yield call(deleteUrl, action);

    if (data !== undefined) console.log("resp at sagadelete", data);
    yield put(getUserDeleteSuccess, data);
  } catch (err) {
    yield put(getUserDeleteFailed, err);
    console.log("err in sagadelete", err);
  }
}

export const userSaga = [takeLatest(GET_USERS_REQUESTED, fetchUsers)];
export const deleteSaga = [takeLatest(GET_USERS_DELETE, deleteUsers)];
