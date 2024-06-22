import React, {FC, ReactElement} from 'react';
import css from './Paginator.module.css';
import {usePagination} from "../../hooks/pagination";
import {useAppSelector} from "../../hooks/reduxHooks";
import GenreElement from "../GenreElement/GenreElement";

interface IProps {
    forWhat: string;
}

const MoviesPaginator: FC<IProps> = ({forWhat}) => {
    const {
        moviesPaginationBundle
    } = usePagination();

    const maxPageNumber = Math.min(moviesPaginationBundle.total_pages, 500);
    const pagesPerSection = maxPageNumber <= 10 ? maxPageNumber : 10;
    const totalSections = Math.ceil(maxPageNumber / pagesPerSection);

    const buttonsGenerator = (currentPageSection: number) => {
        const buttons: ReactElement[] = [];
        const startPage = (currentPageSection - 1) * pagesPerSection + 1;
        const endPage = Math.min(startPage + pagesPerSection - 1, maxPageNumber);

        for (let i = startPage; i <= endPage; ++i) {
            buttons.push(
                <button
                    key={i}
                    className={i === moviesPaginationBundle.activePageNumber ? css.active : ''}
                    onClick={() => moviesPaginationBundle.pageButtonClickHandler(i, forWhat)}
                >{i}</button>
            );
        }

        return buttons;
    }

    return (
        <div className={css.PaginatorContainer}>
            <button
                disabled={moviesPaginationBundle.currentPagesSection <= 1}
                onClick={() => moviesPaginationBundle.prevPageSection()}
            >{'<<'}</button>
            {buttonsGenerator(moviesPaginationBundle.currentPagesSection)}
            <button
                disabled={moviesPaginationBundle.currentPagesSection >= totalSections}
                onClick={() => moviesPaginationBundle.nextPageSection()}
            >{'>>'}</button>
        </div>
    );
};

const GenresPaginator = () => {
    const {genresPaginationBundle} = usePagination();
    const {genres} = useAppSelector(state => state.genresSlice);

    const badgesGenerator = () => {
        const badges: ReactElement[] = [];

        genres.forEach((genre, index) => {
            badges.push(<GenreElement
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
            case 'movies': return <MoviesPaginator forWhat={'movies'} />;
            case 'genres': return <MoviesPaginator forWhat={'genres'} />
            case 'search': return <MoviesPaginator forWhat={'search'} />
            default: return <GenresPaginator />
        }
    })();
};

export default Paginator;