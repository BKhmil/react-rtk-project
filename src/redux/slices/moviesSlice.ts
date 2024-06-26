import {createAsyncThunk, createSlice, isPending} from "@reduxjs/toolkit";
import {IPage} from "../../interfaces/page.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services/movie.service";
import {ISingleMovie} from "../../interfaces/singleMovie.interface";

type TMoviesSlice = {
    currentPage: IPage;
    loading: boolean;
    error: string | null;
    movie: ISingleMovie | null;
}

const initialState: TMoviesSlice = {
    currentPage: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    loading: false,
    error: null,
    movie: null
}

const getPageWithMovies = createAsyncThunk<IPage, number>(
    'moviesSlice/getPageWithMovies',
    async (pageNumber: number, {fulfillWithValue, rejectWithValue}) => {
        try {
            const page = await movieService.getPageByNumber(pageNumber);
            return fulfillWithValue(page);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

const getMoviesPageWithGenres = createAsyncThunk<IPage, {genreId: number, pageNumber: string}>(
    'moviesSlice/getMoviesPageWithGenres',
    async ({genreId, pageNumber}, {fulfillWithValue, rejectWithValue}) => {
        try {
            const page = await movieService.getMoviesPageWithGenre(genreId, pageNumber);
            return fulfillWithValue(page);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

const getMoviesByQuery = createAsyncThunk<IPage, {query: string, pageNumber: string}>(
    'moviesSlice/getMoviesByQuery',
    async ({query, pageNumber}, {fulfillWithValue, rejectWithValue}) => {
        try {
            const page = await movieService.searchMoviesByQuery(query, pageNumber);
            return fulfillWithValue(page);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

const getMovieById = createAsyncThunk<ISingleMovie, number>(
    'moviesSlice/getMovieById',
    async (movieId: number, {fulfillWithValue, rejectWithValue}) => {
        try {
            const movie = await movieService.findMovieById(movieId);
            return fulfillWithValue(movie);
        } catch (e) {
            return rejectWithValue(e as AxiosError);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPageWithMovies.fulfilled, (state, action) => {
                state.currentPage = action.payload;
                state.loading = false;
            })
            .addCase(getPageWithMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Movies loading error';
            })
            .addCase(getMoviesPageWithGenres.fulfilled, (state, action) => {
                state.currentPage = action.payload;
                state.loading = false;
            })
            .addCase(getMoviesPageWithGenres.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Movies by genres loading error';
            })
            .addCase(getMoviesByQuery.fulfilled, (state, action) => {
                state.currentPage = action.payload;
                state.loading = false;
            })
            .addCase(getMoviesByQuery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Movies by query loading error';
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false;
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'No movies by current id';
            })
            .addMatcher(isPending(getPageWithMovies, getMoviesPageWithGenres, getMoviesByQuery, getMovieById), state => {
                state.loading = true;
                state.error = null;
            })
});

const moviesActions = {
    ...moviesSlice.actions,
    getPageWithMovies,
    getMoviesPageWithGenres,
    getMoviesByQuery,
    getMovieById
}

export {
    moviesSlice,
    moviesActions
}
