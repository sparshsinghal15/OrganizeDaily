import { CREATE_PROJECT, DELETE_PROJECT, COMPLETED_PROJECT } from './types';

export const createProject = (newProject) => (dispatch) => {
	dispatch({ type: CREATE_PROJECT, payload: newProject });
};
export const deleteProject = (i) => (dispatch) => {
	dispatch({ type: DELETE_PROJECT, payload: i });
};
export const completedProject = (i) => (dispatch) => {
	dispatch({ type: COMPLETED_PROJECT, payload: i });
};
