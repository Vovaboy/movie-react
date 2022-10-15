import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movie.slice";
import {genreReducer} from "./slices/genre.slice";

let rootReducer = combineReducers({
    movies: movieReducer,
    genres:genreReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;