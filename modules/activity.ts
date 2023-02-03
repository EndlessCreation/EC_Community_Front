import { AnyAction } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Activity } from '../types';
import * as activityAPI from './api/activity';

const GET_ACTIVITY = 'activity/GET_ACTIVITY' as const;
const GET_ACTIVITY_LIST = 'activity/GET_ACTIVITY_LIST' as const;
const CREATE_ACTIVITY = 'activity/CREATE_ACTIVITY' as const;
const EDIT_ACTIVITY = 'activity/EDIT_ACTIVITY' as const;
const DELETE_ACTIVITY = 'activity/DELETE_ACTIVITY' as const;

export const getActivity = createAction(GET_ACTIVITY, activityAPI.getActivity);
export const getActivityList = createAction(GET_ACTIVITY_LIST, activityAPI.getActivityList);
export const createActivity = createAction(CREATE_ACTIVITY, activityAPI.createActivity);
export const editActivity = createAction(EDIT_ACTIVITY, activityAPI.editActivity);
export const deleteActivity = createAction(DELETE_ACTIVITY, activityAPI.deleteActivity);

type ActivityState = {
  activity: Activity | null;
  activityList: Array<Activity> | null;
};

const initialState: ActivityState = {
  activity: null,
  activityList: null,
};

export default handleActions<ActivityState, AnyAction>(
  {
    ...pender({
      type: GET_ACTIVITY,
      onSuccess: (state, { payload: activity }) => ({ ...state, activity }),
    }),
    ...pender({
      type: GET_ACTIVITY_LIST,
      onSuccess: (state, { payload: activityList }) => ({ ...state, activityList }),
    }),
    ...pender({
      type: EDIT_ACTIVITY,
      onSuccess: (state, { payload: activity }) => ({ ...state, activity }),
    }),
  },
  initialState,
);
