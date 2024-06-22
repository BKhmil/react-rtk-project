import React from 'react';
import logo from '../../assets/icons/logo.png';
import css from './Header.module.css';
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import SearchBar from "../SearchBar/SearchBar";
import Switcher from "../Switcher/Switcher";
import {useAppSelector} from "../../hooks/reduxHooks";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {theme} = useAppSelector(state => state.themeSlice);

    const isActive = (path: string) => {
        return location.pathname.startsWith(path);
    };


    return (
        <header className={css.Header} style={theme === 'dark' ? {backgroundColor: '#030b26'} : {backgroundColor: '#b8bbc2'}}>
            <div className={css.logoSection} onClick={() => navigate('/home')}>
                <img src={logo} alt="logo"/>
                <div style={theme === 'dark' ? {color: '#0196bd'} : {color: '#0a1432'}}>BK Movies</div>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home' style={theme === 'dark' ? {color: '#b8bbc2'} : {color: '#0a1432'}}>Home</NavLink>
                    </li>
                    <li>
                        <Link to='/genres/28' style={theme === 'dark' ? {color: '#b8bbc2'} : {color: '#0a1432'}}
                                 className={isActive('/genres') ? 'active' : ''}
                        >Genres</Link>
                    </li>
                    <li>
                        <NavLink to='/movies' style={theme === 'dark' ? {color: '#b8bbc2'} : {color: '#0a1432'}}>Movies</NavLink>
                    </li>
                </ul>
            </nav>
            <SearchBar />
            <Switcher />
            <UserInfo />
        </header>
    );
};

export default Header;