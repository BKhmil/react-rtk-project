import React, {FC} from 'react';
import playIcon from '../../assets/icons/playIcon.png';
import css from './PosterPreview.module.css';
import {useNavigate} from "react-router-dom";

interface IProps {
    path: string;
    alter: string;
    styles: React.CSSProperties;
    withPlay: boolean;
    movieId?: number;
}

const PosterPreview: FC<IProps> = ({path, alter, styles, withPlay, movieId}) => {
    const navigate = useNavigate();

    return (
        <div className={css.poster}>
            <img src={path} alt={alter} style={styles}/>
            {
                withPlay && <img src={playIcon}
                                 alt={''}
                                 className={css.play}
                                 onClick={(() => navigate('/info/' + movieId))}
                            />
            }
        </div>
)
    ;
};

export default PosterPreview;