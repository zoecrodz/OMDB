import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "./state/movies";
import movieReducer from "./state/singleMovie";
import userReducer from "./state/user"
 
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
  reducer: { 
    movies: moviesReducer,
    movie: movieReducer,
    user: userReducer
  },
});

export default store;
