import { useState } from "react";
import "../Styles/Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RemoveClick } from "../Slices/MenuSlice";
const Sidebar = () => {
    const pathname = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Sections = [
        "Home","Drama Movies", "Thriller Movies",
        "Horror Movies", "Kids & Family Movies", "TV Shows", "Romantic Movies",
        "Music & Musicals", "Comedy Movies", "Sci-Fi & Fantasy Movies", "Action & Adventure Movies",
    ];
    

    return (
        <div className="SidebarContainer">
            {Sections.map((section) => (
                <div
                    className="SectionContainer"
                    key={section}
                    onClick={()=>{
                        navigate(`/${section}`)
                        dispatch(RemoveClick())
                        }}>
                    <p>{section}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
