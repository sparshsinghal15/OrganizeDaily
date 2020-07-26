import { STARTINGTIME_CHANGE, ON_CHANGE_MIN, ON_CHANGE_HR } from './types'

export const startingTimeChange = (time) => dispatch => {
    dispatch({type: STARTINGTIME_CHANGE, payload: time})
}

export const onChangeMin = (i, value) => dispatch => {
    dispatch({type: ON_CHANGE_MIN, payload: [i, value]})
}
export const onChangeHr = (i, value) => dispatch => {
    dispatch({type: ON_CHANGE_HR, payload: [i, value]})
}