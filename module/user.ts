import { AnyAction } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { User } from '../types';
import * as userAPI from './api/user';

const GET_USER_DATA = 'user/GET_USER_DATA' as const;
const EDIT_PROFILE = 'user/EDIT_PROFILE' as const;
const GET_USER_LIST = 'user/GET_USER_LIST' as const;

export const getUserData = createAction(GET_USER_DATA, userAPI.getUserData);
export const editProfile = createAction(EDIT_PROFILE, userAPI.editProfile);
export const getUserList = createAction(GET_USER_LIST, userAPI.getUserList);

type UserState = {
  user: User | null;
  userList: Array<User> | null;
};

const initialState: UserState = {
  user: null,
  userList: null,
};

export default handleActions<UserState, AnyAction>(
  {
    ...pender({
      type: GET_USER_DATA,
      onSuccess: (state, { payload: user }) => ({
        ...state,
        user,
      }),
    }),
    ...pender({
      type: GET_USER_LIST,
      onSuccess: (state, { payload: userList }) => ({
        ...state,
        userList,
      }),
    }),
    ...pender({
      type: EDIT_PROFILE,
      onSuccess: (state, { payload: user }) => ({
        ...state,
        user,
      }),
    }),
  },
  initialState,
);
