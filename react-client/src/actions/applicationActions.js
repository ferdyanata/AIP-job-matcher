import {APPLY_TO_POSITION} from './types';
import history from '../helpers/history';

export const applyToPosition = (application) => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application)
    };

    fetch('/api/application', requestOptions)
        .then(res => res.json())
        .then(
            application => {
                dispatch({  
                    type: APPLY_TO_POSITION,
                    payload: application
                });
            },
        error => {
            //Send error alert
        }
    );
};