import { put, takeLatest } from 'redux-saga/effects';
import {clearToken, setToken, setUser} from './authSlice';
import Cookies from 'js-cookie';
import { User } from '@/src/__generated__/graphql';

// Saga to handle setting token and user
function* setTokenAndUserSaga(action: { payload: { token: string; user: User; }}) {
    const { token, user } = action.payload;
    yield put(setToken(token));
    yield put(setUser(user));
    // Set user in cookie
    Cookies.set('user', JSON.stringify(user));
}

// Saga to handle clearing token and user
function* clearTokenSaga() {
    yield put(clearToken());
    // Clear user from cookie
    Cookies.remove('user');
}

// Watcher saga to listen for actions
function* authSaga() {
    // @ts-ignore
    yield takeLatest('auth/setTokenAndUser', setTokenAndUserSaga);
    yield takeLatest('auth/clearToken', clearTokenSaga);
}

export default authSaga;
