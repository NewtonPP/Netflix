import express from "express"
import cors from "cors"
import { Route } from "./Route/list.route.js";
import { ConnectToDatabase } from "./ConnectToDB.js";
import router from "./Route/auth.route.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use("/api/list",Route)
app.use("/api/auth",router)
const PORT = 3000;
app.listen(PORT, (req,res)=>{
    console.log("Server Started at PORT", PORT)
    ConnectToDatabase();
})