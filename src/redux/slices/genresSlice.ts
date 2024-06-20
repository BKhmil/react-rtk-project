import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces/genre.interface";
import {genreService} from "../../services/genre.service";
import {AxiosError} from "axios";

type TGenresSlice = {
    genres: IGenre[]
};

const initialState: TGenresSlice = {
    genres: []
};

const getAllMovieGenres = createAsyncThunk<IGenre[], void>(
    'genresSlice/getAllGenres',
    async (_, {fulfillWithValue, rejectWithValue}) => {
        try {
            const {genres} = await genreService.getAllMovieGenres();
            console.log(genres);

            return fulfillWithValue(genres);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovieGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
});

const genresActions = {...genresSlice.actions, getAllMovieGenres};

export {
    genresSlice,
    genresActions
}