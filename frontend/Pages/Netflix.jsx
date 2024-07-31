import { useState } from "react"
import Header from "../Components/Header"
import "../Styles/Netflix.css"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";


const Netflix = () => {
  const Navigate= useNavigate();
  const [isSubmitClicked, setSubmitClick] = useState(false); 
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();


  const {setAuthUser} = useAuthContext();
  const HandleSubmit = async(e)=>{
    e.preventDefault(); 
    try{
      const res = await fetch("http://localhost:3000/api/auth/signup",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
          Email,Password
        })  
        
    })
    const data = await res.json();  
    if(data.error){ 
        throw new Error(data.error)
    }
    localStorage.setItem("User", JSON.stringify(data))

    setAuthUser(data)
  }
    catch(error){
      alert(error)
    }
  }
  return (
   <>
   <Header/>
   <img className="Netflix-Background-image"src="/Images/BackgroundImage.jpg"></img>
   <div className="DescriptionBox">
   <p id="MainPageTitle">Unlimited movies, TV shows, and more</p>
   <p id="MainPageDescription1">Watch anywhere. Cancel anytime</p>
   <p id="MainPageDescription2">Ready to watch? Enter your email to create or restart your membership </p>
   </div>

   <form className="EmailAndGetStartedBox" onSubmit={(e)=>HandleSubmit(e)}>
   <input className="EmailAddress" placeholder="Email Address" type="email" onChange={(e)=>setEmail(e.target.value)}></input>
   <button className={isSubmitClicked?"InactiveGetStarted":"GetStarted"} type="button" onClick={()=>setSubmitClick(true)}>Get Started</button>
   {
    isSubmitClicked &&
    <>
    <input className="Password" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
    <button className="Signup" type="submit" onClick={()=>setSubmitClick(true)}>Signup</button>
    </>
   }
   </form>
   

   </>
  )
}

export default Netflix
