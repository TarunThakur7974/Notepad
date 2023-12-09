import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./extraReducerFunc";

let userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "AUTH",
  initialState: {
    user: userExist ? userExist : null,
    isLoading: false,
    isError: false,
    isSucces: false,
    message: "",
    userData: null,
    isLoadingData: false,
    checkState: null
  },

  reducers: {
    logout: (state, action) => {
      localStorage.clear();
      return {
        ...state,
        userData: null,
        user: null
      }
    },
    check: (state, action) => {
      return {
        ...state,
        checkState: action.payload
      }
    },
    allNotesData: (state, action) => {
      localStorage.clear();
      return {
        ...state,
        userData: state.user.allNotes,
      }
    },
  },

  extraReducers: extraReducers

});
export const { logout, allNotesData, check } = authSlice.actions;
export default authSlice.reducer;
