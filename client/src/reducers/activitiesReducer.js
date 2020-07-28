import { CREATE_ACTIVITY, DELETE_ACTIVITY } from '../actions/types';

const initialState = {
	items: [ { name: 'Web Development' }, { name: 'Sleep' }, { name: 'Food' } ]
};

let item, items;
export default function(state = initialState, action) {
	switch (action.type) {
		case CREATE_ACTIVITY:
			items = Object.assign([], state.items);
			item = { name: action.payload };
			items.push(item);
			return {
				...state,
				items: items
			};
		case DELETE_ACTIVITY:
			items = Object.assign([], state.items);
			items = items.filter((item, i) => i !== action.payload);
			return {
				...state,
				items: items
			};
		default:
			return state;
	}
}
