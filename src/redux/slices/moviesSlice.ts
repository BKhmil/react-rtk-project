import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPage} from "../../interfaces/page.interface";
import {AxiosError} from "axios";
import {movieService} from "../../services/movie.service";

type TMoviesSlice = {
    currentPage: IPage
}

const initialState: TMoviesSlice = {
    currentPage: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }
}

const getPageWithMovies = createAsyncThunk<IPage, number>(
    'moviesSlice',
    async (pageNumber: number, {fulfillWithValue, rejectWithValue}) => {
        try {
            const page = await movieService.getPageByNumber(pageNumber);

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
            })
});

export {
    moviesSlice
}

export const moviesActions = {
    ...moviesSlice.actions,
    getPageWithMovies
}