import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from './MovieList.module.css';
import withFetching from "../../hoc/withFetching";
import Preloader from "../Preloader/Preloader";
import ErrorBox from "../ErrorBox/ErrorBox";

const MoviesList = () => {
    const {currentPage, loading, error} = useAppSelector(state => state.moviesSlice);

    return (
        <div className={css.MovieList}>
            {
                loading ?
                    <Preloader />
                    :
                    error ?
                        <ErrorBox message={error}/>
                            :
                        currentPage.results.length > 1 ?
                            currentPage.results.map((movie, index) => (
                                <MoviesListCard key={index} movie={movie} />))
                            :
                            <ErrorBox message={'No movies by current query'}/>
            }
        </div>
    );
};

export default withFetching(MoviesList);
