import { useState } from "react";
import "../Styles/HomePageHeader.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { FaEllipsis } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AddClick, RemoveClick } from "../Slices/MenuSlice";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const HomePageHeader = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const isMenuClicked = useSelector((state)=>state.Menu.value)
    const [isSearchClicked, setIsSearchClicked]= useState(false)
    const [isEllipsisCLicked, setEllipsis]= useState(false)
    const {setAuthUser} = useAuthContext();
const HandleEllipsisClick =()=>{
  setEllipsis(!isEllipsisCLicked)
}

const HandleSignoutClick=async()=>{
  const res = await fetch("http://localhost:3000/api/auth/logout",{
    method:"POST",
    headers:{"Content-Type":"application/json"}
});
const data = await res.json()
if(data.error){
    throw new Error (data.error)
}
localStorage.removeItem("User")
setAuthUser(null)
Navigate("/")
}
  return (  
    <>
    {
        isMenuClicked?<Sidebar/>:""
    }
    <div className="HomePageHeaderContainer">
        {
            isSearchClicked?
            <IoArrowBack className="BackIcon" onClick={()=>setIsSearchClicked(false)}/>
        :
        <GiHamburgerMenu className="MenuIcon" onClick={()=>dispatch(AddClick())}/>
        }
        
        <img className={isSearchClicked?"InactiveNetflixLogo":"NetflixLogo"} src="../public/Images/Netflix-logo.png"></img>
        <input className={isSearchClicked? "SearchBar":"InactiveSearchbar"} type="text" placeholder="Search"></input>
        <IoSearch className={isSearchClicked?"ClickedSearchIcon":"SearchIcon"} onClick={()=>{setIsSearchClicked(true)}}/>
        <FaEllipsis className="EllipsisIcon" onClick={(HandleEllipsisClick)}/>  
        
      { 
        isEllipsisCLicked &&
        <div className="UserControlBox">
        <div className="TextContainer" onClick={()=>Navigate("/mylist")}>
        <h1 id="Text">My List</h1>
        </div>
        <div className="TextContainer" onClick={HandleSignoutClick}>
        <h1 id="Text">Sign out</h1>
        </div>
       </div>}
    </div>
    </>
  )
}

export default HomePageHeader
