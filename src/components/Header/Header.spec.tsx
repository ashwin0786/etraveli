import { render, screen } from '@testing-library/react';
import Header from './Header';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

describe('Renders the Header Component', () => {

    const initailSearchState = { searchVal: '' };
    const initialSortState = { sortCode: ''};

    const mockStore = configureStore();
    const store = mockStore({
        search: initailSearchState,
        sort: initialSortState
    });

    it('It should have H1 heading', () => {
        render(
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Header />
            </Provider>
        </QueryClientProvider>
        );

        const h1Element = screen.getByText('Etraveli Group');
        expect(h1Element).toHaveTextContent('Etraveli Group');
    });
});