import { CREATE_ACTIVITY, DELETE_ACTIVITY } from './types';

export const createActivity = (activity) => (dispatch) => {
	dispatch({ type: CREATE_ACTIVITY, payload: activity });
};

export const deleteActivity = (i) => (dispatch) => {
	dispatch({ type: DELETE_ACTIVITY, payload: i });
};
