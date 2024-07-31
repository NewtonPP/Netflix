import { useEffect, useState } from "react";
import "../Styles/Player.css";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { AddMovieId } from "../Slices/MovieIdSlice";
const Player = () => {
    const dispatch = useDispatch();
    const MovieId = useSelector((state)=>state.MovieId.value)
    dispatch(AddMovieId(localStorage.getItem("MovieId")))
    
    const navigate = useNavigate();
    const [isBackButtonClicked, setIsBackButtonClicked] = useState(false);
    const [videos, setVideos] = useState([])
    const [videoKey, setVideoKey] = useState();

    useEffect(() => {
        if (isBackButtonClicked) {
            navigate("/home");
        }
    }, [isBackButtonClicked, navigate]);
    const url = `https://api.themoviedb.org/3/movie/${MovieId}/videos?language=en-US`;
    useEffect(()=>{
        axios.get(url,{
            headers:{
                 accept: 'application/json',
                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
            }
        })
        .then((response)=>{
            setVideos(response.data.results)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    },[])

    useEffect(() => {
        const trailer = videos.find((video) => video.type === "Trailer" && video.site === "YouTube"); 
        if (trailer) {
            setVideoKey(trailer.key);
        }
    }, [videos]);
    
    return (
        <>
            <div className="BackButton">
                <MdArrowBack className="ArrowIcon" onClick={() => setIsBackButtonClicked(true)} />
            </div>
            <div>
                <iframe
        width="1280"
        height="570"
        src={`https://www.youtube.com/embed/${videoKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie Trailer"
      ></iframe>
            </div>
        </>
    );
};

export default Player;
