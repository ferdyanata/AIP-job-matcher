import { FETCH_ALL_POSITIONS,FETCH_EMPLOYERS_POSITIONS, FETCH_POSITION, EMPLOYER_ADD_POSITION, EMPLOYER_EDIT_POSITION } from './types';
import history from '../helpers/history';

export const fetchAllPositions = () => dispatch => {
    fetch('/api/positions')
        .then(res => res.json())
        .then(positions => {
            localStorage.getItem('jwtToken', positions)
            dispatch({
                type: FETCH_ALL_POSITIONS,
                payload: positions
            });
        });
};

export const fetchEmployersPositions = (employerId) => dispatch => {
    fetch(`/api/employer_positions/${employerId}`)
        .then(res => res.json())
        .then(positions => {
            dispatch({
                type: FETCH_EMPLOYERS_POSITIONS,
                payload: positions
            });
        });
};

export const fetchPosition = (positionId) => dispatch => {
    // var token = localStorage.getItem('jwtToken');
    fetch(`/api/positions/${positionId}`)
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

    fetch('/api/position', requestOptions)
        .then(res => res.json())
        .then(
            position => {
                dispatch({
                    type: EMPLOYER_ADD_POSITION,
                    payload: position
                });
                history.push('/positions');
            }
        );
};

export const employerEditPosition = (position, positionId) => dispatch => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(position)
    };
    fetch(`/api/edit-position/${positionId}`, requestOptions)
        .then(res => res.json())
        .then(
            position => {
                dispatch({
                    type: EMPLOYER_EDIT_POSITION,
                    payload: position
                });
                history.replace(`/position/${positionId}`);
            },
            error => {
                console.log(error);
            }
        );
};

export const employerDeletePosition = (positionId) => dispatch => {
    const requestOptions = {
        method: 'DELETE'
    };
    fetch(`/api/delete-position/${positionId}`, requestOptions)
        .then(
            deleted => {
                console.log(deleted);
                history.replace('/positions');
            },
            error => {
                console.log(error);
            }
        );
};