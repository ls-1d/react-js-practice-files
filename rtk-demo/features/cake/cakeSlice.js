import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes = state.numOfCakes - action.payload;
        },
        restocked: (state, action) => {
            state.numOfCakes = state.numOfCakes + action.payload;
        },
    },
});

export const cakeActions = cakeSlice.actions;
export const cakeReducer = cakeSlice.reducer;
