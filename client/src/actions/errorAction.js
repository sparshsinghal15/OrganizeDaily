import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const getErrors = (msg, status = null, id = null) => (dispatch) => {
	dispatch({ type: GET_ERRORS, payload: { msg, status, id } });
};

export const clearErrors = () => (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
