import React, { useRef, useState, useEffect } from 'react';

import data from 'config/data.json'
import searchIcon from  'assets/images/search.svg';
import './SearchForm.scss';

const SearchForm: React.FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);

    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim().length > 0 && searchRef.current != null) {
            const enteredSearchText = searchRef.current.value;
        }
    };

    const searchHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchRef.current != null) {
            const enteredSearchText = searchRef.current.value;
        }
    };

    return (
        <form onSubmit={searchHandler}>
            <div className='form-control'>
                <button>{data.sortBy}</button>
            </div>
            <div className='form-control'>
                <img src={searchIcon} alt="Search" />
                <input
                    id="search"
                    type="text"
                    ref={searchRef}
                    autoComplete={'off'}
                    onChange={searchChangeHandler}
                    placeholder={data.searchInputPlaceholderText}
                />
            </div>
        </form>
    );
};
export default SearchForm;
