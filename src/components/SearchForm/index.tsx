import React, { useRef } from 'react';

import SortElement from './SortElement';
import SearchElement from './SearchElement';
import type { AppDispatch } from 'store';
import { useDispatch } from 'react-redux';
import { searchActions } from 'store/searchSlice';

import './SearchForm.scss';

const SearchForm: React.FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();

    const searchHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchRef.current != null) {
            const enteredSearchText = searchRef.current.value;
            dispatch(searchActions.updateSearch(enteredSearchText));
        }
    };

    return (
        <form onSubmit={searchHandler}>
            <SortElement />
            <SearchElement ref={searchRef}/>
        </form>
    );
};
export default SearchForm;
