import {EMPLOYER_REGISTER, TALENT_REGISTER} from '../actions/types';
const initialState = {
    //These represent the logged in user. they should only be ONE of these, the other should be null
    employer: [],
    talent: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case EMPLOYER_REGISTER:
            return {
                ...state,
                //put the employer in the state so that we know they're logged in
                employer: action.payload
            };

        case TALENT_REGISTER:
            return {
                ...state,
                //put the employer in the state so that we know they're logged in
                talent: action.payload
            };
        default: return state;
    }
}