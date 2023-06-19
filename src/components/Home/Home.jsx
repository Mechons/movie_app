import React, { useEffect, useState } from "react";
import { getData } from "../../common/Api/api";
// import { getData } from '../../common/Api/api'
import MovieListing from "../MovieListing/MovieListing";
// import movieApi from "../../common/Api/api";
// import { API_KEY } from "../../common/Api/ApiKey";
import { useDispatch } from "react-redux";
import {  fetchAsyncMovies } from "../../features/movies/MovieSlice";
const Home = () => {
  const movieText = "Harry";

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies())
  },[dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
