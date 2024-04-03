import {applyMiddleware, combineSlices, configureStore, Tuple} from "@reduxjs/toolkit";
import {authSlice} from '@/lib/features/auth/authSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [applyMiddleware(sagaMiddleware)]

const rootReducer = combineSlices(
    authSlice
);


export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(middleware);
    },
  });
};
sagaMiddleware.run(rootSaga);

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
