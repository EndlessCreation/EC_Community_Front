import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';
import activity from './activity';
import image from './image';

const rootReducer = combineReducers({
  auth,
  user,
  activity,
  image,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
