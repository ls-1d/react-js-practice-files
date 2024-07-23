import { createSlice } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeSlice.js';

const initialState = {
    noOfIceCreams: 20,
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.noOfIceCreams = state.noOfIceCreams - action.payload;
        },
        restocked: (state, action) => {
            state.noOfIceCreams = state.noOfIceCreams + action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.noOfIceCreams--;
        });
    },
});

export const iceCreamActions = icecreamSlice.actions;
export const icecreamReducer = icecreamSlice.reducer;
