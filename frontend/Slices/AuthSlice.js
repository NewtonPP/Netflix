import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:"Auth",
    initialState:{value:false},
    reducers:{
        Authenticated:(state)=>{
            state.value = true
        },
        NotAuthenticated:(state)=>{
            state.value = false
        }
    }
})

export const {Authenticated,NotAuthenticated} = AuthSlice.actions;
export default AuthSlice.reducer;

