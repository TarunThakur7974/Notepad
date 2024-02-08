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
    checkState: null,
    Edit: {
      isEdit: false,
      obj: {
        tittle: '',
        description: "",
        _id: '',
      }
    },
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
    timeout: (state) => {
      return{
        ...state,
          message : null
      }
     
    },
    edit: (state, action) => {
      return {
        ...state,
        Edit: {
          isEdit: true,
          obj: {
            title: action.payload.title,
            description: action.payload.description,
            _id: action.payload._id
          }
        }
      }
    }
  },


  extraReducers: extraReducers

});
export const { logout, allNotesData, check,edit,timeout } = authSlice.actions;
export default authSlice.reducer;
