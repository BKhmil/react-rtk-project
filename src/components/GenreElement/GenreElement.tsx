import React, {FC} from 'react';
import {IGenre} from "../../interfaces/genre.interface";
import css from './GenreElement.module.css';
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps {
    genre: IGenre;
    clickHandler: () => void;
    activeId?: number;
}

const GenreElement: FC<IProps> = ({genre, clickHandler, activeId}) => {
    const {theme} = useAppSelector(state => state.themeSlice);

    return (
        <span className={css.GenreBadge + ' ' + (activeId === genre.id ? css.active : '')}
              onClick={() => clickHandler()}
              style={theme === 'dark' ? {color: '#b8bbc2', backgroundColor: '#030b26'} : {color: '#030b26', backgroundColor: '#b8bbc2'}}
        >{genre.name}</span>
    );
};

export default GenreElement;