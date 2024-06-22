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
    const params = useParams();
    const movieId = params.movieId;
    const prevPage = localStorage.getItem('prevPage');

    useEffect(() => {
        movieId && dispatch(moviesActions.getMovieById(+movieId));
    }, [movieId]);

    if (!movie) return <div>Error: {error}</div>

    return (
        <div>
            {
                loading ?
                    <Preloader />
                    :
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
                                <Paginator forWhat={'fullInfo'} />
                            </div>
                        </div>
                        <div></div>
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