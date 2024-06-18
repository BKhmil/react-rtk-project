import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from './MovieList.module.css';

const MoviesList = () => {
    const page = useAppSelector(state =>
        state.moviesSlice.currentPage);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getPageWithMovies(1));
    }, []);

    return (
        <div className={css.MovieList}>
            {page.results.map((movie, index) =>
                <MoviesListCard key={index} movie={movie} />)}
        </div>
    );
};

export default MoviesList;