import React, {FC} from 'react';
import playIcon from '../../assets/icons/playIcon.png';
import css from './PosterPreview.module.css';

interface IProps {
    path: string;
    alter: string;
    styles: React.CSSProperties;
    withPlay: boolean;
}

const PosterPreview: FC<IProps> = ({path, alter, styles, withPlay}) => {
    return (
        <div className={css.poster}>
            <img src={path} alt={alter} style={styles}/>
            {
                withPlay && <img src={playIcon}
                                 alt={''}
                                 className={css.play}
                            />
            }
        </div>
)
    ;
};

export default PosterPreview;