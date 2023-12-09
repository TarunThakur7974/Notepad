import obj from "./extrareducer";

const { register, login, createData, getUserData, deleteData } = obj

export const extraReducers = (builder) => {
    builder.addCase(register.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
        };
    });
    builder.addCase(register.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            isSucces: true,
        };
    });
    builder.addCase(register.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.error.message
        };
    });
    builder.addCase(getUserData.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
        };
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            userData: action.payload,
            isSucces: true,
        };
    });
    builder.addCase(getUserData.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.error.message
        };
    });
    builder.addCase(login.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
        };
    });
    builder.addCase(login.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            userData: state.user && state.user.allNotes ? state.user.allNotes : null,
            isSucces: true,
        };
    });
    builder.addCase(login.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.error.message
        };
    });
    builder.addCase(createData.pending, (state, action) => {
        return {
            ...state,
            isLoadingData: true,
        };
    });
    builder.addCase(createData.fulfilled, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            userData: [...state.userData, action.payload],
            isSucces: true,
        };
    });
    builder.addCase(createData.rejected, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            isError: true,
            message: action.error.message
        };
    });
    builder.addCase(deleteData.pending, (state, action) => {
        return {
            ...state,
            isLoadingData: true,
        };
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            userData: action.payload && action.payload.deleteId && state.userData.filter((item) => item._id !== action.payload.deleteId),
            isSucces: true,
        };
    });
    builder.addCase(deleteData.rejected, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            isError: true,
            message: action.error.message
        };
    });
}
