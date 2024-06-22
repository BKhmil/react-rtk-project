import React, {memo} from 'react';
import userIcon from '../../assets/icons/userIcon.png';
import logoutIcon from '../../assets/icons/logoutIcon.png';
import css from './UserInfo.module.css';
import {useAppSelector} from "../../hooks/reduxHooks";

const UserInfo = memo(() => {
    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <div className={css.UserInfo}>
            <div>
                <div style={theme === 'dark' ? {color: '#b8bbc2'} : {color: '#0a1432'}}>Mugiwara</div>
                <div style={{color: 'green'}}>🟢 - Online</div>
            </div>
            <img src={userIcon} alt="user-icon"/>
            <img src={logoutIcon} alt="logout-icon" style={{marginLeft: '20px'}} />
        </div>
    );
});

export default UserInfo;