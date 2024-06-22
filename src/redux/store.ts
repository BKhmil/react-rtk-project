import {configureStore} from "@reduxjs/toolkit";
import {moviesSlice} from "./slices/moviesSlice";
import {genresSlice} from "./slices/genresSlice";
import {themeSlice} from "./slices/themeSlice";


const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        genresSlice: genresSlice.reducer,
        themeSlice: themeSlice.reducer
    }
});

export {
    store
}