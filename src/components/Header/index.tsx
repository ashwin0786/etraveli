import React from 'react';

import data from 'config/data.json';
import './Header.scss';
import SearchForm from 'components/SearchForm';

const Header: React.FC = () => {
    return (<header><h1>{data.headerText}</h1><SearchForm /></header>);
};

export default Header;
