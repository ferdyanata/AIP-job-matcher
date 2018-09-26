import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from '../actions/types';

export default function alert(state = {}, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        className: 'ui success message',
        message: action.message
      };
    case ALERT_ERROR:
      return {
        className: 'ui negative message',
        message: action.message
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state
  }
}