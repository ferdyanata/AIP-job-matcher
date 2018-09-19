import {TALENT_REGISTER} from './types';
import {EMPLOYER_REGISTER} from './types';
import history from '../helpers/history';

export const talentRegister = talentData => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(talentData)
    };
    
    fetch('/api/talent-register', requestOptions)
        .then(handleResponse)
        .then(
            talent => {
                dispatch({  
                    type: TALENT_REGISTER,
                    payload: talent
                });
                history.push('/talent/positions');
            },
            error => {

            }
    );
};

export const employerRegister = employerData => dispatch => {
    //Create POST request params containing the employer data that the user entered
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employerData)
    };

    //Call the express api, passing in the request params
    fetch('/api/employer-register', requestOptions)
        .then(handleResponse)
        .then(
            employer => {
                //Dispatch the employer object returned by express, for the reducer to listen for
                dispatch({
                    type: EMPLOYER_REGISTER,
                    payload: employer
                });
                //Take the employer to the homepage
                history.push('/employer/positions');
            },
            error => {
                
            }
        );
};


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
            //     // auto logout if 401 response returned from api
            //     logout();
            //     location.reload(true);
            // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}