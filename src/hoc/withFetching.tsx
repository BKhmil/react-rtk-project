import React, {FC, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useAppDispatch} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";
import {usePagination} from "../hooks/pagination";

interface IProps {
    whereIAm: string;
}

const withFetching = (WrappedComponent: React.ComponentType<any>) => {
    const Fetcher: FC<IProps> = ({ whereIAm }) => {
        const {genresPaginationBundle, searchPaginationBundle} =
            usePagination();
        const [searchParams] = useSearchParams();
        const dispatch = useAppDispatch();

        useEffect(() => {
            const pageNumber = searchParams.get('page') ?? '1';

            switch (whereIAm) {
                case 'movies': dispatch(moviesActions.getPageWithMovies(parseInt(pageNumber, 10)));
                    break;
                case 'genres': dispatch(moviesActions.getMoviesPageWithGenres({
                        genreId: parseInt(genresPaginationBundle.genreId ?? '28', 10), pageNumber: pageNumber
                    }));
                    break;
                case 'search': searchPaginationBundle.query && (dispatch(moviesActions.getMoviesByQuery(
                    {query: searchPaginationBundle.query, pageNumber})));
                    break;
                default:
                    break;
            }
        }, [searchParams, genresPaginationBundle.genreId, whereIAm, searchPaginationBundle.query]);

        return <WrappedComponent />;
    };

    return Fetcher;
};

export default withFetching;
