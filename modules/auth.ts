import { AnyAction } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Token } from '../types';
import * as authAPI from './api/auth';

const KAKAO_OAUTH = 'auth/KAKAO_OAUTH' as const;
const GOOGLE_OAUTH = 'auth/GOOGLE_OAUTH' as const;
const SIGN_UP = 'auth/SIGN_UP' as const;
const SIGN_USER = 'auth/SIGN_USER' as const;
const DROP_USER = 'auth/DROP_USER' as const;

export const kakaoOauth = createAction(KAKAO_OAUTH, authAPI.kakaoOauth);
export const googleOauth = createAction(GOOGLE_OAUTH, authAPI.googleOauth);
export const signUp = createAction(SIGN_UP, authAPI.signUp);
export const signUser = createAction(SIGN_USER, authAPI.signUser);
export const dropUser = createAction(DROP_USER, authAPI.dropUser);

type AuthState = {
  accessToken: Token['accessToken'] | null;
};

const initialState: AuthState = {
  accessToken: null,
};

export default handleActions<AuthState, AnyAction>(
  {
    ...pender({
      type: KAKAO_OAUTH,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: payload.accessToken,
      }),
    }),

    ...pender({
      type: GOOGLE_OAUTH,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: payload.accessToken,
      }),
    }),
  },
  initialState,
);
