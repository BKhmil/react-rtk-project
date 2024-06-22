import React, {FC} from 'react';
import css from './ErrorBox.module.css';

interface IProps {
    message: string;
}

const ErrorBox:FC<IProps> = ({message}) => {
    return <div className={css.ErrorBox}>{message}</div>;
};

export default ErrorBox;