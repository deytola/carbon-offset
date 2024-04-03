import { createSlice } from '@reduxjs/toolkit';



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { setToken, setUser, clearToken } = authSlice.actions;

// @ts-ignore
export const selectToken = (state) => state.auth.token;
// @ts-ignore
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

// @ts-ignore
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
