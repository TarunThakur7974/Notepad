import obj, { editBlogData } from "./extrareducer";

const { register, login, createData, getUserData, deleteData } = obj

export const extraReducers = (builder) => {
    builder.addCase(register.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
            message: ""
        };
    }).addCase(register.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            isSucces: true,
            message: ""
        };
    }).addCase(register.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload
        };
    }).addCase(getUserData.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
            message: ""
        };
    }).addCase(getUserData.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            userData: action.payload,
            isSucces: true,
            message: ""
        };
    }).addCase(getUserData.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload
        };
    }).addCase(login.pending, (state, action) => {
        return {
            ...state,
            isLoading: true,
            message: ""
        };
    }).addCase(login.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            user: action.payload,
            userData: state.user && state.user.allNotes ? state.user.allNotes : null,
            isSucces: true,
            message: ""
        };
    }).addCase(login.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload
        };
    }).addCase(createData.pending, (state, action) => {
        return {
            ...state,
            // isLoadingData: true,
            message: ""
        };
    }).addCase(createData.fulfilled, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            userData: [...state.userData, action.payload],
            isSucces: true,
            message: ""
        };
    }).addCase(createData.rejected, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            isError: true,
            message: action.payload
        };
    }).addCase(deleteData.pending, (state, action) => {
        return {
            ...state,
            // isLoadingData: true,
            message: ""
        };
    }).addCase(deleteData.fulfilled, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            userData: action.payload && action.payload.deleteId && state.userData.filter((item) => item._id !== action.payload.deleteId),
            isSucces: true,
            message: ""
        };
    }).addCase(deleteData.rejected, (state, action) => {
        return {
            ...state,
            isLoadingData: false,
            isError: true,
            message: action.payload
        };
    })
    .addCase(editBlogData.pending, (state) => {
        // state.isLoading = true
        state.isError = false
        state.message = ""
      })
      .addCase(editBlogData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userData = state.userData.map((item) => item._id === action.payload._id ? { ...item, tittle: action.payload.tittle, description: action.payload.description } : item)
        state.isError = false
        state.Edit =  {
            isEdit: false,
            obj: {
              tittle: '',
              description: "",
              _id: '',
            }
          }
        state.message = ""
      })
      .addCase(editBlogData.rejected, (state, action) => {
        return {
          ...state,
          isError: true,
          isSuccess: false,
          isLoading: false,
          message: action.payload
        }
      })
}
