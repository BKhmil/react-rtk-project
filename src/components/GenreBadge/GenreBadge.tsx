import React, {FC} from 'react';
import css from './GenreBadge.module.css';
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps {
    genre: string;
}
const GenreBadge:FC<IProps> = ({genre}) => {
    const {theme} = useAppSelector(state => state.themeSlice);

    return <span className={css.GenreBadge}
                 style={theme === 'dark' ? {backgroundColor: '#030b26', color: '#b8bbc2'} : {backgroundColor: '#b8bbc2', color: '#030b26'}}
    >{genre}</span>;
};

export default GenreBadge;