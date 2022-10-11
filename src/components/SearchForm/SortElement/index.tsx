import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import data from 'config/data.json';
import SortOptions from './SortOptions';
import type { RootState, AppDispatch } from 'store';
import { sortActions } from 'store/sortSlice';

import './SortElement.scss';

const SortElement: React.FC = () => {
    const selectedCode = useSelector((state: RootState) => state.sort.sortCode);
    const dispatch = useDispatch<AppDispatch>();

    const [ isSortOptionVisible, setIsSortOptionVisible] = useState<boolean>(false);

    function toggleSortOptions() {
        setIsSortOptionVisible((isSortOptionVisible) => !isSortOptionVisible);
    }

    function sortHandler(sortCode: string) {
        toggleSortOptions();
        dispatch(sortActions.updateSortOrder(sortCode));
    }

    return (
        <div className="form-control">
            <div className="sortby-wrapper">
                <button type="button" onClick={toggleSortOptions}>{data.sortBy}</button>
                { isSortOptionVisible && <SortOptions selectedCode={selectedCode} sortHandler={sortHandler} />}
            </div>
        </div>
    );
}

export default SortElement;