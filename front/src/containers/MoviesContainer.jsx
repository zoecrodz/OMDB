import React from "react";
import { setMovies } from "../store/state/movies";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "../styles/allMovies.module.css"

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.results);

  React.useEffect(() => {
    dispatch(setMovies())
  }, []);

  return (
      <div>
      { moviesList && (
      <div className={style.moviesContainer}>
          {moviesList.map((movie) => (
            <div className={style.movie} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </Link>
            </div>
          ))}
      </div>
      )}
    </div>
  );
};

export default MoviesContainer;