import React, {ReactElement} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {pagesActions} from "../../redux/slices/pagesSlice";
import css from './Paginator.module.css';
import {useNavigate} from "react-router-dom";

const Paginator = () => {
    const {currentPagesSection, activePageNumber} = useAppSelector(state => state.pagesSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const pageButtonClickHandler = (pageNumber: number) => {
        dispatch(pagesActions.setActivePage(pageNumber));

        navigate('/movies?page=' + pageNumber);
        window.scrollTo({top: 0});
    }

    const buttonsGenerator = (currentPageSection: number) => {
        const buttons: ReactElement[] = [];

        for (let i = currentPageSection * 10 - 9; i <= currentPageSection * 10; ++i) {
            buttons.push(
                <button
                    key={i}
                    className={i === activePageNumber ? css.active : ''}
                    onClick={() => pageButtonClickHandler(i)}
                >{i}</button>);
        }

        return buttons;
    }

    return (
        <div className={css.PaginatorContainer}>
            <button
                disabled={currentPagesSection < 2}
                onClick={() => dispatch(pagesActions.prevPagesSection())}
            >{'<<'}</button>
            {buttonsGenerator(currentPagesSection)}
            <button
                disabled={currentPagesSection > 4}
                onClick={() => dispatch(pagesActions.nextPageSection())}
            >{'>>'}</button>
        </div>
    );
};

export default Paginator;