import React, { useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'
import { fetchAsyncShows } from '../../features/shows/showSlice'

export default function Home() {
  const dispatch = useDispatch()

  const showText: string = 'Friends'
  const movieText = 'Harry'

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  )
}
