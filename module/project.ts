import { AnyAction } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Project } from '../types';
import * as projectAPI from '../api/project';

const GET_PROJECT = 'project/GET_PROJECT' as const;
const GET_PROJECT_LIST = 'project/GET_PROJECT_LIST' as const;
const CREATE_PROJECT = 'project/CREATE_PROJECT' as const;
const EDIT_PROJECT = 'project/EDIT_PROJECT' as const;
const DELETE_PROJECT = 'project/DELETE_PROJECT' as const;

export const getProject = createAction(GET_PROJECT, projectAPI.getProject);
export const getProjectList = createAction(GET_PROJECT_LIST, projectAPI.getProjectList);
export const createProject = createAction(CREATE_PROJECT, projectAPI.createProject);
export const editProject = createAction(EDIT_PROJECT, projectAPI.editProject);
export const deleteProject = createAction(DELETE_PROJECT, projectAPI.deleteProject);

type ProjectState = {
  project: Project | null;
  projectList: Array<Project> | null;
};

const initialState: ProjectState = {
  project: null,
  projectList: null,
};

export default handleActions<ProjectState, AnyAction>(
  {
    ...pender({
      type: GET_PROJECT,
      onSuccess: (state, { payload: project }) => ({ ...state, project }),
    }),
    ...pender({
      type: GET_PROJECT_LIST,
      onSuccess: (state, { payload: projectList }) => ({ ...state, projectList }),
    }),
    ...pender({
      type: EDIT_PROJECT,
      onSuccess: (state, { payload: project }) => ({ ...state, project }),
    }),
  },
  initialState,
);
