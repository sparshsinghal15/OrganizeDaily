import { CREATE_LOG, DELETE_LOG } from './types';

export const createLog = (newLog) => (dispatch) => {
	dispatch({ type: CREATE_LOG, payload: newLog });
};
export const deleteLog = (i) => (dispatch) => {
	dispatch({ type: DELETE_LOG, payload: i });
};
