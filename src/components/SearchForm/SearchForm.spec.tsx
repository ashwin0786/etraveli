import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { QueryClient, QueryClientProvider } from 'react-query';

import SearchElement from './SearchElement';
import SortElement from './SortElement';

const queryClient = new QueryClient();

describe('Renders the Form and ', () => {
    const initailSearchState = { searchVal: '' };
    const initialSortState = { sortCode: ''};

    const mockStore = configureStore();
    const store = mockStore({
        search: initailSearchState,
        sort: initialSortState
    });

    test('Sort Element should be in form', () => {

        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <SortElement />
                </Provider>
            </QueryClientProvider>,
        );
        const buttonElement = screen.getByRole('button', { name: /sort-button/i });
        expect(buttonElement).toBeInTheDocument();
    });

    test('Input Element should be in form', () => {

        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <SearchElement />
                </Provider>
            </QueryClientProvider>,
        );
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });
});
