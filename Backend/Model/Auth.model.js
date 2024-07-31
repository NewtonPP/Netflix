import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    Email:{
        required:true,
        type: String,
    },
   
    Password:{
        required:true,
        type:String,
        minlength:6,
    },
}, {timestamps:true})

const UserModel = mongoose.model("NetflixUser",UserSchema);

export default UserModel;