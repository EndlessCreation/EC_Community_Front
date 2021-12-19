import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as imageAPI from './api/image';

const UPLOAD_IMAGE = 'images/UPLOAD_IMAGE';
const SET_IMAGE = 'image/SET_IMAGE';
const INIT_IMAGE = 'image/INIT_IMAGE';

export const uploadImage = createAction(UPLOAD_IMAGE, imageAPI.uploadImage);

type ImageState = {
  image: string | null;
};

const initialState: ImageState = {
  image: null,
};

export default handleActions<ImageState, any>(
  {
    [INIT_IMAGE]: () => initialState,
    [SET_IMAGE]: (state, { payload: image }) => ({
      ...state,
      image,
    }),
    ...pender({
      type: UPLOAD_IMAGE,
      onSuccess: (state, { payload: image }) => ({
        ...state,
        image,
      }),
    }),
  },
  initialState,
);
