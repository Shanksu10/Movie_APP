import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../../features/movies/movieSlice'
import { MovieData, MovieSearch } from '../../features/movies'
import { getShows } from '../../features/shows/showSlice'
import List from '../List/List'
import './MovieList.scss'

export default function MovieList() {
  const movies: MovieData[] | MovieSearch[] | undefined = useSelector(getMovies)
  const shows = useSelector(getShows)

  return (
    <>
      <List title="Movies" data={movies.Search} />
      <List title="Shows" data={shows.Search} />
    </>
  )
}
