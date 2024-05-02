import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchAsyncDetails,
  getDetails,
  removeDetails,
} from '../../features/movieOrShowDetailsSlice'
import { MovieData } from '../../features/movies'
import MovieInfo from '../MovieInfo/MovieInfo'
import './MovieDetail.scss'

export default function MovieDetail() {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data: MovieData = useSelector(getDetails)
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID))
    return () => dispatch(removeDetails())
  }, [dispatch, imdbID])
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>... Loading</div>
      ) : (
        <>
          <div className="section-left">
            <MovieInfo
              title={data.Title}
              imdbRating={data.imdbRating}
              imdbVotes={data.imdbVotes}
              runtime={data.Runtime}
              year={data.Year}
              plot={data.Plot}
              director={data.Director}
              actors={data.Actors}
              genre={data.Genre}
              language={data.Language}
              awards={data.Awards}
            />
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  )
}
