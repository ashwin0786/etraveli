import React from 'react';

import './SortItem.scss';

interface SortItemProps {
    children: React.ReactNode;
}

const SortItem: React.FC<SortItemProps> = ({ children }) => {
    return <li><a>{children}</a></li>;
};

export default SortItem;
