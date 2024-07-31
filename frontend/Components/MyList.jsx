import { useEffect, useState } from "react"
import "../Styles/MyList.css"
import axios from "axios"
import { useDispatch,useSelector } from "react-redux"
import { AddInformation } from "../Slices/MovieInfoSlice"
import { Failure } from "../Slices/CloseSlice"
import MovieInformation from "./MovieInformation"
import MyListHeader from "./MyListHeader"
const MyList = () => {
    const isClosed = useSelector((state) => state.Close.value);
    const dispatch = useDispatch();
    const [MovieList, setMovieList] = useState([])
    const [isMovieClicked, setMovieClick] = useState(false);
    useEffect(()=>{
    const fetchListMovies=()=>{
        axios.get("http://localhost:3000/api/list/getlist",{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>{setMovieList(response.data)
        })
    }
    fetchListMovies();
    },[])

    const imageUrlBase = "https://image.tmdb.org/t/p/w200";
    const HandleMovieClick = (movie)=>{
        dispatch(Failure());
        dispatch(AddInformation(movie))
        setMovieClick(true)
        
    }
  return (
    <>
    <MyListHeader/>
    {
        isMovieClicked && isClosed === false && <MovieInformation/>
    }
    <div className="MyListPage">
    <div className="MyListContainer">
    {
        MovieList.length===0 && <h1 id="state">Currently, you have no items in your list</h1>
    }
       {
         MovieList.map((movie)=>{
            return (
        <div className="ListCardContainer" key={movie.id} onClick={()=>HandleMovieClick(movie)}>
            <img src={imageUrlBase+movie.poster_path}></img>
        </div>
            )
        })
        
        }   
    </div>
    </div>
    </>
  )
}

export default MyList
