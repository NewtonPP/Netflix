import { createSlice } from "@reduxjs/toolkit";

const MovieInfoSlice = createSlice({
    name:"MovieInfo",
    initialState:{value:[]},
    reducers:{
        AddInformation:(state,action)=>{state.value=action.payload}
    }
})

export const {AddInformation} = MovieInfoSlice.actions;
export default MovieInfoSlice.reducer