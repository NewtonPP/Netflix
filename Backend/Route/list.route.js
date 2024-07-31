import express from "express"
import { AddList, GetList, RemoveMovie,RemoveList } from "../Controller/list.controller.js";
import { AddListIds, RemoveListIds } from "../Controller/Add.controller.js";

export const Route = express.Router();

Route.post("/addlist",AddList);
Route.get("/getlist",GetList)
Route.delete("/removemovie",RemoveMovie)
Route.delete("/removelist",RemoveList)
Route.post("/addid",AddListIds)
Route.delete("/removeid",RemoveListIds)