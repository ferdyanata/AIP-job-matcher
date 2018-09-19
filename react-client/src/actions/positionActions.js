import {FETCH_ALL_POSITIONS, FETCH_POSITION, EMPLOYER_ADD_POSITION} from './types';
import history from '../helpers/history';

export const fetchAllPositions = () => dispatch => {
    fetch('/api/positions')
        .then(res => res.json())
        .then(positions =>
            dispatch({
                type: FETCH_ALL_POSITIONS,
                payload: positions
            })
    );
};

export const fetchPosition = (positionId) => dispatch => {
    fetch(`/api/get-position/${positionId}`)
        .then(res => res.json())
        .then(position => 
            dispatch({  
                type: FETCH_POSITION,
                payload: position
            })
    );
};

export const employerAddPosition = (position) => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(position)
    };

    fetch('/api/add-position', requestOptions)
        .then(res => res.json())
        .then(
            position => {
                dispatch({  
                    type: EMPLOYER_ADD_POSITION,
                    payload: position
                });
                history.push('/employer/positions');
            },
        error => {

        }
    );
};