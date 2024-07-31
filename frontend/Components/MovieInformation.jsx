import "../Styles/MovieInformation.css";
import axios from "axios";
import { IoMdPlay } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { BsHandThumbsUp } from "react-icons/bs";
import { LiaDownloadSolid } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux";
import { Success } from "../Slices/CloseSlice";
import { AddMovieId } from "../Slices/MovieIdSlice";
import { useNavigate } from "react-router-dom";
import { Lock, Unlock } from "../Slices/CardSlice";
import { useEffect, useState } from "react";

const MovieInformation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const MovieInfo = useSelector((state) => state.MovieInfo.value);
    const LocalValue = localStorage.getItem("ListIds") || "[]"; // Parse the local storage value
    const [ListIds, setListIds] = useState(LocalValue)
  

    useEffect(() => {
        dispatch(Lock());
        return () => {
            dispatch(Unlock());
        };
    }, [dispatch]);

    const imageUrlBase = "https://image.tmdb.org/t/p/w500";

    const HandleMovieClick = () => {
        dispatch(AddMovieId(MovieInfo.id));
        localStorage.setItem("MovieId", MovieInfo.id);
        navigate("/player");
    };

    const [MovieAdded, setMovieAdd] = useState(false);

    const HandleAddToList = async () => {

        if (MovieAdded) {
            try {
                const response = await axios.delete("http://localhost:3000/api/list/removemovie", {
                    data: MovieInfo,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const updatedListIds = response.data
                setListIds(updatedListIds)
                localStorage.setItem("ListIds",updatedListIds);
              
            } catch (error) {
                console.error("Failed to remove movie from the list:", error);
            }
        } else {
            try {
                const response = await axios.post("http://localhost:3000/api/list/addlist", MovieInfo, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const updatedListIds = response.data
                setListIds(updatedListIds)
                localStorage.setItem("ListIds",updatedListIds);
               
            } catch (error) {
                console.error("Failed to add movie to the  list:", error);
            }
        }
        setMovieAdd(!MovieAdded);
    };

    return (
        <>
            <div className="MovieInformationContainer">
                <RxCross1
                    className="CrossIcon"
                    onClick={() => {
                        dispatch(Success());
                        dispatch(Unlock());
                    }}
                />
                <div className="PlayButtonContainer" onClick={HandleMovieClick}>
                    <IoMdPlay className="MoviePlayIcon" />
                </div>
                <div className="ImageContainer">
                    <img
                        className="PreviewImage"
                        src={imageUrlBase + (MovieInfo.backdrop_path ?? MovieInfo.poster_path)}
                        alt="Movie Preview"
                    />
                </div>

                <div className="MovieTitleAndOverview">
                    <h1 id="MovieTitleName">{MovieInfo.title || MovieInfo.name}</h1>
                    <div className="OverviewContainer">
                        <p>{MovieInfo.overview}</p>
                    </div>
                    <div className="Icons">
                        <div className="SingleIcon" onClick={HandleAddToList}>
                        {/* <div className="icon-wrapper"> */}
                        {   !ListIds.includes(MovieInfo.id) &&
                            <IoMdAdd className="icon" id="AddToListIcon" />
                        }
                             {  ListIds.includes(MovieInfo.id)&&
                                <IoMdCheckmark className="icon hidden" id="AddedToListIcon" />
                                }
                            {/* </div>  */}
                            <p>My List</p>
                        </div>
                        <div className="SingleIcon">
                            <BsHandThumbsUp id="RateIcon" />
                            <p>Rate</p>
                        </div>
                        <div className="SingleIcon">
                            <LiaDownloadSolid id="DownloadIcon" />
                            <p>Download</p>
                        </div>
                    </div>
                </div>

                <section></section>
            </div>
        </>
    );
};

export default MovieInformation;
