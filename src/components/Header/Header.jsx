import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  user from '../../images/user.png'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className='header'>
        <Link to='/'>
        <div className="logo">Movie App</div>
        </Link>
        <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
          <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
       <div className="user-image">
        <img src={user} alt='user'/>
        <i class="bi bi-film"></i>
       </div>
    </div>
  )
}

export default Header