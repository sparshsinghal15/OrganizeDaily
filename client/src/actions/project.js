import { CREATE_PROJECT } from './types';

export const createProject = (newProject) => (dispatch) => {
	dispatch({ type: CREATE_PROJECT, payload: newProject });
};
