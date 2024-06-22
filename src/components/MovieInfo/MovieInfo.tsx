import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import css from './MovieInfo.module.css';
import PosterPreview from "../PosterPreview/PosterPreview";
import {posterBaseURL} from "../../constants/urls";
import StarRatings from "react-star-ratings";
import Preloader from "../Preloader/Preloader";
import backIcon from '../../assets/icons/backIcon.png';
import Paginator from "../Paginator/Paginator";

const MovieInfo = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {movie, error, loading} = useAppSelector(state => state.moviesSlice);
    const {theme} = useAppSelector(state => state.themeSlice);
    const params = useParams();
    const movieId = params.movieId;
    const prevPage = localStorage.getItem('prevPage');

    useEffect(() => {
        movieId && dispatch(moviesActions.getMovieById(+movieId));
    }, [movieId]);

    if (!movie) return <div>Error: {error}</div>

    return (
        <div className={css.wrapper}>
            {
                loading ?
                    <Preloader />
                    :
                    <div className={css.MovieInfo} style={theme === 'dark' ? {color: '#b8bbc2'} : {color: '#0a1432'}}>
                        <div className={css.title}>{movie.title}</div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <PosterPreview
                                path={posterBaseURL + '/w400' + movie.poster_path}
                                alter={movie.title}
                                styles={{marginBottom: '5px'}}
                                withPlay={false}
                            />
                            <div className={css.info}>
                                <div>Rating:</div>
                                <StarRatings
                                    rating={movie.vote_average}
                                    starEmptyColor="darkgrey"
                                    starRatedColor={theme === 'dark' ? "gold" : "red"}
                                    numberOfStars={10}
                                    starDimension="40px"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <div>Genres:</div>
                                <Paginator forWhat={'full'} genresFromProps={movie.genres} />
                                <div className={css.part}>Origin country: {movie.origin_country.join(', ')}</div>
                                <div className={css.part}>Release date: {movie.release_date}</div>
                                <div className={css.part}>Runtime: {movie.runtime} min</div>
                            </div>
                        </div>
                        <div style={{margin: '20px auto', width: '85%'}}>
                            <div style={{fontSize: '40px', textAlign: 'center', marginBottom: '10px'}}>Overview</div>
                            <div style={{fontSize: '32px', textAlign: 'center', marginBottom: '10px'}}>{movie.overview}</div>
                        </div>
                        <img
                            src={backIcon}
                            alt="back-icon"
                            style={{width: '50px', position: 'absolute', top: '15vh', left: '20px'}}
                            onClick={() => prevPage && navigate(prevPage)}
                        />
                    </div>
            }
        </div>
    );
};

export default MovieInfo;