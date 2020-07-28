import { CREATE_PROJECT, DELETE_PROJECT, COMPLETED_PROJECT } from '../actions/types';

const intialState = {
	currentProjects: [
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.",
			deadline: '29 September 2020'
		},
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.",
			deadline: '29 September 2020'
		}
	],
	completedProjects: [
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			name: 'Project Name',
			description:
				" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			name: 'Project Name',
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
				name: action.payload.name,
				description: action.payload.description,
				deadline: deadline
			};
			const currentProjects = Object.assign([], state.currentProjects);
			currentProjects.push(newProject);
			return {
				...state,
				currentProjects: currentProjects
			};
		case DELETE_PROJECT:
			return {
				...state,
				currentProjects: state.currentProjects.filter((item, i) => i !== action.payload)
			};
		case COMPLETED_PROJECT:
			const name = state.currentProjects[action.payload].name;
			const description = state.currentProjects[action.payload].description;
			const newCompletedProject = { name: name, description: description };
			const completedProjects = Object.assign([], state.completedProjects);
			completedProjects.push(newCompletedProject);

			return {
				...state,
				completedProjects: completedProjects
			};
		default:
			return state;
	}
}
