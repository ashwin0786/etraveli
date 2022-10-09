import React, { useRef } from 'react';

import SortElement from './SortElement';
import SearchElement from './SearchElement';

import './SearchForm.scss';

const SearchForm: React.FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);

    const searchHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchRef.current != null) {
            const enteredSearchText = searchRef.current.value;
        }
    };

    return (
        <form onSubmit={searchHandler}>
            <SortElement />
            <SearchElement />
        </form>
    );
};
export default SearchForm;
