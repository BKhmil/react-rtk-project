import React from 'react';
import {useTitle} from "../../hooks/useTitle";
import Paginator from "../../components/Paginator/Paginator";
import css from './MoviesPage.module.css';
import MoviesList from "../../components/MoviesList/MoviesList";
import {useAppSelector} from "../../hooks/reduxHooks";

const MoviesPage = () => {
    useTitle('BK Movies | Movies');

    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <div className={css.MoviesPage} style={theme === 'dark' ? {backgroundColor: '#0a1432'} : {backgroundColor: '#d4d6da'}}>
            <MoviesList whereIAm={'movies'}/>
            <Paginator forWhat={'movies'}/>
        </div>
    );
};

export default MoviesPage;