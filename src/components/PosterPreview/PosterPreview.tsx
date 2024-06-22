import React, {FC} from 'react';
import playIcon from '../../assets/icons/playIcon.png';
import css from './PosterPreview.module.css';
import {useLocation, useNavigate} from "react-router-dom";

interface IProps {
    path: string;
    alter: string;
    styles: React.CSSProperties;
    withPlay: boolean;
    movieId?: number;
}

const PosterPreview: FC<IProps> = ({path, alter, styles, withPlay, movieId}) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={css.poster}>
            <img src={path} alt={alter} style={styles}/>
            {
                withPlay && <img src={playIcon}
                                 alt={''}
                                 className={css.play}
                                 onClick={(() => {
                                     navigate('/info/' + movieId);
                                     window.scrollTo({top: 0});
                                     localStorage.setItem('prevPage', location.pathname + location.search);
                                 })}
                            />
            }
        </div>
)
    ;
};

export default PosterPreview;