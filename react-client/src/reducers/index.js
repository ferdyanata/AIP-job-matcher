import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import positionReducer from './positionReducer';

export default combineReducers({
    positions: positionReducer
});