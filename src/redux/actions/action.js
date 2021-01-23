import {
  ADD_DATA,
  ADD_ERROR,
  ADD_SUCCESS,
  GET_DATA,
  ITEM_LOADING,
} from "../constant/constants";
import axios from "axios";

export const getQueryResult = (queryData) => (dispatch) => {
  dispatch({ type: ITEM_LOADING, payload: queryData.queryData });
  axios
    .post("https://abbrserver.herokuapp.com/abbrserver/api/query", queryData)
    .then((res) => dispatch({ type: GET_DATA, payload: res.data.result }));
};

export const addNewAbbr = ({ shortForm, fullForm }) => (dispatch) => {
  dispatch({ type: ADD_DATA, payload: { shortForm, fullForm } });
  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ shortForm, fullForm });
  axios
    .post("https://abbrserver.herokuapp.com/abbrserver/api/add", body, config)
    .then((res) => {
      if (res.data.driver) {
        dispatch({ type: ADD_ERROR, payload: "data already uploaded" });
      } else {
        dispatch({ type: ADD_SUCCESS, payload: res.data });
      }
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err });
    });
};
