import { initialState, uploadState } from "../state/state";
import {
  ADD_DATA,
  ADD_ERROR,
  ADD_SUCCESS,
  GET_DATA,
  ITEM_LOADING,
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
