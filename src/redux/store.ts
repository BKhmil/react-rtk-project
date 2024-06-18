import {configureStore} from "@reduxjs/toolkit";
import {moviesSlice} from "./slices/moviesSlice";
import {pagesSlice} from "./slices/pagesSlice";


const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        pagesSlice: pagesSlice.reducer
    }
});

export {
    store
}