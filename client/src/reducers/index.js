import { combineReducers } from 'redux';
import boredReducer from './boredReducer';
import quoteReducer from './quoteReducer';
import localScheduleReducer from './localScheduleReducer';
import activitiesReducer from './activitiesReducer';
import logReducer from './logReducer';
import projectReducer from './projectReducer';
import errorReducer from './errorReducer';

export default combineReducers({
	bored: boredReducer,
	quote: quoteReducer,
	localSchedule: localScheduleReducer,
	activities: activitiesReducer,
	logs: logReducer,
	projects: projectReducer,
	errors: errorReducer
});
