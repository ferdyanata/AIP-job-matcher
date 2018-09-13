import { combineReducers } from 'redux';
import userAuthenticationReducer from './userAuthenticationReducer';
import positionReducer from './positionReducer';

export default combineReducers({
    positions: positionReducer,
    userAuthenticationReducer
});