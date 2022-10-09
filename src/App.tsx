import React, { Suspense } from 'react';

import LoadingSpinner from 'components/UI/LoadingSpinner';

const HomePage = React.lazy(() => import('pages/Home'));

function App() {
    return (
        <Suspense
            fallback={
                <div className="centered">
                    <LoadingSpinner />
                </div>
            }>
            <HomePage />
        </Suspense>
    );
}

export default App;
