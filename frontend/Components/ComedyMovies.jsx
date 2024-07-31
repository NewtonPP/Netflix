import axios from "axios";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import MovieInformation from "./MovieInformation";
import { useDispatch, useSelector } from "react-redux";
import { AddInformation } from "../Slices/MovieInfoSlice";
import { Failure } from "../Slices/CloseSlice";

const ComedyMovies = () => {
    const isClosed = useSelector((state) => state.Close.value);
    const [ComedyMovies, setComedyMovies] = useState([]);
    const dispatch = useDispatch();
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const UpcomingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const TVSeriesAiringUrl = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';

    useEffect(() => {
        const fetchMoviesAndSeries = async () => {
            try {
                const [upcomingResponse, airingResponse] = await Promise.all([
                    axios.get(UpcomingMoviesUrl, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(TVSeriesAiringUrl, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    })
                ]);

                const allMovies = [
                    ...upcomingResponse.data.results,
                    ...airingResponse.data.results
                ];

                const comedyMovies = allMovies.filter(movie => movie.genre_ids.includes(35));
                setComedyMovies(comedyMovies);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchMoviesAndSeries();
    }, []);

    const imageUrlBase = "https://image.tmdb.org/t/p/w200";

    const HandleMovieClick = (e, movie) => {
        dispatch(Failure());
        dispatch(AddInformation(movie));
        setIsMovieClicked(true);
    };

    return (
        <>
            {isMovieClicked && isClosed === false && <MovieInformation MovieInformation={MovieInformation} />}
            <div className="MovieCategory">
                <h1>Comedies</h1>
            </div>
            <div className="MoviesContainer">
                {ComedyMovies && ComedyMovies.length > 0 ? (
                    ComedyMovies.map((movie) => (
                        <div key={movie.id} className="MovieContainer" onClick={(e) => {
                            HandleMovieClick(e, movie);
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

export default ComedyMovies;
