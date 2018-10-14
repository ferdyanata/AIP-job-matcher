import { FETCH_ALL_POSITIONS,FETCH_EMPLOYERS_POSITIONS, FETCH_POSITION, EMPLOYER_ADD_POSITION, EMPLOYER_EDIT_POSITION } from './types';
import history from '../helpers/history';
import axios from 'axios';

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
    return axios.post('/api/position', position)
        .then(
            position => {
                dispatch({
                    type: EMPLOYER_ADD_POSITION,
                    payload: position
                });
                history.push('/positions');
            }
        )
        .catch(function (error) {
            console.log(error);
        });
};

export const employerEditPosition = (position, positionId) => dispatch => {
    return axios.put(`/api/edit-position/${positionId}`, position)
        .then(
            position => {
                dispatch({
                    type: EMPLOYER_EDIT_POSITION,
                    payload: position
                });
                history.replace(`/position/${positionId}`);
            }
        )
        .catch(function(error) {
            console.log(error);

        });
};

export const employerDeletePosition = (positionId) => dispatch => {
    axios.delete(`/api/delete-position/${positionId}`)
        .then(
            deleted => {
                history.replace('/positions');
            }
        )
        .catch(function(error) {
            console.log(error);
        });
};