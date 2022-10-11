import React from 'react';

import data from 'config/data.json';
import searchIcon from 'assets/images/search.svg';
import './SearchElement.scss';

const SearchElement = React.forwardRef<HTMLInputElement>((_, ref) => {
    return (
        <div className="form-control">
            <button type="submit"><img src={searchIcon} alt="Search" /></button>
            <input ref={ref} id="search" type="text" autoComplete={'off'} placeholder={data.searchInputPlaceholderText} />
        </div>
    );
});

SearchElement.displayName = 'SearchElement';
export default SearchElement;
