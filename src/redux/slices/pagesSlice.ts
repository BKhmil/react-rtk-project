import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TPagesSlice = {
    currentPagesSection: number;
    activePageNumber: number;
}

const initialState: TPagesSlice = {
    currentPagesSection: 1,
    activePageNumber: 1
}

const pagesSlice = createSlice({
    name: 'pagesSlice',
    initialState,
    reducers: {
        prevPagesSection: state => {
            state.currentPagesSection = state.currentPagesSection - 1;
        },
        nextPageSection: state => {
            state.currentPagesSection = state.currentPagesSection + 1;
        },
        setActivePage: (state, action: PayloadAction<number>) => {
            state.activePageNumber = action.payload;
        }
    }
});

const pagesActions = {...pagesSlice.actions};

export {
    pagesSlice,
    pagesActions
}