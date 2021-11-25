import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import penderMiddleware from 'redux-pender/lib/middleware';
import rootReducer, { RootState } from './module';
import { createWrapper } from 'next-redux-wrapper';

const store = (): any => {
  const middlewares = [penderMiddleware(), logger];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  return store;
};

export default store;
export const wrapper = createWrapper<Store<RootState>>(store, { debug: true });
