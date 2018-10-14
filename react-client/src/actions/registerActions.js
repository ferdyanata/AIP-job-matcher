import { TALENT_REGISTER } from './types';
import { EMPLOYER_REGISTER } from './types';
import history from '../helpers/history';
import axios from 'axios';
import { alertActions } from './alertActions';

export function talentRegister(data) {
    return dispatch => {
        return axios.post('/api/talent-register', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('user_id', res.data.newUser._id);
            localStorage.setItem('user_type', 'talent');
        }).then(talent => {
            dispatch({
                type: TALENT_REGISTER,
                payload: talent
            });
            //Take the user to the homepage
            history.push('/positions');
            window.location.reload();
        },
            error => {
                console.log(error.response.data.msg);
                dispatch(alertActions.error(error.response.data.msg));
            }
        );
    }
}

export function employerRegister(data) {
    return dispatch => {
        return axios.post('/api/employer-register', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('user_id', res.data.newUser._id);
            localStorage.setItem('user_type', 'employer');
        }).then(employer => {
            dispatch({
                type: EMPLOYER_REGISTER,
                payload: employer
            });
            //Take the employer to the homepage
            history.push('/positions');
            window.location.reload();
        },
            error => {
                console.log(error.response.data.msg);
                dispatch(alertActions.error(error.response.data.msg));
            }
        );
    }
}