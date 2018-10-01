import { FETCH_ALL_POSITIONS, FETCH_POSITION, FETCH_EMPLOYERS_POSITIONS} from '../actions/types';

const initialState = {
    items: [],
    item: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_POSITIONS:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_POSITION:
            return {
                ...state,
                item: action.payload
            };
        case FETCH_EMPLOYERS_POSITIONS:
            return {
                ...state,
                items: action.payload
            };

        default: return state;
    }
}