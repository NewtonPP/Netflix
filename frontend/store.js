import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./Slices/MenuSlice";
import MovieInfoSlice from "./Slices/MovieInfoSlice";
import CloseSlice from "./Slices/CloseSlice";
import MovieIdSlice from "./Slices/MovieIdSlice";
import CardSlice from "./Slices/CardSlice";
import AuthSlice from "./Slices/AuthSlice";
export const store = configureStore({
    reducer:{
        Menu:MenuSlice,
        MovieInfo:MovieInfoSlice,
        Close:CloseSlice,
        MovieId:MovieIdSlice,
        Card:CardSlice,
        Auth:AuthSlice
    }
})