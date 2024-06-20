import React from 'react';
import {useTitle} from "../../hooks/useTitle";
import Paginator from "../../components/Paginator/Paginator";
import css from './MoviesPage.module.css';
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
    useTitle('BK Movies | Movies');

    return (
        <div className={css.MoviesPage}>
            <MoviesList whereIAm={'movies'}/>
            <Paginator forWhat={'movies'}/>
        </div>
    );
};

export default MoviesPage;