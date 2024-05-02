import React from 'react'
import { MovieInfoProps } from './MovieInfoProps'
import './MovieInfo.scss'

export default function MovieInfo({
  title,
  imdbRating,
  imdbVotes,
  runtime,
  year,
  plot,
  director,
  actors,
  genre,
  language,
  awards,
}: MovieInfoProps) {
  return (
    <>
      <div className="movie-title">{title}</div>
      <div className="movie-rating">
        <span>
          IMDB Rating <i className="fa fa-star"></i> : {imdbRating}
        </span>
        <span>
          IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}
        </span>
        <span>
          Runtime <i className="fa fa-film"></i> : {runtime}
        </span>
        <span>
          Year <i className="fa fa-calendar"></i> : {year}
        </span>
      </div>
      <div className="movie-plot">{plot}</div>
      <div className="movie-info">
        <div>
          <span>Director : </span>
          <span>{director}</span>
        </div>
        <div>
          <span>Stars : </span>
          <span>{actors}</span>
        </div>
        <div>
          <span>Generes : </span>
          <span>{genre}</span>
        </div>
        <div>
          <span>Languages : </span>
          <span>{language}</span>
        </div>
        <div>
          <span>Awards : </span>
          <span>{awards}</span>
        </div>
      </div>
    </>
  )
}
