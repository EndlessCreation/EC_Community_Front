import { createLogger } from 'redux-logger';
import penderMiddleware from 'redux-pender/lib/middleware';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './modules';
import { createWrapper } from 'next-redux-wrapper';

const middlewares = [createLogger(), penderMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

const makeStore = () => store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const wrapper = createWrapper(makeStore, { debug: true });
export default store;
