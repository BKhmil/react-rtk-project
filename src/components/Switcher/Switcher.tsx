import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux/slices/themeSlice";
import css from './Switcher.module.css';

const Switcher = () => {
    const {theme} = useAppSelector(state => state.themeSlice);
    const dispatch = useAppDispatch();

    console.log(theme)

    return (
        <div className={css.switchContainer + ' ' + css[theme]}
             onClick={() => dispatch(themeActions.changeTheme())}
        >
            <div className={css.switchHandle}></div>
        </div>
    );
};

export default Switcher;