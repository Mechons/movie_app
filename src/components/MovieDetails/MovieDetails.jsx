import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/MovieSlice";

import "./MovieDetails.scss";
import { Link } from "react-router-dom";
const MovieDetail = () => {
  const { imbdID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  console.log(imbdID);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imbdID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imbdID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i class="bi bi-star-half"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i class="bi bi-hand-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i class="bi bi-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i class="bi bi-calendar3"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <Link to="/">
              <img src={data.Poster} alt={data.Title} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
