import React from 'react';
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from './MovieInfoPage.module.css';

const MovieInfoPage = () => {
    return (
        <div className={css.MovieInfoPage}>
            <MovieInfo />
        </div>
    );
};

export default MovieInfoPage;