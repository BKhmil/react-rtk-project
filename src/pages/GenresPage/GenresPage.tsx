import React from 'react';
import css from './GenresPage.module.css';
import {Outlet} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import {useTitle} from "../../hooks/useTitle";

const GenresPage = () => {
    useTitle('BK Movies | Genres');

    return (
        <div className={css.GenresPage}>
            <Paginator forWhat={''}/>
            <Outlet />
            <Paginator forWhat={'genres'} />
        </div>
    );
};

export default GenresPage;