import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movie.interface";
import {posterBaseURL} from "../../constants/urls";
import StarRatings from 'react-star-ratings';
import css from './MoviesListCard.module.css';
import PosterPreview from "../PosterPreview/PosterPreview";

interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    return (
        <div className={css.MoviesListCard}>
            <PosterPreview
                path={posterBaseURL + '/w200' + movie.poster_path}
                alter={movie.title}
                styles={{marginBottom: '5px'}} />
            <StarRatings
                rating={movie.vote_average}
                starRatedColor="gold"
                numberOfStars={10}
                starDimension="17px"
                starSpacing="1px"
                name='rating'
            />
            <div style={{color: '#0196bd', textAlign: 'center', fontSize: '20px'}}>{movie.title}</div>
        </div>
    );
};

export default MoviesListCard;