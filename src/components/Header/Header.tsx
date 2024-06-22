import React from 'react';
import logo from '../../assets/icons/logo.png';
import css from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={css.Header}>
            <div className={css.logoSection} onClick={() => navigate('/home')}>
                <img src={logo} alt="logo"/>
                <div>BK Movies</div>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/genres/28'>Genres</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
            <SearchBar />
            <UserInfo />
        </header>
    );
};

export default Header;