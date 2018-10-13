import { APPLY_TO_POSITION, FETCH_ALL_APPLICATIONS } from './types';
import { alertActions } from './alertActions';
import axios from 'axios';

// Retrieve all applicants who have applied to the job post
export const fetchAllApplications = () => dispatch => {
    fetch('/api/applications')
        .then(res => res.json())
        .then(applications => {
            localStorage.setItem('jwtToken', applications)
            dispatch({
                type: FETCH_ALL_APPLICATIONS,
                payload: applications
            });
        })
}

export const applyToPosition = (application) => dispatch => {
    axios.post('/api/application', application)
        .then(
            application => {
                dispatch({
                    type: APPLY_TO_POSITION,
                    payload: application
                });
                //Refresh the view so that the user doesn't apply again
                window.location.reload();
                dispatch(alertActions.success('You have applied!'));
            }
        )
        .catch(function(error) {
            console.log(error);
        });
};
