import {configureStore} from "@reduxjs/toolkit";
import {moviesSlice} from "./slices/moviesSlice";
import {genresSlice} from "./slices/genresSlice";


const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        genresSlice: genresSlice.reducer
    }
});

export {
    store
}