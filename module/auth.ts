import { AnyAction } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

type AuthState = {
  auth: null | User;
};

const initialState: AuthState = {
  auth: null,
};

export default handleActions<AuthState, AnyAction>({}, initialState);
