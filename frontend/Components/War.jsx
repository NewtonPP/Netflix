import axios from "axios";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import MovieInformation from "./MovieInformation";
import { useDispatch, useSelector } from "react-redux";
import { AddInformation } from "../Slices/MovieInfoSlice";
import { Failure } from "../Slices/CloseSlice";

const War = () => {
    const isClosed = useSelector((state) => state.Close.value);
    const [ComedyMovies, setComedyMovies] = useState([]);
    const dispatch = useDispatch();
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const UpcomingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2';
    const UpcomingMoviesUrl2 = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const ExcitingUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=revenue.desc';
    const PopularUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const PopularUrl2 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=9';
    const ExcitingUrl2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=revenue.desc';

    useEffect(() => {
        const fetchMoviesAndSeries = async () => {
            try {
                const [upcomingResponse, excitingResponse, popularResponse, upcomingResponse2, popularResponse2,excitingResponse2] = await Promise.all([
                    axios.get(UpcomingMoviesUrl, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(ExcitingUrl, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(PopularUrl, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(PopularUrl2, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(UpcomingMoviesUrl2, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(ExcitingUrl2, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    })
                ]);

                const allMovies = [
                    ...upcomingResponse.data.results,
                    ...excitingResponse.data.results,
                    ...popularResponse.data.results,
                    ...upcomingResponse2.data.results,
                    ...popularResponse2.data.results,
                    ...excitingResponse2.data.results
                ];

                const uniqueComedyMovies = [];
                const movieIds = new Set();

                allMovies.forEach(movie => {
                    if (movie.genre_ids.includes(10752) && !movieIds.has(movie.id)) {
                        uniqueComedyMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                });

                setComedyMovies(uniqueComedyMovies);

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
                <h1>Because you love War Movies</h1>
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

export default War;
