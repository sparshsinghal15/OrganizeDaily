import { GET_QUOTE, QUOTE_LOADING } from '../actions/types';

const initialState = {
	isLoading: false,
	run: false,
	data: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_QUOTE:
			return {
				run: true,
				isLoading: false,
				data: action.payload
			};
		case QUOTE_LOADING:
			return {
				isLoading: true
			};
		default:
			return state;
	}
}
