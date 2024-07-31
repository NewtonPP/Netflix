import "../Styles/Home.css"
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HomePageHeader from "../Components/HomePageHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddMovieId } from "../Slices/MovieIdSlice";
import { RemoveClick } from "../Slices/MenuSlice";
import NowPlaying from "../Components/NowPlaying";
import Popular from "../Components/Popular";
import Upcoming from "../Components/Upcoming";
import TVSeriesAiringToday from "../Components/TVSeriesAiringToday";
import OnTheAirTVSeries from "../Components/OnTheAirTVSeries";
import TopRated from "../Components/TopRated";
import TVShows from "../Components/TVShows";
import Exciting from "../Components/Exciting";
import ComedyMovies from "../Components/ComedyMovies";
import Horror from "../Components/Horror";
import Thriller from "../Components/Thriller";
import War from "../Components/War";
const Home = () => {
  const isMenuClicked = useSelector((state)=>state.Menu.value)
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [BigPicture,setBigPicture] = useState('');
    const url = 'https://api.themoviedb.org/3/find/tt0112870?external_source=imdb_id&language=hi';
    useEffect(() => {
      axios.get(url, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
        }
      })
      .then((response) => {
        setBigPicture(response.data.movie_results[0])

      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    }, []);
    const imageUrlBase = "https://image.tmdb.org/t/p/w500";

    const HandlePlayClick = ()=>{
      dispatch(AddMovieId(BigPicture.id));
      const LocalId = localStorage.setItem("MovieId",BigPicture.id);
      Navigate("/player")
    }
  return (
   <>
   <HomePageHeader/>
   <div className={isMenuClicked ? "InactiveHomePage":"HomePage"} onClick={()=>dispatch(RemoveClick())}>
    <section className="BigPictureContainer">
        <img src={imageUrlBase+BigPicture.backdrop_path} className="BigPictureImage"></img>
        <h1 id="MovieName">{BigPicture.original_title}</h1>
        <div className="PlayAndMyList">
        <button className="PlayButton" type="button" onClick={HandlePlayClick}>
        <FaPlay className="PlayIcon"/>
        Play</button>
        <button className="AddToList"> <FaPlus className="PlusIcon"/>My List</button>
        </div>
    </section>
    <NowPlaying/>
    <Popular/>
    <Upcoming/>
    <TVSeriesAiringToday/>
    <OnTheAirTVSeries/>
    <TopRated/>
    <TVShows/>
    <Exciting/>
    <ComedyMovies/>
    <Horror/>
    <Thriller/>
    <War/>
   </div>
   </>
  )
}

export default Home
