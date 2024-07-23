import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;

                state.error = '';
                console.log(state.users);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            });
    },
});

export { fetchUsers };
export const userReducer = userSlice.reducer;
