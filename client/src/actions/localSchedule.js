import { STARTINGTIME_CHANGE, ON_CHANGE_MIN, ON_CHANGE_HR, CREATE_LOCALACTIVITY, DELETE_LOCALACTIVITY } from './types';

export const startingTimeChange = (time) => (dispatch) => {
	dispatch({ type: STARTINGTIME_CHANGE, payload: time });
};

export const onChangeMin = (i, value) => (dispatch) => {
	dispatch({ type: ON_CHANGE_MIN, payload: [ i, value ] });
};
export const onChangeHr = (i, value) => (dispatch) => {
	dispatch({ type: ON_CHANGE_HR, payload: [ i, value ] });
};

export const createLocalActivity = (activity) => (dispatch) => {
	dispatch({ type: CREATE_LOCALACTIVITY, payload: activity });
};

export const deleteLocalActivity = (i) => (dispatch) => {
	dispatch({ type: DELETE_LOCALACTIVITY, payload: i });
};
