import mongoose from "mongoose";
import dotenv from "dotenv"
export const ConnectToDatabase =()=>{
    try {
       mongoose.connect(process.env.MONGODB_URI)
       const db = mongoose.connection;
       mongoose.connection.on("connected",()=>{console.log("Successful Connection with the Database")})
       mongoose.connection.on('disconnected', () => console.log('disconnected'));
    } catch (error) {
        console.log(error)
    }
   
}