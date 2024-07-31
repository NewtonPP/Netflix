import { createSlice } from "@reduxjs/toolkit";

const MovieIdSlice = createSlice({
    name:"MovieId",
    initialState:{value:""},
    reducers:{
        AddMovieId:(state,action)=>{
            state.value = action.payload;
        }
    }

})
export const {AddMovieId} = MovieIdSlice.actions;
export default MovieIdSlice.reducer