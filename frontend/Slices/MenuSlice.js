import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name:"Menu",
    initialState:{value:false},
    reducers:{
        AddClick:(state)=>{state.value=true},
        RemoveClick:(state)=>{state.value = false}
    }
})

export const {AddClick,RemoveClick} = MenuSlice.actions;
export default MenuSlice.reducer;