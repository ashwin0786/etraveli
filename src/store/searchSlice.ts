import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { SearchState } from 'model';

const initialState: SearchState = { searchVal: '' };

const updateSearch: CaseReducer<SearchState, PayloadAction<string>> = (state, action) => {
    state.searchVal = action.payload;
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
