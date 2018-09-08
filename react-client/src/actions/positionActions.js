import {FETCH_ALL_POSITIONS} from './types';

export const fetchAllPositions = () => dispatch => {
    fetch('/api/get-positions')
        .then(res => res.json())
        .then(positions =>
            dispatch({
                type: FETCH_ALL_POSITIONS,
                payload: positions
            })
    );
};