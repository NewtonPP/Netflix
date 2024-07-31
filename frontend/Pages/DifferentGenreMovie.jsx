import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieRow1 from '../DifferentGenresMovies/MovieRow1'
import HomePageHeader from '../Components/HomePageHeader'
import { useDispatch } from 'react-redux'
import { RemoveClick } from '../Slices/MenuSlice'
import MovieRow2 from '../DifferentGenresMovies/MovieRow2'
import MovieRow3 from '../DifferentGenresMovies/MovieRow3'
import MovieRow4 from '../DifferentGenresMovies/MovieRow4'
import MovieRow5 from '../DifferentGenresMovies/MovieRow5'
import MovieRow6 from '../DifferentGenresMovies/MovieRow6'
import MovieRow7 from '../DifferentGenresMovies/MovieRow7'
import TVSeriesRow1 from '../DifferentGenresMovies/TVSeriesRow1'
import TVSeriesRow2 from '../DifferentGenresMovies/TVSeriesRow2'
import TVSeriesRow3 from '../DifferentGenresMovies/TVSeriesRow3'
import TVSeriesRow4 from '../DifferentGenresMovies/TVSeriesRow4'
import TVSeriesRow5 from '../DifferentGenresMovies/TVSeriesRow5'
import TVSeriesRow6 from '../DifferentGenresMovies/TVSeriesRow6'
import TVSeriesRow7 from '../DifferentGenresMovies/TVSeriesRow7'
import TVSeriesRow8 from '../DifferentGenresMovies/TVSeriesRow8'
import TVSeriesRow9 from '../DifferentGenresMovies/TVSeriesRow9'
import TVSeriesRow10 from '../DifferentGenresMovies/TVSeriesRow10'


const DifferentGenreMovie = () => {
    const pathname = useLocation();

    const dispatch = useDispatch()
  return (
    <>
   
    <HomePageHeader/>
    <div className="HomePage" onClick={()=>dispatch(RemoveClick())}>
      {
        pathname.pathname==="/TV%20Shows" &&
        <>
    <TVSeriesRow1/>
    <TVSeriesRow2/>
    <TVSeriesRow3/>
    <TVSeriesRow4/>
    <TVSeriesRow5/>
    <TVSeriesRow6/>
    <TVSeriesRow7/>
    <TVSeriesRow8/>
    <TVSeriesRow9/>
    <TVSeriesRow10/>
    </>
    }
    {
      pathname.pathname!=="/TV%20Shows" &&
      <>
    <MovieRow1/>
    <MovieRow2/>
    <MovieRow3/>
    <MovieRow4/>
    <MovieRow5/>
    <MovieRow6/>
    <MovieRow7/>
    </>
}
    </div>
    </>
  )
}

export default DifferentGenreMovie
