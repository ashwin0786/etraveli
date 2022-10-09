import React from 'react';

import data from 'config/data.json';
import searchIcon from 'assets/images/search.svg';
import './SearchElement.scss';

const SearchElement: React.FC = () => {
    return (
        <div className="form-control">
            <img src={searchIcon} alt="Search" />
            <input id="search" type="text" autoComplete={'off'} placeholder={data.searchInputPlaceholderText} />
        </div>
    );
};

export default SearchElement;
