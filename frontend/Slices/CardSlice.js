import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name:"Card",
    initialState:{value:false},
    reducers:{
        Lock:(state)=>{
            state.value = true
        },
        Unlock:(state)=>{
            state.value = false
        }
    }
})

export const {Lock,Unlock} = CardSlice.actions;
export default CardSlice.reducer;
