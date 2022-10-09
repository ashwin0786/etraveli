import React from 'react';

import Header from 'components/Header';
import './Layout.scss';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
