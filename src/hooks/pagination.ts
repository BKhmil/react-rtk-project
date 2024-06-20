import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from "react";

const usePagination = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams] = useSearchParams();
    const genreId = params.genreId;

    const [activePageNumber, setActivePageNumber] =
        useState<number>(1);
    const [currentPagesSection, setCurrentPagesSection] =
        useState<number>(1);
    const [activeBadgeId, setActiveBadgeId] =
        useState<number>(28);

    useEffect(() => {
        const pageNumber = parseInt(searchParams.get('page') || '1', 10);
        setActivePageNumber(pageNumber);

        const pageSection = Math.ceil(pageNumber / 10);
        setCurrentPagesSection(pageSection);

        if (genreId) setActiveBadgeId(+genreId);
    }, [searchParams, genreId]);

    const pageButtonClickHandler = (pageNumber: number, forWhat: string) => {
        setActivePageNumber(pageNumber);

        if (forWhat === 'movies') {
            navigate(`/movies?page=${pageNumber}`);
        } else {
            navigate(`/genres/${genreId}?page=${pageNumber}`);
        }

        window.scrollTo({ top: 0 });
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
        navigate(`/genres/${genreId}?page=1`);
    };

    return {
        moviesPaginationBundle: {
            currentPagesSection,
            activePageNumber,
            pageButtonClickHandler,
            prevPageSection,
            nextPageSection,
            setActivePageNumber
        },
        genresPaginationBundle: {
            activeBadgeId,
            genreBadgeClickHandler,
            genreId
        }
    };
};

export {
    usePagination
};

