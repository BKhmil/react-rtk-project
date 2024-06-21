import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IForm} from "../../interfaces/form";
import {useNavigate} from "react-router-dom";
import css from './SearchBar.module.css';
import searchIcon from '../../assets/icons/searchIcon.png';

const SearchBar = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset
    } = useForm<IForm>();

    const search: SubmitHandler<IForm> = ({search}) => {
        navigate('/search/' + search + '?page=1');
    }

    return (
        <form onSubmit={handleSubmit(search)} className={css.wrapper}>
            <input type="text"  {...register('search')}
                   placeholder='search...'
                   onFocus={() => reset()}
                   required={true}
                   autoComplete="off"
            />
            <button>
                <img src={searchIcon} alt="search"/>
            </button>
        </form>
    );
};

export default SearchBar;