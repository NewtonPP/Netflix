import axios from "axios";
import "../Styles/Upcoming.css";
import { useEffect, useState } from "react";
import MovieInformation from "./MovieInformation";
import { useDispatch,useSelector } from "react-redux";
import { AddInformation } from "../Slices/MovieInfoSlice";
import { Failure} from "../Slices/CloseSlice";
const Upcoming = () => {
    const isClosed = useSelector((state)=>state.Close.value)
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const dispatch = useDispatch();
    const [nowPlaying, setNowPlaying] = useState([]);
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    
    useEffect(() => {
      axios.get(url, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
        }
      })
      .then((response) => {
        setNowPlaying(response.data.results); // Ensure you set the 'results' array
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    }, []);
  
    const imageUrlBase = "https://image.tmdb.org/t/p/w200";
    const HandleMovieClick =(e,movie)=>{
      dispatch(Failure())
      dispatch(AddInformation(movie))
      setIsMovieClicked(true)
    }
    return (
      <>
      {
        isMovieClicked && isClosed===false && <MovieInformation/>
      }
      <div className="MovieCategory">
        <h1>Upcoming</h1>
      </div>
      <div className="UpcomingContainer">
        {nowPlaying && nowPlaying.length > 0 ? (
          nowPlaying.map((movie) => (
            <div key={movie.id} className="MovieContainer" onClick={(e)=>{
              HandleMovieClick(e,movie);
            }}>
              <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    );
}

export default Upcoming
