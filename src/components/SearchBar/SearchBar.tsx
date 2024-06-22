import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IForm} from "../../interfaces/form.interface";
import {useNavigate} from "react-router-dom";
import css from './SearchBar.module.css';
import searchIcon from '../../assets/icons/searchIcon.png';
import {useAppSelector} from "../../hooks/reduxHooks";

const SearchBar = () => {
    const navigate = useNavigate();
    const {theme} = useAppSelector(state => state.themeSlice);
    const {
        register,
        handleSubmit,
        reset
    } = useForm<IForm>();

    const search: SubmitHandler<IForm> = ({search}) => {
        navigate('/search/' + search + '?page=1');
        reset();
    }

    return (
        <form onSubmit={handleSubmit(search)} className={css.wrapper}>
            <input type="text"  {...register('search')}
                   placeholder='search...'
                   required={true}
                   autoComplete="off"
                   style={theme === 'dark' ? {color: '#b8bbc2', backgroundColor: '#0a1432'} : {backgroundColor: '#b8bbc2', color: '#0a1432'}}
            />
            <button>
                <img src={searchIcon} alt="search"/>
            </button>
        </form>
    );
};

export default SearchBar;