import { AnyAction } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { User } from '../types';

type AuthState = {
  auth: User | null;
};

const initialState: AuthState = {
  auth: null,
};

export default handleActions<AuthState, AnyAction>({}, initialState);
