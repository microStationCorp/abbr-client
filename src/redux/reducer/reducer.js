import { initialState } from "../state/state";
import { GET_DATA, ITEM_LOADING } from "../constant/constants";

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
