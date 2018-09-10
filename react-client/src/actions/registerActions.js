import {TALENT_REGISTER} from './types';
import {EMPLOYER_REGISTER} from './types';


export const talentRegister = talentData => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(talentData)
    };
    
    fetch('/api/talent-register', requestOptions)
        .then(handleResponse)
        .then(
            talent =>
                dispatch({
                    type: TALENT_REGISTER,
                    payload: talent
                })
    );
};

export const employerRegister = employerData => dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employerData)
    };

    fetch('/api/employer-register', requestOptions)
        .then(handleResponse)
        .then(
            employer => {
                dispatch({
                    type: EMPLOYER_REGISTER,
                    payload: employer
                })
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