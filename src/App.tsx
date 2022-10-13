import React, { Suspense } from 'react';

import { LoadingSpinner } from 'components';

const HomePage = React.lazy(() => import('pages/HomePage/HomePage'));

function App() {
    return (
        <Suspense
            fallback={<LoadingSpinner />}>
            <HomePage />
        </Suspense>
    );
}

export default App;
