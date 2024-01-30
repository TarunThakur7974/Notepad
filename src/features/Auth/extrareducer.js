import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./authService";

const register = createAsyncThunk("REGISTER", async (formdata, thunkApi) => {
    try {
        return await services.Register(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message)
    }
});

const login = createAsyncThunk("LOGIN", async (formdata, thunkApi) => {
    try {
        return await services.Login(formdata);
    } catch (error) {
        console.log(error.response.data.message)
        return thunkApi.rejectWithValue(error.response.data.message)
    }
});

const getUserData = createAsyncThunk("GETUSERDATA", async (formdata, thunkApi) => {
    try {
        return await services.getUserData(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message)
    }
});
const createData = createAsyncThunk("CREATEDATA", async (formdata, thunkApi) => {
    try {
        return await services.createData(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message)
    }
});
const deleteData = createAsyncThunk("DELETEDATA", async (formdata, thunkApi) => {
    try {
        return await services.deleteData(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.message)
    }
});

let obj = {
    deleteData,
    createData,
    getUserData,
    login,
    register
}
export default obj