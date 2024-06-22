import React from 'react';
import logo from '../../assets/icons/logo.png';
import githubIcon from '../../assets/icons/githubIcon.png';
import css from './Footer.module.css';
import {useAppSelector} from "../../hooks/reduxHooks";

const Footer = () => {
    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <footer className={css.Footer} style={theme === 'dark' ? {backgroundColor: '#030b26'} : {backgroundColor: '#b8bbc2'}}>
            <div>
                <img src={logo} alt="logo" style={{width: '60px', marginTop: '-8px'}}/>
                <span style={theme === 'dark' ? {color: '#b8bbc2'}: {color: '#030b26'}}>Copyright © 2024 BK Movies</span>
            </div>
            <img src={githubIcon}
                 alt="github"
                 className={css.icon}
                 onClick={() => window.open('https://github.com/BKhmil', '_blank')} />
        </footer>
    );
};

export default Footer;