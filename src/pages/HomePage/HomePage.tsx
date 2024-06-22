import React from 'react';
import {useTitle} from "../../hooks/useTitle";
import css from './HomePage.module.css';
import {useNavigate} from "react-router-dom";
import {usePagination} from "../../hooks/pagination";
import {useAppSelector} from "../../hooks/reduxHooks";

const HomePage = () => {
    useTitle('BK Movies | Home');

    const {theme} = useAppSelector(state => state.themeSlice);
    const {moviesPaginationBundle} = usePagination();
    const navigate = useNavigate();

    return (
        <div className={css.HomePage}>
            <div className={css.overlay}
                 style={theme === 'dark' ? {backgroundColor: 'rgba(0, 0, 0, 0.8)'} : {backgroundColor: 'rgba(255, 255, 255, 0.4)'}}></div>
            <div className={css.content} style={theme === 'dark' ? {color: '#b8bbc2'} : {color: '#030b26'}}>
                <h1>Free Movies to Watch,<br/>Anytime Anywhere.</h1>
                <p>The search is over! Let <span style={{fontWeight: '600'}}>BK Movies</span> help you find the<br/>perfect movie to watch tonight for free.</p>
                <button
                    style={theme === 'dark' ? {backgroundColor: '#030b26', color: '#0196bd'} : {backgroundColor: '#b8bbc2', color: '#030b26'}}
                    onClick={() => {
                    moviesPaginationBundle.pageButtonClickHandler(1, 'movies');
                    navigate('/movies');
                }}>Watch for free</button>
            </div>
        </div>
    );
};

export default HomePage;