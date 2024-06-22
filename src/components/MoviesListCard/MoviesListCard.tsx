import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movie.interface";
import {posterBaseURL} from "../../constants/urls";
import StarRatings from 'react-star-ratings';
import css from './MoviesListCard.module.css';
import PosterPreview from "../PosterPreview/PosterPreview";
import GenreBadge from "../GenreBadge/GenreBadge";
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps {
    movie: IMovie;
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const genres = useAppSelector(state => state.genresSlice.genres);

    // todo: wrap in useMemo
    const movieGenres = movie.genre_ids.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? genre.name : '';
    });

    return (
        <div className={css.MoviesListCard}>
            <PosterPreview
                path={posterBaseURL + '/w200' + movie.poster_path}
                alter={movie.title}
                withPlay={true}
                styles={{marginBottom: '5px'}}
                movieId={movie.id}
            />
            <StarRatings
                rating={movie.vote_average}
                starRatedColor="gold"
                numberOfStars={10}
                starDimension="17px"
                starSpacing="1px"
                name='rating'
            />
            <div style={{color: '#0196bd', textAlign: 'center', fontSize: '20px'}}>{movie.title}</div>
            <div className={css.BadgesContainer}>
                {movieGenres.map((genre, index) => (
                    <GenreBadge key={index} genre={genre}/>
                ))}
            </div>
        </div>
    );
};

export default MoviesListCard;