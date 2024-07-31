import axios from "axios";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import MovieInformation from "../Components/MovieInformation";
import { useDispatch, useSelector } from "react-redux";
import { AddInformation } from "../Slices/MovieInfoSlice";
import { Failure } from "../Slices/CloseSlice";
import { useLocation } from "react-router-dom";
const TVSeriesRow7 = () => {
    const pathName = useLocation();
    const Path = pathName;
    const isClosed = useSelector((state) => state.Close.value);
    const [Movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const TVSeriesurl1 = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=3';
    const TVSeriesurl2 = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=3';
    const TVSeriesurl3 = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=3';
    const TVSeriesurl4 = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=3';
    const TVSeriesurl5 = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=4';
    const TVSeriesurl6 = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=5';
    const TVSeriesurl7 = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=8`;
    const TVSeriesurl8 = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=7'

    useEffect(() => {
        const fetchMoviesAndSeries = async () => {
            try {
                const [TVResponse1, TVResponse2, TVResponse3,TVResponse4,TVResponse5,TVResponse6,TVResponse7,TVResponse8] = await Promise.all([
                    axios.get(TVSeriesurl1, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(TVSeriesurl2, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(TVSeriesurl3, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    }),
                    axios.get(TVSeriesurl4, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    }),
                    axios.get(TVSeriesurl5, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    }),
                    axios.get(TVSeriesurl6, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    }),
                    axios.get(TVSeriesurl7, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    }),
                    axios.get(TVSeriesurl8, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    })
                ]);

                const allMovies = [
                    ...TVResponse1.data.results,
                    ...TVResponse2.data.results,
                    ...TVResponse3.data.results,
                    ...TVResponse4.data.results,
                    ...TVResponse5.data.results,
                    ...TVResponse6.data.results,
                    ...TVResponse7.data.results,
                    ...TVResponse8.data.results,

                ];

                const uniqueMovies = [];
                const movieIds = new Set();

                allMovies.forEach(movie => {
                    if(Path.pathname==="/TV%20Shows"){
                    if (movie.genre_ids.includes(80) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                });

                setMovies(uniqueMovies);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchMoviesAndSeries();
    }, [Path]);

    const Title = Path.pathname.replace("%20"," ").replace("/","")
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
                <h1>TV Crime</h1>
            </div>
            <div className="MoviesContainer">
                {Movies && Movies.length > 0 ? (
                    Movies.map((movie) => (
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

export default TVSeriesRow7;
