import React from 'react';
import userIcon from '../../assets/icons/userIcon.png';
import logoutIcon from '../../assets/icons/logoutIcon.png';
import css from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <div>
                <div>Mugiwara</div>
                <div style={{color: 'green'}}>🟢 - Online</div>
            </div>
            <img src={userIcon} alt="user-icon"/>
            <img src={logoutIcon} alt="logout-icon" style={{marginLeft: '20px'}} />
        </div>
    );
};

export default UserInfo;