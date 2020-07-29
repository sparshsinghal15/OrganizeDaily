import { CREATE_PROJECT, DELETE_PROJECT, COMPLETED_PROJECT } from '../actions/types';
import { v1 as uuid } from 'uuid';

const intialState = {
	currentProjects: [
		{
			id: uuid(),
			name: 'My Awesome Project',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.",
			deadline: '29 September 2020'
		},
		{
			id: uuid(),
			name: 'The Incredible Project',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.",
			deadline: '29 September 2020'
		}
	],
	completedProjects: [
		{
			name: 'Have a good day',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
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

export default function(state = intialState, action) {
	switch (action.type) {
		case CREATE_PROJECT:
			const date = action.payload.deadline;
			const dateArr = date.split('-');
			const deadline = dateArr[2] + ' ' + months[Number(dateArr[1]) - 1] + ' ' + dateArr[0];
			const newProject = {
				id: uuid(),
				name: action.payload.name,
				description: action.payload.description,
				deadline: deadline
			};
			const currentProjects = Object.assign([], state.currentProjects);
			currentProjects.unshift(newProject);
			return {
				...state,
				currentProjects: currentProjects
			};
		case DELETE_PROJECT:
			return {
				...state,
				currentProjects: state.currentProjects.filter((item) => item.id !== action.payload)
			};
		case COMPLETED_PROJECT:
			const item = state.currentProjects.filter((item) => item.id === action.payload)[0];
			const name = item.name;
			const description = item.description;
			const newCompletedProject = { name: name, description: description };
			const completedProjects = Object.assign([], state.completedProjects);
			completedProjects.unshift(newCompletedProject);

			return {
				...state,
				completedProjects: completedProjects
			};
		default:
			return state;
	}
}
