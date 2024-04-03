// sagas.ts

import { all } from 'redux-saga/effects';
import authSaga from '@/lib/features/auth/authSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        // Add other sagas here as needed
    ]);
}
