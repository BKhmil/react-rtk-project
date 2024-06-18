import React from 'react';
import logo from '../../assets/icons/logo.png';
import githubIcon from '../../assets/icons/githubIcon.png';
import css from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={css.Footer}>
            <div>
                <img src={logo} alt="logo" style={{width: '60px', marginTop: '-8px'}}/>
                <span style={{color: '#b8bbc2'}}>Copyright © 2024 BK Movies</span>
            </div>
            <img src={githubIcon} alt="github" style={{width: '40px', cursor: 'pointer'}} onClick={() => window.open('https://github.com/BKhmil', '_blank')} />
        </footer>
    );
};

export default Footer;