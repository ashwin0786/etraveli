import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.scss';
import App from './App';
import store from 'store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>,
);
