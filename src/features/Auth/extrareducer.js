import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./authService";

const register = createAsyncThunk("REGISTER", async (formdata, thunkApi) => {
    try {
        return await services.Register(formdata);
    } catch (error) {
        let message = error.response ? error.response.data.message : error.message;
        return thunkApi.rejectWithValue(message)
    }
});

const login = createAsyncThunk("LOGIN", async (formdata, thunkApi) => {
    try {
        return await services.Login(formdata);
    } catch (error) {
        let message = error.response ? error.response.data.message : error.message;
        return thunkApi.rejectWithValue(message)
    }
});

const getUserData = createAsyncThunk("GETUSERDATA", async (formdata, thunkApi) => {
    try {
        return await services.getUserData(formdata);
    } catch (error) {
        let message = error.response ? error.response.data.message : error.message;
        return thunkApi.rejectWithValue(message)
    }
});
const createData = createAsyncThunk("CREATEDATA", async (formdata, thunkApi) => {
    try {
        return await services.createData(formdata);
    } catch (error) {
        let message = error.response ? error.response.data.message : error.message;
        return thunkApi.rejectWithValue(message)
    }
});
const deleteData = createAsyncThunk("DELETEDATA", async (formdata, thunkApi) => {
    try {
        return await services.deleteData(formdata);
    } catch (error) {
        let message = error.response ? error.response.data.message : error.message;
        return thunkApi.rejectWithValue(message)
    }
});
export const editBlogData = createAsyncThunk('EDITDATA', async (data, thunkapi) => {
    try {
      return await  services.updateData(data) 
    } catch (error) {
      const message = error.response ? error.response.data.message : error.message
      return thunkapi.rejectWithValue(message)
    }
  })

let obj = {
    deleteData,
    createData,
    getUserData,
    login,
    register,
    editBlogData
}
export default obj