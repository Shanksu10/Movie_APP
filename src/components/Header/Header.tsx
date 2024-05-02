import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncShows } from '../../features/shows/showSlice'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
export default function Header() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') return alert('Please enter text :)')
    dispatch(fetchAsyncMovies(text))
    dispatch(fetchAsyncShows(text))
    setText('')
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search movies or shows"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-img">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}
