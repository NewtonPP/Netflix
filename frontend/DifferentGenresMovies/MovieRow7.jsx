import axios from "axios";
import "../Styles/Movies.css";
import { useEffect, useState } from "react";
import MovieInformation from "../Components/MovieInformation";
import { useDispatch, useSelector } from "react-redux";
import { AddInformation } from "../Slices/MovieInfoSlice";
import { Failure } from "../Slices/CloseSlice";
import { useLocation } from "react-router-dom";
const MovieRow7 = () => {
    const pathName = useLocation();
    const Path = pathName;
    const isClosed = useSelector((state) => state.Close.value);
    const [Movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const MoviesUrl1 = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=7';
    const MoviesUrl2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=7&sort_by=revenue.desc';
    const MoviesUrl3 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=7';
    const MoviesUrl4 = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=7';

    useEffect(() => {
        const fetchMoviesAndSeries = async () => {
            try {
                const [MovieResponse1, MovieResponse2, MovieResponse3,MovieResponse4] = await Promise.all([
                    axios.get(MoviesUrl1, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(MoviesUrl2, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        }
                    }),
                    axios.get(MoviesUrl3, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    }),
                    axios.get(MoviesUrl4, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTZjOTRkN2I1MjUyNTA1YjQ2NjhkMjAxM2IxNzRiMCIsInN1YiI6IjY2NmExOTMyYzQ2NTIzMjllNDc0MDExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ibPpWqPYeV68woWrB2HeWwVzePgnraCPvDo0oyIhw3A'
                        },   
                    })
                ]);

                const allMovies = [
                    ...MovieResponse1.data.results,
                    ...MovieResponse2.data.results,
                    ...MovieResponse3.data.results,
                    ...MovieResponse4.data.results
                ];

                const uniqueMovies = [];
                const movieIds = new Set();

                allMovies.forEach(movie => {
                    if(Path.pathname==="/Horror%20Movies"){
                    if (movie.genre_ids.includes(27) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Drama%20Movies"){
                    if (movie.genre_ids.includes(18) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Thriller%20Movies"){
                    if (movie.genre_ids.includes(53) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Romantic%20Movies"){
                    if (movie.genre_ids.includes(10749) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Comedy%20Movies"){
                    if (movie.genre_ids.includes(35) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Sci-Fi%20&%20Fantasy%20Movies"){
                    if (movie.genre_ids.includes(878) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Action%20&%20Adventure%20Movies"){
                    if (movie.genre_ids.includes(28 || 12) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Documentaries"){
                    if (movie.genre_ids.includes(99) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Kids%20&%20Family%20Movies"){
                    if (movie.genre_ids.includes(10751 && 16) && !movieIds.has(movie.id)) {
                        uniqueMovies.push(movie);
                        movieIds.add(movie.id);
                    }
                }
                else if(Path.pathname==="/Music%20&%20Musicals"){
                    if (movie.genre_ids.includes(10402) && !movieIds.has(movie.id)) {
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

    const Title = Path.pathname.replace(/%20/g," ").replace(/\//g, "");
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
                <h1>Slapstick {Title}</h1>
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

export default MovieRow7;
