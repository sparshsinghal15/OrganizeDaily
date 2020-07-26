import { GET_QUOTE, QUOTE_LOADING } from './types';
import axios from 'axios';

export const getQuote = () => (dispatch) => {
	dispatch(setQuoteLoading());
	axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random').then((res) => {
		dispatch({
			type: GET_QUOTE,
			payload: res.data
		});
	});
};

export const setQuoteLoading = () => ({ type: QUOTE_LOADING });
