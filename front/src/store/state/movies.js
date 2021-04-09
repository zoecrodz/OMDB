import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const setMovies = createAsyncThunk("SET_MOVIES", () => {
    return axios
    .get('https://api.themoviedb.org/3/discover/movie?api_key=d4f91ec83818c0da9baf8a731881dc31&sort_by=popularity.desc')
    // .get('https://www.omdbapi.com/?apikey=20dac387&s=avengers')
    .then(res => res.data)
});

export const searchMovies = createAsyncThunk("SEARCH_MOVIES", (value) => {
  return axios
  .get(`https://api.themoviedb.org/3/search/movie?api_key=d4f91ec83818c0da9baf8a731881dc31&query=${value}`)
  .then(res => res.data)
});

const moviesReducer = createReducer([], {   
  [setMovies.fulfilled]: (state, action) => action.payload,
  [searchMovies.fulfilled]: (state, action) => action.payload, 
});

export default moviesReducer;
