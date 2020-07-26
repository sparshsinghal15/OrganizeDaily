import axios from 'axios'
import {GET_BORED, BORED_LOADING} from './types'

export const getBored = () => dispatch => {
    dispatch(setBoredLoading())
    axios
        .get("https://www.boredapi.com/api/activity/")
        .then(res => {
            dispatch({
                type: GET_BORED,
                payload: res.data
            })
        })
}

export const setBoredLoading = () => ({type: BORED_LOADING})