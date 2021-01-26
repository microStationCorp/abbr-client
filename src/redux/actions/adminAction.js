import axios from "axios";
import {
  ADMIN_AUTH_ERROR,
  ADMIN_LOADED,
  ADMIN_LOADING,
  LOGIN_FAILED,
  LOGIN_PROCESSING,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../constant/constants";

export const loginAction = ({ username, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_PROCESSING,
  });

  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //request body
  const body = JSON.stringify({ username, password });

  axios
    .post(
      "https://abbrserver.herokuapp.com/abbrserver/admin/login",
      body,
      config
    )
    .then((res) => {
      if (res.data.msg) {
        dispatch({
          type: LOGIN_FAILED,
          payload: res.data.msg,
        });
      } else {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.message,
      });
    });
};

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};

export const adminLoadingAction = () => (dispatch, getState) => {
  dispatch({
    type: ADMIN_LOADING,
  });

  axios
    .get(
      "https://abbrserver.herokuapp.com/abbrserver/admin/auth",
      tokenSetup(getState)
    )
    .then((res) => {
      if (res.data.msg) {
        dispatch({
          type: ADMIN_AUTH_ERROR,
          payload: res.data.msg,
        });
      } else {
        dispatch({
          type: ADMIN_LOADED,
          payload: res.data,
        });
      }
    });
};

//set token header for send request
export const tokenSetup = (getState) => {
  const token = getState().admin.token;

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
