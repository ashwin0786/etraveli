import React from 'react';

import data from 'config/data.json';
import SortItem from '../SortItem';
import { sortOrders } from 'lib';
import './SortOptions.scss';

const SortOptions: React.FC = () => {
    return (
        <div className="sortby-options">
            <strong>{data.sortBy}</strong>
            <ul>
                {
                   sortOrders.map(({code, label }) => {
                       return <SortItem key={code}>{label}</SortItem>
                   }) 
                }
            </ul>
        </div>
    );
};

export default SortOptions;
