import { adminState, initialState, uploadState } from "../state/state";
import {
  ADD_DATA,
  ADD_ERROR,
  ADD_SUCCESS,
  ADMIN_AUTH_ERROR,
  ADMIN_LOADED,
  ADMIN_LOADING,
  GET_DATA,
  ITEM_LOADING,
  LOGIN_FAILED,
  LOGIN_PROCESSING,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../constant/constants";

export const abbrReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        queryResult: action.payload,
        isLoading: false,
      };
    case ITEM_LOADING:
      return {
        ...state,
        isLoading: true,
        firstLoad: false,
        queryKeyword: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const uploadReducer = (state = uploadState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        isUploading: true,
        errorCode: null,
        uploadingData: action.payload,
        successMsg: null,
      };

    case ADD_SUCCESS:
      return {
        ...state,
        isUploading: false,
        uploadingData: action.payload,
        errorCode: null,
        successMsg: "uploaded successfully",
      };

    case ADD_ERROR:
      return {
        ...state,
        isUploading: false,
        errorCode: action.payload,
        successMsg: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export const adminReducer = (state = adminState, action) => {
  switch (action.type) {
    case ADMIN_LOADING:
      return {
        ...state,
        isAdminLoading: true,
      };
    case LOGIN_PROCESSING:
      return {
        ...state,
        isAdminLoading: true,
      };
    case ADMIN_AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        errorMsg: action.payload,
        username: null,
        isAdminLoading: false,
        isAuthenticated: false,
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isAdminLoading: false,
        username: action.payload.username,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isAdminLoading: false,
        username: action.payload.user.username,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
        isAdminLoading: false,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        username: null,
        isAdminLoading: false,
        isAuthenticated: false,
        errorMsg: null,
      };
    default:
      return {
        ...state,
      };
  }
};
