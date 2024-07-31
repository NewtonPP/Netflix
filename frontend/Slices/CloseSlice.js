import { createSlice } from "@reduxjs/toolkit";

const CloseSlice = createSlice({
    name:"Close",
    initialState:{value:false},
    reducers:{
        Success:(state)=>{
            state.value = true
        },
        Failure:(state)=>{
            state.value = false
        }
    }
})
export const {Success, Failure} = CloseSlice.actions;
export default CloseSlice.reducer;
