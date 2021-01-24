export const initialState = {
  isLoading: false,
  queryResult: [],
  queryKeyword: null,
  firstLoad: true,
};

export const uploadState = {
  isUploading: false,
  uploadingData: null,
  successMsg: null,
  errorCode: null,
};

export const adminState = {
  token: localStorage.getItem("token"),
  username: null,
  isAdminLoading: false,
  isAuthenticated: false,
  errorMsg: null,
};
