import { STARTINGTIME_CHANGE, ON_CHANGE_HR, ON_CHANGE_MIN } from "../actions/types";

let initialState = {
    items: [
        { name: 'Web Development', hr: 0, min: 0, time: '00:00', interval: 'AM' },
        { name: 'Web Development', hr: 0, min: 0, time: '00:00', interval: 'AM' },
        { name: 'Web Development', hr: 0, min: 0, time: '00:00', interval: 'AM' }
    ],
    hr: 24,
    min: 0,
    startingTime: '0:0'
}

let item, items, i, hrsRem, minsRem, prevTime, arr;

export default function(state= initialState, action) {
    switch (action.type) {
        case STARTINGTIME_CHANGE :
            item = Object.assign([], state.items[0])
            item.time = action.payload
            items = Object.assign([], state.items)
            items[0] = item;
            return {
                ...state,
                items: items,
                startingTime: action.payload
            }
        case ON_CHANGE_MIN:
            i = action.payload[0]
            item = Object.assign([], state.items[i]);
            item.min = Number(action.payload[1]);
            items = Object.assign([], state.items);
            items[i] = item;

            arr = calculateRemTime(items);
            hrsRem = arr[0]
            minsRem = arr[1]

            prevTime = items[i].time;
            arr = calculateItemTime(prevTime, items[i].min, items[i].hr);
            if (i+1 !== items.length){
                items[i+1].time = arr[0];
                items[i+1].interval = arr[1];
            }
            return {
                ...state,
                hr: hrsRem,
                min: minsRem,
                items: items
            };
        case ON_CHANGE_HR:
            i = action.payload[0]
            item = Object.assign([], state.items[i]);
            item.hr = Number(action.payload[1]);
            items = Object.assign([], state.items);
            items[i] = item;
            
            console.log(items)
            arr = calculateRemTime(items);
            hrsRem = arr[0]
            minsRem = arr[1]

            prevTime = items[i].time;
            arr = calculateItemTime(prevTime, items[i].min, items[i].hr);
            if (i+1 !== items.length){
                items[i+1].time = arr[0];
                items[i+1].interval = arr[1];
            }
                
            return {
                ...state,
                hr: hrsRem,
                min: minsRem,
                items: items
            };
        default:
            return state
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
            flag = 'AM'
        } 
    } else {
        flag = 'AM';
    }

    if (finalMins < 10) return [ `${finalHrs}:0${finalMins}`, flag ];
    else return [ `${finalHrs}:${finalMins}`, flag ];
}