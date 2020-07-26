import { combineReducers } from 'redux';
import boredReducer from './boredReducer';
import quoteReducer from './quoteReducer';
import localScheduleReducer from './localScheduleReducer'

export default combineReducers({
	bored: boredReducer,
	quote: quoteReducer,
	localSchedule: localScheduleReducer
});
