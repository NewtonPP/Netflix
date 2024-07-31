import { useState } from "react";
import "../Styles/MyListHeader.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { FaEllipsis } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AddClick, RemoveClick } from "../Slices/MenuSlice";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const MyListHeader = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const isMenuClicked = useSelector((state)=>state.Menu.value)
    const [isSearchClicked, setIsSearchClicked]= useState(false)
    const [isEllipsisCLicked, setEllipsis]= useState(false)
 
const HandleEllipsisClick =()=>{
  setEllipsis(!isEllipsisCLicked)
}

const HandleClearList =()=>{
    axios.delete("http://localhost:3000/api/list/removelist",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    localStorage.removeItem("ListIds")
    Navigate("/home")
    
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
        
        <h1 className={isSearchClicked?"InactiveMyList":"MyListTitle"}>My List</h1>
        <input className={isSearchClicked? "SearchBar":"InactiveSearchbar"} type="text" placeholder="Search"></input>
        <div className="ClearList" type="button" onClick={HandleClearList}>Clear My List</div>
        <IoSearch className={isSearchClicked?"ClickedSearchIcon":"SearchIcon"} onClick={()=>{setIsSearchClicked(true)}}/>
        <FaEllipsis className="EllipsisIcon" onClick={(HandleEllipsisClick)}/>  
        
      { 
        isEllipsisCLicked &&
        <div className="UserControlBox">
        <div className="TextContainer">
        <h1 id="Text">Sign out</h1>
        </div>
       </div>}
    </div>
    </>
  )
}

export default MyListHeader
