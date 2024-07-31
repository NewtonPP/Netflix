import bcrypt from "bcryptjs";
import UserModel from "../Model/Auth.model.js";
import generateTokensAndCookies from "../generateTokensAndCookies.js";
export const SignUp = async (req,res)=>{
try{
   
   const {Email,Password} = req.body;
   
  
    //UserName Handling
   const FindUser = await UserModel.findOne({Email})
   console.log(FindUser)
      if(FindUser){
         return res.status(401).json({error:"The User already exists"})
      }
   //Password Handling  
      const salt = await bcrypt.genSalt(10);
      const HashedPass = await bcrypt.hash(Password,salt)
      
   const NewUser = new UserModel({
      Email,
      Password:HashedPass,
   })

   if (NewUser){
      await generateTokensAndCookies(NewUser._id, res);
      await NewUser.save();
      res.status(201).json({
      _id:NewUser._id,
      Email:NewUser.Email,

      })
   }
   else{
      res.status(400).json({error:"Invalid User data"})
   }
      
   


}catch(error){
   console.log("Error in signup controller", error.message);
res.status(401).json({error:"Internal Server Error"})
}
}

export const Login= async (req,res)=>{
   try{
      const {Email, Password} = req.body;
const findUser = await UserModel.findOne({Email});
const isPasswordCorrect = await bcrypt.compare(Password, findUser?.Password || "");

if(!findUser || !isPasswordCorrect){
   return res.status(400).json({error:"Invalid Email or password"});
}


      generateTokensAndCookies(findUser._id, res);

      res.status(200).json({
         _id: findUser._id,
         Email:findUser.Email,
         
})
   }
   catch(error){
      console.log("Error in Login controller", error.message);
      res.status(401).json({error:"Internal Server Error"})
   }
}
export const Logout =  (req,res)=>{
try{
    res.cookie("jwt","",{maxAge:0});
   res.status(200).json({message:"Logged Out Successfully"})
}
catch(error){
   console.log("Error in Logout controller", error.message);
   res.status(401).json({error:"Internal Server Error"})
}
}


export default {SignUp, Login, Logout};