import { CREATE_LOG, DELETE_LOG } from '../actions/types';

const initialState = {
	notes: [
		{
			title: 'Happy',
			year: '2020',
			date: '29 July',
			entry:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			title: 'Excited',
			year: '2020',
			date: '25 July',
			entry:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			title: 'Amazed',
			year: '2020',
			date: '24 July',
			entry:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			title: 'Screamed',
			year: '2020',
			date: '23 July',
			entry:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		}
	]
};
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
export default function(state = initialState, action) {
	switch (action.type) {
		case CREATE_LOG:
			let today = new Date();
			const dd = String(today.getDate()).padStart(2, '0');
			const mm = months[today.getMonth()];
			const yyyy = today.getFullYear();
			today = dd + ' ' + mm;
			const log = { title: action.payload.title, year: yyyy, date: today, entry: action.payload.log };
			const logs = Object.assign([], state.notes);
			logs.unshift(log);
			return {
				...state,
				notes: logs
			};
		case DELETE_LOG:
			return {
				...state,
				notes: state.notes.filter((log, i) => i !== action.payload)
			};
		default:
			return state;
	}
}
