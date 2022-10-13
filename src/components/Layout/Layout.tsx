import React from 'react';

import Header from 'components/Header/Header';
import { LayoutProps } from 'model';
import './Layout.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <div className="search-result-wrapper">
                {children}
            </div>
        </div>
    );
};

export default Layout;
