import React from 'react';
import css from './GenresPage.module.css';
import {Outlet} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import {useTitle} from "../../hooks/useTitle";
import {useAppSelector} from "../../hooks/reduxHooks";

const GenresPage = () => {
    useTitle('BK Movies | Genres');
    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <div className={css.GenresPage} style={theme === 'dark' ? {backgroundColor: '#0a1432'} : {backgroundColor: '#d4d6da'}}>
            <Paginator forWhat={''}/>
            <Outlet />
            <Paginator forWhat={'genres'} />
        </div>
    );
};

export default GenresPage;