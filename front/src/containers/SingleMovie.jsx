import React from "react";
import { setMovie } from "../store/state/singleMovie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from "../styles/singleMovie.module.css"

const SingleMovie = ({ movieId }) => {
  const dispatch = useDispatch();
  const singleMovie = useSelector((state) => state.movie);
  console.log("single",singleMovie);

  React.useEffect(() => {
    dispatch(setMovie(movieId));
  }, []);

  console.log("holis")

  return (
    <div>
        {singleMovie && (
      <div className={style.singleMovieContainer} key={singleMovie.id}>
      <img src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} />
        <br />
        <h2>{singleMovie.original_title.toUpperCase()}</h2>
        <br />
        <h5>    
        OVERVIEW:
        </h5>
        <div className={style.description}>
        <span>{singleMovie.overview}</span>
        </div>
        <br />
        <h5>    
        POPULARITY:
        </h5>
        <span>{singleMovie.popularity}</span>
        <br />
        <h5>    
        AVARAGE RATING:
        </h5>
        <span>{singleMovie.vote_average}</span>
      </div>
        )}
    </div>
  );
};

export default SingleMovie;