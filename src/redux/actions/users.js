import * as type from "../types";

//get data
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
//get ended---------------------------------------------


//delete data
export function getUserDelete(id){
  return{ 
    type: type.GET_USERS_DELETE,
    id:id
  }
}

export function getUserDeleteSuccess(data){
  return{ 
    type: type.GET_USERS_DELETE_SUCCESS,
    payload: data
  }
}

export function getUserDeleteFailed(error){
  return{ 
    type: type.GET_USERS_DELETE_FAILED,
    payload: error
  }
}
//delete ended---------------------------------------------
