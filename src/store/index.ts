import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchSlice';
import sortReducer from './sortSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        sort: sortReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
