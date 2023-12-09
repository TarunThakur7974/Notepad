import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./authService";

const register = createAsyncThunk("REGISTER", async (formdata, thunkApi) => {
    try {
        return services.Register(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(message)
    }
});

const login = createAsyncThunk("LOGIN", async (formdata, thunkApi) => {
    try {
        return services.Login(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(message)
    }
});

const getUserData = createAsyncThunk("GETUSERDATA", async (formdata, thunkApi) => {
    try {
        return services.getUserData(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(message)
    }
});
const createData = createAsyncThunk("CREATEDATA", async (formdata, thunkApi) => {
    try {
        return services.createData(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(message)
    }
});
const deleteData = createAsyncThunk("DELETEDATA", async (formdata, thunkApi) => {
    try {
        return services.deleteData(formdata);
    } catch (error) {
        return thunkApi.rejectWithValue(message)
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