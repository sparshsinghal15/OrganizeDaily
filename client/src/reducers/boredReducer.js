import { GET_BORED, BORED_LOADING } from '../actions/types';

const initialState = {
    data: {},
    loading: false
};

export default function(state= initialState, action) {
    switch (action.type) {
        case GET_BORED:
            return {
                loading: false,
                data: {...action.payload}
            }
        case BORED_LOADING:
            return {
                loading: true
            }
        default:
            return state
    }
}