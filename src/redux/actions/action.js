import { GET_DATA, ITEM_LOADING } from "../constant/constants";
import axios from "axios";

export const getQueryResult = (queryData) => (dispatch) => {
  dispatch({ type: ITEM_LOADING, payload: queryData.queryData });
  axios
    .post("https://abbrserver.herokuapp.com/abbrserver/api/query", queryData)
    .then((res) => dispatch({ type: GET_DATA, payload: res.data.result }));
};
