import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED,
  } from "../actions/types";
  import Cookies from "js-cookie";
  
  const initialState = {
    custom: Cookies.get("blisspoint_fpc"),
    isAuthenticated: null,
    loading: true,
    user: null,
  };
  
  export default function reduce(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        Cookies.set("blisspoint_fpc", payload.blisspoint_fpc);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
  
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
      case ACCOUNT_DELETED:
        Cookies.remove("blisspoint_fpc");
        return {
          ...state,
          blisspoint_fpc: null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  }