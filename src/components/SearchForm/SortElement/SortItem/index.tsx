import React from 'react';

import './SortItem.scss';

interface SortItemProps {
    selectedCode: string;
    sortCode: string;
    children: React.ReactNode;
    sortHandler: (sortCode: string) => void;
}

const SortItem: React.FC<SortItemProps> = ({ selectedCode, sortCode, children,  sortHandler}) => {
    let classes = '';
    if(selectedCode === sortCode) {
        classes = 'selected';
    }

    return <li className="sort-item"><a onClick={() => sortHandler(sortCode)} className={classes}>{children}</a></li>;
};

export default SortItem;
