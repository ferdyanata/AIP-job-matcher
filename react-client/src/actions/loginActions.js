import {EMPLOYER_LOGIN} from './types';
import {TALENT_LOGIN} from './types';

import history from '../helpers/history';

export const employerLogin = user => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    //Create this route in express. Make sure the route returns the employer object
    fetch('/api/employer-login', requestOptions)
        .then(handleResponse)
        .then(
            employer => {
                dispatch({  
                    type: EMPLOYER_LOGIN,
                    payload: employer
                });
                history.push('/employer/positions');
            },
            error => {

            }
    );
};

export const talentLogin = user => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        
    };
    
    //Create this route in express. Make sure the route returns the talent object
    fetch('/api/talent-login', requestOptions)
        .then(handleResponse)
        .then(
            talent => {
                localStorage.setItem('jwtToken', requestOptions);
                dispatch({  
                    type: TALENT_LOGIN,
                    payload: talent
                });
                history.push('/talent/positions');
            },
            error => {

            }
    );
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}