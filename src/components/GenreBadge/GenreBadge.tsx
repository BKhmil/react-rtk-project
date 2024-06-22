import React, {FC} from 'react';
import css from './GenreBadge.module.css';

interface IProps {
    genre: string;
}
const GenreBadge:FC<IProps> = ({genre}) => {
    return <span className={css.GenreBadge}>{genre}</span>;
};

export default GenreBadge;