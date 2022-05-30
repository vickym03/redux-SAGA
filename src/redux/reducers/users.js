import * as type from "../types";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action) {
  console.log("sction at reducer", action);
  
  switch ((action, action.type)) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case type.GET_USERS_SUCCESS:
        console.log("state reducer",state)
      return {
        ...state,
        users: action.payload.data,
        loading: false,
        error: null,
      };

    case type.GET_USERS_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
      };

      //delete
      case type.GET_USERS_DELETE:
      return {
        ...state,
        loading: true,
        error: null,
      };

      case type.GET_USERS_DELETE_SUCCESS:
        return {
          ...state,
          users: action.payload.data,
          loading: false,
          error: null,
        };

        case type.GET_USERS_DELETE_FAILED:
          return {
            ...state,
            users: action.payload.data,
            loading: true
          };
  
    default:
      return state;
  }
}
