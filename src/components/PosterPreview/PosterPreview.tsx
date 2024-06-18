import React, {FC} from 'react';

interface IProps {
    path: string;
    alter: string;
    styles: React.CSSProperties;
}

const PosterPreview: FC<IProps> = ({path, alter, styles}) => {
    return <img src={path} alt={alter} style={styles}/>;
};

export default PosterPreview;