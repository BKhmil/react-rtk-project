import React from 'react';
import {Outlet} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import css from './SearchPage.module.css';
import {useTitle} from "../../hooks/useTitle";

const SearchPage = () => {
    useTitle('BK Movies | Search');

    return (
        <div className={css.SearchPage}>
            <Outlet/>
            <Paginator forWhat={'search'} />
        </div>
    );
};

export default SearchPage;