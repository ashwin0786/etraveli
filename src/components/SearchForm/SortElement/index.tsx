import React, { useState } from 'react';

import data from 'config/data.json';
import SortOptions from './SortOptions';
import './SortElement.scss';

const SortElement: React.FC = () => {
    const [ isSortOptionVisible, setIsSortOptionVisible] = useState<boolean>(false);

    function toggleSortOptions() {
        setIsSortOptionVisible((isSortOptionVisible) => !isSortOptionVisible);
    }

    return (
        <div className="form-control">
            <div className="sortby-wrapper">
                <button onClick={toggleSortOptions}>{data.sortBy}</button>
                { isSortOptionVisible && <SortOptions />}
            </div>
        </div>
    );
}

export default SortElement;