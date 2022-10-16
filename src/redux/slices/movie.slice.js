import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies:[],
    page: 1,
    with_genres: []
}

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}) => {
        const {data} = await movieService.getAllMovies(page);
        return data
    }
);

const getMoviesByGenres = createAsyncThunk(
    'movieSlice/getMoviesByGenres',
    async ({page, with_genres}) => {
        const {data} = await movieService.getMovieByGenre(page, with_genres);
        return data;
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(getAllMovies.fulfilled,(state, action)=>{
                state.movies = action.payload;
            })
            .addCase(getMoviesByGenres.fulfilled, (state, action) => {
                const {page, with_genres} = action.payload;
                state.page = page;
                state.with_genres = with_genres;
            })
    }

});

const {reducer: movieReducer} = movieSlice;

export default movieReducer;
 const movieActions = {
    getAllMovies,
    getMoviesByGenres
}
export {movieActions}