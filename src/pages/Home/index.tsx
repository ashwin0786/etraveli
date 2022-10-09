import React from 'react';

import Layout from 'components/Layout';
import SearchResult from 'components/SearchResult';
import SearchDetail from 'components/SearchDetail';

const HomePage: React.FC = () => {
    return (
        <>
            <Layout>
                <SearchResult />
                <SearchDetail />
            </Layout>
        </>
    );
};

export default HomePage;
