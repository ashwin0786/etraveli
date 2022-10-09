import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { SortState } from 'model';

const initialState: SortState = { sortCode: '' };

const updateSortOrder: CaseReducer<SortState, PayloadAction<string>> = (state, action) => {
    state.sortCode = action.payload;
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        updateSortOrder,
    },
});

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
