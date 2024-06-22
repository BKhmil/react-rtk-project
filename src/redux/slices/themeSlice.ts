import {createSlice} from "@reduxjs/toolkit";

type TThemeSlice = {theme: string;};

const initialState: TThemeSlice = {theme: sessionStorage.getItem('theme') || 'dark'};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: state => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            sessionStorage.setItem('theme', state.theme);
        }
    }
});

const themeActions = {...themeSlice.actions};

export {
    themeSlice,
    themeActions
}