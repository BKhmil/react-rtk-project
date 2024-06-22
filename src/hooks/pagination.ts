import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from "react";
import {useAppSelector} from "./reduxHooks";

const usePagination = () => {
    const navigate = useNavigate();
    const params = useParams();
    const genreId = params.genreId;
    const query = params.queryName;
    const [searchParams] = useSearchParams();
    const { total_pages } = useAppSelector(state =>
        state.moviesSlice.currentPage);

    const [activePageNumber, setActivePageNumber] =
        useState<number>(1);
    const [currentPagesSection, setCurrentPagesSection] =
        useState<number>(1);
    const [activeBadgeId, setActiveBadgeId] =
        useState<number>(28);

    useEffect(() => {
        const pageNumber = parseInt(searchParams.get('page') || '1', 10);
        setActivePageNumber(pageNumber);

        const maxPageNumber = total_pages === 0 ? 500 : Math.min(total_pages, 500);
        const pagesPerSection = maxPageNumber <= 10 ? maxPageNumber : 10;
        const pageSection = Math.ceil(pageNumber / pagesPerSection);
        setCurrentPagesSection(pageSection);

        if (genreId) setActiveBadgeId(+genreId);
    }, [searchParams, genreId, query]);

    const pageButtonClickHandler = (pageNumber: number, forWhat: string) => {
        setActivePageNumber(pageNumber);

        switch (forWhat) {
            case 'movies':
                navigate('/movies?page=' + pageNumber);
                break;
            case 'search':
                navigate('/search/' + query + '?page=' + pageNumber);
                break;
            default:
                navigate('/genres/' + genreId + '?page=' + pageNumber);
                break;
        }

        window.scrollTo({top: 0});
    };

    const prevPageSection = () => {
        setCurrentPagesSection(prevState => prevState - 1);
    };

    const nextPageSection = () => {
        setCurrentPagesSection(prevState => prevState + 1);
    };

    const genreBadgeClickHandler = (genreId: number) => {
        setActiveBadgeId(genreId);
        setActivePageNumber(1);
        setCurrentPagesSection(1);
        navigate('/genres/' + genreId + '?page=1');
    };

    return {
        moviesPaginationBundle: {
            currentPagesSection,
            activePageNumber,
            pageButtonClickHandler,
            prevPageSection,
            nextPageSection,
            setActivePageNumber,
            total_pages
        },
        genresPaginationBundle: {
            activeBadgeId,
            genreBadgeClickHandler,
            genreId
        },
        searchPaginationBundle: {
            query
        }
    };
};

export {
    usePagination
};

