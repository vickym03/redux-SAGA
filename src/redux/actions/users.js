import * as type from "../types";

export function getUsers() {
  return {
    type: type.GET_USERS_REQUESTED,

    // users: users,
  };
}

export function getUsersSuccess(data) {
  return {
    type: type.GET_USERS_SUCCESS,
    payload: data,
  };
}

export function getUsersFailed(error) {
  return {
    type: type.GET_USERS_FAILED,
    payload: error,
  };
}
