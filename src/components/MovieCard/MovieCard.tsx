import React from 'react'
import { MovieData, MovieSearch } from '../../features/movies'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

export interface MovieCardProps {
  data: MovieData | MovieSearch | undefined
}

export default function MovieCard({ data }: MovieCardProps) {
  return (
    <div className="card-item">
      <Link to={`/movie/${data?.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data?.Poster} alt={data?.Title} />
          </div>
          <div className="card-corp">
            <div className="card-info">
              <h3>{data?.Title}</h3>
              <p>{data?.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
