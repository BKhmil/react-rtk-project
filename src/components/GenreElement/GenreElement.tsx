import React, {FC} from 'react';
import {IGenre} from "../../interfaces/genre.interface";
import css from './GenreBadge.module.css';

interface IProps {
    genre: IGenre;
    clickHandler: () => void;
    activeId?: number;
}

const GenreElement: FC<IProps> = ({genre, clickHandler, activeId}) => {
    return (
        <span className={css.GenreBadge + ' ' + (activeId === genre.id ? css.active : '')} onClick={() => clickHandler()}>{genre.name}</span>
    );
};

export default GenreElement;