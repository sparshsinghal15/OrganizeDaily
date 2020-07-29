import {
	STARTINGTIME_CHANGE,
	ON_CHANGE_HR,
	ON_CHANGE_MIN,
	CREATE_LOCALACTIVITY,
	DELETE_LOCALACTIVITY
} from '../actions/types';
import { v1 as uuid } from 'uuid';

let initialState = {
	items: [
		{ id: uuid(), name: 'Web Development', hr: 0, min: 0, time: '00:00', interval: 'AM' },
		{ id: uuid(), name: 'Exercise', hr: 0, min: 0, time: '00:00', interval: 'AM' },
		{ id: uuid(), name: 'Football', hr: 0, min: 0, time: '00:00', interval: 'AM' }
	],
	hr: 24,
	min: 0,
	startingTime: '0:0'
};

let item, items, i, hrsRem, minsRem, prevTime, arr;

export default function(state = initialState, action) {
	switch (action.type) {
		case STARTINGTIME_CHANGE:
			item = Object.assign([], state.items[0]);
			item.time = action.payload;
			items = Object.assign([], state.items);
			items[0] = item;
			return {
				...state,
				items: items,
				startingTime: action.payload
			};
		case ON_CHANGE_MIN:
			i = action.payload[0];
			item = Object.assign([], state.items[i]);
			item.min = Number(action.payload[1]);
			items = Object.assign([], state.items);
			items[i] = item;

			arr = calculateRemTime(items);
			hrsRem = arr[0];
			minsRem = arr[1];

			for (let j = 0; j < items.length; j++) {
				prevTime = items[j].time;
				arr = calculateItemTime(prevTime, items[j].min, items[j].hr);
				if (j + 1 !== items.length) {
					items[j + 1].time = arr[0];
					items[j + 1].interval = arr[1];
				}
			}

			return {
				...state,
				hr: hrsRem,
				min: minsRem,
				items: items
			};
		case ON_CHANGE_HR:
			i = action.payload[0];
			item = Object.assign([], state.items[i]);
			item.hr = Number(action.payload[1]);
			items = Object.assign([], state.items);
			items[i] = item;

			console.log(items);
			arr = calculateRemTime(items);
			hrsRem = arr[0];
			minsRem = arr[1];

			for (let j = 0; j < items.length; j++) {
				prevTime = items[j].time;
				arr = calculateItemTime(prevTime, items[j].min, items[j].hr);
				if (j + 1 !== items.length) {
					items[j + 1].time = arr[0];
					items[j + 1].interval = arr[1];
				}
			}

			return {
				...state,
				hr: hrsRem,
				min: minsRem,
				items: items
			};

		case CREATE_LOCALACTIVITY:
			item = { id: uuid(), name: action.payload, hr: 0, min: 0, time: '00:00', interval: 'AM' };
			items = Object.assign([], state.items);
			items.push(item);

			return {
				...state,
				items: items
			};
		case DELETE_LOCALACTIVITY:
			items = Object.assign([], state.items);
			items = items.filter((item) => item.id !== action.payload);
			return {
				...state,
				items: items
			};
		default:
			return state;
	}
}

const calculateRemTime = (items) => {
	let hr_sum = 0;
	let min_sum = 0;
	items.forEach((item) => {
		hr_sum += item.hr;
		min_sum += item.min;
	});
	let totalMins = hr_sum * 60 + min_sum;
	let totalMinsRem = 24 * 60 - totalMins;
	let hrsRem = Math.floor(totalMinsRem / 60);
	let minsRem = totalMinsRem % 60;

	return [ hrsRem, minsRem ];
};

const calculateItemTime = (prevTime, minDur, hrDur) => {
	let prevTimeArr = prevTime.split(':');
	let prevTimeHr = Number(prevTimeArr[0]);
	let prevTimeMin = Number(prevTimeArr[1]);
	let carryHr = 0;
	let finalMins;
	if (minDur + prevTimeMin >= 60) {
		finalMins = minDur + prevTimeMin - 60;
		carryHr++;
	} else {
		finalMins = minDur + prevTimeMin;
	}
	let finalHrs = prevTimeHr + hrDur + carryHr;

	let flag = 'AM';
	if (finalHrs >= 12) {
		flag = 'PM';
		if (finalHrs > 12 && finalHrs < 24) finalHrs -= 12;
		if (finalHrs >= 24) {
			finalHrs -= 24;
			flag = 'AM';
		}
	} else {
		flag = 'AM';
	}

	if (finalMins < 10) return [ `${finalHrs}:0${finalMins}`, flag ];
	else return [ `${finalHrs}:${finalMins}`, flag ];
};
