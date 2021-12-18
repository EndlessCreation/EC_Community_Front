import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import project from './project';

const rootReducer = combineReducers({
  auth,
  project,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
