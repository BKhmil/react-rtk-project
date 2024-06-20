import React from 'react';
import css from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={css.preloader}>
            <div className={css.bar}>
                <div className={css.dash}/>
            </div>
        </div>
    );
};

export default Preloader;