import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import css from './MovieInfo.module.css';
import PosterPreview from "../PosterPreview/PosterPreview";
import {posterBaseURL} from "../../constants/urls";
import StarRatings from "react-star-ratings";

const MovieInfo = () => {
    const dispatch = useAppDispatch();
    const {movie, error} = useAppSelector(state => state.moviesSlice);
    const params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        movieId && dispatch(moviesActions.getMovieById(+movieId));
    }, [movieId]);

    if (!movie) return <div>Error: {error}</div>

    return (
        <div className={css.MovieInfo}>
            <div>{movie.title}</div>
            <div style={{display: 'flex'}}>
                <PosterPreview
                    path={posterBaseURL + '/w400' + movie.poster_path}
                    alter={movie.title}
                    styles={{marginBottom: '5px'}}
                    withPlay={false}
                />
                <div>
                    <div>Rating:</div>
                    <StarRatings
                        rating={movie.vote_average}
                        starRatedColor="gold"
                        numberOfStars={10}
                        starDimension="30px"
                        starSpacing="1px"
                        name='rating'
                    />
                    <div>Genres</div>
                    {/*<div>{movie.genre_ids.map((genre, ))}</div>*/}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default MovieInfo;