import React, {useEffect, useState} from 'react';
import {IPage} from "../../interfaces/page.interface";
import {movieService} from "../../services/movie.service";
import {useTitle} from "../../hooks/useTitle";
import css from './HomePage.module.css';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    useTitle('BK Movies | Home');

    const navigate = useNavigate();

    return (
        <div className={css.HomePage}>
            <div className={css.overlay}></div>
            <div className={css.content}>
                <h1>Free Movies to Watch,<br/>Anytime Anywhere.</h1>
                <p>The search is over! Let <span style={{fontWeight: '600'}}>BK Movies</span> help you find the<br/>perfect movie to watch tonight for free.</p>
                <button onClick={() => navigate('/movies')}>Watch for free</button>
            </div>
        </div>
    );
};

export default HomePage;