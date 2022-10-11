import React from 'react';

import data from 'config/data.json';
import SortItem from '../SortItem';
import { sortOrders } from 'lib';
import './SortOptions.scss';

interface SortOptionsProps {
    selectedCode: string
    sortHandler: (sortCode: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ selectedCode, sortHandler }) => {
    return (
        <div className="sortby-options">
            <strong>{data.sortBy}</strong>
            <ul>
                {
                   sortOrders.map(({code, label }) => {
                       return <SortItem key={code} sortCode={code} selectedCode={selectedCode} sortHandler={sortHandler}>{label}</SortItem>
                   }) 
                }
            </ul>
        </div>
    );
};

export default SortOptions;
