import { CREATE_ACTIVITY, DELETE_ACTIVITY } from '../actions/types';
import { v1 as uuid } from 'uuid';

const initialState = {
	items: [ { id: uuid(), name: 'Web Development' }, { id: uuid(), name: 'Sleep' }, { id: uuid(), name: 'Exercise' } ]
};

let item, items;
export default function(state = initialState, action) {
	switch (action.type) {
		case CREATE_ACTIVITY:
			items = Object.assign([], state.items);
			item = { id: uuid(), name: action.payload };
			items.unshift(item);
			return {
				...state,
				items: items
			};
		case DELETE_ACTIVITY:
			items = Object.assign([], state.items);
			items = items.filter((item, i) => item.id !== action.payload);
			return {
				...state,
				items: items
			};
		default:
			return state;
	}
}
