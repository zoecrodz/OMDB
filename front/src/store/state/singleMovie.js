import {
    createAsyncThunk,
    createReducer,
  } from "@reduxjs/toolkit";
  import axios from "axios"
  
  export const setMovie = createAsyncThunk ("SET_ONE_MOVIE", (movieId) => {
    return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d4f91ec83818c0da9baf8a731881dc31`)
      .then((r) => r.data)});

      
  
  const movieReducer = createReducer(
    {},
    {
      [setMovie.fulfilled]: (state, action) => action.payload,
    }
  );
  
  export default movieReducer;