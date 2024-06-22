import React from 'react';
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from './MovieInfoPage.module.css';
import {useAppSelector} from "../../hooks/reduxHooks";

const MovieInfoPage = () => {
    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <div className={css.MovieInfoPage} style={theme === 'dark' ? {backgroundColor: '#0a1432'} : {backgroundColor: '#d4d6da'}}>
            <MovieInfo />
        </div>
    );
};

export default MovieInfoPage;