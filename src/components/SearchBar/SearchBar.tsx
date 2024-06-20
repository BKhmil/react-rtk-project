import React from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../../interfaces/form";

const SearchBar = () => {
    const {register, handleSubmit} = useForm<IForm>();

    const search = () => {};

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text"  {...register('search')}
             placeholder='search...'/>
        </form>
    );
};

export default SearchBar;