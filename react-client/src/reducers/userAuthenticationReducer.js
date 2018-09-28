import {EMPLOYER_REGISTER, TALENT_REGISTER, EMPLOYER_LOGIN, TALENT_LOGIN, LOGIN_FAILED} from '../actions/types';
const initialState = {
    //These represent the logged in user. they should only be ONE of these, the other should be null
    employer: [],
    talent: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case EMPLOYER_REGISTER:
            return {
                // fetch all data from state
                ...state,
                //put the employer in the state so that we know they're logged in
                employer: action.payload
            };

        case TALENT_REGISTER:
            return {
                ...state,
                talent: action.payload
            };

        case EMPLOYER_LOGIN:
            return {
                ...state,
                employer: action.payload
            };
        case TALENT_LOGIN: 
            return {
                ...state,
                talent: action.payload
            };
        case LOGIN_FAILED:
            return {};
        default: return state;
    }
}