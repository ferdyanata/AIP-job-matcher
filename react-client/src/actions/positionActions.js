import { FETCH_ALL_POSITIONS,FETCH_EMPLOYERS_POSITIONS, FETCH_POSITION, EMPLOYER_ADD_POSITION } from './types';
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
            console.log(positions);
            dispatch({
                type: FETCH_EMPLOYERS_POSITIONS,
                payload: positions
            });
        });
};

export const fetchPosition = (positionId) => dispatch => {
    var token = localStorage.getItem('jwtToken');
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
            },
            error => {

            }
        );
};

export const employerEditPosition = (position) => dispatch => {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(position)
    // };

    // fetch('/api/position', requestOptions)
    //     .then(res => res.json())
    //     .then(
    //         position => {
    //             dispatch({
    //                 type: EMPLOYER_ADD_POSITION,
    //                 payload: position
    //             });
    //             history.push('/positions');
    //         },
    //         error => {

    //         }
    //     );
};