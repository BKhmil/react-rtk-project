import React from 'react';
import logo from '../../assets/icons/logo.png';
import css from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";

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
                        <NavLink to='/genres'>Genres</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>Movies</NavLink>
                    </li>
                </ul>
            </nav>
            <div style={{color: 'white'}}>search-bar</div>
            <UserInfo />
        </header>
    );
};

export default Header;