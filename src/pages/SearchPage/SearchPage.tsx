import React from 'react';
import {Outlet} from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import css from './SearchPage.module.css';
import {useTitle} from "../../hooks/useTitle";
import {useAppSelector} from "../../hooks/reduxHooks";

const SearchPage = () => {
    useTitle('BK Movies | Search');

    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <div className={css.SearchPage} style={theme === 'dark' ? {backgroundColor: '#0a1432'} : {backgroundColor: '#d4d6da'}}>
            <Outlet/>
            <Paginator forWhat={'search'} />
        </div>
    );
};

export default SearchPage;