import React, {FC, ReactElement, useEffect} from 'react';
import css from './Paginator.module.css';
import {usePagination} from "../../hooks/pagination";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import GenreBadge from "../GenreBadge/GenreBadge";
import {genresActions} from "../../redux/slices/genresSlice";

interface IProps {
    forWhat: string;
}

const MoviesPaginator: FC<IProps> = ({forWhat}) => {
    const {
        moviesPaginationBundle
    } = usePagination();

    const buttonsGenerator = (currentPageSection: number) => {
        const buttons: ReactElement[] = [];

        for (let i = currentPageSection * 10 - 9; i <= currentPageSection * 10; ++i) {
            buttons.push(
                <button
                    key={i}
                    className={i === moviesPaginationBundle.activePageNumber ? css.active : ''}
                    onClick={() => moviesPaginationBundle.pageButtonClickHandler(i, forWhat)}
                >{i}</button>);
        }

        return buttons;
    }

    return (
        <div className={css.PaginatorContainer}>
            <button
                disabled={moviesPaginationBundle.currentPagesSection < 2}
                onClick={() => moviesPaginationBundle.prevPageSection()}
            >{'<<'}</button>
            {buttonsGenerator(moviesPaginationBundle.currentPagesSection)}
            <button
                disabled={moviesPaginationBundle.currentPagesSection > 4}
                onClick={() => moviesPaginationBundle.nextPageSection()}
            >{'>>'}</button>
        </div>
    );
};

const GenresPaginator = () => {
    const {genresPaginationBundle} = usePagination();
    const {genres} = useAppSelector(state => state.genresSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllMovieGenres());
    }, []);

    const badgesGenerator = () => {
        const badges: ReactElement[] = [];

        genres.forEach((genre, index) => {
            badges.push(<GenreBadge
                            key={index}
                            genre={genre}
                            clickHandler={() => genresPaginationBundle.genreBadgeClickHandler(genre.id)}
                            activeId={genresPaginationBundle.activeBadgeId}
                        />);

        });

        return badges;
    }

    return (
        <div style={{marginBottom: '20px'}}>
            {badgesGenerator()}
        </div>
    );
};

const Paginator: FC<IProps> = ({forWhat}) => {
    return (() => {
        switch (forWhat) {
            case 'movies': return <MoviesPaginator forWhat={'movies'}/>;
            case 'genres': return <MoviesPaginator forWhat={'genres'} />
            default: return <GenresPaginator />
        }
    })();
};

export default Paginator;