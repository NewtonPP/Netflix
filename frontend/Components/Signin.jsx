import "../Styles/Signin.css"
import  { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthContext } from "../Context/AuthContext";

const Signin = () => {
  const dispatch = useDispatch();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const {setAuthUser} = useAuthContext();
    const Navigate = useNavigate();
    const HandleSubmit = async (e)=>{
  e.preventDefault();

  try{
    const res = await fetch("http://localhost:3000/api/auth/login",{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({Email, Password})
  })
 const data = await res.json();
 if(data.error){
  throw new Error(data.error)
 }
 localStorage.setItem("User",JSON.stringify(data))
 setAuthUser(data);
  }
  catch(error){
    alert(error)
  }
}
  return (
   <>
   <img className="Netflix-Background-image"src="/Images/BackgroundImage.jpg"></img>
   <img className="NetflixLogo" src="/Images/Netflix-logo.png"></img>
   <form className="SigninContainer" onSubmit={(e)=>HandleSubmit(e)}>
    <div className="SignInTitleContainer">
    <h1 className="SigninTitle">Sign In</h1>
    </div>
    <input className="EmailAddress" placeholder="Email Address" type="email" onChange={(e)=>setEmail(e.target.value)}></input>
    <input className="Password" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
    <button className="Signin" type="submit">Signin</button>
    <div className="Signupnow">
    <p id="New">New to Netflix?</p>
    <Link to={"/"} style={{textDecoration:"none"}}>
    <p id="SignupLink">Sign up Now</p>
    </Link>
    </div>
    </form>
   </>
  )
}

export default Signin
