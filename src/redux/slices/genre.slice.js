import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: []
}

const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async () => {
        const {data} = await genreService.getAllGenres();
        return data
    }
)
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
    }
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAllGenres
}
export {
    genreReducer,
    genreActions
}