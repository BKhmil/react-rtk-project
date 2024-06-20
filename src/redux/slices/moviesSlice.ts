import {createAsyncThunk, createSlice, isPending} from "@reduxjs/toolkit";
import {IPage} from "../../interfaces/page.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services/movie.service";

type TMoviesSlice = {
    currentPage: IPage;
    loading: boolean;
    error: string | null;
}

const initialState: TMoviesSlice = {
    currentPage: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    loading: false,
    error: null
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

const getMoviesByQuery = createAsyncThunk<IPage, string>(
    'moviesSlice/getMoviesByQuery',
    async (query: string, {fulfillWithValue, rejectWithValue}) => {
        try {
            const page = await movieService.searchMoviesByQuery(query);
            return fulfillWithValue(page);
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
            .addMatcher(isPending(getPageWithMovies, getMoviesPageWithGenres), state => {
                state.loading = true;
                state.error = null;
            })
});

const moviesActions = {
    ...moviesSlice.actions,
    getPageWithMovies,
    getMoviesPageWithGenres,
    getMoviesByQuery
}

export {
    moviesSlice,
    moviesActions
}
