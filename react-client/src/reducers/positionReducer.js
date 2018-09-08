import { FETCH_ALL_POSITIONS } from '../actions/types';

const initialState = {
    items: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_POSITIONS:
            return {
                ...state,
                items: action.payload
            };

        default: return state;
    }
}