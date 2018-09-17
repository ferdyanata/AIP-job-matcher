import { combineReducers } from 'redux';
import userAuthenticationReducer from './userAuthenticationReducer';
import positionReducer from './positionReducer';

// combine all reducers so that it will get used by Store in store.js
export default combineReducers({
    positions: positionReducer,
    userAuthenticationReducer
});