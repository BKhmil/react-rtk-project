import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from './MovieList.module.css';
import withFetching from "../../hoc/withFetching";
import Preloader from "../Preloader/Preloader";

const MoviesList = () => {
    const {currentPage, loading, error} = useAppSelector(state => state.moviesSlice);

    return (
        <div className={css.MovieList}>
            {
                loading ?
                    <Preloader />
                    :
                    error ?
                        <div>error</div>
                            :
                        currentPage.results.length > 1 ?
                            currentPage.results.map((movie, index) => (
                                <MoviesListCard key={index} movie={movie} />))
                            :
                            <div style={{color: 'snow', height: '80vh', fontSize: '30px'}}>no movies by current query</div>
            }
        </div>
    );
};

export default withFetching(MoviesList);
