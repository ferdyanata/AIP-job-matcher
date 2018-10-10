import { APPLIED_TO_POSITION, APPLY_TO_POSITION, FETCH_ALL_APPLICATIONS } from './types';
import history from '../helpers/history';
import { alertActions } from './alertActions';

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
                //Refresh the view so that the user doesn't apply again
                window.location.reload();
                dispatch(alertActions.success('You have applied!'));
            },
            error => {
                console.log(error);
            }
        );
};


//Currently not being used
export const checkIfTalentApplied = (talentId, positionId) => dispatch => {
    console.log(talentId);
    console.log(positionId);
    fetch(`/api/application/${talentId}/${positionId}`)
        .then(res => res.json())
        .then(
            application => {
                var payload = false;
                if (application){
                    payload = true;
                }
                // dispatch({
                //     type: APPLIED_TO_POSITION,
                //     payload: payload
                // });
                dispatch(alertActions.success('You have applied to this position.'))
                console.log(application);
            }
        );
}